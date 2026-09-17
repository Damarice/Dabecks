import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';

const solutions = [
  {
    title: 'Laundry Equipment',
    desc: 'Commercial washers, industrial dryers, ironers, and accessories for hotels, hospitals, and large-scale operations.',
    href: '/solutions/laundry',
    image: '/hero-laundry.jpg',
    items: ['Commercial Washers', 'Industrial Dryers', 'Ironers & Presses', 'Washer Extractors'],
  },
  {
    title: 'Kitchen Systems',
    desc: 'Professional kitchen equipment including ovens, fryers, steamers, and dishwashers for commercial food service.',
    href: '/solutions/kitchen',
    image: '/kitchen-categories/commercial-ovens.webp',
    items: ['Commercial Ovens', 'Fryers', 'Dishwashers', 'Cooking Ranges'],
  },
  {
    title: 'Air Conditioning',
    desc: 'Complete HVAC solutions including split units, VRF/VRV systems, and ducted systems for commercial buildings.',
    href: '/solutions/air-conditioning',
    image: '/hero-ac.jpg',
    items: ['Split Units', 'VRF/VRV Systems', 'Ducted Systems', 'Cassette Units'],
  },
  {
    title: 'Engineering Consultancy',
    desc: 'Expert guidance on equipment sizing, layout design, energy audits, and procurement — from concept to handover.',
    href: '/solutions/consultancy',
    image: '/hero-consultancy.jpg',
    items: ['Equipment Sizing', 'Layout Design', 'Energy Audits', 'Project Management'],
  },
];

export default function SolutionsPage() {
  return (
    <div>
      <PageHero
        image="/hero-laundry.jpg"
        eyebrow="What We Offer"
        heading="Our Solutions"
        subtext="Professional equipment and services for laundry, kitchen, and air conditioning — tailored for commercial and industrial operations."
        breadcrumbs={[{ label: 'Solutions' }]}
      />

      {/* ══ SOLUTIONS GRID ═════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Browse by solution</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Everything We Do</h2>
            <span className="ds-accent-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <Link key={i} href={s.href} className="hover-lift overflow-hidden block" style={{ border: '1px solid var(--color-border)' }}>
                {/* Image */}
                <div className="hover-zoom-wrap" style={{ position: 'relative', height: '220px' }}>
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,58,143,0.7) 0%, rgba(26,58,143,0.2) 60%, transparent 100%)' }} />
                  <h2 style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                    {s.title}
                  </h2>
                </div>
                {/* Content */}
                <div style={{ padding: '1.5rem', background: '#ffffff' }}>
                  <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>{s.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', marginBottom: '1.25rem', listStyle: 'none', padding: 0 }}>
                    {s.items.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-brand-cyan)', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-brand-navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-brand-cyan)' }}>
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not sure where to start?"
        subtext="Our team will assess your facility and recommend the right solution."
        primaryLabel="Talk to an Expert"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
