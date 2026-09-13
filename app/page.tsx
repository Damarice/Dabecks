import Link from 'next/link';
import HomepageHeroSlider from '@/app/components/HomepageHeroSlider';

export default function Home() {
  return (
    <div>
      <HomepageHeroSlider />

      {/* ══ SOLUTIONS OVERVIEW ═════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">What We Offer</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Our Solutions</h2>
            <span className="ds-accent-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { img: '/hero-laundry.jpg', title: 'Commercial\nLaundry',      href: '/solutions/laundry' },
              { img: '/hero-kitchen.jpg', title: 'Commercial\nKitchen',      href: '/solutions/kitchen' },
              { img: '/hero-ac.jpg',      title: 'Air\nConditioning',        href: '/solutions/air-conditioning' },
            ].map(({ img, title, href }) => (
              <Link
                key={href}
                href={href}
                className="solution-card group relative overflow-hidden block"
                style={{ height: 'clamp(320px, 40vw, 460px)' }}
              >
                <img
                  src={img}
                  alt={title.replace('\n', ' ')}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,20,60,0.82) 0%, rgba(10,20,60,0.38) 50%, rgba(10,20,60,0.15) 100%)',
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8" style={{ zIndex: 2 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                      fontWeight: 800,
                      lineHeight: 1.08,
                      letterSpacing: '-0.025em',
                      color: '#ffffff',
                      whiteSpace: 'pre-line',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {title}
                  </h3>
                  <span className="ds-btn ds-btn-cyan ds-btn-sm">Discover More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AUTHORISED PARTNER ═════════════════════════════════ */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>About Dabecks</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1.25rem' }}>
                Long-term authorised partner &amp; mechanical experts
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Since 2011, Dabecks has been East Africa's trusted commercial equipment partner — serving hotels, hospitals, universities, and government institutions.
              </p>
              <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>
                Authorised dealer for Alliance Laundry Systems, Electrolux Professional, and Milnor — backed by certified technicians and a dedicated after-sales team.
              </p>

              <div
                className="flex items-center gap-8 flex-wrap"
                style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--color-border)' }}
              >
                {[
                  { num: '15+',    label: 'Years Experience' },
                  { num: '1,500+', label: 'Clients Served' },
                  { num: '3',      label: 'Brand Dealerships' },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--color-brand-cyan)' }}>
                      {num}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="ds-btn ds-btn-primary">More About Dabecks</Link>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src="/home-partner.jpg"
                alt="Dabecks professional team"
                style={{ width: '100%', height: 'clamp(340px, 45vw, 520px)', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute', top: '-1.5rem', left: '-1.5rem',
                  width: '120px', height: '120px', borderRadius: '50%',
                  background: 'var(--color-brand-navy)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  boxShadow: 'var(--shadow-xl)', border: '4px solid #ffffff',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-brand-cyan)', lineHeight: 1 }}>25</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', textAlign: 'center', lineHeight: 1.3, marginTop: '0.25rem', paddingInline: '0.5rem' }}>
                  years in<br />business
                </span>
              </div>
              <div style={{ position: 'absolute', bottom: '-1rem', right: '-1rem', background: 'var(--color-brand-cyan)', color: '#ffffff', padding: '1.25rem 1.75rem', boxShadow: 'var(--shadow-lg)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>1,500+</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.3, marginTop: '0.25rem', opacity: 0.9 }}>
                  Clients in<br />East Africa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ LATEST NEWS ════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4" style={{ marginBottom: '2.5rem' }}>
            <div>
              <span className="ds-eyebrow">Latest Updates</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Our News</h2>
              <span className="ds-accent-line" />
            </div>
            <Link href="/about" className="hover-text-cyan" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-brand-navy)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', flexShrink: 0 }}>
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { day: '27', month: 'Mar', title: 'Dabecks expands service coverage across East Africa',            img: '/hero-about.jpg' },
              { day: '28', month: 'Feb', title: 'New Milnor dealership strengthens industrial laundry offering',  img: '/hero-laundry.jpg' },
              { day: '27', month: 'Jan', title: 'Electrolux Professional training completed by our technicians',  img: '/hero-kitchen.jpg' },
            ].map(({ day, month, title, img }) => (
              <article key={day + month} className="news-card overflow-hidden" style={{ background: '#ffffff', border: '1px solid var(--color-border)', cursor: 'pointer' }}>
                <div className="hover-zoom-wrap" style={{ height: '200px' }}>
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: '0.875rem' }}>
                    <div style={{ background: 'var(--color-brand-cyan)', color: '#ffffff', padding: '0.375rem 0.625rem', textAlign: 'center', flexShrink: 0 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 800, lineHeight: 1 }}>{day}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.125rem' }}>{month}</div>
                    </div>
                    <span className="ds-eyebrow">News</span>
                  </div>
                  <h3 className="hover-text-cyan" style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-brand-navy)', lineHeight: 1.3 }}>
                    {title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══════════════════════════════════════ */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <img src="/home-chef.jpg" alt="Professional kitchen chef" style={{ width: '100%', height: 'clamp(320px, 42vw, 500px)', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: '#ffffff', padding: '0.875rem 1.25rem', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-brand-navy)', lineHeight: 1 }}>ISO Certified</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.125rem' }}>Quality Guaranteed</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>Why Choose Us</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1.25rem' }}>
                Professional solution for professional results
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Reliable equipment is the backbone of every hotel, hospital, and institution.
              </p>
              <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Dabecks partners with world-class brands and backs every installation with expert commissioning, staff training, and ongoing maintenance.
              </p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem', listStyle: 'none', padding: 0 }}>
                {[
                  'Authorised dealerships with genuine parts',
                  'Certified installation and commissioning',
                  'Preventive maintenance contracts',
                  'Rapid response repair service',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--color-brand-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg className="w-3 h-3" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', fontWeight: 500, color: 'var(--color-text)' }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/solutions/consultancy" className="hover-text-cyan" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-brand-navy)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Learn about consultancy
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ════════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>Get in Touch</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>Send Us a Message</h2>
              <span className="ds-accent-line" style={{ marginBottom: '0.75rem' }} />
              <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Have a project? Get a free consultation from our team.</p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="ds-label-form">Full Name *</label><input className="ds-input" type="text" placeholder="John Doe" /></div>
                  <div><label className="ds-label-form">Company / Organisation</label><input className="ds-input" type="text" placeholder="Your Company" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="ds-label-form">Email Address *</label><input className="ds-input" type="email" placeholder="you@email.com" /></div>
                  <div><label className="ds-label-form">Phone Number *</label><input className="ds-input" type="tel" placeholder="+254 700 000 000" /></div>
                </div>
                <div>
                  <label className="ds-label-form">Service</label>
                  <select className="ds-input">
                    <option value="">Select a Service</option>
                    <option value="laundry">Laundry Equipment</option>
                    <option value="kitchen">Kitchen Systems</option>
                    <option value="ac">Air Conditioning</option>
                    <option value="consultancy">Consultancy</option>
                  </select>
                </div>
                <div><label className="ds-label-form">Message *</label><textarea className="ds-input" rows={5} placeholder="Tell us about your project…" style={{ resize: 'none' }} /></div>
                <button type="submit" className="ds-btn ds-btn-primary ds-btn-lg w-full" style={{ justifyContent: 'center' }}>Send Message</button>
              </form>
            </div>

            <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
              <img src="/logo.png" alt="Dabecks" style={{ height: '44px', width: 'auto', objectFit: 'contain', objectPosition: 'left', marginBottom: '1.5rem' }} />
              <p className="ds-body" style={{ color: 'var(--color-text-muted)', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
                Your trusted partner for commercial laundry, kitchen, and air conditioning solutions across East Africa since 2011.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                {[
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />, label: 'Phone',    value: '+254 729 212 254\n+254 733 788 357' },
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />, label: 'Email',    value: 'info@dabeckslaundry.com' },
                  { icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>, label: 'Location', value: 'Baraka Estate, Airport North Road\nNairobi, Kenya' },
                ].map(({ icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                    <div style={{ width: '36px', height: '36px', background: 'var(--color-brand-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg className="w-4 h-4" fill="none" stroke="var(--color-brand-cyan)" viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-brand-navy)', marginBottom: '0.25rem' }}>{label}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Business Hours</div>
                <div className="ds-body" style={{ color: 'var(--color-text-muted)' }}>Mon – Fri: 8:00 AM – 5:00 PM</div>
                <div className="ds-body" style={{ color: 'var(--color-text-muted)' }}>Saturday: 9:00 AM – 1:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
