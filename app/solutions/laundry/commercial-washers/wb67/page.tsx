import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function WB67ProductDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'Electrolux WB6-7' }
      ]} />

      {/* ── HERO ── */}
      <section 
        className="relative text-white py-32 flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-laundry.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '480px'
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h1 className="font-black text-6xl md:text-7xl mb-6 leading-tight">Electrolux Professional WB6-7</h1>
          <p className="text-2xl md:text-3xl font-normal opacity-95">Front Load Washer 7kg Capacity</p>
        </div>
      </section>

      {/* ── PRODUCT DETAILS ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-12 mb-12 flex items-center justify-center h-96">
              <img src="https://via.placeholder.com/500x400?text=WB6-7" alt="WB6-7" className="max-h-full max-w-full object-contain" />
            </div>

            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-[#1a3a8f] mb-8">Overview</h2>
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8">
                The Electrolux Professional WB6-7 is a high-performance front-load washer designed for commercial laundry operations. With a 7kg capacity and advanced water management system, it delivers exceptional cleaning results while maintaining energy efficiency.
              </p>
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
                Perfect for hotels, hospitals, and commercial laundries that demand reliability and consistent quality.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-[#1a3a8f] mb-8">Key Features</h2>
              <ul className="space-y-6">
                {[
                  '7kg load capacity for efficient batch processing',
                  'Advanced water management reduces consumption by up to 40%',
                  'Intuitive control panel with multiple wash programs',
                  'Durable stainless steel drum and construction',
                  'Quick and easy maintenance access',
                  'Energy-efficient operation certified for commercial use',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-lg">✓</span>
                    <span className="text-2xl text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-[#1a3a8f] mb-8">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: 'Load Capacity', value: '7 kg' },
                  { label: 'Spin Speed', value: '1400 RPM' },
                  { label: 'Energy Class', value: 'A+++' },
                  { label: 'Water Usage', value: '45 liters per cycle' },
                  { label: 'Dimensions', value: '600 x 850 x 900 mm' },
                  { label: 'Weight', value: '85 kg' },
                ].map((spec, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-6">
                    <p className="text-[#00b4d8] font-bold text-xl uppercase tracking-wide mb-2">{spec.label}</p>
                    <p className="text-3xl font-bold text-[#1a3a8f]">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#1a3a8f] to-[#0d1f52] rounded-lg p-8 text-white sticky top-8">
              <h3 className="text-4xl font-black mb-8">Product Info</h3>
              
              <div className="space-y-8">
                <div>
                  <p className="text-[#00b4d8] font-bold text-lg uppercase tracking-wide mb-2">Brand</p>
                  <p className="text-2xl font-semibold">Electrolux Professional</p>
                </div>
                
                <div>
                  <p className="text-[#00b4d8] font-bold text-lg uppercase tracking-wide mb-2">Model</p>
                  <p className="text-2xl font-semibold">WB6-7</p>
                </div>
                
                <div>
                  <p className="text-[#00b4d8] font-bold text-lg uppercase tracking-wide mb-2">Warranty</p>
                  <p className="text-2xl font-semibold">2 Years Full Coverage</p>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <p className="text-[#00b4d8] font-bold text-lg uppercase tracking-wide mb-4">Interested?</p>
                  <Link href="/contact" className="w-full block text-center bg-[#00b4d8] text-[#1a3a8f] py-4 rounded font-bold text-xl hover:bg-white transition-colors mb-4">
                    Request Quote
                  </Link>
                  <Link href="/solutions/laundry/commercial-washers" className="w-full block text-center bg-white/20 text-white py-4 rounded font-bold text-xl border-2 border-white hover:bg-white/30 transition-colors">
                    Back to Washers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-5xl md:text-6xl font-black text-[#1a3a8f] mb-12">Similar Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { model: 'WB6-8', desc: 'Front load washer 8 kg' },
              { model: 'WB6-6', desc: 'Front load washer 6 kg' },
              { model: 'WB6-6LAC', desc: 'Front load washer 6 kg with features' },
            ].map((product, i) => (
              <Link key={i} href={`/solutions/laundry/commercial-washers/${product.model.toLowerCase().replace(/\s|-/g, '')}`} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-gray-100 h-64 rounded mb-6 flex items-center justify-center">
                  <img src={`https://via.placeholder.com/300x250?text=${product.model}`} alt={product.model} className="max-h-full max-w-full object-contain" />
                </div>
                <p className="text-gray-600 text-lg mb-2">{product.desc}</p>
                <h3 className="text-3xl font-black text-[#1a3a8f]">{product.model}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
