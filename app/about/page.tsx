'use client';

import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';

/* ─── Data ───────────────────────────────────────────────────── */

const clients = [
  { name: 'NAS Servair',               category: 'Aviation Catering' },
  { name: 'Radisson Blu',              category: 'Hospitality' },
  { name: 'Safari Park Hotel',         category: 'Hospitality' },
  { name: 'Kenya Defence Forces',      category: 'Public Sector' },
  { name: 'JKUAT',                     category: 'Education' },
  { name: 'Utalii College',            category: 'Hospitality' },
  { name: 'Catholic University EA',    category: 'Education' },
  { name: 'Valley Hospital',           category: 'Healthcare' },
];

const timeline = [
  { year: '2011', title: 'Founded',            desc: 'Established in Kenya as an electrical and mechanical service provider catering to local commercial setups.' },
  { year: '2014', title: 'Incorporated',       desc: 'Formally incorporated as a Limited company, expanding into direct equipment sourcing for high-capacity laundries and kitchens.' },
  { year: '2017', title: 'Electrolux Partner', desc: 'Appointed as an authorized sales and service partner for Electrolux Professional in Kenya.' },
  { year: '2021', title: 'Alliance Expansion', desc: 'Expanded regional utility solutions by partnering with Alliance Laundry Systems (Speed Queen, Primus, UniMac).' },
  { year: '2024', title: 'Milnor Dealership',  desc: 'Secured official dealership for Pellerin Milnor Corporation & Chicago Dryer, solidifying leadership in heavy-duty industrial laundries.' },
];

const capabilities = [
  { title: 'Commercial Laundry',   desc: 'Supply, installation, and servicing of heavy-duty washer extractors, tumble dryers, and flatwork ironers.',         href: '/solutions/laundry' },
  { title: 'Commercial Kitchen',   desc: 'End-to-end commercial kitchen setups including prime cooking equipment, refrigeration, and dishwashers.',            href: '/solutions/kitchen' },
  { title: 'Air Conditioning',     desc: 'Energy-efficient cooling solutions — from split units to advanced VRF/VRV systems for commercial buildings.',       href: '/solutions/air-conditioning' },
  { title: 'Spare Parts & Service',desc: 'Direct access to OEM spare parts and customised preventative maintenance agreements.',                              href: '/contact' },
];

/* ─── Animated counter ───────────────────────────────────────── */

