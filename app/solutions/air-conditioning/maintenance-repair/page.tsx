import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';
import Icon from '@/app/components/Icon';

const services = [
  { icon: 'clock' as const,     title: 'Planned Maintenance',      desc: 'Scheduled service visits ensure your systems are cleaned, checked, and optimised before problems arise.' },
  { icon: 'bolt' as const,      title: 'Emergency Repair',         desc: 'Fast-response breakdown service with same-day or next-day attendance across our service area.' },
  { icon: 'chartLine' as const, title: 'Performance Monitoring',   desc: 'Regular efficiency checks and data logging to identify issues early and optimise energy performance.' },
];

const inclusions = [
  { title: 'Filter Cleaning & Replacement', desc: 'Regular filter service maintains air quality and system efficiency.' },
  { title: 'Coil Cleaning',                 desc: 'Evaporator and condenser coil cleaning restores heat exchange performance.' },
  { title: 'Refrigerant Check',             desc: 'Leak detection and refrigerant level verification at every visit.' },
  { title: 'Electrical Inspection',         desc: 'Full electrical safety check including connections, capacitors, and controls.' },
  { title: 'Drainage System Service',       desc: 'Condensate drain cleaning to prevent water damage and leaks.' },
  { title: 'Performance Report',            desc: 'Written report after every visit with findings and recommendations.' },
];

export default function MaintenanceRepair() {
  return (
    <div>
      <PageHero
        image="/hero-ac.jpg"
        eyebrow="Air Conditioning"
        heading="Maintenance & Repair"
        subtext="Planned maintenance contracts and responsive repair services to keep your AC systems running at peak performance year-round."
        breadcrumbs={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'Air Conditioning', href: '/solutions/air-conditioning' },
          { label: 'Maintenance & Repair' },
        ]}
      />

      {/* ── INTRO ──────────────────────────────────────────── */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>Why It Matters</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem' }}>
                Keep your systems performing.
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Regular maintenance extends equipment life, maintains energy efficiency, and prevents costly breakdowns.
              </p>
              <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Our service contracts cover all brands and all system types, with fast response times across East Africa.
              </p>
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Get a Maintenance Contract
              </Link>
            </div>

            {/* Service types */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {services.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    padding: '1.5rem',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderLeft: '4px solid var(--color-brand-cyan)',
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
                    <Icon name={s.icon} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.375rem' }}>
                      {s.title}
                    </h3>
                    <p className="ds-body-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTRACT INCLUSIONS ────────────────────────────── */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>What's Covered</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Service Contract Inclusions</h2>
            <span className="ds-accent-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((item, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                }}
              >
                <div style={{ width: '4px', background: 'var(--color-brand-cyan)', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.375rem' }}>
                    {item.title}
                  </h3>
                  <p className="ds-body-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Get a maintenance contract."
        subtext="Protect your investment with a tailored service plan covering all system types."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
