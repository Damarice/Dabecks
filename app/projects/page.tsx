'use client';

import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';
import Link from 'next/link';

// Comprehensive project case studies
const projects = [
  {
    id: 1,
    title: 'Radisson Blu Hotel Upper Hill',
    client: 'Radisson Blu Hotel',
    location: 'Upper Hill, Nairobi',
    sector: 'Hotels & Hospitality',
    year: '2024',
    image: '/hero-laundry.jpg',
    scopeOfWork: 'Complete commercial laundry system upgrade for 200+ room luxury hotel. Replaced aging equipment with energy-efficient industrial laundry line capable of processing 500kg linen per day.',
    equipmentSupplied: [
      'Electrolux Professional W5600H Washers (60kg capacity) - 2 units',
      'Electrolux T5900 Industrial Tumble Dryers (60kg) - 2 units',
      'Electrolux IC44819 Flatwork Ironer (1900mm) - 1 unit',
      'Laundry carts, sorting tables, and folding stations',
    ],
    installation: 'Full mechanical and electrical installation including reinforced flooring, industrial water supply lines, drainage systems, steam connections, and dedicated electrical panels. Completed in 3 weeks with zero operational downtime.',
    commissioning: 'Comprehensive factory-certified commissioning including water quality testing, load balancing, cycle optimization, and chemical dosing system calibration.',
    training: 'Intensive 5-day staff training program covering machine operation, maintenance protocols, fabric care, stain removal, and troubleshooting. Training materials provided in English and Swahili.',
    maintenanceSupport: 'Annual preventive maintenance contract with quarterly servicing, 24/7 emergency call-out, genuine spare parts supply, and priority technical support.',
    outcome: 'Achieved 35% reduction in water consumption, 40% faster processing time, improved linen quality, and eliminated external laundry costs. Hotel recovered investment within 18 months.',
    tags: ['Laundry', 'Hospitality', 'Energy Efficiency'],
  },
  {
    id: 2,
    title: 'JKUAT Main Campus Kitchen Upgrade',
    client: 'Jomo Kenyatta University of Agriculture and Technology',
    location: 'Juja, Kiambu County',
    sector: 'Education',
    year: '2023',
    image: '/kitchen-categories/commercial-ovens.webp',
    scopeOfWork: 'Complete commercial kitchen equipment supply and installation for new student cafeteria serving 3,000+ meals daily. Included cooking, refrigeration, dishwashing, and ventilation systems.',
    equipmentSupplied: [
      'Electrolux Professional SkyLine PremiumS combi ovens - 3 units',
      'Industrial gas cooking ranges (6 burners) - 4 units',
      'Commercial deep fryers (twin basket) - 2 units',
      'Electrolux WT66 Hood-type dishwasher with booster pump',
      'Walk-in cold room (4m x 3m), blast freezer, prep tables',
    ],
    installation: 'Full turnkey installation including gas pipeline installation, commercial extraction and ventilation systems, stainless steel wall cladding, non-slip flooring, and fire suppression system integration.',
    commissioning: 'Full system commissioning including gas pressure testing, electrical load testing, ventilation airflow verification, and health & safety compliance certification from Nairobi County.',
    training: 'Comprehensive 2-week training for 15 kitchen staff covering equipment operation, cleaning protocols, preventive maintenance, energy efficiency practices, and food safety standards.',
    maintenanceSupport: '3-year comprehensive maintenance contract including bi-monthly servicing, emergency repairs, staff refresher training, and equipment warranty extension.',
    outcome: 'Kitchen now operates at 40% higher capacity, reduced energy costs by 30%, improved food quality and consistency, achieved A-grade health inspection rating, and eliminated equipment downtime during peak service.',
    tags: ['Kitchen', 'Education', 'Large Scale'],
  },
  {
    id: 3,
    title: 'Kikuyu Mission Hospital Laundry Facility',
    client: 'Kikuyu Mission Hospital',
    location: 'Kikuyu, Kiambu County',
    sector: 'Healthcare',
    year: '2023',
    image: '/hero-laundry.jpg',
    scopeOfWork: 'Medical-grade laundry facility installation with infection control systems for 250-bed hospital. Separate processing of contaminated linen, surgical textiles, and general hospital linen with full traceability.',
    equipmentSupplied: [
      'Electrolux WB4240H Barrier Washers (40kg) - 2 units with programmable disinfection cycles',
      'Electrolux T5550 Tumble Dryers with hygiene mode - 2 units',
      'Electrolux FI1300 Flatwork Ironer with stacking system',
      'Clean/dirty linen transport carts with RFID tracking',
      'Chemical dosing system with hospital-grade disinfectants',
    ],
    installation: 'Barrier wall installation creating clean/dirty zones, HVAC system with positive pressure in clean zone, medical-grade drainage with waste handling, backup power integration, and separate staff entry/exit protocols.',
    commissioning: 'Extensive commissioning including biological indicator testing, water quality analysis, temperature validation, chemical concentration verification, and Ministry of Health compliance inspection.',
    training: 'Specialized medical laundry training covering infection prevention protocols, handling of contaminated linen, bloodborne pathogen safety, PPE requirements, emergency procedures, and documentation standards. Training certified by Kenya Medical Supplies Authority.',
    maintenanceSupport: 'Critical facility maintenance contract with monthly preventive maintenance, quarterly microbiological testing, emergency 4-hour response time, and annual Ministry of Health audit support.',
    outcome: 'Zero healthcare-associated infection incidents linked to linen since installation. Achieved 50% reduction in linen replacement costs through proper processing, eliminated reliance on external laundry services, and received commendation during Ministry of Health inspection.',
    tags: ['Laundry', 'Healthcare', 'Infection Control'],
  },
  {
    id: 4,
    title: 'Safari Park Hotel Kitchen Modernization',
    client: 'Safari Park Hotel & Casino',
    location: 'Thika Road, Nairobi',
    sector: 'Hotels & Hospitality',
    year: '2024',
    image: '/kitchen-categories/cooking-ranges.webp',
    scopeOfWork: 'Complete kitchen modernization for luxury hotel and events venue serving 1,000+ covers during peak banquet operations. Upgraded main kitchen, pastry kitchen, and banquet kitchen with coordinated equipment.',
    equipmentSupplied: [
      'Electrolux Professional combi ovens (20GN capacity) - 4 units',
      'Modular cooking suites with tilting braising pans',
      'Commercial blast chillers for HACCP compliance',
      'High-capacity dishwashing system with pre-rinse and flight conveyor',
      'Refrigerated prep counters, bain maries, and holding cabinets',
    ],
    installation: 'Phased installation to maintain operations. Included ventilation system upgrade, grease extraction with UV filtration, kitchen re-layout for optimized workflow, and integration with hotel BMS system.',
    commissioning: 'Full commissioning with workflow simulation, load testing during banquet service, temperature mapping, and Kenya Bureau of Standards compliance verification.',
    training: '4-week comprehensive training covering advanced cooking techniques with combi ovens, multi-batch programming, cleaning and sanitation protocols, energy management, and preventive maintenance schedules.',
    maintenanceSupport: 'Premium maintenance package with monthly servicing, quarterly deep cleaning, annual efficiency audits, priority spare parts stocking, and 24/7 emergency support with 2-hour response time for critical equipment.',
    outcome: 'Increased banquet capacity by 40%, reduced food waste by 25%, improved consistency across multiple service points, achieved 35% energy savings, and maintained uninterrupted service during major events including international conferences.',
    tags: ['Kitchen', 'Hospitality', 'High Volume'],
  },
  {
    id: 5,
    title: 'Multimedia University Student Accommodation',
    client: 'Multimedia University of Kenya',
    location: 'Rongai, Kajiado County',
    sector: 'Education',
    year: '2022',
    image: '/hero-laundry.jpg',
    scopeOfWork: 'Self-service laundry facility for 2,000+ student accommodation complex. Included coin-operated washers and dryers, payment kiosk, and remote monitoring system.',
    equipmentSupplied: [
      'Electrolux W5180H Commercial Washers (18kg) - 8 units with coin/card systems',
      'Electrolux T5550 Tumble Dryers (13kg) - 8 units',
      'Cashless payment kiosk with M-Pesa integration',
      'Remote monitoring system with mobile app for availability checking',
      'Laundry carts, folding tables, and seating area furnishings',
    ],
    installation: 'Complete turnkey facility construction including reinforced concrete base, water supply system with filtration, drainage, electrical panels with circuit protection, ventilation, lighting, and security systems.',
    commissioning: 'System commissioning including payment system testing, remote monitoring integration, water pressure verification, cycle programming, and student orientation sessions.',
    training: 'Training for facility management staff on equipment maintenance, payment system management, troubleshooting, and customer service. Student guides created with usage instructions in English and Swahili.',
    maintenanceSupport: 'Quarterly preventive maintenance with filter replacement, mechanical inspection, payment system maintenance, and emergency call-out service during semester time.',
    outcome: 'Students now have convenient 24/7 laundry access, eliminated off-campus laundry expenses, generated additional revenue stream for university, and improved student satisfaction scores. System pays for itself through user fees.',
    tags: ['Laundry', 'Education', 'Self-Service'],
  },
  {
    id: 6,
    title: 'Nairobi Hospital Central Kitchen',
    client: 'The Nairobi Hospital',
    location: 'Upper Hill, Nairobi',
    sector: 'Healthcare',
    year: '2023',
    image: '/kitchen-categories/steamers.webp',
    scopeOfWork: 'Therapeutic diet kitchen upgrade for 300-bed hospital. HACCP-compliant facility producing specialized meals for diabetic, renal, cardiac, and post-operative patients plus staff cafeteria.',
    equipmentSupplied: [
      'Electrolux SkyLine combi steamers with low-temp cooking - 2 units',
      'Induction cooking ranges for precise temperature control',
      'Blast chillers for cook-chill meal system',
      'Tray assembly and meal distribution system',
      'Allergen-free preparation zone with dedicated equipment',
    ],
    installation: 'HACCP-compliant installation with segregated raw/cooked zones, color-coded prep areas, temperature monitoring throughout, hands-free fixtures, and dedicated allergen-free kitchen section.',
    commissioning: 'Rigorous commissioning including HACCP validation, temperature logging system verification, allergen control testing, and Kenya Bureau of Standards inspection for medical facility compliance.',
    training: 'Specialized training for clinical nutrition team covering therapeutic diet preparation, allergen management, HACCP principles, equipment sanitation, temperature monitoring, and patient meal customization within dietary restrictions.',
    maintenanceSupport: 'Critical healthcare maintenance contract with bi-weekly preventive checks, monthly deep cleaning, quarterly HACCP audits, and emergency 3-hour response time to prevent meal service disruption.',
    outcome: 'Achieved full HACCP compliance, reduced meal preparation time by 30%, eliminated cross-contamination incidents, improved patient meal satisfaction scores by 45%, and received accreditation from healthcare quality auditors.',
    tags: ['Kitchen', 'Healthcare', 'HACCP Compliant'],
  },
];

