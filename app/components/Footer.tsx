import Link from 'next/link';
import Icon from '@/app/components/Icon';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-brand-navy)' }}>

      {/* ── MAIN GRID ──────────────────────────────────────── */}
      <div className="ds-container" style={{ paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                Dabecks
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-cyan)', marginTop: '0.125rem' }}>
                Laundry &amp; Kitchen Solutions
              </p>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
              Kenyan-owned commercial equipment and technical solutions company serving East Africa since 2011.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              {[
                { label: 'Facebook', icon: 'facebook' as const },
                { label: 'LinkedIn', icon: 'linkedin' as const },
                { label: 'Instagram', icon: 'instagram' as const },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="social-icon flex items-center justify-center"
                  style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', flexShrink: 0 }}
                >
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-cyan)', marginBottom: '1.25rem' }}>
              Solutions
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { href: '/solutions/laundry',          label: 'Laundry Equipment' },
                { href: '/solutions/kitchen',          label: 'Kitchen Systems' },
                { href: '/solutions/air-conditioning', label: 'Air Conditioning' },
                { href: '/solutions/consultancy',      label: 'Consultancy' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="footer-link"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem', fontFamily: 'var(--font-body)' }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-brand-cyan)', flexShrink: 0 }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-cyan)', marginBottom: '1.25rem' }}>
              Company
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { href: '/about',    label: 'About Us' },
                { href: '/clients',  label: 'Our Clients' },
                { href: '/partners', label: 'Partners' },
                { href: '/contact',  label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="footer-link"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem', fontFamily: 'var(--font-body)' }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-brand-cyan)', flexShrink: 0 }} />
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Dabecks-Company-Profile.pdf"
                  download="Dabecks-Company-Profile.pdf"
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem', fontFamily: 'var(--font-body)' }}
                >
                  <Icon name="download" style={{ color: 'var(--color-brand-cyan)', fontSize: '0.875rem' }} />
                  Company Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-cyan)', marginBottom: '1.25rem' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: 'location' as const, text: 'Lunga Lunga Square, 1st Floor, A7\nNairobi, Kenya', href: undefined },
                { icon: 'phone' as const, text: '+254 729 212 254', href: 'tel:+254729212254' },
                { icon: 'email' as const, text: 'info@dabeckslaundry.com', href: 'mailto:info@dabeckslaundry.com' },
              ].map(({ icon, text, href }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Icon name={icon} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-cyan)' }} />
                  {href ? (
                    <a href={href} className="footer-link" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', fontFamily: 'var(--font-body)', lineHeight: '1.5', whiteSpace: 'pre-line' }}>{text}</a>
                  ) : (
                    <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', fontFamily: 'var(--font-body)', lineHeight: '1.5', whiteSpace: 'pre-line' }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ─────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
        <div className="ds-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-5">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)' }}>
              © {new Date().getFullYear()} Dabecks Laundry &amp; Kitchen Solutions Limited. All rights reserved.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-brand-cyan)' }}>
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
