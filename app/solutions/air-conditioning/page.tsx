import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

export default function AirConditioningSolutions() {
  const systems = [
    { icon: '❄️', title: 'Split Units', desc: 'Versatile split-type air conditioners for individual room cooling with efficient performance.' },
    { icon: '🏢', title: 'VRF/VRV Systems', desc: 'Variable refrigerant flow systems for large buildings with multiple zones and advanced control.' },
    { icon: '🌬️', title: 'Ducted Systems', desc: 'Central ducted air conditioning for uniform cooling throughout large spaces.' },
    { icon: '🔲', title: 'Cassette Units', desc: 'Ceiling-mounted cassette units for even air distribution in open-plan spaces.' },
  ];

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning' }]} />

      {/* Header */}
      <section className="bg-[#1a3a8f] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Solutions</span>
          <h1 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Air Conditioning</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">Reliable cooling solutions for commercial and institutional facilities</p>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Overview</span>
              <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-6 leading-tight">Commercial Cooling Systems</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Dabecks designs, supplies, and installs air conditioning systems for hotels, offices, hospitals, and institutions across East Africa.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As an authorised SIRAIR dealer, we offer a full range of cooling solutions — from single split units to complex multi-zone VRF systems — with full installation and maintenance support.
              </p>
              <Link href="/contact" className="inline-block bg-[#1a3a8f] text-white font-bold px-7 py-4 text-sm uppercase tracking-wide hover:bg-[#00b4d8] transition-colors">
                Request a Quote
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=700&h=500&fit=crop"
                alt="Air conditioning systems"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Range</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Systems We Install</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-[#00b4d8]">
                <div className="text-5xl mb-5">{icon}</div>
                <h3 className="font-black text-[#1a3a8f] text-xl mb-3">{title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">What We Offer</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Design & Sizing', desc: 'We assess your space and recommend the right system capacity and configuration.' },
              { title: 'Supply & Installation', desc: 'Full supply and professional installation by certified HVAC technicians.' },
              { title: 'Maintenance & Repair', desc: 'Preventive maintenance contracts and rapid response breakdown service.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-8 border-t-4 border-[#00b4d8] bg-gray-50">
                <h3 className="font-black text-[#1a3a8f] text-xl mb-3">{title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a3a8f] text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Get Started</span>
          <h2 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Need a Cooling Solution?</h2>
          <p className="text-white/75 text-lg mb-8">Talk to our team for a free site assessment and system recommendation.</p>
          <Link href="/contact" className="inline-block bg-[#00b4d8] text-white font-bold px-8 py-4 text-sm uppercase tracking-wide hover:bg-white hover:text-[#1a3a8f] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

