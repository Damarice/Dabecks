import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function CommercialWashers() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers' },
      ]} />

      {/* ── HERO ── */}
      <section
        className="relative text-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-laundry.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '560px',
        }}
      >
        <div className="absolute inset-0 bg-[#1a3a8f]/65" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-4">Laundry Equipment</p>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">Commercial Washers</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
            Built for people and the planet. High-productivity front-load washers designed to make laundry operations safe, fast, and cost-controlled.
          </p>
          <a
            href="#products"
            className="inline-block mt-10 bg-[#00b4d8] text-white font-black text-sm uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-[#1a3a8f] transition-colors"
          >
            Go to Products
          </a>
        </div>
      </section>

      {/* ── INTRO / INFO SECTION ── */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Headline + intro text */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-3">
              Performance built for commercial laundry
            </h2>
            <div className="w-12 h-1 bg-[#00b4d8] mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commercial washer range combines cutting-edge technology with robust construction to deliver outstanding results across hotels, hospitals, guesthouses, and industrial laundry facilities. Every model is selected for its energy efficiency, reliability, and low cost of ownership.
            </p>
          </div>

          {/* 3 benefit columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: '⚡',
                title: 'Energy Savings',
                desc: 'Reduce your operational expenditure by up to 40% without compromising on productivity. Built-in technologies optimise water, energy, and detergent use automatically.',
              },
              {
                icon: '⚙️',
                title: 'Intuitive Operation',
                desc: 'Simple, programmable controls designed for effortless daily use. Operators require minimal training, reducing errors and improving throughput.',
              },
              {
                icon: '🔒',
                title: 'Long-Term Reliability',
                desc: 'Every machine in our range is built from premium materials for years of continuous commercial use, backed by our full service and maintenance support.',
              },
            ].map((b, i) => (
              <div key={i}>
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-2xl font-black text-[#1a3a8f] mb-3">{b.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section id="products" className="bg-[#f7f7f7] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-3">Our Washer Range</h2>
            <div className="w-12 h-1 bg-[#00b4d8]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                model: 'WB6-7',
                desc: 'Front-load washer · 7 kg',
                image: '/products/washers/wb67.jpg',
                placeholder: 'WB6-7',
                slug: 'wb67',
              },
              {
                model: 'WB6-8',
                desc: 'Front-load washer · 8 kg',
                image: '/products/washers/wb68.jpg',
                placeholder: 'WB6-8',
                slug: 'wb68',
              },
              {
                model: 'WB6-6',
                desc: 'Front-load washer · 6 kg',
                image: '/products/washers/wb66.jpg',
                placeholder: 'WB6-6',
                slug: 'wb66',
              },
              {
                model: 'Alliance L18',
                desc: 'Commercial washer · 18 kg',
                image: '/products/washers/alliance-l18.jpg',
                placeholder: 'Alliance+L18',
                slug: 'alliancell18',
              },
              {
                model: 'UniMac UC60',
                desc: 'Universal washer · 60 lbs / 27 kg',
                image: '/products/washers/unimac-uc60.jpg',
                placeholder: 'UniMac+UC60',
                slug: 'unimacuc60',
              },
              {
                model: 'Primus FX55',
                desc: 'Industrial washer · 55 lbs / 25 kg',
                image: '/products/washers/primus-fx55.jpg',
                placeholder: 'Primus+FX55',
                slug: 'primusfx55',
              },
            ].map((product, i) => (
              <div key={i} className="bg-white border border-gray-200 group hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="bg-[#f7f7f7] h-72 flex items-center justify-center overflow-hidden p-6">
                  <img
                    src={product.image}
                    alt={product.model}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/320x280?text=${product.placeholder}`;
                    }}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 font-medium mb-1">{product.desc}</p>
                  <h3 className="text-3xl font-black text-[#1a3a8f] mb-6">{product.model}</h3>

                  <div className="flex gap-3">
                    <Link
                      href={`/solutions/laundry/commercial-washers/${product.slug}`}
                      className="flex-1 text-center bg-[#1a3a8f] text-white font-bold py-3 text-sm uppercase tracking-widest hover:bg-[#00b4d8] transition-colors"
                    >
                      View More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 text-center border-2 border-[#1a3a8f] text-[#1a3a8f] font-bold py-3 text-sm uppercase tracking-widest hover:bg-[#1a3a8f] hover:text-white transition-colors"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#1a3a8f] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Not sure which model is right for you?</h2>
            <p className="text-[#00b4d8] text-lg font-medium">Our team will assess your needs and recommend the best solution.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-[#00b4d8] text-white font-black py-4 px-10 text-base uppercase tracking-widest hover:bg-white hover:text-[#1a3a8f] transition-colors"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
