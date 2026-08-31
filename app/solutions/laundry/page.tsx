import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

const equipment = [
  {
    title: 'Washer Extractors',
    desc: 'High-spin industrial washer-extractors for hotels, hospitals, and large-volume laundry operations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Tumble Dryers',
    desc: 'High-capacity gas and electric tumble dryers with programmable cycles for consistent throughput.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13l-.866.5M4.206 18.5l-.866.5M20.66 18.5l-.866-.5M4.206 5.5l-.866-.5M21 12h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
      </svg>
    ),
  },
  {
    title: 'Flatwork Ironers',
    desc: 'Automated chest and roller ironers for sheets, tablecloths, and large linen items.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M10 3v18M14 3v18" />
      </svg>
    ),
  },
  {
    title: 'Tunnel Washers',
    desc: 'Continuous batch tunnel washers for very high-volume industrial laundry facilities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: 'Folder & Feeders',
    desc: 'Automatic linen folders and sheet feeders for fast, accurate finishing of flatwork.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
  },
  {
    title: 'Coin-Operated Systems',
    desc: 'Self-service coin and card-operated laundry machines for laundromats and shared facilities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const services = [
  { title: 'Supply & Installation', desc: 'Full supply and professional installation by our certified laundry technicians.' },
  { title: 'Spare Parts', desc: 'Direct access to genuine OEM spare parts for all brands we represent.' },
  { title: 'Maintenance Contracts', desc: 'Preventive maintenance agreements to keep your equipment running at peak performance.' },
];

const brands = ['Alliance Laundry Systems', 'Speed Queen', 'Primus', 'UniMac', 'Huebsch', 'Pellerin Milnor', 'Chicago Dryer', 'IPSO'];

export default function LaundrySolutions() {
  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Laundry Equipment' }]} />

      {/* ── HERO ── */}
      <section
        className="relative text-white py-24 md:py-32 overflow-hidden"
        style={{ backgroundImage: 'url("/hero-laundry.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#1a3a8f]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Solutions</span>
          <h1 className="text-white font-black text-4xl md:text-5xl mt-3 mb-4 leading-tight">Laundry Equipment</h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
            High-capacity commercial laundry solutions for hotels, hospitals, institutions, and laundromats.
          </p>
        </div>
      </section>

      {/* ── INTRO + IMAGE ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Overview</span>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 mb-6 leading-tight">Professional Laundry Systems</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                Dabecks supplies and installs high-performance commercial laundry equipment for hotels, hospitals, schools, and laundromats across East Africa.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                As an authorised dealer for Alliance Laundry Systems, Milnor, and Chicago Dryer, we provide world-class equipment backed by genuine parts and expert technical support.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1a3a8f] text-white font-bold px-7 py-4 text-base uppercase tracking-wide hover:bg-[#00b4d8] transition-colors">
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img src="/hero-laundry.jpg" alt="Commercial laundry equipment" className="w-full h-64 md:h-[460px] object-cover" />
              <div className="absolute bottom-0 left-0 bg-[#00b4d8] text-white px-6 py-5">
                <div className="font-black text-3xl md:text-4xl leading-none">100+</div>
                <div className="text-sm md:text-base font-semibold mt-1">Laundries Installed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT GRID ── */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-10 md:mb-14">
            <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Range</span>
            <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 leading-tight">Equipment We Supply</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {equipment.map(({ title, desc, icon }) => (
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
        style={{ backgroundImage: 'url("/hero-laundry.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">Ready to Upgrade Your Laundry?</h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                Contact our team for a free consultation and equipment recommendation.
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
