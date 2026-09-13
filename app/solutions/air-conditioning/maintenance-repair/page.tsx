import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function MaintenanceRepair() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Maintenance & Repair' }]} />

      <section className="relative text-white flex items-center justify-center" style={{ backgroundImage: "url('/hero-ac.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '520px' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a8f]/50 via-[#1a3a8f]/60 to-[#1a3a8f]/75" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-4">Air Conditioning</p>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">Maintenance & Repair</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">Planned maintenance contracts and responsive repair services to keep your AC systems running at peak performance year-round.</p>
        </div>
      </section>

      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-3">Keep your systems performing.</h2>
            <div className="w-12 h-1 bg-[#00b4d8] mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed">Regular maintenance extends equipment life, maintains energy efficiency, and prevents costly breakdowns. Our service contracts cover all brands and all system types, with fast response times across East Africa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[{ icon: '📅', title: 'Planned Maintenance', desc: 'Scheduled service visits ensure your systems are cleaned, checked, and optimised before problems arise.' }, { icon: '⚡', title: 'Emergency Repair', desc: 'Fast-response breakdown service with same-day or next-day attendance across our service area.' }, { icon: '📊', title: 'Performance Monitoring', desc: 'Regular efficiency checks and data logging to identify issues early and optimise energy performance.' }].map((s, i) => (
              <div key={i}>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-2xl font-black text-[#1a3a8f] mb-3">{s.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl font-black text-[#1a1a1a] mb-2">Service Contract Inclusions</h2>
          <div className="w-10 h-1 bg-[#00b4d8] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Filter Cleaning & Replacement', desc: 'Regular filter service maintains air quality and system efficiency.' },
              { title: 'Coil Cleaning', desc: 'Evaporator and condenser coil cleaning restores heat exchange performance.' },
              { title: 'Refrigerant Check', desc: 'Leak detection and refrigerant level verification at every visit.' },
              { title: 'Electrical Inspection', desc: 'Full electrical safety check including connections, capacitors, and controls.' },
              { title: 'Drainage System Service', desc: 'Condensate drain cleaning to prevent water damage and leaks.' },
              { title: 'Performance Report', desc: 'Written report after every visit with findings and recommendations.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200 flex gap-4">
                <div className="w-1 bg-[#00b4d8] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-black text-[#1a3a8f] mb-2">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a3a8f] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Get a maintenance contract.</h2>
            <p className="text-[#00b4d8] text-lg font-medium">Protect your investment with a tailored service plan.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-[#00b4d8] text-white font-black py-4 px-10 text-base uppercase tracking-widest hover:bg-white hover:text-[#1a3a8f] transition-colors">Request a Quote</Link>
        </div>
      </section>
    </div>
  );
}
