import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function UnimacUC60ProductDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'UniMac UC60' }
      ]} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center bg-white rounded-lg p-8 h-96">
              <img src="https://via.placeholder.com/400x350?text=UniMac+UC60" alt="UniMac UC60" className="max-h-full max-w-full object-contain" />
            </div>

            <div>
              <h1 className="text-6xl md:text-7xl font-black text-[#1a3a8f] mb-6">UniMac UC60</h1>
              <p className="text-3xl md:text-4xl text-gray-700 mb-8 font-medium">Universal Commercial Washer</p>
              
              <div className="space-y-6 mb-10">
                <div>
                  <p className="text-[#00b4d8] font-bold text-2xl uppercase tracking-wide mb-2">Load Capacity</p>
                  <p className="text-3xl text-gray-800 font-semibold">60 lbs (27 kg)</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] font-bold text-2xl uppercase tracking-wide mb-2">Spin Speed</p>
                  <p className="text-3xl text-gray-800 font-semibold">1200 RPM</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] font-bold text-2xl uppercase tracking-wide mb-2">Energy Rating</p>
                  <p className="text-3xl text-gray-800 font-semibold">ENERGY STAR</p>
                </div>
              </div>

              <Link href="/contact" className="bg-[#00b4d8] text-[#1a3a8f] font-bold py-4 px-10 rounded text-2xl uppercase tracking-wide hover:bg-[#00a0b8] transition-colors inline-block">
                Get More Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <h2 className="text-6xl md:text-7xl font-black text-[#1a3a8f] mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: 'Universal Design', desc: 'Compatible with existing laundry systems' },
            { title: 'Large Capacity', desc: '60 lbs capacity for medium-to-large loads' },
            { title: 'Energy Efficient', desc: 'ENERGY STAR certified for low utility costs' },
            { title: 'Advanced Features', desc: 'Modern wash programs and cycles' },
            { title: 'Low Maintenance', desc: 'Simple design means fewer repairs' },
            { title: 'Industry Standard', desc: 'Widely used in commercial laundries' },
          ].map((f, i) => (
            <div key={i} className="border-l-4 border-[#00b4d8] pl-6">
              <h3 className="text-3xl font-bold text-[#1a3a8f] mb-3">{f.title}</h3>
              <p className="text-2xl text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SPECIFICATIONS ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-6xl md:text-7xl font-black text-[#1a3a8f] mb-12">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Load Capacity', value: '60 lbs (27 kg)' },
              { label: 'Spin Speed', value: '1200 RPM' },
              { label: 'Water Usage', value: '90 L/cycle' },
              { label: 'Certification', value: 'ENERGY STAR' },
              { label: 'Dimensions', value: '750 x 1000 x 1050 mm' },
              { label: 'Weight', value: '140 kg' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-md">
                <p className="text-[#00b4d8] font-bold text-2xl uppercase tracking-wide mb-3">{s.label}</p>
                <p className="text-4xl font-black text-[#1a3a8f]">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1a3a8f] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-6xl font-black mb-8">Interested in this Model?</h2>
          <p className="text-2xl mb-10 opacity-90">Get a detailed quote and expert consultation</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-[#00b4d8] text-[#1a3a8f] font-bold py-4 px-10 rounded text-2xl uppercase tracking-wide hover:bg-white transition-colors inline-block">
              Request Quote
            </Link>
            <Link href="/solutions/laundry/commercial-washers" className="bg-white/20 text-white font-bold py-4 px-10 rounded border-2 border-white text-2xl uppercase tracking-wide hover:bg-white/30 transition-colors inline-block">
              Back to Washers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
