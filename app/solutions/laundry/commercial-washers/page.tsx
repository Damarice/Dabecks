import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function CommercialWashers() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers' }
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
          <h1 className="font-black text-5xl md:text-6xl mb-6 leading-tight">Commercial Washers</h1>
          <p className="text-lg md:text-xl font-normal opacity-95">Heavy-duty washing solutions for hotels, hospitals, and commercial laundries</p>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-4">Our Washer Range</h2>
          <p className="text-lg text-gray-600">Professional commercial washers from leading global brands</p>
        </div>

        {/* Product Grid - Electrolux */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#1a3a8f] mb-12">Electrolux Professional</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                model: 'WB6-7',
                fullName: 'Front load washer 7 kg - WH6-7',
                image: 'https://via.placeholder.com/300x350?text=WB6-7'
              },
              {
                model: 'WB6-8',
                fullName: 'Front load washer 8 kg - WH6-8',
                image: 'https://via.placeholder.com/300x350?text=WB6-8'
              },
              {
                model: 'WB6-6',
                fullName: 'Front load washer 6 kg - WH6-6',
                image: 'https://via.placeholder.com/300x350?text=WB6-6'
              },
              {
                model: 'WB6-6LAC',
                fullName: 'Front load washer 6 kg - WH6-6LAC',
                image: 'https://via.placeholder.com/300x350?text=WB6-6LAC'
              },
            ].map((product, i) => (
              <div key={i} className="text-center">
                {/* Product Image */}
                <div className="bg-white h-80 flex items-center justify-center mb-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img src={product.image} alt={product.model} className="max-h-full max-w-full object-contain" />
                </div>
                
                {/* Product Info */}
                <p className="text-gray-600 text-sm mb-2">{product.fullName}</p>
                <h3 className="text-2xl font-black text-[#1a3a8f] mb-6">{product.model}</h3>
                
                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <Link 
                    href={`/solutions/laundry/commercial-washers/${product.model.toLowerCase().replace('-', '')}`}
                    className="bg-[#1a3a8f] text-white font-bold py-2.5 px-6 rounded-full text-sm uppercase tracking-wide hover:bg-[#00b4d8] transition-colors"
                  >
                    View More
                  </Link>
                  <button className="bg-gray-100 text-[#1a3a8f] font-bold py-2.5 px-6 rounded-full text-sm uppercase tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    <span>+</span> Compare
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid - Partners */}
        <div>
          <h3 className="text-3xl font-bold text-[#1a3a8f] mb-12">Other Premium Brands</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                brand: 'Alliance Laundry Systems',
                model: 'Alliance L18',
                fullName: 'Commercial washer 18kg capacity',
                image: 'https://via.placeholder.com/300x350?text=Alliance+L18'
              },
              {
                brand: 'UniMac',
                model: 'UniMac UC60',
                fullName: 'Universal commercial washer',
                image: 'https://via.placeholder.com/300x350?text=UniMac+UC60'
              },
              {
                brand: 'Primus',
                model: 'Primus FX55',
                fullName: 'Front load industrial washer',
                image: 'https://via.placeholder.com/300x350?text=Primus+FX55'
              },
              {
                brand: 'Huebsch',
                model: 'Huebsch HC40',
                fullName: 'Heavy duty commercial washer',
                image: 'https://via.placeholder.com/300x350?text=Huebsch+HC40'
              },
            ].map((product, i) => (
              <div key={i} className="text-center">
                {/* Product Image */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 h-80 flex items-center justify-center mb-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#00b4d8]/20">
                  <img src={product.image} alt={product.model} className="max-h-full max-w-full object-contain" />
                </div>
                
                {/* Product Info */}
                <p className="text-[#00b4d8] font-bold text-xs uppercase tracking-wide mb-1">{product.brand}</p>
                <p className="text-gray-600 text-sm mb-2">{product.fullName}</p>
                <h3 className="text-2xl font-black text-[#1a3a8f] mb-6">{product.model}</h3>
                
                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <Link 
                    href={`/solutions/laundry/commercial-washers/${product.model.toLowerCase().replace(/\s/g, '')}`}
                    className="bg-[#1a3a8f] text-white font-bold py-2.5 px-6 rounded-full text-sm uppercase tracking-wide hover:bg-[#00b4d8] transition-colors"
                  >
                    View More
                  </Link>
                  <button className="bg-gray-100 text-[#1a3a8f] font-bold py-2.5 px-6 rounded-full text-sm uppercase tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    <span>+</span> Compare
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1a3a8f] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Upgrade Your Laundry?</h2>
          <p className="text-lg mb-8 opacity-90">Get expert advice on the perfect washer for your facility</p>
          <Link href="/contact" className="bg-[#00b4d8] text-[#1a3a8f] font-bold py-4 px-8 rounded hover:bg-white transition-colors inline-block">
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
