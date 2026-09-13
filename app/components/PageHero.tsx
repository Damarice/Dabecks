/* ─────────────────────────────────────────────────────────────
   PageHero — single reusable hero component for ALL pages
   except the homepage.

   Design decisions:
   - Fixed height 420px on desktop, 320px on mobile
   - Solid dark overlay (no transparency tricks) — clear, readable
   - Eyebrow label above the heading
   - Max content width 640px, left-aligned
   - Consistent on every page it's used on
   ───────────────────────────────────────────────────────────── */

import Breadcrumb from '@/app/components/Breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  heading: string;
  subtext?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({
  image,
  eyebrow,
  heading,
  subtext,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <>
      {breadcrumbs && <Breadcrumb items={breadcrumbs} />}

      <section
        aria-label={`${heading} hero`}
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(320px, 35vw, 420px)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background image */}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Solid dark overlay — no transparency gradient, clean and readable */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(15, 23, 60, 0.78)',
          }}
        />

        {/* Content */}
        <div
          className="ds-container"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            {eyebrow && (
              <span
                className="ds-eyebrow"
                style={{
                  display: 'block',
                  color: 'var(--color-brand-cyan)',
                  marginBottom: '0.75rem',
                }}
              >
                {eyebrow}
              </span>
            )}

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                color: '#ffffff',
                marginBottom: subtext ? '1rem' : 0,
              }}
            >
              {heading}
            </h1>

            {subtext && (
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.82)',
                  maxWidth: '520px',
                }}
              >
                {subtext}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
