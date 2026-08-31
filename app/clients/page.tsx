import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

const clients = [
  { name: 'NAS Servair', sector: 'Aviation Catering' },
  { name: 'Radisson Blu Hotel', sector: 'Hospitality' },
  { name: 'Kenya Utalii College', sector: 'Education' },
  { name: 'Jomo Kenyatta University', sector: 'Education' },
  { name: 'Multimedia University', sector: 'Education' },
  { name: 'Catholic University of Eastern Africa', sector: 'Education' },
  { name: 'Nairobi Safari Club', sector: 'Hospitality' },
  { name: 'Safari Park Hotel & Casino', sector: 'Hospitality' },
  { name: 'Golf Hotel Kakamega', sector: 'Hospitality' },
  { name: 'Kenya Defence Forces', sector: 'Government' },
  { name: 'Valley Hospital', sector: 'Healthcare' },
];

export default function Clients() {
  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Clients' }]} />

      {/* ── HERO ── */}
      <section
        className="relative text-white py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url("/hero-clients.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#1a3a8f]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Who We Serve</span>
          <h1 className="text-white font-black text-4xl md:text-5xl mt-3 mb-4 leading-tight">Our Clients</h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
            Trusted by leading organisations across East Africa since 2011.
          </p>
        </div>
      </section>

      {/* ── CLIENT LIST ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Portfolio</span>
            <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 leading-tight">Featured Clients</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {clients.map((client, i) => (
              <div
                key={i}
                className="bg-white flex items-center justify-between px-6 py-5 hover:bg-[#1a3a8f] transition-colors group"
              >
                <span className="font-black text-[#1a3a8f] text-base md:text-lg group-hover:text-white transition-colors">
                  {client.name}
                </span>
                <span className="text-[#00b4d8] text-xs font-bold uppercase tracking-wide ml-4 flex-shrink-0 group-hover:text-white/70 transition-colors">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ backgroundImage: 'url("/hero-clients.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">Ready to Work With Us?</h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                Join our growing list of clients across East Africa.
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
