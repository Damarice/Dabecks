import nodemailer from 'nodemailer';
import type { SendMailOptions, Transporter } from 'nodemailer';

let transporter: Transporter | null = null;

function initSmtpTransport(): Transporter {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
  const secure = process.env.SMTP_SECURE === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('SMTP_HOST, SMTP_USER, and SMTP_PASS are required in .env.local');
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  return transporter;
}

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  try {
    const transport = initSmtpTransport();
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    const mailOptions: SendMailOptions = {
      from,
      to: options.to,
      subject: options.subject,
      html: options.html,
    };

    await transport.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export async function sendInquiryConfirmation(
  customerEmail: string,
  customerName: string,
  serviceType?: string
): Promise<void> {
  const serviceLabel = serviceType
    ? ` for ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}`
    : '';

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1a365d 0%, #2d5a8f 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { background: #f9fafb; padding: 30px 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; }
          .highlight { color: #f6ad55; font-weight: 600; }
          .footer { font-size: 12px; color: #999; text-align: center; margin-top: 20px; }
          .button { display: inline-block; background: #1a365d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Reaching Out</h1>
          </div>
          <div class="content">
            <p>Hi <span class="highlight">${customerName}</span>,</p>
            <p>We have received your inquiry${serviceLabel}. Our team will review your request and get back to you within 24 business hours.</p>
            <p><strong>What happens next:</strong></p>
            <ul>
              <li>Our team will assess your needs and prepare a tailored proposal</li>
              <li>We may contact you for clarification or additional details</li>
              <li>You'll receive a comprehensive response with pricing and timeline</li>
            </ul>
            <p>In the meantime, feel free to explore our solutions at <a href="https://dabeckslaundry.com" style="color: #f6ad55;">dabeckslaundry.com</a></p>
            <p>Best regards,<br><strong>The Dabecks Team</strong></p>
          </div>
          <div class="footer">
            <p>Dabecks Laundry & Kitchen Solutions | Nairobi, Kenya</p>
            <p><a href="https://dabeckslaundry.com" style="color: #f6ad55; text-decoration: none;">dabeckslaundry.com</a> | info@dabeckslaundry.com</p>
          </div>
        </div>
      </body>
    </html>
  `;

  await sendEmail({
    to: customerEmail,
    subject: 'We received your inquiry — Dabecks',
    html,
  });
}

export async function sendAdminNotification(formData: Record<string, any>): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;
  if (!adminEmail) {
    throw new Error('ADMIN_EMAIL or SMTP_USER is required in .env.local');
  }

  const fieldsHtml = Object.entries(formData)
    .map(([key, value]) => {
      const displayKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      const displayValue = typeof value === 'string' ? value : JSON.stringify(value);
      return `<tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: 600; color: #1a365d;">${displayKey}</td><td style="padding: 10px; border: 1px solid #ddd;">${displayValue}</td></tr>`;
    })
    .join('');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1a365d 0%, #2d5a8f 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { background: white; padding: 30px 20px; border: 1px solid #e5e7eb; border-top: none; }
          .table-wrapper { margin: 20px 0; }
          table { width: 100%; border-collapse: collapse; }
          th { background: #f6ad55; color: #1a365d; padding: 12px; text-align: left; }
          .footer { font-size: 12px; color: #999; text-align: center; margin-top: 20px; background: #f9fafb; padding: 15px; border-radius: 4px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Form Submission</h1>
          </div>
          <div class="content">
            <p><strong>A new inquiry has been submitted. Details below:</strong></p>
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr><th>Field</th><th>Value</th></tr>
                </thead>
                <tbody>
                  ${fieldsHtml}
                </tbody>
              </table>
            </div>
            <p style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #f6ad55;"><strong>Action required:</strong> Please respond to this inquiry within 24 hours.</p>
          </div>
          <div class="footer">
            <p>This is an automated notification from the Dabecks website form system.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  await sendEmail({
    to: adminEmail,
    subject: `New Form Submission: ${formData.name || 'Unknown'} - ${formData.service || 'No service selected'}`,
    html,
  });
}
