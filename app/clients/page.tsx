import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

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

export default function Clients() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Clients' }]} />

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section
        className="ds-hero ds-hero-tall"
        style={{ backgroundImage: 'url("/hero-clients.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="ds-hero-overlay-strong" />
        <div className="ds-container relative z-10 w-full" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '580px' }}>
            <span className="ds-eyebrow" style={{ color: 'var(--color-brand-cyan)', display: 'block', marginBottom: '1rem' }}>Who We Serve</span>
            <h1 className="ds-h1" style={{ color: '#ffffff', marginBottom: '1rem' }}>Our Clients</h1>
            <p className="ds-lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Trusted by leading organisations across East Africa since 2011.
            </p>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-brand-navy)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="ds-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '1,500+', label: 'Clients Served' },
              { value: '13+',    label: 'Years Operating' },
              { value: '5+',     label: 'Sectors Served' },
              { value: '100%',   label: 'Kenyan Owned' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-brand-cyan)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.375rem' }}>{value}</div>
                <p className="ds-caption" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLIENT LIST ════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Portfolio</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Featured Clients</h2>
            <span className="ds-accent-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1px', background: 'var(--color-border)' }}>
            {clients.map((client, i) => (
              <div
                key={i}
                className="client-row"
                style={{ background: '#ffffff', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}
              >
                <span data-name="1" style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-brand-navy)' }}>
                  {client.name}
                </span>
                <span className="ds-eyebrow" style={{ flexShrink: 0, color: 'var(--color-brand-cyan)' }}>
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTORS ════════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Industries Served</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Sectors We Work In</h2>
            <span className="ds-accent-line" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { sector: 'Hospitality', icon: '🏨', desc: 'Hotels, lodges, safari camps, and resort facilities.' },
              { sector: 'Healthcare',  icon: '🏥', desc: 'Hospitals, clinics, and medical centres.' },
              { sector: 'Education',   icon: '🎓', desc: 'Universities, colleges, and boarding schools.' },
              { sector: 'Government',  icon: '🏛️', desc: 'Defence forces, public sector, and state corporations.' },
            ].map(({ sector, icon, desc }) => (
              <div key={sector} className="sector-card" style={{ background: '#ffffff', border: '1px solid var(--color-border)', padding: '1.75rem 1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem', lineHeight: 1 }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>{sector}</h3>
                <p className="ds-body-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.55' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ═════════════════════════════════════════ */}
      <section style={{ position: 'relative', backgroundImage: 'url("/hero-clients.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,10,30,0.82)' }} />
        <div className="ds-container relative" style={{ zIndex: 10 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="ds-h2" style={{ color: '#ffffff', marginBottom: '0.75rem' }}>Ready to Work With Us?</h2>
              <p className="ds-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>Join our growing list of clients across East Africa.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="ds-btn ds-btn-cyan ds-btn-lg">Get in Touch</Link>
              <a href="tel:+254729212254" className="ds-btn ds-btn-ghost-white ds-btn-lg">+254 729 212 254</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
