import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
import { sendAdminNotification, sendInquiryConfirmation } from '@/lib/email-service';

// In-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true; // Allow
  }

  if (record.count >= RATE_LIMIT) {
    return false; // Rate limited
  }

  record.count++;
  return true; // Allow
}

function sanitizeInput(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim();
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType?: string;
  message: string;
}

interface ValidationError {
  [key: string]: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Input validation
    const errors: ValidationError = {};

    const name = body.name?.toString().trim() || '';
    const email = body.email?.toString().trim() || '';
    const phone = body.phone?.toString().trim() || '';
    const company = body.company?.toString().trim() || '';
    const serviceType = body.serviceType?.toString().trim() || '';
    const message = body.message?.toString().trim() || '';

    if (!name || name.length < 2) {
      errors.name = 'Full name is required and must be at least 2 characters';
    }

    if (!email || !validateEmail(email)) {
      errors.email = 'Valid email address is required';
    }

    if (!message || message.length < 10) {
      errors.message = 'Message is required and must be at least 10 characters';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors },
        { status: 400 }
      );
    }

    // Rate limiting
    const ip = getRateLimitKey(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Sanitize inputs
    const sanitized: FormData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : undefined,
      company: company ? sanitizeInput(company) : undefined,
      serviceType: serviceType ? sanitizeInput(serviceType) : undefined,
      message: sanitizeInput(message),
    };

    // Store submission locally
    let emailSent = false;
    try {
      const submissionsPath = path.join(process.cwd(), 'private-files', 'submissions.json');
      const timestamp = new Date().toISOString();
      const id = Date.now().toString();

      let submissions: any[] = [];
      if (fs.existsSync(submissionsPath)) {
        const fileContent = fs.readFileSync(submissionsPath, 'utf-8');
        try {
          submissions = JSON.parse(fileContent);
        } catch {
          submissions = [];
        }
      }

      submissions.push({
        id,
        timestamp,
        ...sanitized,
      });

      fs.writeFileSync(submissionsPath, JSON.stringify(submissions, null, 2), 'utf-8');
    } catch (fileError) {
      console.error('Error writing submission to file:', fileError);
      // Don't fail the request, continue to email
    }

    // Send emails
    try {
      await sendAdminNotification(sanitized);
      await sendInquiryConfirmation(sanitized.email, sanitized.name, sanitized.serviceType);
      emailSent = true;
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      // Don't fail the request - submission was stored
    }

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received. We will contact you within 24 hours.',
      emailSent,
    });
  } catch (error) {
    console.error('Error processing contact request:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
