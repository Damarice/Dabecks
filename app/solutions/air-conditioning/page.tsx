import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function AirConditioningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Air Conditioning' },
      ]} />

      {/* ── HERO ── */}
      <section
        className="relative text-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-ac.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px',
        }}
      >
        <div className="absolute inset-0 bg-[#1a3a8f]/65" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-4">Solutions</p>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">Air Conditioning</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto">
            Complete HVAC solutions for commercial and industrial buildings across East Africa.
          </p>
        </div>
      </section>

      {/* ── SUBPAGES GRID ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-3">Our AC Range</h2>
          <div className="w-12 h-1 bg-[#00b4d8]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { label: 'Split Units', href: '/solutions/air-conditioning/split-units', desc: 'Wall-mounted split AC units for individual spaces.' },
            { label: 'VRF/VRV Systems', href: '/solutions/air-conditioning/vrf-vrv-systems', desc: 'Variable refrigerant flow systems for large buildings.' },
            { label: 'Ducted Systems', href: '/solutions/air-conditioning/ducted-systems', desc: 'Central ducted air conditioning for large spaces.' },
            { label: 'Cassette Units', href: '/solutions/air-conditioning/cassette-units', desc: 'Ceiling cassette units for even air distribution.' },
            { label: 'Installation Services', href: '/solutions/air-conditioning/installation-services', desc: 'Professional AC installation and commissioning.' },
            { label: 'Maintenance & Repair', href: '/solutions/air-conditioning/maintenance-repair', desc: 'Ongoing maintenance, servicing, and repair.' },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group block border border-gray-200 p-8 hover:border-[#1a3a8f] hover:shadow-lg transition-all"
            >
              <div className="w-8 h-1 bg-[#00b4d8] mb-6 group-hover:w-12 transition-all duration-300" />
              <h3 className="text-2xl font-black text-[#1a3a8f] mb-3 group-hover:text-[#00b4d8] transition-colors">{item.label}</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">{item.desc}</p>
              <span className="text-sm font-bold uppercase tracking-widest text-[#1a3a8f] group-hover:text-[#00b4d8] transition-colors">
                View Products →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
