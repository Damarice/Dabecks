import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function PrimusFX55ProductDetail() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'Primus FX55' },
      ]} />

      <section className="bg-white pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
            <div className="flex items-center justify-center bg-[#f7f7f7] p-12 min-h-[520px]">
              <img
                src="/products/washers/primus-fx55.jpg"
                alt="Primus FX55 Industrial Washer"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/480x420?text=Primus+FX55'; }}
                className="max-h-[420px] w-auto object-contain"
              />
            </div>

            <div className="bg-white px-8 md:px-12 py-10 flex flex-col justify-start">
              <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-3">Commercial Washers</p>
              <h1 className="text-6xl md:text-7xl font-black text-[#1a1a1a] leading-none mb-4">Primus FX55</h1>
              <p className="text-2xl text-gray-600 font-medium mb-8 leading-snug">Front-load industrial washer · 55 lbs / 25 kg</p>
              <div className="w-12 h-1 bg-[#00b4d8] mb-8" />
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Industrial-grade front-load washer engineered for the most demanding commercial environments. Built to deliver reliable, consistent washing performance day after day with minimal downtime and easy maintenance access.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { label: 'Capacity', value: '25 kg' },
                  { label: 'Spin', value: '1000 RPM' },
                  { label: 'Energy', value: 'A+' },
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
              { icon: '🏭', label: 'Industrial Grade', value: 'Built for heavy daily use' },
              { icon: '💧', label: 'Water Efficiency', value: 'Optimised per-cycle usage' },
              { icon: '⚙️', label: 'Spin Speed', value: '1000 RPM extraction' },
              { icon: '🔧', label: 'Low Downtime', value: 'Easy front-access service' },
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
              { label: 'Model', value: 'Primus FX55' },
              { label: 'Load Capacity', value: '55 lbs (25 kg)' },
              { label: 'Drum Volume', value: '230 litres' },
              { label: 'Spin Speed (max)', value: '1000 RPM' },
              { label: 'Water Usage per Cycle', value: '75 litres' },
              { label: 'Energy Class', value: 'A+' },
              { label: 'Heating Element Power', value: '7.5 kW' },
              { label: 'Motor Power', value: '2.0 kW' },
              { label: 'Width × Height × Depth', value: '700 × 950 × 1000 mm' },
              { label: 'Net Weight', value: '130 kg' },
              { label: 'Supply Voltage', value: '380–415 V / 50 Hz' },
              { label: 'Noise Level (wash / spin)', value: '54 / 73 dB(A)' },
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
              { title: 'Industrial Grade Build', desc: 'Heavy-duty materials and construction engineered for non-stop commercial operation.' },
              { title: 'Consistent Performance', desc: 'Delivers reliable wash results across all programs and load sizes.' },
              { title: 'Operator Friendly', desc: 'Clear, simple controls designed for all staff skill levels.' },
              { title: 'Robust Construction', desc: 'Reinforced drum and housing withstand years of intense use.' },
              { title: 'Minimal Downtime', desc: 'Front-accessible components make servicing fast and cost-effective.' },
              { title: 'Cost Effective', desc: 'Excellent operational efficiency and low total cost of ownership.' },
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
