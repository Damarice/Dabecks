import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

export default function Clients() {
  const clients = [
    { name: 'NAS Servair', sector: 'Aviation Catering' },
    { name: 'Radisson Blu Hotel', sector: 'Hospitality' },
    { name: 'Kenya Utalii College', sector: 'Education' },
    { name: 'Jomo Kenyatta University', sector: 'Education' },
    { name: 'Multimedia University', sector: 'Education' },
    { name: 'Catholic University of Eastern Africa', sector: 'Education' },
    { name: 'Nairobi Safari Club', sector: 'Hospitality' },
    { name: 'Safari Park Hotel & Casino', sector: 'Hospitality' },
    { name: 'Golf Hotel Kakamega', sector: 'Hospitality' },
    { name: 'Kenya Defence Forces', sector: 'Government' },
    { name: 'Valley Hospital', sector: 'Healthcare' },
  ];

  const sectors = [
    { icon: '🏨', title: 'Hospitality & Tourism', desc: 'Hotels, lodges, resorts, and restaurants' },
    { icon: '🏥', title: 'Healthcare', desc: 'Hospitals, clinics, and medical centers' },
    { icon: '🎓', title: 'Education', desc: 'Universities, colleges, and boarding schools' },
    { icon: '🏛️', title: 'Government & Corporate', desc: 'Government institutions and corporate facilities' },
  ];

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Clients' }]} />

      {/* Header */}
      <section className="bg-[#1a3a8f] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Who We Serve</span>
          <h1 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Our Clients</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">Trusted by leading organisations across East Africa</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Track Record</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-6 leading-tight">Working with the Best</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Since 2011, Dabecks has had the privilege of working with prestigious organisations across hospitality, healthcare, education, and government sectors.
          </p>
        </div>
      </section>

      {/* Client List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Portfolio</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Featured Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client, i) => (
              <div key={i} className="bg-white p-5 shadow-sm border-l-4 border-[#00b4d8] flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-[#1a3a8f] text-white w-12 h-12 flex items-center justify-center font-black text-lg flex-shrink-0">
                  {client.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-black text-[#1a3a8f] text-lg">{client.name}</h3>
                  <p className="text-[#00b4d8] text-sm font-semibold">{client.sector}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Industries</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Sectors We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-8 border-2 border-gray-100 hover:border-[#00b4d8] transition-colors">
                <div className="bg-[#1a3a8f] text-white w-16 h-16 flex items-center justify-center mx-auto mb-5 text-3xl">
                  {icon}
                </div>
                <h3 className="font-black text-[#1a3a8f] text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a3a8f] text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Join Us</span>
          <h2 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Join Our Growing Client Base</h2>
          <p className="text-white/75 text-lg mb-8">Experience the same quality and service that our clients trust.</p>
          <Link href="/contact" className="inline-block bg-[#00b4d8] text-white font-bold px-8 py-4 text-sm uppercase tracking-wide hover:bg-white hover:text-[#1a3a8f] transition-colors">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

