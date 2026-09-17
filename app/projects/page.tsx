'use client';

import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';
import Link from 'next/link';

// Featured projects with modern styling approach
const projects = [
  {
    id: 1,
    title: 'Radisson Blu Hotel Upper Hill',
    client: 'Radisson Blu Hotel',
    location: 'Upper Hill, Nairobi',
    sector: 'Hotels & Hospitality',
    year: '2024',
    image: '/hero-laundry.jpg',
    description: 'Complete commercial laundry system upgrade for luxury hotel. Energy-efficient industrial laundry line processing 500kg linen daily.',
    keyNumbers: ['200+', 'Rooms Served', '35%', 'Water Savings', '40%', 'Faster Processing'],
    equipment: ['Industrial Washers (60kg)', 'Tumble Dryers', 'Flatwork Ironers', 'Chemical Dosing Systems'],
    tags: ['Laundry', 'Hospitality'],
  },
  {
    id: 2,
    title: 'JKUAT Main Campus Kitchen',
    client: 'Jomo Kenyatta University',
    location: 'Juja, Kiambu',
    sector: 'Education',
    year: '2023',
    image: '/kitchen-categories/commercial-ovens.webp',
    description: 'Complete commercial kitchen for student cafeteria serving 3,000+ meals daily. Turnkey installation with full compliance.',
    keyNumbers: ['3,000+', 'Daily Meals', '40%', 'Higher Capacity', '30%', 'Energy Savings'],
    equipment: ['SkyLine Combi Ovens', 'Industrial Gas Ranges', 'Deep Fryers', 'Hood Dishwashers'],
    tags: ['Kitchen', 'Education'],
  },
  {
    id: 3,
    title: 'Kikuyu Mission Hospital',
    client: 'Kikuyu Mission Hospital',
    location: 'Kikuyu, Kiambu',
    sector: 'Healthcare',
    year: '2023',
    image: '/hero-laundry.jpg',
    description: 'Medical-grade laundry facility with infection control systems for 250-bed hospital. Full contamination barriers and traceability.',
    keyNumbers: ['250', 'Bed Capacity', '50%', 'Cost Reduction', '0', 'Infection Incidents'],
    equipment: ['Barrier Washers', 'Hygiene Dryers', 'RFID Tracking', 'Disinfection Systems'],
    tags: ['Laundry', 'Healthcare'],
  },
  {
    id: 4,
    title: 'Safari Park Hotel & Casino',
    client: 'Safari Park Hotel',
    location: 'Thika Road, Nairobi',
    sector: 'Hotels & Hospitality',
    year: '2024',
    image: '/kitchen-categories/cooking-ranges.webp',
    description: 'Kitchen modernization for luxury hotel serving 1,000+ covers during banquet operations. Multi-kitchen coordination system.',
    keyNumbers: ['1,000+', 'Peak Covers', '40%', 'More Capacity', '25%', 'Less Food Waste'],
    equipment: ['Combi Ovens (20GN)', 'Tilting Braising Pans', 'Blast Chillers', 'Flight Dishwashers'],
    tags: ['Kitchen', 'Hospitality'],
  },
  {
    id: 5,
    title: 'Multimedia University Housing',
    client: 'Multimedia University',
    location: 'Rongai, Kajiado',
    sector: 'Education',
    year: '2022',
    image: '/hero-laundry.jpg',
    description: 'Self-service laundry facility for 2,000+ student accommodation. Coin-operated system with M-Pesa integration.',
    keyNumbers: ['2,000+', 'Students Served', '24/7', 'Access', '100%', 'Uptime'],
    equipment: ['Coin Washers (18kg)', 'Coin Dryers (13kg)', 'Payment Kiosks', 'Remote Monitoring'],
    tags: ['Laundry', 'Education'],
  },
  {
    id: 6,
    title: 'The Nairobi Hospital',
    client: 'The Nairobi Hospital',
    location: 'Upper Hill, Nairobi',
    sector: 'Healthcare',
    year: '2023',
    image: '/kitchen-categories/steamers.webp',
    description: 'HACCP-compliant therapeutic diet kitchen for 300-bed hospital. Specialized meal preparation for medical dietary requirements.',
    keyNumbers: ['300', 'Bed Capacity', '30%', 'Faster Prep', '45%', 'Better Satisfaction'],
    equipment: ['Combi Steamers', 'Induction Ranges', 'Blast Chillers', 'Allergen-Free Zones'],
    tags: ['Kitchen', 'Healthcare'],
  },
];

