import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function InstallationServices() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Installation Services' }]} />

      <section className="relative text-white flex items-center justify-center" style={{ backgroundImage: "url('/hero-ac.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '520px' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a8f]/50 via-[#1a3a8f]/60 to-[#1a3a8f]/75" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-4">Air Conditioning</p>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">Installation Services</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">Professional HVAC installation, commissioning, and handover by certified engineers across East Africa.</p>
        </div>
      </section>

      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-3">Expert installation. Every time.</h2>
            <div className="w-12 h-1 bg-[#00b4d8] mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed">Our certified HVAC engineers handle every aspect of your air conditioning installation — from site survey and design through to commissioning, testing, and staff handover. We work with all major brands and all system types.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[{ icon: '📐', title: 'Site Survey & Design', desc: 'Detailed site assessment and system design to ensure optimal performance and efficiency for your specific building.' }, { icon: '🔧', title: 'Professional Installation', desc: 'Our certified engineers install all equipment to manufacturer standards, ensuring warranty compliance and safe operation.' }, { icon: '✅', title: 'Commissioning & Handover', desc: 'Full system testing, performance verification, and operator training before handover — so your team is fully prepared.' }].map((s, i) => (
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
          <h2 className="text-4xl font-black text-[#1a1a1a] mb-2">What We Install</h2>
          <div className="w-10 h-1 bg-[#00b4d8] mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['Split Units', 'VRF/VRV Systems', 'Ducted Systems', 'Cassette Units', 'Chiller Systems', 'Air Handling Units'].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <div className="w-8 h-1 bg-[#00b4d8] mb-4" />
                <p className="text-xl font-black text-[#1a3a8f]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a3a8f] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Ready to plan your installation?</h2>
            <p className="text-[#00b4d8] text-lg font-medium">Get a free site survey and installation quote.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-[#00b4d8] text-white font-black py-4 px-10 text-base uppercase tracking-widest hover:bg-white hover:text-[#1a3a8f] transition-colors">Request a Survey</Link>
        </div>
      </section>
    </div>
  );
}