function Counter({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1200;
    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setCount(Math.round(t * to));
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{count}</>;
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function About() {
  const [expanded, setExpanded]   = useState(0);
  const [inView,   setInView]     = useState(false);
  const [modal,    setModal]      = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <PageHero
        image="/hero-about.jpg"
        eyebrow="Who We Are"
        heading="About Dabecks"
        subtext="Delivering world-class commercial solutions across Kenya and East Africa since 2011."
      />

      {/* ══ OUR COMPANY ════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Our Company</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem' }}>
                Kenya's trusted utility &amp; mechanical partner
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)' }}>
                Founded in 2011 and incorporated in 2014, Dabecks Laundry &amp; Kitchen Solutions Limited specialises in high-performance equipment sourcing, custom layout planning, professional installation, and lifelong technical support for commercial setups.
              </p>
            </div>
            <div className="relative">
              <img
                src="/hero-kitchen.jpg"
                alt="Commercial kitchen installation"
                style={{ width: '100%', height: 'clamp(280px, 38vw, 420px)', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  background: 'var(--color-brand-cyan)',
                  color: '#ffffff',
                  padding: '1rem 1.5rem',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, lineHeight: 1 }}>13+ Years</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ OUR JOURNEY ════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <img
                src="/hero-laundry.jpg"
                alt="Dabecks installation team"
                style={{ width: '100%', height: 'clamp(300px, 40vw, 480px)', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  background: '#ffffff',
                  borderLeft: '4px solid var(--color-brand-cyan)',
                  padding: '0.875rem 1.25rem',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-brand-navy)', lineHeight: 1 }}>100+</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Completed Projects</div>
              </div>
            </div>

            {/* Timeline accordion */}
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Our Journey</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '0.75rem' }}>Milestones</h2>
              <span className="ds-accent-line" style={{ marginBottom: '2rem' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}
                  >
                    <button
                      onClick={() => setExpanded(expanded === i ? -1 : i)}
                      className="w-full flex items-center justify-between"
                      style={{
                        padding: '1rem 1.25rem',
                        textAlign: 'left',
                        background: expanded === i ? 'var(--color-surface)' : '#ffffff',
                        transition: 'background var(--transition-base)',
                        cursor: 'pointer',
                      }}
                      aria-expanded={expanded === i}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                        <span
                          style={{
                            background: 'var(--color-brand-navy)',
                            color: 'var(--color-brand-cyan)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            padding: '0.25rem 0.625rem',
                            flexShrink: 0,
                          }}
                        >
                          {item.year}
                        </span>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-navy)' }}>
                          {item.title}
                        </span>
                      </div>
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: 'var(--color-brand-cyan)', transform: expanded === i ? 'rotate(180deg)' : 'none', transition: 'transform var(--transition-base)', marginLeft: '0.5rem' }}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expanded === i && (
                      <div
                        style={{
                          padding: '0.875rem 1.25rem 1rem',
                          borderTop: '1px solid var(--color-border)',
                          background: 'var(--color-surface)',
                        }}
                      >
                        <p className="ds-body" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CLIENT PARTNERS ════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Trusted By</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Our Clients</h2>
            <span className="ds-accent-line" />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1px',
              background: 'var(--color-border)',
              marginBottom: '2rem',
            }}
          >
            {clients.map((c, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  transition: 'background var(--transition-base)',
                  cursor: 'default',
                  minHeight: '100px',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-navy)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#ffffff'; }}
              >
                <span
                  style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'inherit', lineHeight: 1.3 }}
                  className="group-hover:text-white"
                >
                  {c.name}
                </span>
                <span className="ds-eyebrow" style={{ color: 'var(--color-brand-cyan)' }}>{c.category}</span>
              </div>
            ))}
          </div>

          <Link href="/clients" className="ds-btn ds-btn-outline">View All Clients</Link>
        </div>
      </section>

      {/* ══ CAPABILITIES ═══════════════════════════════════════ */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>What We Do</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Core Capabilities</h2>
            <span className="ds-accent-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  padding: '1.5rem',
                  display: 'block',
                  transition: 'box-shadow var(--transition-base), border-color var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-md)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-brand-cyan)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-border)';
                }}
              >
                <span className="ds-accent-line" style={{ marginBottom: '1rem', display: 'block' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.625rem' }}>
                  {card.title}
                </h3>
                <p className="ds-body-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {card.desc}
                </p>
                <span className="ds-eyebrow" style={{ color: 'var(--color-brand-cyan)' }}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════════════ */}
      <section
        ref={statsRef}
        className="ds-section"
        style={{ background: 'var(--color-brand-navy)' }}
      >
        <div className="ds-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 13,  suffix: '+',  label: 'Years in Business' },
              { value: 100, suffix: '+',  label: 'Projects Delivered' },
              { value: 5,   suffix: '+',  label: 'Brand Dealerships' },
              { value: 100, suffix: '%',  label: 'Kenyan Owned' },
            ].map(({ value, suffix, label }, i) => (
              <div key={i} className="text-center">
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: 'var(--color-brand-cyan)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {inView ? <Counter to={value} /> : 0}{suffix}
                </div>
                <p className="ds-body-sm" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ═════════════════════════════════════════ */}
      <CTASection
        heading="Ready to Upgrade Your Facility?"
        subtext="Our Nairobi-based team is ready to help with laundry, kitchen, or HVAC solutions."
        primaryLabel="Request Consultation"
        primaryHref="/contact"
        phone={true}
      />

      {/* ══ MODAL ══════════════════════════════════════════════ */}
      {modal && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
          onClick={() => setModal(false)}
        >
          <div
            style={{ background: '#ffffff', maxWidth: '520px', width: '100%', padding: '2.5rem' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 className="ds-h4" style={{ color: 'var(--color-brand-navy)', fontFamily: 'var(--font-display)' }}>Free Consultation Request</h3>
              <button onClick={() => setModal(false)} style={{ color: 'var(--color-text-muted)', fontSize: '1.5rem', lineHeight: 1, cursor: 'pointer' }} aria-label="Close">✕</button>
            </div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { id: 'name', label: 'Your Name',      type: 'text',  placeholder: 'John Doe' },
                { id: 'email',label: 'Email Address',  type: 'email', placeholder: 'john@example.com' },
                { id: 'phone',label: 'Phone Number',   type: 'tel',   placeholder: '+254 700 000 000' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label className="ds-label-form">{label}</label>
                  <input type={type} className="ds-input" placeholder={placeholder} />
                </div>
              ))}
              <div>
                <label className="ds-label-form">Service</label>
                <select className="ds-input">
                  <option>Select Service</option>
                  <option>Laundry Systems</option>
                  <option>Kitchen Systems</option>
                  <option>HVAC Systems</option>
                  <option>Consultancy</option>
                </select>
              </div>
              <div>
                <label className="ds-label-form">Project Details</label>
                <textarea className="ds-input" rows={4} style={{ resize: 'none' }} placeholder="Describe your project…" />
              </div>
              <button type="submit" className="ds-btn ds-btn-cyan ds-btn-lg w-full" style={{ justifyContent: 'center' }}>
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
