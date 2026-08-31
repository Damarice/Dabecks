'use client';

import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const CompanyClientsLogos = [
  { name: 'NAS Servair', category: 'Hospitality' },
  { name: 'Radisson Blu', category: 'Hospitality' },
  { name: 'Safari Park Hotel', category: 'Hospitality' },
  { name: 'Kenya Defence Forces', category: 'Public Sector' },
  { name: 'JKUAT', category: 'Education' },
  { name: 'Utalii College', category: 'Hospitality' },
  { name: 'Catholic University EA', category: 'Education' },
  { name: 'Valley Hospital', category: 'Healthcare' },
];

const TimelineItems = [
  { year: '2011', title: 'Founded', desc: 'Established in Kenya as an electrical and mechanical service provider catering to local commercial setups.' },
  { year: '2014', title: 'Incorporated', desc: 'Formally incorporated as a Limited company, expanding into direct equipment sourcing for high-capacity laundries and kitchens.' },
  { year: '2017', title: 'Electrolux Partnership', desc: 'Appointed as an authorized sales and service partner for Electrolux Professional in Kenya.' },
  { year: '2021', title: 'Alliance Expansion', desc: 'Expanded regional utility solutions by partnering with Alliance Laundry Systems (Speed Queen, Primus, UniMac).' },
  { year: '2024', title: 'Milnor Dealership', desc: 'Secured official dealership for Pellerin Milnor Corporation & Chicago Dryer, solidifying leadership in heavy-duty industrial laundries.' },
];

const SupportTabsContent = {
  'after-sales': 'Equipment uptime is vital to your business. Our certified Nairobi-based technicians provide round-the-clock maintenance, emergency repairs, and rapid dispatch of genuine spare parts to minimize operational downtime.',
  'consultancy': 'We partner with architects, engineers, and project managers from day one. Our utility audits assess power, steam, water, and spatial constraints to optimize workflow safety and reduce long-term operational costs.',
};

