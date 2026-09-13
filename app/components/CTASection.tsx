import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────
   CTASection — reusable call-to-action banner
   Used at the bottom of every page.

   Props:
   - heading     Primary headline (default: "Ready to get started?")
   - subtext     Supporting line (default: generic)
   - primaryLabel / primaryHref   — main button (default: Get in Touch → /contact)
   - secondaryLabel / secondaryHref — optional ghost button
   - phone       Show phone number as tertiary CTA (default true)
   ───────────────────────────────────────────────────────────── */

interface CTASectionProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  phone?: boolean;
}

export default function CTASection({
  heading = 'Ready to get started?',
  subtext = 'Contact us for pricing, availability, and expert installation support.',
  primaryLabel = 'Get in Touch',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  phone = true,
}: CTASectionProps) {
  return (
    <section
      aria-label="Call to action"
      style={{
        background: 'var(--color-brand-navy)',
        paddingTop: '4rem',
        paddingBottom: '4rem',
      }}
    >
      <div className="ds-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Text */}
          <div style={{ maxWidth: '520px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#ffffff',
                marginBottom: '0.625rem',
              }}
            >
              {heading}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body-lg)',
                color: 'var(--color-brand-cyan)',
                lineHeight: 1.55,
              }}
            >
              {subtext}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href={primaryHref} className="ds-btn ds-btn-cyan ds-btn-lg">
              {primaryLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="ds-btn ds-btn-ghost-white ds-btn-lg">
                {secondaryLabel}
              </Link>
            )}

            {phone && (
              <a href="tel:+254729212254" className="ds-btn ds-btn-ghost-white ds-btn-lg">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +254 729 212 254
              </a>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
