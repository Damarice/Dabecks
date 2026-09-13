'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

/* ─── Nav data ─────────────────────────────────────────────── */

const solutions = {
  laundry: {
    label: 'Laundry Equipment',
    href: '/solutions/laundry',
    items: [
      { label: 'Commercial Washers',   href: '/solutions/laundry/commercial-washers' },
      { label: 'Industrial Dryers',    href: '/solutions/laundry/industrial-dryers' },
      { label: 'Ironers & Presses',    href: '/solutions/laundry/ironers-presses' },
      { label: 'Washer Extractors',    href: '/solutions/laundry/washer-extractors' },
      { label: 'Folding Equipment',    href: '/solutions/laundry/folding-equipment' },
      { label: 'Laundry Accessories',  href: '/solutions/laundry/accessories' },
    ],
  },
  kitchen: {
    label: 'Kitchen Systems',
    href: '/solutions/kitchen',
    items: [
      { label: 'Commercial Ovens',  href: '/solutions/kitchen/commercial-ovens' },
      { label: 'Fryers',            href: '/solutions/kitchen/fryers' },
      { label: 'Dishwashers',       href: '/solutions/kitchen/dishwashers' },
      { label: 'Steamers',          href: '/solutions/kitchen/steamers' },
      { label: 'Cooking Ranges',    href: '/solutions/kitchen/cooking-ranges' },
      { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' },
    ],
  },
  ac: {
    label: 'Air Conditioning',
    href: '/solutions/air-conditioning',
    items: [
      { label: 'Split Units',           href: '/solutions/air-conditioning/split-units' },
      { label: 'VRF/VRV Systems',        href: '/solutions/air-conditioning/vrf-vrv-systems' },
      { label: 'Ducted Systems',         href: '/solutions/air-conditioning/ducted-systems' },
      { label: 'Cassette Units',         href: '/solutions/air-conditioning/cassette-units' },
      { label: 'Installation Services',  href: '/solutions/air-conditioning/installation-services' },
      { label: 'Maintenance & Repair',   href: '/solutions/air-conditioning/maintenance-repair' },
    ],
  },
};

const navLinks = [
  { href: '/',                      label: 'Home' },
  { key: 'laundry',                 label: 'Laundry' },
  { key: 'kitchen',                 label: 'Kitchen' },
  { key: 'ac',                      label: 'Air Conditioning' },
  { href: '/solutions/consultancy', label: 'Consultancy' },
  { href: '/about',                 label: 'About' },
  { href: '/clients',               label: 'Clients' },
  { href: '/partners',              label: 'Partners' },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, []);

  const openDropdown = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const sol = solutions as Record<string, (typeof solutions)[keyof typeof solutions]>;

  return (
    <header className="w-full z-50 relative">

      {/* ── TOP UTILITY BAR ──────────────────────────────────── */}
      <div
        className="hidden lg:block"
        style={{ background: 'var(--color-brand-navy)' }}
      >
        <div className="ds-container">
          <div
            className="flex items-center justify-between"
            style={{ height: '40px' }}
          >
            {/* Contact links */}
            <div className="flex items-center gap-6">
              <a
                href="tel:+254729212254"
                className="flex items-center gap-1.5 text-white/75 hover:text-white transition-colors"
                style={{ fontSize: '0.8125rem' }}
              >
                <svg className="w-3.5 h-3.5 text-[var(--color-brand-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +254 729 212 254
              </a>
              <a
                href="mailto:info@dabeckslaundry.com"
                className="flex items-center gap-1.5 text-white/75 hover:text-white transition-colors"
                style={{ fontSize: '0.8125rem' }}
              >
                <svg className="w-3.5 h-3.5 text-[var(--color-brand-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@dabeckslaundry.com
              </a>
            </div>
            {/* Location */}
            <span className="flex items-center gap-1.5 text-white/60" style={{ fontSize: '0.8125rem' }}>
              <svg className="w-3.5 h-3.5 text-[var(--color-brand-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Nairobi, Kenya — East Africa
            </span>
          </div>
        </div>
      </div>

      {/* ── MAIN HEADER ──────────────────────────────────────── */}
      <div className="bg-white border-b border-[var(--color-border)]">
        <div className="ds-container">
          <div className="flex items-center justify-between" style={{ height: '100px' }}>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Dabecks home">
              <Image
                src="/logo.png"
                alt="Dabecks"
                height={90}
                width={220}
                className="object-contain"
                style={{ height: '90px', width: 'auto' }}
                priority
                quality={100}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                if ('key' in link && link.key) {
                  const key = link.key;
                  const data = sol[key];
                  return (
                    <div
                      key={key}
                      className="relative"
                      onMouseEnter={() => openDropdown(key)}
                      onMouseLeave={closeDropdown}
                    >
                      <button
                        className="flex items-center gap-1 px-3 py-2 transition-colors rounded-sm"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          color: activeDropdown === key
                            ? 'var(--color-brand-navy)'
                            : 'var(--color-neutral-700)',
                        }}
                        aria-expanded={activeDropdown === key}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <svg
                          className="w-3.5 h-3.5 transition-transform"
                          style={{ transform: activeDropdown === key ? 'rotate(180deg)' : 'none' }}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown */}
                      {activeDropdown === key && (
                        <div
                          className="absolute top-full left-0 bg-white border border-[var(--color-border)] shadow-lg pt-3 pb-3 z-50"
                          style={{ minWidth: '220px' }}
                          onMouseEnter={keepOpen}
                          onMouseLeave={closeDropdown}
                        >
                          {/* Category header link */}
                          <Link
                            href={data.href}
                            className="flex items-center gap-2 px-5 py-2.5 mb-1 border-b border-[var(--color-border)]"
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: 'var(--color-brand-cyan)',
                            }}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {data.label}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          {/* Sub-items */}
                          {data.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-5 py-2 hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-navy)] transition-colors"
                              style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.875rem',
                                fontWeight: 400,
                                color: 'var(--color-neutral-700)',
                              }}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                /* Plain link */
                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="px-3 py-2 rounded-sm transition-colors hover:text-[var(--color-brand-navy)]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'var(--color-neutral-700)',
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex ds-btn ds-btn-primary ds-btn-sm"
              >
                Get a Quote
              </Link>
              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-sm text-[var(--color-neutral-700)] hover:text-[var(--color-brand-navy)] hover:bg-[var(--color-surface)] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE DRAWER ────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-white border-t border-[var(--color-border)]"
          style={{ boxShadow: 'var(--shadow-lg)' }}
        >
          <div className="ds-container py-4 space-y-1">
            {navLinks.map((link) => {
              if ('key' in link && link.key) {
                const key = link.key;
                const data = sol[key];
                const isExpanded = mobileExpanded === key;
                return (
                  <div key={key}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 rounded-sm hover:bg-[var(--color-surface)] transition-colors"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: 'var(--color-neutral-800)',
                      }}
                      onClick={() => setMobileExpanded(isExpanded ? null : key)}
                      aria-expanded={isExpanded}
                    >
                      {link.label}
                      <svg
                        className="w-4 h-4 transition-transform"
                        style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', color: 'var(--color-brand-cyan)' }}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <div className="ml-4 mt-1 mb-2 border-l-2 border-[var(--color-brand-cyan)] pl-3 space-y-1">
                        <Link
                          href={data.href}
                          className="block py-1.5"
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--color-brand-cyan)',
                          }}
                          onClick={() => setMobileOpen(false)}
                        >
                          All {data.label} →
                        </Link>
                        {data.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-1.5 hover:text-[var(--color-brand-navy)] transition-colors"
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.9375rem',
                              color: 'var(--color-neutral-600)',
                            }}
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="block px-3 py-3 rounded-sm hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-navy)] transition-colors"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--color-neutral-800)',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-3 border-t border-[var(--color-border)] mt-3">
              <Link
                href="/contact"
                className="ds-btn ds-btn-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
