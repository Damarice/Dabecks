'use client';

import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';
import Icon from '@/app/components/Icon';
import { useState } from 'react';

const categories = [
  { label: 'Commercial Washers',  href: '/solutions/laundry/commercial-washers',  img: '/hero-laundry.jpg' },
  { label: 'Industrial Dryers',   href: '/solutions/laundry/industrial-dryers',   img: '/hero-laundry.jpg' },
  { label: 'Ironers & Presses',   href: '/solutions/laundry/ironers-presses',     img: '/hero-laundry.jpg' },
  { label: 'Washer Extractors',   href: '/solutions/laundry/washer-extractors',   img: '/hero-laundry.jpg' },
  { label: 'Folding Equipment',   href: '/solutions/laundry/folding-equipment',   img: '/hero-laundry.jpg' },
  { label: 'Accessories',         href: '/solutions/laundry/accessories',         img: '/hero-laundry.jpg' },
];

const standards = [
  { iconName: 'bolt' as const,        title: 'Energy Efficiency', desc: 'Up to 40% reduction in water and energy consumption across our entire range.' },
  { iconName: 'shield' as const,      title: 'Reliability', desc: 'Every product tested for continuous commercial use before leaving the factory.' },
  { iconName: 'tools' as const,       title: 'Service Support', desc: 'Full installation, maintenance, and repair across East Africa.' },
  { iconName: 'certificate' as const, title: 'Certified Quality', desc: 'International certification including energy and hygiene compliance standards.' },
];

const customers = [
  { name: 'Nairobi Serena Hotel',      type: 'Hospitality', quote: 'The new washers cut our energy bill by 35% in the first quarter. Reliability and after-sales support has been outstanding.', img: '/about-team.jpg' },
  { name: 'Aga Khan Hospital',         type: 'Healthcare',  quote: 'Hygiene compliance is non-negotiable. Dabecks delivered certified equipment and handles all maintenance — completely stress-free.', img: '/about-journey.jpg' },
  { name: 'Kenya School of Government',type: 'Institution', quote: 'Excellent service from consultation right through to installation. The equipment has performed exactly as specified.', img: '/hero-clients.jpg' },
];

const news = [
  { date: 'March 2026',    title: 'New Heat Pump Dryer Range Now Available in East Africa', desc: 'Up to 60% energy savings compared to conventional dryers.', img: '/hero-laundry.jpg' },
  { date: 'January 2026',  title: 'Dabecks Equips Largest Hotel Laundry in Nairobi',         desc: '24 washers, 18 dryers, and flatwork ironers for a 5-star property.', img: '/hero-clients.jpg' },
  { date: 'November 2025', title: 'Commercial Laundry Maintenance: What You Need to Know',   desc: 'Top tips to extend equipment life and avoid costly downtime.', img: '/about-journey.jpg' },
];

