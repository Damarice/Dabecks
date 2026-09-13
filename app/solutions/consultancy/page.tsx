import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';

const services = [
  { num: '01', title: 'Equipment Sizing & Selection', desc: 'We assess your throughput, space, and utility constraints to recommend the right equipment capacity and specifications.' },
  { num: '02', title: 'Layout & Design',              desc: 'Optimised kitchen, laundry, and HVAC layouts engineered for workflow efficiency, safety, and regulatory compliance.' },
  { num: '03', title: 'Energy Audits',                desc: 'We analyse your energy and utility consumption and recommend practical measures to reduce long-term operating costs.' },
  { num: '04', title: 'Procurement Guidance',         desc: 'Specification writing, vendor evaluation, and full procurement process support from first draft to final order.' },
  { num: '05', title: 'Project Management',           desc: 'End-to-end coordination across installation, commissioning, and handover — on time and within budget.' },
  { num: '06', title: 'Training & Documentation',     desc: 'Hands-on operator training and comprehensive technical documentation for your team.' },
];

const steps = [
  { title: 'Consultation',    desc: 'We listen. Understand your facility, goals, and constraints before recommending anything.' },
  { title: 'Site Assessment', desc: 'On-site evaluation of your space, utilities, and existing infrastructure.' },
  { title: 'Recommendations', desc: 'A clear, costed proposal with equipment specifications and layout options.' },
  { title: 'Implementation',  desc: 'We stay with you through procurement, installation, and commissioning.' },
];

export default function ConsultancySolutions() {
  return (
    <div>
      <PageHero
        image="/hero-consultancy.jpg"
        eyebrow="Solutions"
        heading="Engineering Consultancy"
        subtext="Expert guidance from concept to completion — for kitchens, laundries, and HVAC systems across East Africa."
        breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Consultancy' }]}
      />

      {/* ══ INTRO ══════════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Our Approach</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem' }}>
                Every facility is different. We treat it that way.
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Most equipment problems start with poor planning. Wrong sizing, bad layouts, and missed utility requirements cost businesses far more to fix later than to get right upfront.
              </p>
              <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Our engineers work with you from the first conversation through to handover — ensuring your facility is set up correctly, efficiently, and built to last.
              </p>
              <Link href="/contact" className="ds-btn ds-btn-primary ds-btn-lg">
                Request a Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="/hero-consultancy.jpg" alt="Engineering consultancy" style={{ width: '100%', height: 'clamp(300px, 40vw, 480px)', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, background: 'var(--color-brand-cyan)', color: '#ffffff', padding: '1.25rem 1.75rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>13+</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600, marginTop: '0.25rem' }}>Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES GRID ══════════════════════════════════════ */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>What We Cover</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Consultancy Services</h2>
            <span className="ds-accent-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'var(--color-border)' }}>
            {services.map(({ num, title, desc }) => (
              <div key={num} className="service-tile" style={{ background: '#ffffff', padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--color-brand-cyan)', lineHeight: 1, marginBottom: '1.25rem', opacity: 0.4 }}>{num}</div>
                <h3 data-title="1" style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.625rem' }}>{title}</h3>
                <p data-desc="1" className="ds-body" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ════════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>How We Work</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Our Process</h2>
            <span className="ds-accent-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', border: '1px solid var(--color-border)' }}>
            {steps.map(({ title, desc }, i) => (
              <div
                key={i}
                className="process-step"
                style={{ position: 'relative', padding: '2rem', borderRight: i < steps.length - 1 ? '1px solid var(--color-border)' : 'none', background: '#ffffff' }}
              >
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 800, color: 'var(--color-brand-navy)', opacity: 0.06, lineHeight: 1, userSelect: 'none' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span className="ds-accent-line" style={{ marginBottom: '1.25rem', display: 'block' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.625rem', position: 'relative' }}>{title}</h3>
                <p className="ds-body" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', position: 'relative' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Start Your Project Today"
        subtext="Talk to our engineers for a free initial consultation on your facility needs."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
