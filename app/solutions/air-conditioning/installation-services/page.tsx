import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';
import Icon from '@/app/components/Icon';

const steps = [
  { icon: 'clipboard' as const, title: 'Site Survey & Design',        desc: 'Detailed site assessment and system design to ensure optimal performance and efficiency for your specific building.' },
  { icon: 'tools' as const,     title: 'Professional Installation',   desc: 'Our certified engineers install all equipment to manufacturer standards, ensuring warranty compliance and safe operation.' },
  { icon: 'check' as const,     title: 'Commissioning & Handover',    desc: 'Full system testing, performance verification, and operator training before handover — so your team is fully prepared.' },
];

const systemTypes = [
  'Split Units', 'VRF/VRV Systems', 'Ducted Systems',
  'Cassette Units', 'Chiller Systems', 'Air Handling Units',
];

export default function InstallationServices() {
  return (
    <div>
      <PageHero
        image="/hero-ac.jpg"
        eyebrow="Air Conditioning"
        heading="Installation Services"
        subtext="Professional HVAC installation, commissioning, and handover by certified engineers across East Africa."
        breadcrumbs={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'Air Conditioning', href: '/solutions/air-conditioning' },
          { label: 'Installation Services' },
        ]}
      />

      {/* ── INTRO ──────────────────────────────────────────── */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>Our Approach</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem' }}>
                Expert installation. Every time.
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Our certified HVAC engineers handle every aspect of your air conditioning installation — from site survey and design through to commissioning, testing, and staff handover.
              </p>
              <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                We work with all major brands and all system types, ensuring every installation meets manufacturer standards and performs at its best from day one.
              </p>
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Request a Site Survey
              </Link>
            </div>

            {/* Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    padding: '1.5rem',
                    borderLeft: '4px solid var(--color-brand-cyan)',
                    background: i % 2 === 0 ? 'var(--color-surface)' : '#ffffff',
                    marginBottom: '1px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'var(--color-brand-navy)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--color-brand-cyan)',
                    }}
                  >
                    <Icon name={step.icon} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.375rem' }}>
                      {step.title}
                    </h3>
                    <p className="ds-body-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE INSTALL ────────────────────────────────── */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>System Types</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>What We Install</h2>
            <span className="ds-accent-line" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {systemTypes.map((item, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  padding: '1.5rem',
                  borderTop: '3px solid var(--color-brand-cyan)',
                }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-navy)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to plan your installation?"
        subtext="Get a free site survey and installation quote from our certified HVAC engineers."
        primaryLabel="Request a Survey"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
