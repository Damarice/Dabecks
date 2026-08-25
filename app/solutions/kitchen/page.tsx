import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

export default function KitchenSolutions() {
  const equipment = [
    { icon: '🔥', title: 'Commercial Ovens', desc: 'Commercial-grade ovens for baking, roasting, and high-volume food production.' },
    { icon: '🍳', title: 'Fryers', desc: 'Industrial deep fryers with precise temperature control and safety features.' },
    { icon: '🍽️', title: 'Dishwashers', desc: 'High-capacity dishwashing systems for efficient cleaning and sanitization.' },
    { icon: '♨️', title: 'Steamers', desc: 'Commercial steamers for healthy cooking and food preparation.' },
    { icon: '🍖', title: 'Cooking Ranges', desc: 'Heavy-duty cooking ranges for multi-burner high-output kitchens.' },
    { icon: '🥩', title: 'Grills & Griddles', desc: 'Professional grills and griddles for restaurants and catering operations.' },
  ];

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems' }]} />

      {/* Header */}
      <section className="bg-[#1a3a8f] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Solutions</span>
          <h1 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Kitchen Systems</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">Custom-designed commercial kitchen solutions for professional environments</p>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Overview</span>
              <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-6 leading-tight">Complete Kitchen Solutions</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                From single appliances to fully fitted commercial kitchens, Dabecks designs, supplies, and installs kitchen systems for hotels, restaurants, hospitals, and institutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As an authorised Electrolux Professional dealer, we offer the full range of cooking, refrigeration, and warewashing equipment backed by expert installation and after-sales service.
              </p>
              <Link href="/contact" className="inline-block bg-[#1a3a8f] text-white font-bold px-7 py-4 text-sm uppercase tracking-wide hover:bg-[#00b4d8] transition-colors">
                Request a Quote
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=700&h=500&fit=crop"
                alt="Commercial kitchen equipment"
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
            {['Electrolux Professional', 'Zanussi Professional'].map(brand => (
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
          <h2 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Ready to Equip Your Kitchen?</h2>
          <p className="text-white/75 text-lg mb-8">Contact our team for a free consultation and kitchen design service.</p>
          <Link href="/contact" className="inline-block bg-[#00b4d8] text-white font-bold px-8 py-4 text-sm uppercase tracking-wide hover:bg-white hover:text-[#1a3a8f] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

