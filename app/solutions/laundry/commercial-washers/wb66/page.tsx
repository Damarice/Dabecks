import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import ProductImage from '@/app/components/ProductImage';

export default function WB66ProductDetail() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'WB6-6' },
      ]} />

      <section className="bg-white pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
            <div className="flex items-center justify-center bg-[#f7f7f7] p-12 min-h-[520px]">
              <ProductImage
                src="/products/washers/wb66.jpg"
                alt="WB6-6 Front Load Washer"
                placeholder="WB6-6"
                className="max-h-[420px] w-auto object-contain"
              />
            </div>

            <div className="bg-white px-8 md:px-12 py-10 flex flex-col justify-start">
              <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-3">Commercial Washers</p>
              <h1 className="text-6xl md:text-7xl font-black text-[#1a1a1a] leading-none mb-4">WB6-6</h1>
              <p className="text-2xl text-gray-600 font-medium mb-8 leading-snug">Front-load washer · 6 kg</p>
              <div className="w-12 h-1 bg-[#00b4d8] mb-8" />
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Compact yet powerful front-load washer designed for commercial laundry environments with moderate to high volume demands. Delivers professional-grade results with exceptional energy efficiency.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { label: 'Capacity', value: '6 kg' },
                  { label: 'Spin', value: '1400 RPM' },
                  { label: 'Energy', value: 'A+++' },
                ].map((s, i) => (
                  <div key={i} className="border-l-2 border-[#00b4d8] pl-3">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{s.label}</p>
                    <p className="text-2xl font-black text-[#1a3a8f]">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#1a3a8f] text-white font-bold py-4 px-8 text-base uppercase tracking-widest hover:bg-[#00b4d8] transition-colors text-center">Request a Quote</Link>
                <Link href="/contact" className="border-2 border-[#1a3a8f] text-[#1a3a8f] font-bold py-4 px-8 text-base uppercase tracking-widest hover:bg-[#1a3a8f] hover:text-white transition-colors text-center">Download Specs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl font-black text-[#1a1a1a] mb-2">Technical Specifications</h2>
          <div className="w-10 h-1 bg-[#00b4d8] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">
            {[
              { label: 'Model', value: 'WB6-6' },
              { label: 'Load Capacity', value: '6 kg' },
              { label: 'Drum Volume', value: '58 litres' },
              { label: 'Spin Speed (max)', value: '1400 RPM' },
              { label: 'Water Usage per Cycle', value: '40 litres' },
              { label: 'Energy Class', value: 'A+++' },
              { label: 'Heating Element Power', value: '2.5 kW' },
              { label: 'Motor Power', value: '0.65 kW' },
              { label: 'Width × Height × Depth', value: '598 × 850 × 603 mm' },
              { label: 'Net Weight', value: '83 kg' },
              { label: 'Supply Voltage', value: '220–240 V / 50 Hz' },
              { label: 'Noise Level (wash / spin)', value: '52 / 70 dB(A)' },
            ].map((spec, i) => (
              <div key={i} className={`flex justify-between items-center px-6 py-4 border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <span className="text-sm uppercase tracking-wide font-bold text-gray-500">{spec.label}</span>
                <span className="text-lg font-black text-[#1a3a8f] text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl font-black text-[#1a1a1a] mb-2">Key Features</h2>
          <div className="w-10 h-1 bg-[#00b4d8] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Energy Efficiency', desc: 'Load sensing technology cuts water and energy by up to 40%.' },
              { title: 'Intuitive Controls', desc: 'Pre-set programs with clear interface, minimal operator training needed.' },
              { title: 'Stainless Steel Drum', desc: 'Corrosion-resistant drum built for years of heavy commercial use.' },
              { title: 'High Extraction', desc: '1400 RPM spin reduces residual moisture and drying time.' },
              { title: 'Compact Footprint', desc: 'Space-efficient design for facilities with limited laundry room space.' },
              { title: 'Hygiene Certified', desc: 'Programs certified for healthcare and hospitality compliance.' },
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

      <section className="bg-[#1a3a8f] py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Ready to get started?</h2>
            <p className="text-[#00b4d8] text-lg font-medium">Contact us for pricing, availability, and installation support.</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/contact" className="bg-[#00b4d8] text-white font-black py-4 px-10 text-base uppercase tracking-widest hover:bg-white hover:text-[#1a3a8f] transition-colors">Get in Touch</Link>
            <Link href="/solutions/laundry/commercial-washers" className="border-2 border-white text-white font-bold py-4 px-8 text-base uppercase tracking-widest hover:bg-white hover:text-[#1a3a8f] transition-colors">All Washers</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
