import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-brand-navy)', color: '#ffffff' }}>

      {/* ── MAIN FOOTER CONTENT ─────────────────────────────── */}
      <div className="ds-container" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Company */}
          <div>
            {/* Brand name instead of logo image */}
            <div style={{ marginBottom: '1.25rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.375rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                Dabecks
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-cyan)',
                  marginTop: '0.125rem',
                }}
              >
                Laundry &amp; Kitchen Solutions
              </p>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: '1.65' }}>
              Dabecks Laundry & Kitchen Solutions Limited
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: '1.65', marginTop: '0.5rem' }}>
              East Africa's trusted commercial equipment partner since 2011.
            </p>

            {/* Social */}
            <div className="flex gap-2 mt-5">
              {[
                {
                  label: 'Facebook',
                  icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
                },
                {
                  label: 'LinkedIn',
                  icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
                },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="social-icon flex items-center justify-center"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-cyan)',
              marginBottom: '1.25rem',
            }}>
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/solutions/laundry',          label: 'Laundry Equipment' },
                { href: '/solutions/kitchen',          label: 'Kitchen Systems' },
                { href: '/solutions/air-conditioning', label: 'Air Conditioning' },
                { href: '/solutions/consultancy',      label: 'Consultancy' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="footer-link flex items-center gap-2"
                    style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem' }}
                  >
                    <span
                      className="flex-shrink-0"
                      style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-brand-cyan)' }}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-cyan)',
              marginBottom: '1.25rem',
            }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/about',    label: 'About Us' },
                { href: '/clients',  label: 'Our Clients' },
                { href: '/partners', label: 'Partners' },
                { href: '/contact',  label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="footer-link flex items-center gap-2"
                    style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem' }}
                  >
                    <span
                      className="flex-shrink-0"
                      style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-brand-cyan)' }}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-cyan)',
              marginBottom: '1.25rem',
            }}>
              Contact
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                  text: 'Baraka Estate, Airport North Road\nNairobi, Kenya',
                  href: undefined,
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                  text: '+254 729 212 254',
                  href: 'tel:+254729212254',
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                  text: 'info@dabeckslaundry.com',
                  href: 'mailto:info@dabeckslaundry.com',
                },
              ].map(({ icon, text, href }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="var(--color-brand-cyan)" viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="footer-link whitespace-pre-line"
                      style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: '1.5' }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: '1.5' }}>
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ───────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="ds-container">
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-3 py-5"
            style={{ fontSize: '0.8125rem' }}
          >
            <p style={{ color: 'rgba(255,255,255,0.4)' }}>
              © {new Date().getFullYear()} Dabecks Laundry & Kitchen Solutions Limited. All rights reserved.
            </p>
            <p style={{ color: 'var(--color-brand-cyan)', fontWeight: 600 }}>
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
