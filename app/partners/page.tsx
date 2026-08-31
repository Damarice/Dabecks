import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

const equipmentBrands = [
  'Alliance Laundry Systems',
  'Electrolux Professional',
  'Pellerin Milnor Corporation',
  'Chicago Dryer Company',
  'Speed Queen',
  'Primus',
  'UniMac',
  'Huebsch',
  'IPSO',
  'SIRAIR',
];

const dealerships = [
  {
    year: '2017',
    brand: 'Electrolux Professional',
    region: 'Kenya',
    desc: 'Formally appointed as the official Kenyan dealer for Electrolux Professional, covering their complete commercial kitchen and laundry equipment range.',
  },
  {
    year: '2021',
    brand: 'Alliance Laundry Systems',
    region: 'East Africa',
    desc: 'Expanded to become the authorised East Africa partner for Alliance Laundry Systems — representing Speed Queen, Primus, UniMac, and Huebsch brands across the region.',
  },
  {
    year: '2024',
    brand: 'Milnor & Chicago Dryer',
    region: 'East Africa',
    desc: 'Secured dealership rights for both Pellerin Milnor Corporation and Chicago Dryer Company, completing our heavy-duty industrial laundry portfolio for the East African market.',
  },
];

const servicePartners = [
  {
    name: 'Printech Media Limited',
    service: 'Design, Printing & Branding',
    desc: 'Corporate communications and branded collateral.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    name: 'NEXUS',
    service: 'ICT Solutions',
    desc: 'Technology infrastructure and IT support.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    name: 'ICS System Solutions',
    service: 'Accounting & Auditing',
    desc: 'Financial reporting and tax compliance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Partners() {
  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Partners' }]} />

      {/* ── HERO ── */}
      <section
        className="relative text-white py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url("/hero-partners.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#1a3a8f]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Ecosystem</span>
          <h1 className="text-white font-black text-4xl md:text-5xl mt-3 mb-4 leading-tight">Our Partners</h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
            We represent some of the world's most trusted commercial equipment brands, backed by formal dealership agreements, factory training, and genuine parts supply chains.
          </p>
        </div>
      </section>

      {/* ── BRAND PARTNER LOGOS ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-10 md:mb-14">
            <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Authorised Dealer</span>
            <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 leading-tight">Equipment Partner Brands</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-gray-200">
            {equipmentBrands.map((name, i) => (
              <div
                key={i}
                className="bg-white flex items-center justify-center py-8 px-6 hover:bg-[#1a3a8f] transition-colors group min-h-[100px]"
              >
                <span className="text-[#1a3a8f] font-black text-sm md:text-base text-center leading-snug group-hover:text-white transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHORISED DEALERSHIPS ── */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Left: heading + intro */}
            <div className="lg:sticky lg:top-8">
              <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Official Authorisations</span>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 mb-6 leading-tight">Key Dealerships</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Our dealership milestones mark years of trust, technical excellence, and demonstrated commitment — each one recognised and awarded by a global manufacturer.
              </p>
              <div className="bg-[#1a3a8f] text-white p-6 md:p-8">
                <div className="text-[#00b4d8] font-black text-4xl md:text-5xl leading-none mb-2">3</div>
                <div className="text-white font-bold text-base md:text-lg">Formal Dealerships</div>
                <div className="text-white/60 text-sm md:text-base mt-1">Spanning laundry, kitchen & HVAC</div>
              </div>
            </div>

            {/* Right: timeline items */}
            <div className="space-y-0 border-l-2 border-gray-200 pl-6 md:pl-8">
              {dealerships.map(({ year, brand, region, desc }, i) => (
                <div key={i} className="relative pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-[#00b4d8] border-4 border-white shadow-md" />

                  <div className="bg-white border border-gray-200 p-5 md:p-6 hover:border-[#00b4d8] hover:shadow-md transition-all group">
                    {/* Year */}
                    <div className="inline-block bg-[#1a3a8f] text-[#00b4d8] font-black text-sm px-4 py-1.5 mb-4">
                      {year}
                    </div>
                    <h3 className="font-black text-[#1a3a8f] text-base md:text-lg mb-1 group-hover:text-[#00b4d8] transition-colors">
                      {brand}
                    </h3>
                    <p className="text-[#00b4d8] text-xs font-bold uppercase tracking-widest mb-3">
                      Authorised Dealer — {region}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE ALLIANCES ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Local Alliances</span>
            <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 mb-4 leading-tight">Service Alliances</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
              Trusted local partners that support our day-to-day operations — from branding and technology to finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {servicePartners.map((p, i) => (
              <div key={i} className="bg-white p-6 md:p-8 hover:bg-gray-50 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1a3a8f] text-[#00b4d8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#00b4d8] group-hover:text-white transition-colors">
                    {p.icon}
                  </div>
                  <span className="text-[#00b4d8] text-xs font-bold uppercase tracking-widest">{p.service}</span>
                </div>
                <h3 className="font-black text-[#1a3a8f] text-base md:text-lg mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── background image, NOT navy ── */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url("/hero-consultancy.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="text-white/80 text-sm font-bold uppercase tracking-widest">Work With Us</span>
          <h2 className="text-white font-black text-3xl md:text-5xl mt-3 mb-4 leading-tight">
            Interested in a Partnership?
          </h2>
          <p className="text-white/85 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Whether you are a global brand seeking a trusted East Africa distributor, or a local company looking to collaborate — we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1a3a8f] text-white font-bold px-8 py-4 text-base uppercase tracking-wide hover:bg-white hover:text-[#1a3a8f] transition-colors"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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
      </section>

    </div>
  );
}
