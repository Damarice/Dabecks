'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
  };

  const menuItems = {
    laundry: {
      title: 'Laundry Equipment',
      subpages: [
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
      ],
      href: '/solutions/laundry',
    },
    kitchen: {
      title: 'Kitchen Systems',
      subpages: [
        { label: 'Commercial Ovens', href: '/solutions/kitchen/commercial-ovens' },
        { label: 'Fryers', href: '/solutions/kitchen/fryers' },
        { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' },
        { label: 'Steamers', href: '/solutions/kitchen/steamers' },
        { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges' },
        { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' },
      ],
      href: '/solutions/kitchen',
    },
    ac: {
      title: 'Air Conditioning',
      subpages: [
        { label: 'Split Units', href: '/solutions/air-conditioning/split-units' },
        { label: 'VRF/VRV Systems', href: '/solutions/air-conditioning/vrf-vrv-systems' },
        { label: 'Ducted Systems', href: '/solutions/air-conditioning/ducted-systems' },
        { label: 'Cassette Units', href: '/solutions/air-conditioning/cassette-units' },
        { label: 'Installation Services', href: '/solutions/air-conditioning/installation-services' },
        { label: 'Maintenance & Repair', href: '/solutions/air-conditioning/maintenance-repair' },
      ],
      href: '/solutions/air-conditioning',
    },
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { label: 'Laundry Equipment', key: 'laundry' },
    { label: 'Kitchen Systems', key: 'kitchen' },
    { label: 'Air Conditioning', key: 'ac' },
    { href: '/solutions/consultancy', label: 'Consultancy' },
    { href: '/about', label: 'About' },
    { href: '/clients', label: 'Clients' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ];

  const activeData = activeMenu ? menuItems[activeMenu as keyof typeof menuItems] : null;

  return (
    <nav className="w-full">
      {/* ── TOP BAR ── */}
      <div className="bg-[#1a3a8f] text-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 h-10 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:info@dabeckslaundry.com" className="flex items-center gap-2 hover:text-[#00b4d8] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@dabeckslaundry.com
            </a>
            <a href="tel:+254729212254" className="flex items-center gap-2 hover:text-[#00b4d8] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +254 729 212 254
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            East Africa
          </div>
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Hamburger Menu Button - Left */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-[#1a3a8f] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/small logo.jpg" alt="Dabecks" className="h-16 w-auto object-contain" />
          </Link>

          {/* Search Icon - Right */}
          <button className="text-gray-700 hover:text-[#1a3a8f] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── MENU (All Screens) ── */}
      {isOpen && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
            {navLinks.map((link, idx) =>
              link.key ? (
                <div key={idx}>
                  <button
                    onClick={() => setActiveMenu(activeMenu === link.key ? null : link.key!)}
                    className="w-full flex items-center justify-between px-4 py-3 font-bold text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${activeMenu === link.key ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>

                  {activeMenu === link.key && (
                    <div className="bg-gray-50 rounded ml-4">
                      {menuItems[link.key as keyof typeof menuItems].subpages.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="block px-4 py-2 font-bold text-gray-600 hover:text-[#1a3a8f] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  href={link.href!}
                  className="block px-4 py-3 font-bold text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
