import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a3a8f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="Dabecks" className="h-16 w-auto object-contain mb-5" />
            <p className="text-white/70 text-sm leading-relaxed mb-2">
              Laundry & Kitchen Solutions Limited
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Trusted mechanical partner in East Africa since 2011.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-[#00b4d8] flex items-center justify-center hover:bg-white hover:text-[#1a3a8f] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#00b4d8] flex items-center justify-center hover:bg-white hover:text-[#1a3a8f] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[#00b4d8] font-bold mb-5 uppercase text-sm tracking-widest">Solutions</h4>
            <ul className="space-y-3">
              {[
                { href: '/solutions/laundry', label: 'Laundry Equipment' },
                { href: '/solutions/kitchen', label: 'Kitchen Systems' },
                { href: '/solutions/air-conditioning', label: 'Air Conditioning' },
                { href: '/solutions/consultancy', label: 'Consultancy' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 hover:text-[#00b4d8] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#00b4d8] font-bold mb-5 uppercase text-sm tracking-widest">Company</h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/clients', label: 'Our Clients' },
                { href: '/partners', label: 'Partners' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 hover:text-[#00b4d8] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#00b4d8] font-bold mb-5 uppercase text-sm tracking-widest">Contact</h4>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#00b4d8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Baraka Estate, Airport North Road, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00b4d8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+254729212254" className="hover:text-[#00b4d8] transition-colors">+254 729 212 254</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00b4d8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@dabeckslaundry.com" className="hover:text-[#00b4d8] transition-colors">info@dabeckslaundry.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Dabecks Laundry & Kitchen Solutions Limited. All rights reserved.</p>
          <p className="text-[#00b4d8]">Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
