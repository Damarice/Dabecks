import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

const equipmentBrands = [
  'Alliance Laundry Systems', 'Electrolux Professional', 'Pellerin Milnor Corporation',
  'Chicago Dryer Company', 'Speed Queen', 'Primus', 'UniMac', 'Huebsch', 'IPSO', 'SIRAIR',
];

const dealerships = [
  { year: '2017', brand: 'Electrolux Professional', region: 'Kenya',      desc: 'Formally appointed as the official Kenyan dealer for Electrolux Professional, covering their complete commercial kitchen and laundry equipment range.' },
  { year: '2021', brand: 'Alliance Laundry Systems', region: 'East Africa',desc: 'Expanded to become the authorised East Africa partner for Alliance Laundry Systems — representing Speed Queen, Primus, UniMac, and Huebsch brands across the region.' },
  { year: '2024', brand: 'Milnor & Chicago Dryer',  region: 'East Africa',desc: 'Secured dealership rights for both Pellerin Milnor Corporation and Chicago Dryer Company, completing our heavy-duty industrial laundry portfolio for the East African market.' },
];

const servicePartners = [
  { name: 'Printech Media Limited', service: 'Design, Printing & Branding', desc: 'Corporate communications and branded collateral.' },
  { name: 'NEXUS',                  service: 'ICT Solutions',                desc: 'Technology infrastructure and IT support.' },
  { name: 'ICS System Solutions',   service: 'Accounting & Auditing',        desc: 'Financial reporting and tax compliance.' },
];

export default function Partners() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Partners' }]} />

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section
        className="ds-hero ds-hero-tall"
        style={{ backgroundImage: 'url("/hero-partners.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="ds-hero-overlay-strong" />
        <div className="ds-container relative z-10 w-full" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="ds-eyebrow" style={{ color: 'var(--color-brand-cyan)', display: 'block', marginBottom: '1rem' }}>Our Ecosystem</span>
            <h1 className="ds-h1" style={{ color: '#ffffff', marginBottom: '1rem' }}>Our Partners</h1>
            <p className="ds-lead" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '520px' }}>
              We represent some of the world&apos;s most trusted commercial equipment brands, backed by formal dealership agreements, factory training, and genuine parts supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* ══ EQUIPMENT BRANDS ═══════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Authorised Dealer</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Equipment Partner Brands</h2>
            <span className="ds-accent-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1px', background: 'var(--color-border)' }}>
            {equipmentBrands.map((name, i) => (
              <div
                key={i}
                className="brand-cell"
                style={{ background: '#ffffff', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1.25rem' }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-brand-navy)', textAlign: 'center', lineHeight: 1.35 }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ KEY DEALERSHIPS ════════════════════════════════════ */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sticky panel */}
            <div style={{ position: 'sticky', top: '2rem' }}>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Official Authorisations</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem' }}>Key Dealerships</h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Each dealership represents years of trust, technical excellence, and commitment recognised by a global manufacturer.
              </p>
              <div style={{ background: 'var(--color-brand-navy)', padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--color-brand-cyan)', lineHeight: 1, marginBottom: '0.5rem' }}>3</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: '#ffffff' }}>Formal Dealerships</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem' }}>Spanning laundry, kitchen &amp; HVAC</div>
              </div>
            </div>

            {/* Timeline */}
            <div style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {dealerships.map(({ year, brand, region, desc }, i) => (
                <div key={i} style={{ position: 'relative', paddingBottom: i < dealerships.length - 1 ? '2rem' : 0 }}>
                  <div style={{ position: 'absolute', left: '-2.625rem', top: 0, width: '16px', height: '16px', borderRadius: '50%', background: 'var(--color-brand-cyan)', border: '3px solid #ffffff', boxShadow: 'var(--shadow-sm)' }} />
                  <div className="timeline-card" style={{ background: '#ffffff', border: '1px solid var(--color-border)', padding: '1.5rem' }}>
                    <span style={{ display: 'inline-block', background: 'var(--color-brand-navy)', color: 'var(--color-brand-cyan)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', marginBottom: '0.875rem' }}>{year}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.25rem' }}>{brand}</h3>
                    <p className="ds-eyebrow" style={{ color: 'var(--color-brand-cyan)', marginBottom: '0.75rem' }}>Authorised Dealer — {region}</p>
                    <p className="ds-body" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICE ALLIANCES ══════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Local Alliances</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Service Alliances</h2>
            <span className="ds-accent-line" style={{ marginBottom: '1rem' }} />
            <p className="ds-lead" style={{ color: 'var(--color-text-muted)', maxWidth: '540px' }}>Trusted local partners that support our day-to-day operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {servicePartners.map((p, i) => (
              <div key={i} className="alliance-card" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '1.75rem' }}>
                <span className="ds-eyebrow" style={{ color: 'var(--color-brand-cyan)', display: 'block', marginBottom: '0.625rem' }}>{p.service}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>{p.name}</h3>
                <p className="ds-body-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.55' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ═════════════════════════════════════════ */}
      <section style={{ position: 'relative', backgroundImage: 'url("/hero-consultancy.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,10,30,0.82)' }} />
        <div className="ds-container relative" style={{ zIndex: 10 }}>
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '0.75rem' }}>Work With Us</span>
            <h2 className="ds-h2" style={{ color: '#ffffff', marginBottom: '0.75rem' }}>Interested in a Partnership?</h2>
            <p className="ds-lead" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
              Whether you are a global brand seeking a trusted East Africa distributor, or a local company looking to collaborate — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="ds-btn ds-btn-cyan ds-btn-lg">Get in Touch</Link>
              <a href="tel:+254729212254" className="ds-btn ds-btn-ghost-white ds-btn-lg">+254 729 212 254</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
