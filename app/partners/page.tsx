import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';

const equipmentBrands = [
  { name: 'Electrolux Professional', logo: '/logos/partners/electrolux.svg' },
  { name: 'Alliance Laundry Systems', logo: '/logos/partners/alliance.png' },
  { name: 'Pellerin Milnor Corporation', logo: '/logos/partners/milnor.jpg' },
  { name: 'Chicago Dryer Company', logo: '/logos/partners/chicago-dryer.png' },
  { name: 'Speed Queen', logo: null },
  { name: 'IPSO', logo: null },
  { name: 'SIRAIR', logo: null },
  { name: 'Fagor Laundry', logo: null },
  { name: 'Maxi-Company', logo: null },
  { name: 'Ponny', logo: null },
];

const dealerships = [
  { year: '2017', brand: 'Electrolux Professional', region: 'Kenya',       desc: 'Formally appointed as the official Kenyan dealer for Electrolux Professional, covering their complete commercial kitchen and laundry equipment range.' },
  { year: '2021', brand: 'Alliance Laundry Systems', region: 'East Africa', desc: 'Expanded to become the authorised East Africa partner for Alliance Laundry Systems — representing Speed Queen and IPSO brands across the region.' },
  { year: '2024', brand: 'Milnor & Chicago Dryer',  region: 'East Africa', desc: 'Secured dealership rights for both Pellerin Milnor Corporation and Chicago Dryer Company, completing our heavy-duty industrial laundry portfolio.' },
];

const servicePartners = [
  { name: 'Printech Media Limited', service: 'Design, Printing & Branding', desc: 'Corporate communications and branded collateral.' },
  { name: 'NEXUS',                  service: 'ICT Solutions',                desc: 'Technology infrastructure and IT support.' },
  { name: 'ICS System Solutions',   service: 'Accounting & Auditing',        desc: 'Financial reporting and tax compliance.' },
];

const clientPartners = [
  { name: 'Cold Spring Hotels', location: 'Homabay', desc: 'Complete laundry equipment installation and maintenance for hospitality operations.' },
  { name: 'PrideInn Hotels', location: 'Mombasa', desc: 'Commercial laundry systems and ongoing service support for coastal hotel operations.' },
  { name: 'Sarova White Sands', location: 'Mombasa', desc: 'Premium laundry equipment solutions for luxury beachfront resort.' },
];

export default function Partners() {
  return (
    <div>
      <PageHero
        image="/hero-partners.jpg"
        eyebrow="Our Ecosystem"
        heading="Our Partners"
        subtext="We represent some of the world's most trusted commercial equipment brands, backed by formal dealership agreements, factory training, and genuine parts supply chains."
      />

      {/* ══ BRAND GRID ══════════════════════════════════════ */}
      <section className="stripe-white py-section">
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Authorised Dealer</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Equipment Partner Brands</h2>
            <span className="ds-accent-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1px', background: 'var(--color-border)' }}>
            {equipmentBrands.map((brand, i) => (
              <div
                key={i}
                className="brand-cell"
                style={{ background: '#ffffff', minHeight: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1.75rem' }}
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{
                      width: '100%',
                      maxWidth: '200px',
                      height: '90px',
                      objectFit: 'contain',
                    }}
                  />
                ) : (
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-navy)', textAlign: 'center', lineHeight: 1.35 }}>{brand.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DEALERSHIPS — editorial timeline ════════════════ */}
      <section className="stripe-surface py-section">
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: headline + stat */}
            <div style={{ position: 'sticky', top: '2rem' }}>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>Official Authorisations</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1.25rem' }}>Key Dealerships</h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>
                Each dealership represents years of trust, technical excellence, and commitment recognised by a global manufacturer.
              </p>
              {/* Stat box */}
              <div className="dark-band" style={{ paddingBlock: '2rem', paddingInline: '2rem' }}>
                <div className="metric-block">
                  <div className="metric-block__value">3</div>
                  <div className="metric-block__label">Formal Dealerships</div>
                </div>
                <p className="ds-body-sm" style={{ color: 'rgba(255,255,255,0.55)', marginTop: '0.5rem' }}>Spanning laundry, kitchen &amp; HVAC</p>
              </div>
            </div>

            {/* Right: timeline */}
            <div style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column' }}>
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

      {/* ══ CLIENT PARTNERS ══════════════════════════════════ */}
      <section className="stripe-white py-section">
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Trusted By</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Key Client Partners</h2>
            <span className="ds-accent-line" style={{ marginBottom: '1rem' }} />
            <p className="ds-lead" style={{ color: 'var(--color-text-muted)', maxWidth: '540px' }}>Leading hospitality establishments we serve across Kenya.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {clientPartners.map((p, i) => (
              <div
                key={i}
                className="client-card"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '1.75rem' }}
              >
                <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.625rem' }}>{p.location}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>{p.name}</h3>
                <p className="ds-body-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.55' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICE ALLIANCES ════════════════════════════════ */}
      <section className="stripe-surface py-section">
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Local Alliances</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Service Alliances</h2>
            <span className="ds-accent-line" style={{ marginBottom: '1rem' }} />
            <p className="ds-lead" style={{ color: 'var(--color-text-muted)', maxWidth: '540px' }}>Trusted local partners that support our day-to-day operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {servicePartners.map((p, i) => (
              <div
                key={i}
                className="alliance-card"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '1.75rem' }}
              >
                <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.625rem' }}>{p.service}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>{p.name}</h3>
                <p className="ds-body-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.55' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Interested in a Partnership?"
        subtext="Whether you are a global brand or a local company looking to collaborate — we'd love to hear from you."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
