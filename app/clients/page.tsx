import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';

const clients = [
  { name: 'NAS Servair',                        sector: 'Aviation Catering' },
  { name: 'Radisson Blu Hotel',                 sector: 'Hospitality' },
  { name: 'Kenya Utalii College',               sector: 'Education' },
  { name: 'Jomo Kenyatta University',           sector: 'Education' },
  { name: 'Multimedia University',              sector: 'Education' },
  { name: 'Catholic University of East Africa', sector: 'Education' },
  { name: 'Nairobi Safari Club',                sector: 'Hospitality' },
  { name: 'Safari Park Hotel & Casino',         sector: 'Hospitality' },
  { name: 'Golf Hotel Kakamega',                sector: 'Hospitality' },
  { name: 'Kenya Defence Forces',               sector: 'Government' },
  { name: 'Valley Hospital',                    sector: 'Healthcare' },
];

const sectors = [
  { sector: 'Hospitality', icon: '🏨', count: 4, desc: 'Hotels, lodges, safari camps, and resort facilities.' },
  { sector: 'Healthcare',  icon: '🏥', count: 1, desc: 'Hospitals, clinics, and medical centres.' },
  { sector: 'Education',   icon: '🎓', count: 4, desc: 'Universities, colleges, and boarding schools.' },
  { sector: 'Government',  icon: '🏛️', count: 1, desc: 'Defence forces and public sector institutions.' },
];

export default function Clients() {
  return (
    <div>
      <PageHero
        image="/hero-clients.jpg"
        eyebrow="Who We Serve"
        heading="Our Clients"
        subtext="Trusted by leading organisations across East Africa since 2011."
      />

      {/* ══ STATEMENT BAND ══════════════════════════════════ */}
      <section className="dark-band">
        <div className="ds-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '1,500+', label: 'Clients Served' },
              { value: '13+',    label: 'Years Operating' },
              { value: '5+',     label: 'Sectors Served' },
              { value: '100%',   label: 'Kenyan Owned' },
            ].map(({ value, label }) => (
              <div key={label} className="metric-block">
                <div className="metric-block__value">{value}</div>
                <div className="metric-block__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTORS ═════════════════════════════════════════ */}
      <section className="stripe-white py-section">
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Industries Served</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Sectors We Work In</h2>
            <span className="ds-accent-line" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map(({ sector, icon, count, desc }) => (
              <div
                key={sector}
                style={{
                  background: 'var(--color-surface)',
                  padding: '2rem 1.75rem',
                  borderTop: '3px solid var(--color-brand-cyan)',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem', lineHeight: 1 }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.25rem' }}>{sector}</h3>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-brand-cyan)', marginBottom: '0.625rem' }}>{count} clients</p>
                <p className="ds-body-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.55' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLIENT LIST ═════════════════════════════════════ */}
      <section className="stripe-surface py-section">
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Portfolio</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Featured Clients</h2>
            <span className="ds-accent-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1px', background: 'var(--color-border)' }}>
            {clients.map((client, i) => (
              <div
                key={i}
                className="client-row"
                style={{ background: '#ffffff', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}
              >
                <span data-name="1" style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-brand-navy)' }}>{client.name}</span>
                <span className="ds-eyebrow" style={{ flexShrink: 0, color: 'var(--color-brand-cyan)' }}>{client.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Work With Us?"
        subtext="Join our growing list of clients across East Africa."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
