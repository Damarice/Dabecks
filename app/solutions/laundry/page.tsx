import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

export default function LaundrySolutions() {
  const equipment = [
    { icon: '🌊', title: 'Commercial Washers', desc: 'Heavy-duty washing machines with multiple capacity options for various load sizes.' },
    { icon: '🌡️', title: 'Industrial Dryers', desc: 'High-capacity tumble dryers with efficient heating systems for rapid drying cycles.' },
    { icon: '📏', title: 'Ironers & Presses', desc: 'Professional ironing equipment for finishing linens, uniforms, and garments.' },
    { icon: '🔄', title: 'Washer Extractors', desc: 'Industrial washer-extractors for large-volume continuous laundry processing.' },
    { icon: '💨', title: 'Tumble Dryers', desc: 'High-performance dryers with programmable cycles for consistent results.' },
    { icon: '📐', title: 'Flatwork Ironers', desc: 'Automated flatwork ironers for sheets, tablecloths, and large linen items.' },
  ];

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Laundry Equipment' }]} />

      {/* Header */}
      <section className="bg-[#1a3a8f] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Solutions</span>
          <h1 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Laundry Equipment</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">High-capacity commercial laundry solutions for institutions and businesses</p>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Overview</span>
              <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-6 leading-tight">Professional Laundry Systems</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Dabecks supplies and installs high-performance commercial laundry equipment for hotels, hospitals, schools, and laundromats across East Africa.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As an authorised dealer for Alliance Laundry Systems, UniMac, Primus, and Milnor, we provide access to world-class equipment backed by genuine parts and expert technical support.
              </p>
              <Link href="/contact" className="inline-block bg-[#1a3a8f] text-white font-bold px-7 py-4 text-sm uppercase tracking-wide hover:bg-[#00b4d8] transition-colors">
                Request a Quote
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=700&h=500&fit=crop"
                alt="Commercial laundry equipment"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Range</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Equipment We Supply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-[#00b4d8]">
                <div className="text-5xl mb-5">{icon}</div>
                <h3 className="font-black text-[#1a3a8f] text-xl mb-3">{title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Authorised Dealer</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Partner Brands</h2>
          <div className="flex flex-wrap gap-4">
            {['Alliance Laundry Systems', 'UniMac', 'Primus', 'Huebsch', 'Milnor', 'IPSO'].map(brand => (
              <div key={brand} className="bg-gray-50 border border-gray-200 px-6 py-3 font-bold text-[#1a3a8f] text-lg hover:border-[#00b4d8] transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a3a8f] text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Get Started</span>
          <h2 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Ready to Upgrade Your Laundry?</h2>
          <p className="text-white/75 text-lg mb-8">Contact our team for a free consultation and equipment recommendation.</p>
          <Link href="/contact" className="inline-block bg-[#00b4d8] text-white font-bold px-8 py-4 text-sm uppercase tracking-wide hover:bg-white hover:text-[#1a3a8f] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