export default function Projects() {
  return (
    <div>
      <PageHero
        image="/hero-about.jpg"
        eyebrow="Our Work"
        heading="Project Portfolio"
        subtext="Real installations. Real results. See how we've delivered complete equipment solutions across East Africa."
      />

      {/* ══ STATEMENT BAND ══════════════════════════════════ */}
      <section className="dark-band">
        <div className="ds-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '1,500+', label: 'Projects Completed' },
              { value: '15+',    label: 'Years of Experience' },
              { value: '100%',   label: 'Client Satisfaction' },
              { value: '5',      label: 'Sectors Served' },
            ].map(({ value, label }) => (
              <div key={label} className="metric-block">
                <div className="metric-block__value">{value}</div>
                <div className="metric-block__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INTRO ═══════════════════════════════════════════ */}
      <section style={{ background: '#ffffff', paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="ds-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--color-brand-navy)',
              marginBottom: '1.5rem',
              lineHeight: 1.15,
            }}>
              Proven Track Record Across East Africa
            </h2>
            <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
              Every project showcases our complete solution approach: from equipment supply and professional installation to commissioning, staff training, and ongoing maintenance support.
            </p>
            <p className="ds-body" style={{ color: 'var(--color-text-muted)' }}>
              We don't just sell equipment — we deliver turnkey solutions that work from day one and keep working for years.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-surface)', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {projects.map((project, index) => (
              <article
                key={project.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                }}
              >
                {/* Project Header */}
                <div style={{
                  background: 'var(--color-brand-navy)',
                  padding: '2rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                }}>
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
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
                            padding: '0.375rem 0.75rem',
                            borderRadius: '2px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '0.75rem',
                      lineHeight: 1.1,
                    }}>
                      {project.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: 'rgba(255,255,255,0.8)',
                    }}>
                      <div><strong style={{ color: 'var(--color-brand-cyan)' }}>Client:</strong> {project.client}</div>
                      <div><strong style={{ color: 'var(--color-brand-cyan)' }}>Location:</strong> {project.location}</div>
                      <div><strong style={{ color: 'var(--color-brand-cyan)' }}>Sector:</strong> {project.sector}</div>
                    </div>
                  </div>
                  <div style={{
                    background: 'var(--color-brand-cyan)',
                    color: 'var(--color-brand-navy)',
                    padding: '1rem 1.5rem',
                    borderRadius: '4px',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.25rem',
                    }}>
                      Completed
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      lineHeight: 1,
                    }}>
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div style={{ height: '320px', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Project Details */}
                <div style={{ padding: '3rem 2rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                    
                    {/* Scope of Work */}
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--color-brand-cyan)',
                        marginBottom: '0.75rem',
                      }}>
                        Scope of Work
                      </h4>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.65,
                        color: 'var(--color-text)',
                      }}>
                        {project.scopeOfWork}
                      </p>
                    </div>

                    {/* Equipment Supplied */}
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--color-brand-cyan)',
                        marginBottom: '0.75rem',
                      }}>
                        Equipment Supplied
                      </h4>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                      }}>
                        {project.equipmentSupplied.map((item, i) => (
                          <li key={i} style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.875rem',
                            lineHeight: 1.55,
                            color: 'var(--color-text-muted)',
                            paddingLeft: '1.25rem',
                            position: 'relative',
                          }}>
                            <span style={{
                              position: 'absolute',
                              left: 0,
                              top: '0.4em',
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: 'var(--color-brand-cyan)',
                            }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Installation */}
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--color-brand-cyan)',
                        marginBottom: '0.75rem',
                      }}>
                        Installation
                      </h4>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                        color: 'var(--color-text-muted)',
                      }}>
                        {project.installation}
                      </p>
                    </div>

                    {/* Commissioning */}
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--color-brand-cyan)',
                        marginBottom: '0.75rem',
                      }}>
                        Commissioning & Training
                      </h4>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                        color: 'var(--color-text-muted)',
                        marginBottom: '1rem',
                      }}>
                        <strong>Commissioning:</strong> {project.commissioning}
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                        color: 'var(--color-text-muted)',
                      }}>
                        <strong>Training:</strong> {project.training}
                      </p>
                    </div>

                    {/* Maintenance Support */}
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--color-brand-cyan)',
                        marginBottom: '0.75rem',
                      }}>
                        Maintenance & Support
                      </h4>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                        color: 'var(--color-text-muted)',
                      }}>
                        {project.maintenanceSupport}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div style={{
                      gridColumn: '1 / -1',
                      background: 'var(--color-surface)',
                      padding: '1.5rem',
                      borderLeft: '4px solid var(--color-brand-cyan)',
                    }}>
                      <h4 style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--color-brand-cyan)',
                        marginBottom: '0.75rem',
                      }}>
                        Results & Outcome
                      </h4>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.65,
                        color: 'var(--color-text)',
                        fontWeight: 500,
                      }}>
                        {project.outcome}
                      </p>
                    </div>

                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Start Your Project?"
        subtext="Let's discuss your requirements and show you how we can deliver a complete solution for your facility."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
