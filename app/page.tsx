'use client';

import Link from 'next/link';
import HomepageHeroSlider from '@/app/components/HomepageHeroSlider';
import CTASection from '@/app/components/CTASection';
import Icon from '@/app/components/Icon';

export default function Home() {
  return (
    <div>
      <HomepageHeroSlider />

      {/* ══ VALUE PROPOSITION ═══════════════════════════════════ */}
      <section style={{ background: '#ffffff', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>East Africa&rsquo;s Commercial Equipment Partner</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, color: 'var(--color-brand-navy)' }}>
                The right equipment.<br />Installed correctly.<br />Supported completely.
              </h2>
            </div>
            <div>
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                From equipment selection to installation, training and after-sales support — Dabecks has been the trusted mechanical partner for hotels, hospitals, universities, and government institutions across East Africa since 2011.
              </p>
              <Link href="/about" className="ds-btn ds-btn-outline">Learn About Dabecks</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SOLUTIONS SHOWCASE ══════════════════════════════════ */}
      <section style={{ background: 'var(--color-surface)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>What We Offer</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Our Solutions</h2>
            </div>
            <Link href="/solutions" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-brand-navy)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}>
              View all
              <Icon name="chevronRight" size="sm" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {[
              { img: '/hero-laundry.jpg', title: 'Commercial\nLaundry',    sub: 'Washers · Dryers · Ironers · Accessories',   href: '/solutions/laundry' },
              { img: '/kitchen-categories/commercial-ovens.webp', title: 'Commercial\nKitchen',    sub: 'Ovens · Fryers · Dishwashers · Ranges',      href: '/solutions/kitchen' },
              { img: '/hero-ac.jpg',      title: 'Air\nConditioning',      sub: 'Split Units · VRF/VRV · Ducted · Cassette',  href: '/solutions/air-conditioning' },
            ].map(({ img, title, sub, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden',
                  height: 'clamp(360px, 42vw, 520px)',
                  textDecoration: 'none',
                }}
              >
                <img
                  src={img}
                  alt={title.replace('\n', ' ')}
                  style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 600ms ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,20,60,0.92) 0%, rgba(10,20,60,0.45) 45%, rgba(10,20,60,0.1) 100%)',
                  }}
                />
                <div style={{ position: 'absolute', inset: 'auto 0 0 0', padding: '1.75rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#ffffff', whiteSpace: 'pre-line', marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.04em', marginBottom: '1rem' }}>{sub}</p>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-brand-cyan)' }}>Explore range →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ METRICS BAND ════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-brand-navy)', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="ds-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '15+',    label: 'Years of Industry Experience' },
              { value: '1,500+', label: 'Installations Across East Africa' },
              { value: '100%',   label: 'Kenyan Owned' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1, color: 'var(--color-brand-cyan)', marginBottom: '0.375rem' }}>{value}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.65)' }}>{label}</div>
              </div>
            ))}
            {/* Brand dealerships */}
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-brand-cyan)', marginBottom: '0.625rem' }}>Authorised Dealerships</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, lineHeight: 1.4, color: 'rgba(255,255,255,0.85)' }}>
                Electrolux Professional<br />
                Alliance Laundry Systems<br />
                Pellerin Milnor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AUTHORISED PARTNER — editorial split ════════════════ */}
      <section style={{ background: '#ffffff', overflow: 'hidden' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ minHeight: '560px', alignItems: 'stretch' }}>
            {/* Image */}
            <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
              <img
                src="/home-partner.jpg"
                alt="Dabecks professional team"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Content */}
            <div style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Authorised Partner</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.875rem, 2.8vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--color-brand-navy)', marginBottom: '1.25rem' }}>
                Long-term authorised partner &amp; mechanical experts
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-body-lg" style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Authorised dealer for Alliance Laundry Systems, Electrolux Professional, and Pellerin Milnor — backed by certified technicians and a dedicated after-sales team across East Africa.
              </p>
              <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Every installation comes with expert commissioning, staff training, and ongoing maintenance support.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                {[
                  'Authorised dealerships with genuine parts',
                  'Certified installation and commissioning',
                  'Preventive maintenance contracts',
                  'Rapid response repair service',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-brand-cyan)', flexShrink: 0, marginTop: '0.5rem' }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 500, color: 'var(--color-text)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div><Link href="/about" className="ds-btn ds-btn-primary">More About Dabecks</Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-surface)', overflow: 'hidden' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ minHeight: '520px', alignItems: 'stretch' }}>
            {/* Content — left */}
            <div style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: 1 }}>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Why Choose Dabecks</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.875rem, 2.8vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--color-brand-navy)', marginBottom: '1.25rem' }}>
                Professional solution for professional results
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                When your kitchen or laundry systems fail, operations stop. Dabecks ensures your facility runs without interruption.
              </p>
              <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                {[
                  { iconName: 'bolt' as const, title: 'Energy Efficient', desc: 'Potential savings of up to 40% in energy and water consumption, depending on equipment, usage and facility conditions.' },
                  { iconName: 'tools' as const, title: 'Full Service Support', desc: 'Certified installation, preventive maintenance, and rapid repairs.' },
                  { iconName: 'certificate' as const, title: 'Certified Quality', desc: 'International standards compliance across all product categories.' },
                ].map((f) => (
                  <div key={f.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 0', borderBottom: '1px solid var(--color-border)' }}>
                    <div style={{ width: '40px', height: '40px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--color-brand-navy)', fontSize: '1.125rem' }}>
                      <Icon name={f.iconName} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.25rem' }}>{f.title}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.55' }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/solutions/consultancy" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-brand-navy)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                Learn about consultancy
                <Icon name="arrowRight" />
              </Link>
            </div>
            {/* Image — right */}
            <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden', order: 2 }}>
              <img src="/home-chef.jpg" alt="Professional kitchen chef" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ LATEST NEWS ══════════════════════════════════════════ */}
      <section style={{ background: '#ffffff', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Latest Updates</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Our News</h2>
            </div>
            <Link href="/about" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-brand-navy)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
              View all
              <Icon name="chevronRight" size="sm" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large article */}
            <article className="md:col-span-2" style={{ background: '#ffffff', border: '1px solid var(--color-border)', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 200ms ease' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
            >
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img src="/hero-about.jpg" alt="Dabecks expands service coverage" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 350ms ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
              </div>
              <div style={{ padding: '1.75rem' }}>
                <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.625rem' }}>March 2026</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 700, color: 'var(--color-brand-navy)', lineHeight: 1.25, marginBottom: '0.75rem' }}>
                  Dabecks expands service coverage across East Africa
                </h3>
                <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                  With new certified technicians now based in Uganda and Tanzania, our service network covers a wider regional footprint.
                </p>
                <Link href="/about" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-brand-navy)', textDecoration: 'none' }}>Read more →</Link>
              </div>
            </article>

            {/* Two small articles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { month: 'Feb 2026', title: 'New Milnor dealership strengthens industrial laundry offering', img: '/hero-laundry.jpg' },
                { month: 'Jan 2026', title: 'Electrolux Professional training completed by our technicians', img: '/kitchen-categories/commercial-ovens.webp' },
              ].map(({ month, title, img }) => (
                <article key={title} style={{ background: '#ffffff', border: '1px solid var(--color-border)', overflow: 'hidden', display: 'flex', cursor: 'pointer', transition: 'box-shadow 200ms ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  <div style={{ width: '110px', height: '110px', flexShrink: 0, overflow: 'hidden' }}>
                    <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '0.875rem 1.125rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.375rem' }}>{month}</span>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-brand-navy)', lineHeight: 1.3 }}>{title}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-surface)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3" style={{ background: '#ffffff', padding: '3rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Get Started</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>Request a Quote / Site Assessment</h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.75rem' }} />
              <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Tell us what you need and our team will prepare a tailored proposal.</p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="ds-label-form">Full Name *</label>
                    <input className="ds-input" type="text" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="ds-label-form">Company</label>
                    <input className="ds-input" type="text" placeholder="Your Company" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="ds-label-form">Email *</label>
                    <input className="ds-input" type="email" placeholder="you@email.com" required />
                  </div>
                  <div>
                    <label className="ds-label-form">Phone *</label>
                    <input className="ds-input" type="tel" placeholder="+254 700 000 000" required />
                  </div>
                </div>
                
                {/* What do you need? - Regular dropdown */}
                <div>
                  <label className="ds-label-form">What do you need? *</label>
                  <select required className="ds-input" style={{ cursor: 'pointer' }}>
                    <option value="">Select a service</option>
                    <option value="laundry">Laundry equipment</option>
                    <option value="kitchen">Kitchen equipment</option>
                    <option value="hvac">HVAC</option>
                    <option value="installation">Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="replacement">Replacement/upgrade</option>
                    <option value="new-facility">New facility/project</option>
                    <option value="consultancy">Consultancy</option>
                  </select>
                </div>
                
                <div>
                  <label className="ds-label-form">Tell us about your project *</label>
                  <textarea className="ds-input" rows={6} placeholder="Describe your project requirements, facility type, timeline..." required style={{ resize: 'vertical' }} />
                </div>
                
                <button type="submit" className="ds-btn ds-btn-primary ds-btn-lg" style={{ justifyContent: 'center' }}>
                  Submit Request
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2" style={{ background: 'var(--color-brand-navy)', padding: '3rem 2.5rem' }}>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-brand-cyan)' }}>Contact Info</span>
              <h2 className="ds-h2" style={{ color: '#ffffff', marginBottom: '0.5rem' }}>Reach Our Team</h2>
              <span className="ds-accent-line" style={{ marginBottom: '2.5rem', background: 'var(--color-brand-cyan)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { label: 'Phone', value: '+254 729 212 254\n+254 733 788 357' },
                  { label: 'Email', value: 'info@dabeckslaundry.com' },
                  { label: 'Location', value: 'Lunga Lunga Square, 1st Floor, A7\nNairobi, Kenya' },
                  { label: 'Business Hours', value: 'Mon – Fri: 8:00 AM – 5:00 PM\nSaturday: 9:00 AM – 1:00 PM' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ borderLeft: '4px solid var(--color-brand-cyan)', paddingLeft: '1.125rem' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-brand-cyan)', marginBottom: '0.375rem' }}>{label}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.85)', whiteSpace: 'pre-line', lineHeight: '1.65' }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to upgrade your facility?"
        subtext="Talk to our team — free consultation, genuine parts, certified installation."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