export default function LaundryPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  return (
    <div>
      <PageHero
        image="/hero-laundry.jpg"
        eyebrow="Solutions"
        heading="Commercial Laundry Solutions"
        subtext="We bring a complete laundry system to your door, designed to meet your professional needs and deliver exceptional results — every cycle."
        breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Laundry Equipment' }]}
      />

      {/* ══ INTRO ═══════════════════════════════════════════════ */}
      <section style={{ background: '#ffffff', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>A New Generation Begins</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem' }}>
                Built for the demands of modern commercial operations
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Our latest range of professional laundry equipment sets a new benchmark in energy efficiency, ergonomics, and reliability.
              </p>
              <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                From compact front-load washers for boutique hotels to industrial washer-extractors for hospital linen services — every product is selected for performance, longevity, and low cost of ownership.
              </p>
              <Link href="/solutions/laundry/commercial-washers" className="ds-btn ds-btn-primary">
                View Commercial Washers
              </Link>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                {standards.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--color-surface)',
                      padding: '1.5rem',
                      borderTop: '3px solid var(--color-brand-cyan)',
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-brand-cyan)' }}>
                      <Icon name={s.iconName} />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.9375rem',
                        fontWeight: 700,
                        color: 'var(--color-brand-navy)',
                        marginBottom: '0.375rem',
                      }}
                    >
                      {s.title}
                    </h3>
                    <p className="ds-caption" style={{ color: 'var(--color-text-muted)', lineHeight: '1.55' }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRICE LIST SECTION ════════════════════════════════ */}
      <section style={{ background: 'var(--color-brand-navy)', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="ds-eyebrow" style={{ color: 'var(--color-brand-cyan)', display: 'block', marginBottom: '0.875rem' }}>Pricing & Specifications</span>
              <h2 className="ds-h2" style={{ color: '#ffffff', marginBottom: '1rem' }}>
                Electrolux Professional Laundry Price List
              </h2>
              <p className="ds-body" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: '1.7' }}>
                Download our complete Electrolux Professional laundry equipment price list including specifications, technical details, and current market pricing for all our commercial washers, dryers, and ironers.
              </p>
              <a 
                href="/price-list" 
                className="ds-btn ds-btn-cyan"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Icon name="download" />
                View Price List
              </a>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                <strong style={{ color: '#ffffff' }}>What's Included:</strong>
              </p>
              <ul style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9375rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                <li>All commercial washer models and pricing</li>
                <li>Industrial dryer specifications and costs</li>
                <li>Flatwork ironer options and pricing</li>
                <li>Technical specifications and dimensions</li>
                <li>Current market availability by region</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CATEGORIES NAV — full-bleed with image/nav split ═══ */}
      <section style={{ background: 'var(--color-surface)', overflow: 'hidden' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0" style={{ minHeight: '560px' }}>
            {/* Image — 60% (3 cols) */}
            <div className="lg:col-span-3" style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
              <img
                src="/hero-laundry.jpg"
                alt="Commercial laundry operations"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,20,60,0.6) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '2rem', left: '2.5rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                  Equipment for every<br />scale of operation
                </p>
              </div>
            </div>
            {/* Nav — 40% (2 cols) */}
            <div className="lg:col-span-2" style={{ background: 'var(--color-brand-navy)', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-brand-cyan)', display: 'block', marginBottom: '1.5rem' }}>
                Product Categories
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {categories.map((cat, i) => (
                  <Link
                    key={i}
                    href={cat.href}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '1.125rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)',
                      color: '#ffffff', textDecoration: 'none', transition: 'color 200ms ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-brand-cyan)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                  >
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, lineHeight: 1 }}>
                      {cat.label}
                    </span>
                    <Icon name="chevronRight" size="sm" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CUSTOMERS ═══════════════════════════════════════════ */}
      <section style={{ background: '#ffffff', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Social Proof</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>
              Real stories. Real results.
            </h2>
            <span className="ds-accent-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customers.map((c, i) => (
              <div key={i} style={{ border: '1px solid var(--color-border)', overflow: 'hidden', background: '#ffffff' }}>
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={c.img} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,58,143,0.85) 0%, transparent 60%)', display: 'flex', alignItems: 'flex-end', padding: '1.25rem' }}>
                    <div>
                      <span className="ds-eyebrow" style={{ color: 'var(--color-brand-cyan)', display: 'block', marginBottom: '0.25rem' }}>{c.type}</span>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>{c.name}</p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ color: 'var(--color-brand-cyan)', fontSize: '2rem', lineHeight: 1, fontFamily: 'Georgia, serif', marginBottom: '0.5rem' }}>&ldquo;</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-muted)', fontStyle: 'italic', lineHeight: '1.6' }}>{c.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NEWS ════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-surface)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Stay Informed</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Latest News</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <article key={i} style={{ background: '#ffffff', border: '1px solid var(--color-border)', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 200ms ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img src={n.img} alt={n.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 350ms ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>{n.date}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-brand-navy)', lineHeight: 1.3, marginBottom: '0.5rem' }}>{n.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: '1.55' }}>{n.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT FORM ════════════════════════════════════════ */}
      <section style={{ background: '#ffffff', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid var(--color-border)' }}>
        <div className="ds-container" style={{ maxWidth: '680px' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Free Consultation</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>Tell us your needs</h2>
            <span className="ds-accent-line-center" />
            <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>
              We&apos;ll design the right laundry solution for your facility.
            </p>
          </div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="ds-label-form">Full Name *</label><input className="ds-input" type="text" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
              <div><label className="ds-label-form">Email Address *</label><input className="ds-input" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="ds-label-form">Phone Number *</label><input className="ds-input" type="tel" placeholder="+254 000 000 000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required /></div>
              <div><label className="ds-label-form">Company / Organisation</label><input className="ds-input" type="text" placeholder="Your company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></div>
            </div>
            <div><label className="ds-label-form">Your Requirements *</label><textarea className="ds-input" rows={4} style={{ resize: 'vertical' }} placeholder="Describe your laundry needs…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required /></div>
            <button type="submit" className="ds-btn ds-btn-primary ds-btn-lg" style={{ justifyContent: 'center' }}>Send Enquiry</button>
          </form>
        </div>
      </section>

      <CTASection
        heading="Not sure where to start?"
        subtext="Our team will assess your laundry needs and recommend the best equipment."
        primaryLabel="Talk to an Expert"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
