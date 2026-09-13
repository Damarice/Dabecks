import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Solutions' }]} />

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
        <div className="absolute inset-0 bg-[#1a3a8f]/70" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-4">What We Offer</p>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">Our Solutions</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto">
            Professional equipment and services for laundry, kitchen, and air conditioning — tailored for commercial and industrial operations.
          </p>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Laundry Equipment',
              desc: 'Commercial washers, industrial dryers, ironers, and laundry accessories for hotels, hospitals, and large-scale operations.',
              href: '/solutions/laundry',
              image: '/hero-laundry.jpg',
              items: ['Commercial Washers', 'Industrial Dryers', 'Ironers & Presses', 'Washer Extractors'],
            },
            {
              title: 'Kitchen Systems',
              desc: 'Professional kitchen equipment including ovens, fryers, steamers, and dishwashers for commercial food service.',
              href: '/solutions/kitchen',
              image: '/hero-kitchen.jpg',
              items: ['Commercial Ovens', 'Fryers', 'Dishwashers', 'Cooking Ranges'],
            },
            {
              title: 'Air Conditioning',
              desc: 'Complete HVAC solutions including split units, VRF/VRV systems, and ducted systems for commercial buildings.',
              href: '/solutions/air-conditioning',
              image: '/hero-ac.jpg',
              items: ['Split Units', 'VRF/VRV Systems', 'Ducted Systems', 'Cassette Units'],
            },
          ].map((s, i) => (
            <Link key={i} href={s.href} className="group block border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-56 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#1a3a8f]/50 group-hover:bg-[#1a3a8f]/40 transition-colors" />
                <h2 className="absolute bottom-4 left-6 text-white text-3xl font-black">{s.title}</h2>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-700 text-base leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-bold text-[#1a3a8f] uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 bg-[#00b4d8] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-block bg-[#1a3a8f] text-white text-sm font-bold uppercase tracking-widest px-6 py-3 group-hover:bg-[#00b4d8] transition-colors">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
