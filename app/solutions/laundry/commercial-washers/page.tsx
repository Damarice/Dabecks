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
          <h2 className="text-5xl md:text-6xl font-black text-[#1a3a8f] mb-6">Our Washer Range</h2>
          <p className="text-2xl md:text-3xl text-gray-600">Professional commercial washers from leading global brands</p>
        </div>

        {/* Product Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              model: 'WB6-7',
              fullName: 'Front load washer 7 kg',
              image: 'https://via.placeholder.com/350x400?text=WB6-7',
              slug: 'wb67'
            },
            {
              model: 'WB6-8',
              fullName: 'Front load washer 8 kg',
              image: 'https://via.placeholder.com/350x400?text=WB6-8',
              slug: 'wb68'
            },
            {
              model: 'WB6-6',
              fullName: 'Front load washer 6 kg',
              image: 'https://via.placeholder.com/350x400?text=WB6-6',
              slug: 'wb66'
            },
            {
              model: 'Alliance L18',
              fullName: 'Commercial washer 18kg',
              image: 'https://via.placeholder.com/350x400?text=Alliance+L18',
              slug: 'alliancell18'
            },
            {
              model: 'UniMac UC60',
              fullName: 'Universal commercial washer',
              image: 'https://via.placeholder.com/350x400?text=UniMac+UC60',
              slug: 'unimacuc60'
            },
            {
              model: 'Primus FX55',
              fullName: 'Front load industrial washer',
              image: 'https://via.placeholder.com/350x400?text=Primus+FX55',
              slug: 'primusfx55'
            },
          ].map((product, i) => (
            <div key={i} className="text-center group">
              {/* Product Image */}
              <div className="bg-white h-96 flex items-center justify-center mb-8 rounded-lg shadow-md group-hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
                <img src={product.image} alt={product.model} className="max-h-full max-w-full object-contain p-4" />
              </div>
              
              {/* Product Info */}
              <p className="text-gray-600 text-2xl font-medium mb-4 h-16 flex items-center justify-center">{product.fullName}</p>
              <h3 className="text-5xl font-black text-[#1a3a8f] mb-8">{product.model}</h3>
              
              {/* Buttons */}
              <div className="flex flex-col gap-4">
                <Link 
                  href={`/solutions/laundry/commercial-washers/${product.slug}`}
                  className="bg-[#1a3a8f] text-white font-bold py-3 px-8 rounded-full text-xl uppercase tracking-wide hover:bg-[#00b4d8] transition-colors"
                >
                  View More
                </Link>
                <button className="bg-gray-100 text-[#1a3a8f] font-bold py-3 px-8 rounded-full text-xl uppercase tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  <span className="text-2xl">+</span> Compare
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
