import Breadcrumb from '@/app/components/Breadcrumb';

interface BreadcrumbItem { label: string; href?: string; }

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  heading: string;
  subtext?: string;
  breadcrumbs?: BreadcrumbItem[];
}

/* ─────────────────────────────────────────────────────────────
   PageHero — consistent inner page hero
   Height: clamp(340px, 38vw, 440px) — compact, not homepage-tall
   Overlay: solid dark with slight blue tint — clean, readable
   Typography: large but restrained — not competing with the homepage
   ───────────────────────────────────────────────────────────── */

export default function PageHero({ image, eyebrow, heading, subtext, breadcrumbs }: PageHeroProps) {
  return (
    <>
      {breadcrumbs && <Breadcrumb items={breadcrumbs} />}

      <section
        aria-label={`${heading} hero`}
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(340px, 38vw, 440px)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background */}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />

        {/* Overlay — solid dark blue, no gradient tricks */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, background: 'rgba(12, 20, 55, 0.80)' }}
        />

        {/* Content */}
        <div
          className="ds-container"
          style={{ position: 'relative', zIndex: 10, width: '100%', paddingTop: '2rem', paddingBottom: '2rem' }}
        >
          <div style={{ maxWidth: '700px' }}>
            {eyebrow && (
              <span
                className="ds-eyebrow"
                style={{ display: 'block', color: 'var(--color-brand-cyan)', marginBottom: '0.875rem' }}
              >
                {eyebrow}
              </span>
            )}

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.038em',
                lineHeight: 1.06,
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
                  fontSize: 'clamp(0.9375rem, 1.4vw, 1.0625rem)',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.80)',
                  maxWidth: '560px',
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