export default function Projects() {
  return (
    <div>
      <PageHero
        image="/hero-about.jpg"
        eyebrow="Our Work"
        heading="Project Portfolio"
        subtext="Real installations. Real results. See how we deliver complete equipment solutions across East Africa."
      />

      {/* ══ STATEMENT BAND ══════════════════════════════════ */}
      <section className="dark-band">
        <div className="ds-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '1,500+', label: 'Projects Delivered' },
              { value: '15+',    label: 'Years Experience' },
              { value: '100%',   label: 'Client Satisfaction' },
              { value: '5',      label: 'Industry Sectors' },
            ].map(({ value, label }) => (
              <div key={label} className="metric-block">
                <div className="metric-block__value">{value}</div>
                <div className="metric-block__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECTS GRID ═══════════════════════════════════ */}
      <section className="stripe-white py-section">
        <div className="ds-container">
          <div style={{ marginBottom: '4rem', textAlign: 'center', maxWidth: '740px', margin: '0 auto 4rem' }}>
            <span className="ds-eyebrow">Featured Installations</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>
              Delivering Excellence Across East Africa
            </h2>
            <span className="ds-accent-line" style={{ margin: '1rem auto' }} />
            <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>
              From luxury hotels to medical facilities, see how we transform operations with premium equipment and expert installation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="project-card"
                style={{
                  background: '#ffffff',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  transition: 'all 300ms ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget as HTMLElement;
                  card.style.transform = 'translateY(-4px)';
                  card.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget as HTMLElement;
                  card.style.transform = 'translateY(0)';
                  card.style.boxShadow = 'none';
                }}
              >
                {/* Project Image */}
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 300ms ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.transform = 'scale(1)';
                    }}
                  />
                  
                  {/* Tags Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    display: 'flex',
                    gap: '0.5rem',
                  }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--color-brand-navy)',
                          background: 'var(--color-brand-cyan)',
                          padding: '0.5rem 0.875rem',
                          borderRadius: '20px',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Year Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: 'rgba(0,0,0,0.8)',
                    color: '#ffffff',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    backdropFilter: 'blur(8px)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                  }}>
                    {project.year}
                  </div>
                </div>

                {/* Project Details */}
                <div style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--color-brand-cyan)',
                    }}>
                      {project.sector}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.375rem',
                      fontWeight: 800,
                      color: 'var(--color-brand-navy)',
                      marginTop: '0.25rem',
                      marginBottom: '0.5rem',
                      lineHeight: 1.2,
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-text-muted)',
                      marginBottom: '1rem',
                    }}>
                      📍 {project.location}
                    </p>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'var(--color-text)',
                    marginBottom: '1.5rem',
                  }}>
                    {project.description}
                  </p>

                  {/* Key Numbers */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    padding: '1.25rem',
                    background: 'var(--color-surface)',
                    borderRadius: '8px',
                  }}>
                    {[0, 2, 4].map((i) => (
                      <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.5rem',
                          fontWeight: 800,
                          color: 'var(--color-brand-navy)',
                          lineHeight: 1,
                        }}>
                          {project.keyNumbers[i]}
                        </div>
                        <div style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--color-text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginTop: '0.25rem',
                          lineHeight: 1.3,
                        }}>
                          {project.keyNumbers[i + 1]}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Equipment List */}
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-brand-navy)',
                      marginBottom: '0.75rem',
                    }}>
                      Key Equipment
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.equipment.map((item, i) => (
                        <span
                          key={i}
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--color-text-muted)',
                            background: 'rgba(0,0,0,0.04)',
                            padding: '0.375rem 0.75rem',
                            borderRadius: '4px',
                            border: '1px solid var(--color-border)',
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <div style={{
              background: 'var(--color-surface)',
              padding: '2.5rem',
              borderRadius: '8px',
              border: '1px solid var(--color-border)',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--color-brand-navy)',
                marginBottom: '0.75rem',
              }}>
                More Projects Available
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                marginBottom: '1.5rem',
                maxWidth: '480px',
                margin: '0 auto 1.5rem',
              }}>
                These featured projects represent just a sample of our work. We have completed over 1,500 installations across East Africa.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  background: 'var(--color-brand-navy)',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'all 200ms ease',
                }}
                onMouseEnter={(e) => {
                  const link = e.currentTarget as HTMLElement;
                  link.style.background = 'var(--color-brand-cyan)';
                  link.style.color = 'var(--color-brand-navy)';
                }}
                onMouseLeave={(e) => {
                  const link = e.currentTarget as HTMLElement;
                  link.style.background = 'var(--color-brand-navy)';
                  link.style.color = '#ffffff';
                }}
              >
                Discuss Your Project
                <span style={{ fontSize: '0.75rem' }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Start Your Project?"
        subtext="Let's discuss your requirements and deliver a complete solution for your facility."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
