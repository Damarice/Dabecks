import Link from 'next/link';
import Icon from '@/app/components/Icon';

/* ─────────────────────────────────────────────────────────────
   CTASection — reusable call-to-action banner
   Clean, confident, generous spacing.
   Sits at the bottom of every page.
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
  heading  = 'Ready to get started?',
  subtext  = 'Contact us for pricing, availability, and expert installation support.',
  primaryLabel = 'Get in Touch',
  primaryHref  = '/contact',
  secondaryLabel,
  secondaryHref,
  phone = true,
}: CTASectionProps) {
  return (
    <section
      aria-label="Call to action"
      className="dark-band"
      style={{ paddingBlock: '4.5rem' }}
    >
      <div className="ds-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Text */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                color: '#ffffff',
                marginBottom: '0.75rem',
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '0.875rem',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
            }}
            className="lg:justify-end"
          >
            <Link href={primaryHref} className="ds-btn ds-btn-cyan ds-btn-lg">
              {primaryLabel}
              <Icon name="arrowRight" size="sm" />
            </Link>

            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="ds-btn ds-btn-ghost-white ds-btn-lg">{secondaryLabel}</Link>
            )}

            {phone && (
              <a href="tel:+254729212254" className="ds-btn ds-btn-ghost-white ds-btn-lg">
                <Icon name="phone" size="sm" />
                +254 729 212 254
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
