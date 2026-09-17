'use client';

import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';

// Client data organized by sector
const clientsBySector = {
  'Hotels & Hospitality': [
    'Radisson Blu Hotel',
    'Marriott Hotels',
    'Hyatt Hotels',
    'Holiday Inn',
    'Nairobi Safari Club',
    'Safari Park Hotel & Casino',
    'Golf Hotel Kakamega',
    'Cold Spring Hotels Homabay',
    'PrideInn Hotels Mombasa',
    'Sarova White Sands',
  ],
  'Healthcare': [
    'Kikuyu Mission Hospital',
    'KTRH (Kenyatta National Hospital)',
    'Valley Hospital',
    'Nairobi Hospital',
  ],
  'Education': [
    'JKUAT (Jomo Kenyatta University)',
    'Multimedia University',
    'Catholic University of East Africa',
    'Kenya Utalii College',
  ],
  'Government & Institutions': [
    'Kenya Defence Forces',
    'Kenya Ports Authority',
  ],
  'Corporate & Industrial': [
    'NAS Servair (Aviation Catering)',
    'Maersk East Africa',
  ],
};

// Case studies
const caseStudies = [
  {
    title: 'Radisson Blu Hotel Nairobi',
    sector: 'Hotels & Hospitality',
    location: 'Nairobi',
    image: '/hero-laundry.jpg',
    services: ['Commercial laundry equipment supply', 'Professional installation', 'Commissioning & staff training'],
    equipment: ['Industrial washers (60kg capacity)', 'Tumble dryers', 'Flatwork ironers'],
    year: '2024',
  },
  {
    title: 'JKUAT Main Campus',
    sector: 'Education',
    location: 'Juja',
    image: '/kitchen-categories/commercial-ovens.webp',
    services: ['Kitchen equipment supply', 'Installation & commissioning', 'Maintenance contract'],
    equipment: ['Commercial ovens', 'Industrial dishwashers', 'Cooking ranges'],
    year: '2023',
  },
  {
    title: 'Kikuyu Mission Hospital',
    sector: 'Healthcare',
    location: 'Kikuyu',
    image: '/hero-laundry.jpg',
    services: ['Medical laundry system', 'Installation', 'Staff training & maintenance'],
    equipment: ['Barrier washers', 'Industrial dryers', 'Infection control systems'],
    year: '2023',
  },
];

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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {clients.map((client, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--color-surface)',
                      padding: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      borderLeft: '2px solid var(--color-border)',
                      transition: 'border-color 200ms ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--color-brand-cyan)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--color-border)'; }}
                  >
                    <div style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      background: 'var(--color-brand-cyan)', 
                      flexShrink: 0 
                    }} />
                    <span style={{ 
                      fontFamily: 'var(--font-body)', 
                      fontSize: '0.9375rem', 
                      fontWeight: 600, 
                      color: 'var(--color-brand-navy)' 
                    }}>
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CASE STUDIES ════════════════════════════════════ */}
      <section className="stripe-surface py-section">
        <div className="ds-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="ds-eyebrow">Project Highlights</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>
              Featured Projects
            </h2>
            <span className="ds-accent-line" />
            <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginTop: '1rem', maxWidth: '640px' }}>
              Real installations, real results. See how we've helped leading organisations across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <article
                key={i}
                style={{
                  background: '#ffffff',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  transition: 'box-shadow 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                {/* Image */}
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={study.image} 
                    alt={study.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--color-brand-cyan)',
                    color: 'var(--color-brand-navy)',
                    padding: '0.375rem 0.75rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    borderRadius: '2px',
                  }}>
                    {study.year}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.75rem' }}>
                  <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    {study.sector}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-brand-navy)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.2,
                  }}>
                    {study.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.25rem',
                  }}>
                    📍 {study.location}
                  </p>

                  {/* Equipment */}
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-brand-navy)',
                      marginBottom: '0.5rem',
                    }}>
                      Equipment
                    </p>
                    <ul style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '0.375rem',
                      listStyle: 'none',
                      padding: 0,
                    }}>
                      {study.equipment.map((item, j) => (
                        <li key={j} style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8125rem',
                          color: 'var(--color-text-muted)',
                          paddingLeft: '1rem',
                          position: 'relative',
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--color-brand-cyan)',
                          }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services */}
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-brand-navy)',
                      marginBottom: '0.5rem',
                    }}>
                      Services
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                      {study.services.map((service, j) => (
                        <span
                          key={j}
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            color: 'var(--color-brand-navy)',
                            background: 'var(--color-surface)',
                            padding: '0.25rem 0.625rem',
                            borderRadius: '2px',
                          }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
