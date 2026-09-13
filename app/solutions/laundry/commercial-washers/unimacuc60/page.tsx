import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function UnimacUC60ProductDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'UniMac UC60' }
      ]} />

      <section className="bg-white py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12">
            <p className="text-gray-600 text-lg mb-2">Commercial Washers</p>
            <h1 className="text-5xl md:text-7xl font-black text-[#1a3a8f] mb-6">UniMac UC60</h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium max-w-2xl">Universal commercial washer with 60 lbs (27kg) capacity. ENERGY STAR certified.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex items-center justify-center bg-gray-50 rounded-lg p-8 h-96 lg:h-full min-h-96">
              <img src="https://via.placeholder.com/400x350?text=UniMac+UC60" alt="UniMac UC60" className="max-h-full max-w-full object-contain" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <p className="text-[#00b4d8] font-bold text-xl uppercase tracking-wider mb-2">Load Capacity</p>
                  <p className="text-4xl md:text-5xl font-black text-[#1a3a8f]">60 lbs (27 kg)</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] font-bold text-xl uppercase tracking-wider mb-2">Spin Speed</p>
                  <p className="text-4xl md:text-5xl font-black text-[#1a3a8f]">1200 RPM</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] font-bold text-xl uppercase tracking-wider mb-2">Certification</p>
                  <p className="text-4xl md:text-5xl font-black text-[#1a3a8f]">ENERGY STAR</p>
                </div>
                <div className="pt-8">
                  <Link href="/contact" className="bg-[#00b4d8] text-white font-bold py-4 px-10 rounded text-xl uppercase tracking-wide hover:bg-[#00a0b8] transition-colors inline-block">
                    Get More Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-8">About this Washer</h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>The UniMac UC60 is a versatile universal commercial washer that adapts to existing laundry systems. With ENERGY STAR certification and 60 lbs capacity, it's ideal for medium-to-large facilities.</p>
              <p>Engineered for reliability and efficiency, it combines proven technology with modern performance standards.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-black text-[#1a3a8f] mb-6">Product Info</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 text-sm uppercase font-bold mb-2">Model</p>
                <p className="text-xl font-semibold text-[#1a3a8f]">UniMac UC60</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm uppercase font-bold mb-2">Category</p>
                <p className="text-xl font-semibold text-[#1a3a8f]">Commercial Washers</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm uppercase font-bold mb-2">Warranty</p>
                <p className="text-xl font-semibold text-[#1a3a8f]">2 Years</p>
              </div>
              <button className="w-full bg-[#1a3a8f] text-white font-bold py-3 rounded text-lg uppercase tracking-wide hover:bg-[#00b4d8] transition-colors mt-8">
                Request Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-12">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Load Capacity', value: '60 lbs (27 kg)' },
              { label: 'Spin Speed', value: '1200 RPM' },
              { label: 'Water Usage', value: '90 L/cycle' },
              { label: 'Certification', value: 'ENERGY STAR' },
              { label: 'Dimensions (W×H×D)', value: '750 × 1000 × 1050 mm' },
              { label: 'Weight', value: '140 kg' },
            ].map((spec, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 text-sm uppercase font-bold mb-2">{spec.label}</p>
                <p className="text-3xl font-black text-[#1a3a8f]">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { title: 'Universal Design', desc: 'Compatible with existing systems' },
            { title: 'Large Capacity', desc: '60 lbs for medium-to-large loads' },
            { title: 'Energy Efficient', desc: 'ENERGY STAR certified' },
            { title: 'Advanced Features', desc: 'Modern wash programs' },
            { title: 'Low Maintenance', desc: 'Simple, reliable design' },
            { title: 'Industry Standard', desc: 'Widely used commercially' },
          ].map((f, i) => (
            <div key={i} className="flex gap-4">
              <div className="text-2xl text-[#00b4d8] font-black pt-1">•</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a3a8f] mb-2">{f.title}</h3>
                <p className="text-xl text-gray-700">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <Link href="/solutions/laundry/commercial-washers" className="inline-block bg-[#1a3a8f] text-white font-bold py-3 px-10 rounded text-lg uppercase tracking-wide hover:bg-[#00b4d8] transition-colors">
            ← Back to Commercial Washers
          </Link>
        </div>
      </section>
    </div>
  );
}
