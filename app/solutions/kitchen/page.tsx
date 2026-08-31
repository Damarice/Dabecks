import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

const equipment = [
  {
    title: 'Commercial Ovens',
    desc: 'Combi ovens, convection ovens, and deck ovens for high-volume baking and roasting.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM2 12h20M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      </svg>
    ),
  },
  {
    title: 'Cooking Ranges',
    desc: 'Heavy-duty multi-burner ranges for high-output professional kitchen environments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
  },
  {
    title: 'Fryers',
    desc: 'Industrial deep fryers with precise temperature control and built-in safety systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Grills & Griddles',
    desc: 'Professional contact grills and flat griddles for restaurants and catering operations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      </svg>
    ),
  },
  {
    title: 'Dishwashers',
    desc: 'High-capacity hood-type and conveyor dishwashers for efficient warewashing at scale.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
  },
  {
    title: 'Refrigeration',
    desc: 'Reach-in units, under-counter fridges, and custom cold rooms for food storage and preservation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const services = [
  { title: 'Kitchen Design & Layout', desc: 'We plan optimised workflows, utility routes, and equipment placement from the ground up.' },
  { title: 'Supply & Installation', desc: 'Full supply of equipment and professional installation by certified technicians.' },
  { title: 'After-Sales & Maintenance', desc: 'Genuine spare parts, preventive maintenance contracts, and rapid breakdown response.' },
];

const brands = ['Electrolux Professional', 'Zanussi Professional'];

export default function KitchenSolutions() {
  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems' }]} />

      {/* ── HERO ── */}
      <section
        className="relative text-white py-24 md:py-32 overflow-hidden"
        style={{ backgroundImage: 'url("/hero-kitchen.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#1a3a8f]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Solutions</span>
          <h1 className="text-white font-black text-4xl md:text-5xl mt-3 mb-4 leading-tight">Kitchen Systems</h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
            Complete commercial kitchen solutions — from single appliances to fully fitted facilities.
          </p>
        </div>
      </section>

      {/* ── INTRO + IMAGE ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Overview</span>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 mb-6 leading-tight">Complete Kitchen Solutions</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                From single appliances to fully fitted commercial kitchens, Dabecks designs, supplies, and installs kitchen systems for hotels, restaurants, hospitals, and institutions across East Africa.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                As an authorised Electrolux Professional dealer, we back every installation with expert commissioning, staff training, and a dedicated after-sales team.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1a3a8f] text-white font-bold px-7 py-4 text-base uppercase tracking-wide hover:bg-[#00b4d8] transition-colors">
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img src="/hero-kitchen.jpg" alt="Commercial kitchen" className="w-full h-64 md:h-[460px] object-cover" />
              <div className="absolute bottom-0 left-0 bg-[#00b4d8] text-white px-6 py-5">
                <div className="font-black text-3xl md:text-4xl leading-none">100+</div>
                <div className="text-sm md:text-base font-semibold mt-1">Kitchens Installed</div>
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
              <div key={i} className="bg-white p-6 md:p-8 group hover:bg-gray-50 transition-colors relative">
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
        style={{ backgroundImage: 'url("/hero-kitchen.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">Ready to Equip Your Kitchen?</h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                Talk to our team for a free consultation and kitchen design service.
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
