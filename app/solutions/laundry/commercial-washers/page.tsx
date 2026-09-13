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

      {/* ── FEATURED PRODUCTS ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-4">Electrolux Professional Washers</h2>
          <p className="text-lg text-gray-600">Industry-leading commercial washers engineered for reliability and performance</p>
        </div>

        {/* Electrolux Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: 'Electrolux Professional WB6160H',
              desc: 'Front-Load Washer with advanced water management',
              image: 'https://via.placeholder.com/400x300?text=Electrolux+WB6160H'
            },
            {
              name: 'Electrolux Professional WB6180H',
              desc: 'High-capacity washer for maximum throughput',
              image: 'https://via.placeholder.com/400x300?text=Electrolux+WB6180H'
            },
            {
              name: 'Electrolux Professional WB6260H',
              desc: 'Premium washer with intelligent controls',
              image: 'https://via.placeholder.com/400x300?text=Electrolux+WB6260H'
            },
          ].map((product, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-100 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a3a8f] mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Other Partner Products */}
        <div className="mb-12">
          <h3 className="text-3xl font-black text-[#1a3a8f] mb-8">Other Premium Partners</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                brand: 'Alliance Laundry Systems',
                name: 'Alliance L Series Washer',
                desc: 'Commercial washer for every budget',
                image: 'https://via.placeholder.com/400x300?text=Alliance+L+Series'
              },
              {
                brand: 'UniMac',
                name: 'UniMac Unimac Plus',
                desc: 'Reliable and cost-effective washing',
                image: 'https://via.placeholder.com/400x300?text=UniMac+Plus'
              },
              {
                brand: 'Primus',
                name: 'Primus Professional Washer',
                desc: 'Durable industrial-grade equipment',
                image: 'https://via.placeholder.com/400x300?text=Primus+Professional'
              },
            ].map((product, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-[#00b4d8]/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-100 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-[#00b4d8] font-bold text-sm uppercase tracking-wide mb-1">{product.brand}</p>
                  <h3 className="text-lg font-bold text-[#1a3a8f] mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.desc}</p>
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
