import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function AllianceL18ProductDetail() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'Alliance L18' }
      ]} />

      <section className="bg-white pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
            <div className="flex items-center justify-center bg-[#f7f7f7] p-12 min-h-[520px]">
              <img
                src="/products/washers/alliance-l18.jpg"
                alt="Alliance L18 Commercial Washer"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/480x420?text=Alliance+L18'; }}
                className="max-h-[420px] w-auto object-contain"
              />
            </div>

            <div className="bg-white px-8 md:px-12 py-10 flex flex-col justify-start">
              <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-3">Commercial Washers</p>
              <h1 className="text-6xl md:text-7xl font-black text-[#1a1a1a] leading-none mb-4">Alliance L18</h1>
              <p className="text-2xl text-gray-600 font-medium mb-8 leading-snug">Commercial washer · 18 kg</p>
              <div className="w-12 h-1 bg-[#00b4d8] mb-8" />
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                High-capacity commercial washer built for large-scale operations. The Alliance L18 delivers reliable, consistent performance across demanding laundry environments including hotels, hospitals, and industrial facilities.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { label: 'Capacity', value: '18 kg' },
                  { label: 'Spin', value: '1200 RPM' },
                  { label: 'Energy', value: 'A++' },
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
              { icon: '🏭', label: 'High Capacity', value: '18 kg per cycle' },
              { icon: '💧', label: 'Water Efficiency', value: 'Optimised usage per load' },
              { icon: '⚙️', label: 'Spin Speed', value: '1200 RPM extraction' },
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
              { label: 'Model', value: 'Alliance L18' },
              { label: 'Load Capacity', value: '18 kg' },
              { label: 'Drum Volume', value: '165 litres' },
              { label: 'Spin Speed (max)', value: '1200 RPM' },
              { label: 'Water Usage per Cycle', value: '80 litres' },
              { label: 'Energy Class', value: 'A++' },
              { label: 'Heating Element Power', value: '6.0 kW' },
              { label: 'Motor Power', value: '1.5 kW' },
              { label: 'Width × Height × Depth', value: '700 × 950 × 1000 mm' },
              { label: 'Net Weight', value: '120 kg' },
              { label: 'Supply Voltage', value: '380–415 V / 50 Hz' },
              { label: 'Noise Level (wash / spin)', value: '54 / 74 dB(A)' },
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
              { title: 'High Capacity', desc: '18 kg load handles large volumes in fewer cycles, boosting productivity.' },
              { title: 'Heavy-Duty Build', desc: 'Robust construction engineered to withstand intensive daily use.' },
              { title: 'Simple Operation', desc: 'User-friendly controls that require minimal training for staff.' },
              { title: 'Reliable Performance', desc: 'Consistent wash results across all programs and load sizes.' },
              { title: 'Easy Maintenance', desc: 'Accessible design for quick servicing and low downtime.' },
              { title: 'Industry Proven', desc: 'Widely trusted by commercial laundries around the world.' },
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
