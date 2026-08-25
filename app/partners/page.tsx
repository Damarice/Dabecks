import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

export default function Partners() {
  const equipmentBrands = [
    { name: 'Alliance Laundry Systems', description: 'Commercial laundry equipment' },
    { name: 'UniMac', description: 'Commercial washers and dryers' },
    { name: 'Huebsch', description: 'Laundry solutions' },
    { name: 'Primus', description: 'Industrial laundry equipment' },
    { name: 'Pony', description: 'Finishing equipment' },
    { name: 'Electrolux Professional', description: 'Kitchen and laundry equipment' },
    { name: 'Milnor', description: 'Industrial laundry systems' },
    { name: 'SIRAIR', description: 'HVAC systems' },
    { name: 'IPSO', description: 'Commercial laundry' },
  ];

  const servicePartners = [
    { name: 'Printech Media Limited', service: 'Design, Printing and Branding services' },
    { name: 'NEXUS', service: 'ICT solutions services' },
    { name: 'ICS System Solutions', service: 'Account and auditing services' },
  ];

  const dealerships = [
    { year: '2017', title: 'Electrolux Professional Dealership', desc: "Authorized dealer for Electrolux Professional's complete range of commercial kitchen and laundry equipment." },
    { year: '2021', title: 'Alliance Laundry Systems Dealership', desc: 'Official partner for Alliance Laundry Systems brands including UniMac, Primus, and Huebsch.' },
    { year: '2024', title: 'Milnor/Chicago Dealership', desc: 'Newest partnership bringing industrial-grade laundry solutions to the East African market.' },
  ];

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Partners' }]} />

      {/* Header */}
      <section className="bg-[#1a3a8f] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Collaborations</span>
          <h1 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Our Partners</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">Collaborating with world-class brands and service providers</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Global Brands</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-6 leading-tight">Strategic Partnerships</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Dabecks has established strong partnerships with leading global equipment manufacturers and local service providers to deliver world-class solutions across East Africa.
          </p>
        </div>
      </section>

      {/* Equipment Brands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Equipment</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Equipment Partner Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipmentBrands.map((brand, i) => (
              <div key={i} className="bg-white p-5 shadow-sm border-l-4 border-[#1a3a8f] flex items-center gap-4 hover:border-[#00b4d8] transition-colors">
                <div className="bg-[#1a3a8f] text-white w-12 h-12 flex items-center justify-center font-black text-lg flex-shrink-0">
                  {brand.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-black text-[#1a3a8f] text-lg">{brand.name}</h3>
                  <p className="text-gray-500 text-sm">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Dealerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Authorisations</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Key Dealerships</h2>
          <div className="max-w-3xl space-y-5">
            {dealerships.map(({ year, title, desc }) => (
              <div key={year} className="flex items-start gap-5 bg-gray-50 p-6 border-l-4 border-[#00b4d8]">
                <div className="bg-[#1a3a8f] text-[#00b4d8] font-black text-sm px-4 py-2 flex-shrink-0">{year}</div>
                <div>
                  <h3 className="font-black text-[#1a3a8f] text-lg mb-1">{title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Alliances</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Service Alliances</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {servicePartners.map((p, i) => (
              <div key={i} className="bg-white p-8 shadow-sm text-center border-t-4 border-[#00b4d8]">
                <div className="bg-[#1a3a8f] text-white w-14 h-14 flex items-center justify-center mx-auto mb-5 font-black text-xl">
                  {p.name.charAt(0)}
                </div>
                <h3 className="font-black text-[#1a3a8f] text-lg mb-2">{p.name}</h3>
                <p className="text-gray-600 text-lg">{p.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a3a8f] text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Collaborate</span>
          <h2 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Interested in Partnership?</h2>
          <p className="text-white/75 text-lg mb-8">Explore opportunities to collaborate with Dabecks in East Africa.</p>
          <Link href="/contact" className="inline-block bg-[#00b4d8] text-white font-bold px-8 py-4 text-sm uppercase tracking-wide hover:bg-white hover:text-[#1a3a8f] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

