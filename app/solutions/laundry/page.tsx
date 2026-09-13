import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function LaundryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment' },
      ]} />

      {/* ── HERO ── */}
      <section
        className="relative text-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-laundry.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px',
        }}
      >
        <div className="absolute inset-0 bg-[#1a3a8f]/65" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-4">Solutions</p>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">Laundry Equipment</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto">
            High-performance commercial laundry equipment built for hotels, hospitals, and industrial operations.
          </p>
        </div>
      </section>

      {/* ── SUBPAGES GRID ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-3">Our Laundry Range</h2>
          <div className="w-12 h-1 bg-[#00b4d8]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers', desc: 'Front-load and barrier washers for high-volume commercial use.' },
            { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers', desc: 'High-capacity tumble dryers for fast, efficient drying.' },
            { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses', desc: 'Professional ironing and flatwork finishing equipment.' },
            { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors', desc: 'Heavy-duty washer extractors for industrial laundry.' },
            { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment', desc: 'Automated folding machines for linen and garments.' },
            { label: 'Laundry Accessories', href: '/solutions/laundry/accessories', desc: 'Carts, racks, detergents, and laundry system accessories.' },
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
