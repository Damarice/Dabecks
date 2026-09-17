'use client';

import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';

// Client data organized by sector
const clientsBySector: Record<string, { name: string; logo: string | null }[]> = {
  'Hotels & Hospitality': [
    { name: 'Radisson Blu Hotel',          logo: '/logos/clients/radisson-blu.png' },
    { name: 'Marriott Hotels',             logo: '/logos/clients/marriott.png' },
    { name: 'Hyatt Hotels',               logo: '/logos/clients/hyatt.png' },
    { name: 'Holiday Inn',                logo: '/logos/clients/holiday-inn.png' },
    { name: 'IHG Hotels & Resorts',       logo: '/logos/clients/ihg.png' },
    { name: 'Nairobi Safari Club',        logo: '/logos/clients/nairobi-safari-club.jpg' },
    { name: 'Safari Park Hotel & Casino', logo: '/logos/clients/safari-park-hotel.png' },
    { name: 'Golf Hotel Kakamega',        logo: '/logos/clients/golf-hotel.jpg' },
    { name: 'Cold Spring Hotels Homabay', logo: '/logos/clients/cold-spring-hotels.png' },
    { name: 'PrideInn Hotels Mombasa',   logo: '/logos/clients/prideinn.png' },
    { name: 'Sarova White Sands',        logo: '/logos/clients/sarova.png' },
    { name: 'Serena Hotels',             logo: '/logos/clients/serena.jpg' },
    { name: 'Ole Sereni Hotel',          logo: '/logos/clients/ole-sereni.jpg' },
    { name: 'Tribe Hotel Nairobi',       logo: '/logos/clients/tribe-hotel.jpg' },
    { name: 'Crowne Plaza Nairobi',      logo: '/logos/clients/crowne-plaza.jpg' },
    { name: 'Best Western Plus',         logo: '/logos/clients/best-western.jpg' },
    { name: 'Utalii Hotel',             logo: '/logos/clients/utalii-hotel.jpg' },
  ],
  'Healthcare': [
    { name: 'Kikuyu Mission Hospital',               logo: '/logos/clients/kikuyu-mission.jpg' },
    { name: 'Kenyatta National Hospital (KNH)',      logo: '/logos/clients/knh.jpg' },
    { name: 'Valley Hospital',                       logo: '/logos/clients/valley-hospital.png' },
    { name: 'Nairobi Hospital',                      logo: '/logos/clients/nairobi-hospital.png' },
    { name: 'Aga Khan University Hospital',          logo: '/logos/clients/aga-khan.png' },
    { name: 'Mater Hospital',                        logo: '/logos/clients/mater-hospital.png' },
    { name: 'MP Shah Hospital',                      logo: '/logos/clients/mp-shah.png' },
    { name: 'Karen Hospital',                        logo: '/logos/clients/karen-hospital.png' },
  ],
  'Education': [
    { name: 'JKUAT (Jomo Kenyatta University)',       logo: '/logos/clients/jkuat.webp' },
    { name: 'Multimedia University of Kenya',         logo: '/logos/clients/multimedia-university.png' },
    { name: 'Catholic University of East Africa',     logo: '/logos/clients/cuea.jpg' },
    { name: 'Kenya Utalii College',                   logo: '/logos/clients/utalii-college.jpg' },
    { name: 'Strathmore University',                  logo: '/logos/clients/strathmore.png' },
    { name: 'United States International University', logo: '/logos/clients/usiu.png' },
    { name: 'Kenya Medical Training College',         logo: '/logos/clients/kmtc.jpg' },
  ],
  'Government & Institutions': [
    { name: 'Kenya Defence Forces (KDF)', logo: '/logos/clients/kdf.jpg' },
    { name: 'Kenya Ports Authority',      logo: '/logos/clients/kpa.jpg' },
    { name: 'Kenya Revenue Authority',    logo: '/logos/clients/kra.jpg' },
    { name: 'Kenya Airways',              logo: '/logos/clients/kenya-airways.png' },
    { name: 'Kenya Power',                logo: '/logos/clients/kenya-power.jpg' },
    { name: 'Prisons Service of Kenya',   logo: '/logos/clients/prisons.jpg' },
  ],
  'Corporate & Industrial': [
    { name: 'NAS Servair (Aviation Catering)', logo: '/logos/clients/nas-servair.png' },
    { name: 'Maersk East Africa',              logo: '/logos/clients/maersk.png' },
    { name: 'Nation Media Group',              logo: '/logos/clients/nation-media.png' },
    { name: 'EABL (East African Breweries)',   logo: '/logos/clients/eabl.png' },
    { name: 'Kenya Commercial Bank (KCB)', logo: '/logos/clients/kcb.jpg' },
  ],
};

export default function Clients() {
  return (
    <div>
      <PageHero
        image="/hero-clients.jpg"
        eyebrow="Who We Serve"
        heading="Trusted By Leading Organisations"
        subtext="Serving hotels, hospitals, institutions and commercial facilities across East Africa since 2011."
      />

      {/* ══ STATEMENT BAND ══════════════════════════════════ */}
      <section className="dark-band">
        <div className="ds-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '1,500+', label: 'Installations Across East Africa' },
              { value: '15+',    label: 'Years of Industry Experience' },
              { value: '5',      label: 'Sectors Served' },
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

      {/* ══ CLIENTS BY SECTOR ═══════════════════════════════ */}
      <section className="stripe-white py-section">
        <div className="ds-container">
          <div style={{ marginBottom: '3rem', textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <span className="ds-eyebrow">Our Clients</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>
              Leading Organisations Across East Africa
            </h2>
            <span className="ds-accent-line" style={{ margin: '1rem auto' }} />
          </div>

          {Object.entries(clientsBySector).map(([sector, clients]) => (
            <div key={sector} style={{ marginBottom: '3.5rem' }}>
              {/* Sector heading */}
              <div style={{ 
                borderLeft: '4px solid var(--color-brand-cyan)', 
                paddingLeft: '1.25rem',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.5rem', 
                  fontWeight: 800, 
                  color: 'var(--color-brand-navy)',
                  marginBottom: '0.25rem'
                }}>
                  {sector}
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '0.875rem', 
                  color: 'var(--color-text-muted)' 
                }}>
                  {clients.length} clients
                </p>
              </div>

              {/* Client grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {clients.map((client, i) => (
                  <div
                    key={i}
                    className="brand-cell"
                    style={{
                      background: '#ffffff',
                      minHeight: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2.5rem 2rem',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        style={{
                          width: '100%',
                          maxWidth: '260px',
                          height: '120px',
                          objectFit: 'contain',
                        }}
                      />
                    ) : (
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-navy)', textAlign: 'center', lineHeight: 1.35 }}>
                        {client.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading="Ready to Work With Us?"
        subtext="Join leading organisations across East Africa who trust Dabecks for their commercial equipment needs."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
