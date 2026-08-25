'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const reasons = [
  {
    number: '15+',
    unit: 'years',
    label: 'of Equipment Experience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '',
    unit: '',
    label: 'Better Prices thanks to Low Operating Cost',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '',
    unit: '',
    label: 'Secure Purchase and Fast Delivery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    number: '',
    unit: '',
    label: 'Quality Brands with Proven Performance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
  {
    number: '100+',
    unit: '',
    label: 'Clients Across East Africa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showReasons, setShowReasons] = useState(false);
  const [reasonsTop, setReasonsTop] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reasonsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const openMenu = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const openReasons = () => {
    if (reasonsTimeoutRef.current) clearTimeout(reasonsTimeoutRef.current);
    if (badgeRef.current) {
      const rect = badgeRef.current.getBoundingClientRect();
      setReasonsTop(rect.bottom);
    }
    setShowReasons(true);
  };

  const closeReasons = () => {
    reasonsTimeoutRef.current = setTimeout(() => setShowReasons(false), 150);
  };

  const menuItems = {
    laundry: {
      title: 'Laundry Equipment',
      items: [
        'Commercial Washers',
        'Industrial Dryers',
        'Ironers & Presses',
        'Folding Equipment',
        'Laundry Accessories',
        'Washer Extractors',
        'Tumble Dryers',
        'Flatwork Ironers',
      ],
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=400&fit=crop',
      href: '/solutions/laundry',
    },
    kitchen: {
      title: 'Kitchen Systems',
      items: [
        'Commercial Ovens',
        'Fryers',
        'Dishwashers',
        'Steamers',
        'Food Preparation Equipment',
        'Cooking Ranges',
        'Grills & Griddles',
        'Kitchen Accessories',
      ],
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=400&fit=crop',
      href: '/solutions/kitchen',
    },
    ac: {
      title: 'Air Conditioning',
      items: [
        'Split Units',
        'VRF/VRV Systems',
        'Ducted Systems',
        'Cassette Units',
        'Installation Services',
        'Maintenance & Repair',
      ],
      image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&h=400&fit=crop',
      href: '/solutions/air-conditioning',
    },
  };

  const activeData = activeMenu ? menuItems[activeMenu as keyof typeof menuItems] : null;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/solutions/laundry', label: 'Laundry Equipment', key: 'laundry' },
    { href: '/solutions/kitchen', label: 'Kitchen Systems', key: 'kitchen' },
    { href: '/solutions/air-conditioning', label: 'Air Conditioning', key: 'ac' },
    { href: '/solutions/consultancy', label: 'Consultancy' },
    { href: '/about', label: 'About' },
    { href: '/clients', label: 'Clients' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white w-full">

      {/* ── TOP BAR ── */}
      <div className="bg-gray-100 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-10 text-sm">
            {/* Left: email + phone */}
            <div className="hidden sm:flex items-center gap-4 text-gray-600">
              <a href="mailto:info@dabeckslaundry.com" className="hover:text-[#1a3a8f] transition-colors flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@dabeckslaundry.com
              </a>
              <span className="text-gray-300">|</span>
              <a href="tel:+254729212254" className="hover:text-[#1a3a8f] transition-colors flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +254 729 212 254
              </a>
            </div>
            {/* Mobile: phone only */}
            <a href="tel:+254729212254" className="sm:hidden text-gray-600 hover:text-[#1a3a8f] flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +254 729 212 254
            </a>
            {/* Right: CTA button */}
            <Link
              href="/contact"
              className="bg-[#1a3a8f] text-white px-4 py-1.5 rounded-full hover:bg-[#00b4d8] transition-colors font-medium uppercase tracking-wide text-sm"
            >
              Message Us
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 py-4">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Dabecks"
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* Middle section: takes remaining space */}
            <div className="hidden md:flex flex-col flex-1 min-w-0 gap-2">

              {/* Row 1: Expert text + search bar */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <span className="font-bold text-gray-900 text-lg">Laundry & Kitchen</span>{' '}
                  <span className="font-normal text-gray-700 text-lg">Experts</span>
                </div>

                {/* Search bar — fills available space */}
                <div className="flex flex-1 items-stretch border border-[#1a3a8f] overflow-hidden h-9 min-w-0 mt-1">
                  <input
                    type="text"
                    placeholder="Search products, equipment, spare parts..."
                    className="flex-1 min-w-0 px-3 text-sm text-gray-700 outline-none bg-white"
                  />
                  <button className="bg-[#1a3a8f] hover:bg-[#00b4d8] transition-colors px-4 text-white flex items-center gap-1.5 flex-shrink-0 text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="hidden lg:inline">Search</span>
                  </button>
                </div>
              </div>

              {/* Row 2: 5 badge + "reasons" text */}
              <div className="flex items-center gap-2">
                {/* 5 badge with dropdown */}
                <div
                  className="relative flex-shrink-0"
                  ref={badgeRef}
                  onMouseEnter={openReasons}
                  onMouseLeave={closeReasons}
                >
                  <button className="bg-[#1a3a8f] text-white w-6 h-6 flex items-center justify-center text-sm font-bold hover:bg-[#00b4d8] transition-colors rounded-sm">
                    5
                  </button>
                  {/* Full-width reasons dropdown */}
                  {showReasons && (
                    <div
                      className="fixed left-0 right-0 z-[100]"
                      style={{ top: `${reasonsTop}px` }}
                      onMouseEnter={openReasons}
                      onMouseLeave={closeReasons}
                    >
                      <div className="bg-[#1a3a8f] text-white shadow-2xl w-full">
                        <div className="max-w-7xl mx-auto">
                          <div className="grid grid-cols-5 divide-x divide-white/20">
                            {reasons.map((r, i) => (
                              <div
                                key={i}
                                className="flex flex-col items-center justify-start py-6 px-4 text-center hover:bg-[#00b4d8] transition-colors cursor-default group"
                              >
                                <div className="text-[#00b4d8] group-hover:text-white transition-colors mb-3">
                                  {r.icon}
                                </div>
                                {r.number && (
                                  <div className="font-bold text-3xl text-white leading-tight">
                                    {r.number}
                                    {r.unit && <span className="block text-sm font-normal text-white/70">{r.unit}</span>}
                                  </div>
                                )}
                                <p className="text-sm text-white/80 group-hover:text-white leading-snug mt-1 max-w-[100px]">
                                  {r.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-sm text-gray-500">reasons to work with us</span>
              </div>
            </div>

            {/* Mobile: search icon + hamburger */}
            <div className="md:hidden flex items-center gap-3 ml-auto">
              <button className="text-[#1a3a8f]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#1a3a8f]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── DARK NAV BAR + MEGA MENU ── desktop only */}
      <div className="bg-[#1a3a8f] text-white hidden md:block" onMouseLeave={closeMenu}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center flex-wrap">
            {navLinks.map(({ href, label, key }) =>
              key ? (
                <button
                  key={key}
                  onMouseEnter={() => openMenu(key)}
                  className={`px-4 py-3.5 text-sm font-medium uppercase transition-colors border-r border-[#2a4fa8] whitespace-nowrap ${
                    activeMenu === key
                      ? 'bg-white text-[#1a3a8f]'
                      : 'text-white hover:bg-[#00b4d8] hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className="px-4 py-3.5 text-sm font-medium uppercase text-white hover:bg-[#00b4d8] transition-colors border-r border-[#2a4fa8] last:border-r-0 whitespace-nowrap"
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Full-width mega menu */}
        {activeData && (
          <div
            className="w-full bg-white text-gray-800 shadow-2xl border-t-4 border-[#00b4d8]"
            onMouseEnter={() => openMenu(activeMenu!)}
            onMouseLeave={closeMenu}
          >
            <div className="max-w-7xl mx-auto flex" style={{ minHeight: '300px' }}>
              {/* Left: links */}
              <div className="w-1/2 p-8">
                <h3 className="text-sm font-bold text-[#1a3a8f] uppercase mb-2 pb-3 border-b-2 border-[#00b4d8] inline-block">
                  {activeData.title}
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-4">
                  {activeData.items.map((item, index) => (
                    <Link
                      key={index}
                      href={`${activeData.href}#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center py-1.5 text-sm text-gray-700 hover:text-[#00b4d8] transition-colors group"
                      onClick={() => setActiveMenu(null)}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a8f] group-hover:bg-[#00b4d8] mr-2.5 flex-shrink-0 transition-colors" />
                      {item}
                    </Link>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href={activeData.href}
                    className="inline-flex items-center gap-2 bg-[#1a3a8f] text-white text-sm px-5 py-2.5 uppercase font-medium hover:bg-[#00b4d8] transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    View All {activeData.title}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* Right: image */}
              <div className="w-1/2 relative overflow-hidden">
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '300px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a8f]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl">{activeData.title}</p>
                  <p className="text-[#00b4d8] text-sm mt-1 font-medium">Professional solutions for your business</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── MOBILE MENU ── */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-4 border-[#00b4d8] shadow-lg">
          {/* Mobile search */}
          <div className="px-4 pt-4 pb-2">
            <div className="flex border-2 border-[#1a3a8f] overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-3 py-2 text-sm outline-none"
              />
              <button className="bg-[#1a3a8f] px-4 text-white hover:bg-[#00b4d8] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile nav links */}
          <div className="px-4 pb-4 space-y-0.5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-[#1a3a8f] hover:text-white border-b border-gray-100 last:border-0 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

