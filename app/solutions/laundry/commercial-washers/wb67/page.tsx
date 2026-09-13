import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function WB67ProductDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'WB6-7' }
      ]} />

      {/* ── HERO SECTION ── */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header Info - Small */}
          <div className="mb-12">
            <p className="text-gray-600 text-lg mb-2">Commercial Washers</p>
            <h1 className="text-5xl md:text-7xl font-black text-[#1a3a8f] mb-6">WB6-7</h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium max-w-2xl">
              Front-load washer with 7kg load capacity. Designed for commercial laundry operations requiring high performance and energy efficiency.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Product Image */}
            <div className="flex items-center justify-center bg-gray-50 rounded-lg p-8 h-96 lg:h-full min-h-96">
              <img src="https://via.placeholder.com/400x350?text=WB6-7" alt="WB6-7" className="max-h-full max-w-full object-contain" />
            </div>

            {/* Right: Key Specs */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <p className="text-[#00b4d8] font-bold text-xl uppercase tracking-wider mb-2">Load Capacity</p>
                  <p className="text-4xl md:text-5xl font-black text-[#1a3a8f]">7 kg</p>
                </div>
                
                <div>
                  <p className="text-[#00b4d8] font-bold text-xl uppercase tracking-wider mb-2">Spin Speed</p>
                  <p className="text-4xl md:text-5xl font-black text-[#1a3a8f]">1400 RPM</p>
                </div>

                <div>
                  <p className="text-[#00b4d8] font-bold text-xl uppercase tracking-wider mb-2">Energy Rating</p>
                  <p className="text-4xl md:text-5xl font-black text-[#1a3a8f]">A+++</p>
                </div>

                <div className="pt-8">
                  <Link 
                    href="/contact" 
                    className="bg-[#00b4d8] text-white font-bold py-4 px-10 rounded text-xl uppercase tracking-wide hover:bg-[#00a0b8] transition-colors inline-block"
                  >
                    Get More Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Description */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-8">About this Washer</h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                The WB6-7 is a professional-grade front-load washer designed specifically for commercial laundry operations. With a 7kg load capacity and advanced water management systems, it delivers consistent, high-quality washing results while minimizing operational costs.
              </p>
              <p>
                Built for reliability and performance, this washer features intuitive controls, efficient energy consumption, and easy maintenance access. Perfect for hotels, hospitals, and commercial laundries that demand dependable equipment.
              </p>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-black text-[#1a3a8f] mb-6">Product Info</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 text-sm uppercase font-bold mb-2">Model</p>
                <p className="text-xl font-semibold text-[#1a3a8f]">WB6-7</p>
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

      {/* ── SPECIFICATIONS ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-12">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Load Capacity', value: '7 kg' },
              { label: 'Spin Speed', value: '1400 RPM' },
              { label: 'Water Usage', value: '45 L/cycle' },
              { label: 'Energy Class', value: 'A+++' },
              { label: 'Dimensions (W×H×D)', value: '600 × 850 × 900 mm' },
              { label: 'Weight', value: '85 kg' },
            ].map((spec, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 text-sm uppercase font-bold mb-2">{spec.label}</p>
                <p className="text-3xl font-black text-[#1a3a8f]">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES LIST ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-12">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { title: 'Energy Efficient', desc: 'Reduces operational expenditure by up to 40%' },
            { title: 'High Performance', desc: 'Consistent, professional washing results' },
            { title: 'Easy Operation', desc: 'Intuitive control system for all staff' },
            { title: 'Durable Build', desc: 'Premium stainless steel construction' },
            { title: 'Quick Maintenance', desc: 'Easy access for servicing' },
            { title: 'Certified Quality', desc: 'International standards compliance' },
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

      {/* ── BACK BUTTON ── */}
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
