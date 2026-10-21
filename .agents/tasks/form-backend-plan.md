# Implementation Plan: Form Submission Backend with SMTP

## Project Overview
Build a complete form submission backend for the Dabecks Next.js website using cPanel SMTP (mail.zelitsolutions.com:465). Forms exist on 4 pages and currently use `alert()` on submit. The backend will send confirmation emails and store submissions locally.

---

## Forms to Backend-Enable

1. **Homepage Contact Form** (`app/page.tsx`) — inquiry/quote form
2. **Contact Page Form** (`app/contact/page.tsx`) — inquiry/quote form  
3. **Laundry Page Form** (`app/solutions/laundry/page.tsx`) — laundry consultation
4. Kitchen and AC solution pages — use CategoryLandingPage component (no forms in code, skip for now)

Fields collected across all forms:
- Name, Email, Phone, Company (optional), Service Category, Message/Requirements

---

## Implementation Steps

### 1. Add Dependencies
**Decision**: Use nodemailer for SMTP; @types/nodemailer for TypeScript support. Both are industry standard and widely supported.

Install nodemailer and types:
```bash
npm install nodemailer @types/nodemailer
```

Files: `package.json`
Verify: `npm list nodemailer` confirms version is installed

---

### 2. Environment Configuration
Create `.env.local` (never committed; already in .gitignore via `env*` pattern) with:
```
SMTP_HOST=mail.zelitsolutions.com
SMTP_PORT=465
SMTP_USER=info@dabeckslaundry.com
SMTP_PASSWORD=Dabecks2026!
SMTP_FROM_EMAIL=info@dabeckslaundry.com
SMTP_FROM_NAME=Dabecks Laundry & Kitchen Solutions
```

Files: `.env.local`
Verify: Confirm `.env.local` is in `.gitignore` (already covered by `env*`)

---

### 3. Create Email Service (`lib/email-service.ts`)
**Decision**: Single service file with typed functions for sending confirmation emails. Templates inline (no HTML file deps). Two templates: general inquiry confirmations and form-specific ones.

Create `lib/email-service.ts` with:
- `initSmtpTransport()` — returns nodemailer Transporter; fails gracefully if env missing
- `sendConfirmationEmail(to, name, formType)` — sends user confirmation email
- `sendNotificationEmail(to, formData, formType)` — sends admin notification to info@dabeckslaundry.com
- HTML templates for each email type embedded as strings or helper functions

Files: `lib/email-service.ts`
Verify: TypeScript compiles without errors; `npx tsc --noEmit`

---

### 4. Create API Route (`app/api/contact/route.ts`)
**Decision**: Single POST endpoint handling all form submissions. Request body validated with object schema (no external validator). Responds with 200 + success message or 400/500 on error.

Create `app/api/contact/route.ts` with:
- POST handler that:
  - Validates request body (name, email, phone, message required; email valid)
  - Rate limiting: 3 submissions per IP per hour (store in memory; simple Map-based)
  - Sends confirmation email to user
  - Sends notification email to info@dabeckslaundry.com
  - Logs submission to `private-files/submissions.json` (append JSON lines)
  - Returns `{ success: true, message: "..." }` on success
  - Returns `{ error: "..." }` with appropriate status on failure
- Error handling for SMTP failures (still store submission, return 202 Accepted)

Files: `app/api/contact/route.ts`
Verify: Manual POST to `http://localhost:3000/api/contact` with valid payload returns 200; invalid returns 400; check `private-files/submissions.json` has entry

---

### 5. Update Contact Page Form (`app/contact/page.tsx`)
**Decision**: Replace `alert()` submission with POST to `/api/contact`. Show loading state and success/error message to user. Form resets on success.

Modify the `submit` handler to:
- Show loading spinner/disabled button during request
- POST form data to `/api/contact`
- On success: show success message, clear form, optionally hide message after 5 seconds
- On error: show error message with details from API response
- Handle network errors gracefully

Files: `app/contact/page.tsx`
Verify: Submit form, check network tab for POST to `/api/contact`, verify success message displays

---

### 6. Update Homepage Contact Form (`app/page.tsx`)
**Decision**: Same submit handler pattern as contact page. Uses identical form structure and fields.

Modify the form section's submit handler to:
- POST to `/api/contact` with identical field mapping
- Show loading/success/error UI
- Reset form on success

Files: `app/page.tsx`
Verify: Submit form, verify POST sent to `/api/contact`, check success message

---

### 7. Update Laundry Page Form (`app/solutions/laundry/page.tsx`)
**Decision**: Same backend integration. Form is already stateful; modify submit to call API instead of alert.

Modify the form handler to:
- POST to `/api/contact` with form fields
- Include `formType: 'laundry'` in payload for categorization
- Show loading/success/error feedback
- Clear form on success

Files: `app/solutions/laundry/page.tsx`
Verify: Submit form, verify POST sent, check submission.json contains laundry entry

---

### 8. Create Submission Storage Initialization
**Decision**: Check `private-files/submissions.json` exists; create empty if missing. Append submissions as JSON lines (one object per line). File is .gitignored so never committed.

Verify that:
- `private-files/` directory exists (already confirmed)
- On first submission, `private-files/submissions.json` is created if missing
- Subsequent submissions append lines

Files: handled in `app/api/contact/route.ts` (fs.appendFileSync)
Verify: After 3 submissions, `private-files/submissions.json` has 3 lines of valid JSON

---

### 9. Build and Verify
**Decision**: Run full Next.js build to confirm no TypeScript errors. No tests exist in project; manual verification sufficient.

Verify with:
```bash
npm run build
```

Files: None (verification step)
Expected: Build succeeds with no errors; `.next/` directory created

---

## Summary of Changes

| File | Change | Impact |
|------|--------|--------|
| `package.json` | Add nodemailer, @types/nodemailer | Backend SMTP support |
| `.env.local` | Create with SMTP config | Credentials (not committed) |
| `lib/email-service.ts` | **New** — Email functions | Send confirmations to users & admin |
| `app/api/contact/route.ts` | **New** — POST endpoint | Accept form submissions |
| `app/contact/page.tsx` | Update submit handler | Call API instead of alert |
| `app/page.tsx` | Update submit handler | Call API instead of alert |
| `app/solutions/laundry/page.tsx` | Update submit handler | Call API instead of alert |
| `private-files/submissions.json` | **Auto-created** on first submit | Local submission archive |

---

## Testing Checklist

- [ ] `npm run build` succeeds
- [ ] Homepage form submits and shows success message
- [ ] Contact page form submits and shows success message
- [ ] Laundry page form submits and shows success message
- [ ] Email received at info@dabeckslaundry.com (admin notification)
- [ ] User receives confirmation email at provided address
- [ ] Rate limiting: 4th submission within 1hr returns 429
- [ ] `private-files/submissions.json` contains all submissions
- [ ] Invalid email rejected with 400 error
- [ ] Missing required fields rejected with 400 error
- [ ] SMTP failure gracefully handled (202 response, submission still stored)

---

## Notes

- **Credentials**: SMTP credentials go in `.env.local` only; never commit this file
- **Rate Limiting**: In-memory Map clears hourly; suitable for single-server development/staging
- **Email Templates**: HTML templates embedded in `email-service.ts` for simplicity (no separate template files)
- **Submission Storage**: JSON Lines format in `private-files/submissions.json` allows easy streaming/archiving later
- **Error Handling**: SMTP failures don't fail the submission (202 Accepted); submission still stored locally