const CapabilitiesCards = [
  { title: 'Commercial Laundry Systems', desc: 'Supply, installation, and servicing of heavy-duty washer extractors, tumble dryers, and flatwork ironers.', link: 'Explore Laundry Equipment →', href: '/solutions/laundry' },
  { title: 'Commercial Kitchen Systems', desc: 'End-to-end commercial kitchen setups including prime cooking equipment, refrigeration, dishwashers, and custom stainless steel fabrication.', link: 'Explore Kitchen Solutions →', href: '/solutions/kitchen' },
  { title: 'Air Conditioning & HVAC', desc: 'Energy-efficient cooling solutions—from split units to advanced VRF/VRV systems—tailored for commercial offices, hotels, and medical facilities.', link: 'Explore HVAC Systems →', href: '/solutions/air-conditioning' },
  { title: 'Spare Parts & Maintenance', desc: 'Direct access to OEM spare parts and customized preventative maintenance agreements to guarantee maximum machinery lifespan.', link: 'Request Maintenance →', href: '/contact' },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('after-sales');
  const [expandedTimeline, setExpandedTimeline] = useState(0);
  const [filterCategory, setFilterCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Observer for animated counters
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsInView(true);
      }
    }, { threshold: 0.5 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredClients = filterCategory === 'All' 
    ? CompanyClientsLogos 
    : CompanyClientsLogos.filter(c => c.category === filterCategory);

  const categories = ['All', ...new Set(CompanyClientsLogos.map(c => c.category))];

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'About' }]} />

      {/* ── HERO ── */}
      <section
        className="relative text-white py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url("/hero-about.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#1a3a8f]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="text-white font-black text-4xl md:text-6xl leading-tight">About Us</h1>
          <p className="text-white/80 text-lg md:text-xl mt-4 max-w-2xl">Delivering world-class commercial solutions across Kenya and East Africa since 2011</p>
        </div>
      </section>

      {/* ── SECTION 1: OUR COMPANY (#our-company) ── */}
      <section id="our-company" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mb-4 md:mb-6 leading-tight">Our Company</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Founded in 2011 and incorporated in 2014, Dabecks Laundry & Kitchen Solutions Limited is Kenya's trusted utility and mechanical partner. We specialize in high-performance equipment sourcing, custom layout planning, professional installation, and lifelong technical support for commercial setups.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative group">
              <img
                src="/hero-kitchen.jpg"
                alt="Commercial kitchen installation"
                className="w-full h-64 md:h-80 object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-[#00b4d8] text-white px-4 py-3 shadow-lg">
                <div className="font-black text-lg">13+ Years</div>
                <div className="text-sm font-semibold">Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: OUR JOURNEY (#our-journey) ── */}
      <section id="our-journey" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left: Image with Stat Card */}
            <div className="relative">
              <img
                src="/hero-laundry.jpg"
                alt="Dabecks installation team"
                className="w-full h-64 md:h-full object-cover shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white text-[#1a3a8f] px-4 py-3 shadow-lg border-l-4 border-[#00b4d8]">
                <div className="font-black text-xl">100+</div>
                <div className="text-sm font-semibold">Completed Projects</div>
              </div>
            </div>

            {/* Right: Expandable Accordion */}
            <div>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mb-6 md:mb-8 leading-tight">Our Journey</h2>

              <div className="space-y-3">
                {TimelineItems.map((item, idx) => (
                  <div key={idx} className="border border-gray-200 bg-white overflow-hidden">
                    <button
                      onClick={() => setExpandedTimeline(expandedTimeline === idx ? -1 : idx)}
                      className="w-full p-4 md:p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-[#1a3a8f] text-white font-black text-sm px-3 py-1 min-w-fit">
                          {item.year}
                        </div>
                        <h3 className="font-black text-[#1a3a8f] text-base md:text-lg text-left">{item.title}</h3>
                      </div>
                      <div className={`text-[#00b4d8] text-xl transition-transform flex-shrink-0 ml-2 ${expandedTimeline === idx ? 'rotate-180' : ''}`}>
                        ▼
                      </div>
                    </button>
                    {expandedTimeline === idx && (
                      <div className="px-4 md:px-5 pb-4 md:pb-5 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CLIENT PARTNERS (#client-partners) ── */}
      <section id="client-partners" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-10">
            <div className="flex items-center gap-4">
              <div className="bg-[#00b4d8] text-white font-black px-4 py-2 text-base">Trusted By</div>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl">Our Clients</h2>
            </div>
          </div>

          {/* Client Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {CompanyClientsLogos.map((client, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-4 border border-gray-200 hover:shadow-lg hover:border-[#00b4d8] transition-all duration-300 flex items-center justify-center h-28"
              >
                <div className="text-center">
                  <p className="font-black text-[#1a3a8f] text-base leading-snug">{client.name}</p>
                  <p className="text-[#00b4d8] text-sm font-bold mt-1">{client.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link href="/clients" className="inline-flex items-center gap-2 text-[#1a3a8f] font-bold text-base hover:text-[#00b4d8] transition-colors">
              View All Clients →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CORE CAPABILITIES (#core-capabilities) ── */}
      <section id="core-capabilities" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-10">
            <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl">Core Capabilities</h2>
          </div>

          {/* 4-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CapabilitiesCards.map((card, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white p-5 md:p-6 border border-gray-200 transition-all duration-300 ${
                  hoveredCard === idx ? 'shadow-lg -translate-y-1 border-[#00b4d8]' : 'shadow-sm'
                }`}
              >
                <h3 className="text-[#1a3a8f] font-black text-base md:text-lg mb-3">{card.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed mb-4">{card.desc}</p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-[#00b4d8] font-bold text-base hover:text-[#1a3a8f] transition-colors"
                >
                  {card.link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ANIMATED STAT COUNTER ── */}
      <section ref={statsRef} className="py-12 md:py-20 bg-[#1a3a8f] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: 13, suffix: '+', label: 'Years in Business' },
              { value: 100, suffix: '+', label: 'Projects Delivered' },
              { value: 5, suffix: '+', label: 'Brand Dealerships' },
              { value: 100, suffix: '%', label: 'Kenyan Owned' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-6xl font-black text-[#00b4d8] mb-2">
                  {statsInView ? <AnimatedCounter from={0} to={stat.value} /> : 0}{stat.suffix}
                </div>
                <p className="text-white/80 text-base md:text-lg font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ backgroundImage: 'url("/hero-about.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">Ready to Upgrade Your Facility?</h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                Our Nairobi-based team is ready to assist with laundry, kitchen, or HVAC solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#1a3a8f] text-white font-bold px-8 py-4 text-base uppercase tracking-wide hover:bg-white hover:text-[#1a3a8f] transition-colors"
              >
                Request Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href="tel:+254729212254"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a3a8f] font-bold px-8 py-4 text-base uppercase tracking-wide hover:bg-[#1a3a8f] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +254 729 212 254
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL: Quote Request Form ── */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#1a3a8f] font-black text-2xl">Free Consultation Request</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-gray-900 text-2xl"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#00b4d8] outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#00b4d8] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#00b4d8] outline-none"
              />
              <select className="w-full px-4 py-3 border border-gray-300 focus:border-[#00b4d8] outline-none">
                <option>Select Service</option>
                <option>Laundry Systems</option>
                <option>Kitchen Systems</option>
                <option>HVAC Systems</option>
                <option>Consultancy</option>
              </select>
              <textarea
                placeholder="Project Details"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#00b4d8] outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#00b4d8] text-white font-bold py-4 uppercase tracking-wide hover:bg-[#0099bb] transition-colors"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Animated Counter Component
function AnimatedCounter({ from, to }: { from: number; to: number }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (count < to) {
      interval = setInterval(() => {
        setCount(prev => {
          const increment = Math.ceil((to - prev) / 10);
          return Math.min(prev + increment, to);
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [count, to]);

  return <>{count}</>;
}
