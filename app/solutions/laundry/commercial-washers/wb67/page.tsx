import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function WB67ProductDetail() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'WB6-7' }
      ]} />

      {/* ── TOP PRODUCT SECTION ── */}
      <section className="bg-white pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">

            {/* LEFT: Product Image */}
            <div className="flex items-center justify-center bg-[#f7f7f7] p-12 min-h-[520px]">
              <img
                src="/products/washers/wb67.jpg"
                alt="WB6-7 Front Load Washer"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/480x420?text=WB6-7'; }}
                className="max-h-[420px] w-auto object-contain"
              />
            </div>

            {/* RIGHT: Product Info */}
            <div className="bg-white px-8 md:px-12 py-10 flex flex-col justify-start">
              <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-3">Commercial Washers</p>
              <h1 className="text-6xl md:text-7xl font-black text-[#1a1a1a] leading-none mb-4">WB6-7</h1>
              <p className="text-2xl text-gray-600 font-medium mb-8 leading-snug">
                Front-load washer · 7 kg
              </p>

              {/* Divider */}
              <div className="w-12 h-1 bg-[#00b4d8] mb-8" />

              {/* Short description */}
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                High-productivity front-load washer designed for commercial laundry operations. Reduces water and energy consumption by up to 40% without compromising on wash quality. Ideal for hotels, hospitals, and professional laundry services.
              </p>

              {/* Key specs strip */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { label: 'Capacity', value: '7 kg' },
                  { label: 'Spin', value: '1400 RPM' },
                  { label: 'Energy', value: 'A+++' },
                ].map((s, i) => (
                  <div key={i} className="border-l-2 border-[#00b4d8] pl-3">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{s.label}</p>
                    <p className="text-2xl font-black text-[#1a3a8f]">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-[#1a3a8f] text-white font-bold py-4 px-8 text-base uppercase tracking-widest hover:bg-[#00b4d8] transition-colors text-center"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[#1a3a8f] text-[#1a3a8f] font-bold py-4 px-8 text-base uppercase tracking-widest hover:bg-[#1a3a8f] hover:text-white transition-colors text-center"
                >
                  Download Specs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section className="bg-[#1a3a8f] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '⚡', label: 'Energy Savings', value: 'Up to 40% less consumption' },
              { icon: '💧', label: 'Water Efficiency', value: 'Optimised water usage per cycle' },
              { icon: '⚙️', label: 'High Spin Speed', value: '1400 RPM extraction' },
              { icon: '✅', label: 'Certified', value: 'International quality standards' },
            ].map((f, i) => (
              <div key={i} className="text-white">
                <div className="text-3xl mb-2">{f.icon}</div>
                <p className="text-[#00b4d8] text-xs uppercase tracking-widest font-bold mb-1">{f.label}</p>
                <p className="text-base font-medium leading-snug">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl font-black text-[#1a1a1a] mb-2">Technical Specifications</h2>
          <div className="w-10 h-1 bg-[#00b4d8] mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">
            {[
              { label: 'Model', value: 'WB6-7' },
              { label: 'Load Capacity', value: '7 kg' },
              { label: 'Drum Volume', value: '65 litres' },
              { label: 'Spin Speed (max)', value: '1400 RPM' },
              { label: 'Water Usage per Cycle', value: '45 litres' },
              { label: 'Energy Class', value: 'A+++' },
              { label: 'Heating Element Power', value: '2.8 kW' },
              { label: 'Motor Power', value: '0.75 kW' },
              { label: 'Width × Height × Depth', value: '598 × 850 × 603 mm' },
              { label: 'Net Weight', value: '85 kg' },
              { label: 'Supply Voltage', value: '220–240 V / 50 Hz' },
              { label: 'Noise Level (wash / spin)', value: '52 / 72 dB(A)' },
            ].map((spec, i) => (
              <div
                key={i}
                className={`flex justify-between items-center px-6 py-4 border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <span className="text-sm uppercase tracking-wide font-bold text-gray-500">{spec.label}</span>
                <span className="text-lg font-black text-[#1a3a8f] text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl font-black text-[#1a1a1a] mb-2">Key Features</h2>
          <div className="w-10 h-1 bg-[#00b4d8] mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Energy Efficiency',
                desc: 'Built-in load sensing technology adjusts water and energy use in real time, reducing operational costs by up to 40%.'
              },
              {
                title: 'Intuitive Control Panel',
                desc: 'Simple, clear interface with pre-set wash programs. Minimal training required for operators.'
              },
              {
                title: 'Durable Stainless Steel Drum',
                desc: 'Premium stainless steel drum and outer tub resist corrosion and withstand years of continuous use.'
              },
              {
                title: 'High Extraction Speed',
                desc: '1400 RPM spin reduces residual moisture, cutting drying time and overall cycle time.'
              },
              {
                title: 'Easy Maintenance',
                desc: 'Front-accessible components and self-cleaning filter system make servicing fast and straightforward.'
              },
              {
                title: 'Hygiene Certified',
                desc: 'Certified wash programs for healthcare and hospitality ensure compliance with hygiene regulations.'
              },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <div className="w-8 h-1 bg-[#00b4d8] mb-4" />
                <h3 className="text-xl font-black text-[#1a3a8f] mb-3">{f.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1a3a8f] py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Ready to get started?</h2>
            <p className="text-[#00b4d8] text-lg font-medium">Contact us for pricing, availability, and installation support.</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#00b4d8] text-white font-black py-4 px-10 text-base uppercase tracking-widest hover:bg-white hover:text-[#1a3a8f] transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/solutions/laundry/commercial-washers"
              className="border-2 border-white text-white font-bold py-4 px-8 text-base uppercase tracking-widest hover:bg-white hover:text-[#1a3a8f] transition-colors"
            >
              All Washers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
