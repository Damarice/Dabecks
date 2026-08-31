import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

const systems = [
  {
    title: 'Split Units',
    desc: 'Versatile wall-mounted split systems for individual room cooling — ideal for offices and guest rooms.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'VRF / VRV Systems',
    desc: 'Variable refrigerant flow systems for large multi-zone buildings — flexible, efficient, and independently controlled.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Ducted Systems',
    desc: 'Concealed central ducted air conditioning delivering uniform cooling across large open spaces.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: 'Cassette Units',
    desc: 'Ceiling-mounted cassette units for even four-way air distribution in open-plan commercial spaces.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

const services = [
  { title: 'Design & Sizing', desc: 'We assess your space and load requirements to specify the right system capacity and configuration.' },
  { title: 'Supply & Installation', desc: 'Full supply and professional installation by certified HVAC technicians.' },
  { title: 'Maintenance & Repair', desc: 'Preventive maintenance contracts and rapid-response breakdown service to minimise downtime.' },
];

const brands = ['SIRAIR'];

export default function AirConditioningSolutions() {
  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning' }]} />

      {/* ── HERO ── */}
      <section
        className="relative text-white py-24 md:py-32 overflow-hidden"
        style={{ backgroundImage: 'url("/hero-ac.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#1a3a8f]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Solutions</span>
          <h1 className="text-white font-black text-4xl md:text-5xl mt-3 mb-4 leading-tight">Air Conditioning</h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
            Energy-efficient commercial cooling systems for offices, hotels, hospitals, and institutions.
          </p>
        </div>
      </section>

      {/* ── INTRO + IMAGE ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Overview</span>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 mb-6 leading-tight">Commercial Cooling Systems</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                Dabecks designs, supplies, and installs air conditioning systems for hotels, offices, hospitals, and institutions across East Africa.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                As an authorised SIRAIR dealer, we offer a full range of cooling solutions — from single split units to complex multi-zone VRF systems — with full installation and ongoing maintenance support.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1a3a8f] text-white font-bold px-7 py-4 text-base uppercase tracking-wide hover:bg-[#00b4d8] transition-colors">
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img src="/hero-ac.jpg" alt="Air conditioning systems" className="w-full h-64 md:h-[460px] object-cover" />
              <div className="absolute bottom-0 left-0 bg-[#00b4d8] text-white px-6 py-5">
                <div className="font-black text-3xl md:text-4xl leading-none">East Africa</div>
                <div className="text-sm md:text-base font-semibold mt-1">Coverage Region</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SYSTEMS GRID ── */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-10 md:mb-14">
            <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Range</span>
            <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 leading-tight">Systems We Install</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {systems.map(({ title, desc, icon }) => (
              <div key={title} className="bg-white p-6 md:p-8 hover:bg-[#1a3a8f] transition-colors group">
                <div className="text-[#00b4d8] mb-5 group-hover:text-white transition-colors">
                  {icon}
                </div>
                <h3 className="font-black text-[#1a3a8f] text-base md:text-lg mb-3 group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-white/75 transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-10 md:mb-14">
            <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 leading-tight">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {services.map(({ title, desc }, i) => (
              <div key={i} className="bg-white p-6 md:p-8 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-1 bg-[#00b4d8] mb-6" />
                <h3 className="font-black text-[#1a3a8f] text-base md:text-lg mb-3">{title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-10">
            <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Authorised Dealer</span>
            <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 leading-tight">Partner Brands</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-gray-200">
            {brands.map((brand) => (
              <div key={brand} className="bg-white flex items-center justify-center py-8 px-6 hover:bg-[#1a3a8f] transition-colors group min-h-[90px]">
                <span className="text-[#1a3a8f] font-black text-sm md:text-base text-center leading-snug group-hover:text-white transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ backgroundImage: 'url("/hero-ac.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">Need a Cooling Solution?</h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                Talk to our team for a free site assessment and system recommendation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#1a3a8f] text-white font-bold px-8 py-4 text-base uppercase tracking-wide hover:bg-white hover:text-[#1a3a8f] transition-colors">
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="tel:+254729212254" className="inline-flex items-center justify-center gap-2 bg-white text-[#1a3a8f] font-bold px-8 py-4 text-base uppercase tracking-wide hover:bg-[#1a3a8f] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +254 729 212 254
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
