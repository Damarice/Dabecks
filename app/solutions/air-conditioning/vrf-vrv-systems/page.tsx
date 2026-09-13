import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function VRFVRVSystems() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Air Conditioning', href: '/solutions/air-conditioning' },
        { label: 'VRF/VRV Systems' }
      ]} />

      {/* ── HERO ── */}
      <section 
        className="relative text-white py-32 flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-ac.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '480px'
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h1 className="font-black text-5xl md:text-6xl mb-6 leading-tight">VRF/VRV Systems</h1>
          <p className="text-lg md:text-xl font-normal opacity-95">Advanced multi-zone cooling and heating for large commercial facilities</p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-6">Smart Cooling for Modern Buildings</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Variable Refrigerant Flow (VRF) and Variable Refrigerant Volume (VRV) systems represent the pinnacle of commercial HVAC technology. These sophisticated systems provide individual zone control, exceptional energy efficiency, and seamless heating and cooling across large facilities—from office towers to hotels to hospitals.
            </p>
            
            <div className="space-y-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-[#1a3a8f] mb-3">Why Choose VRF/VRV Technology?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-sm">✓</span>
                    <span className="text-gray-700 font-medium">Individual zone temperature control—perfect for diverse operational needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-sm">✓</span>
                    <span className="text-gray-700 font-medium">Up to 40% energy savings versus traditional systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-sm">✓</span>
                    <span className="text-gray-700 font-medium">Simultaneous heating and cooling in different zones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-sm">✓</span>
                    <span className="text-gray-700 font-medium">Minimal ductwork reduces installation costs and improves aesthetics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-sm">✓</span>
                    <span className="text-gray-700 font-medium">Smart controls with remote monitoring and scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-sm">✓</span>
                    <span className="text-gray-700 font-medium">Rapid ROI through operational savings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#1a3a8f] to-[#0d1f52] rounded-lg p-8 text-white sticky top-8">
              <h3 className="text-2xl font-black mb-6">Quick Facts</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-[#00b4d8] font-bold text-sm uppercase tracking-wide mb-1">Capacity Range</p>
                  <p className="text-lg font-semibold">Up to 50+ zones</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] font-bold text-sm uppercase tracking-wide mb-1">Energy Rating</p>
                  <p className="text-lg font-semibold">A++ Efficiency</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] font-bold text-sm uppercase tracking-wide mb-1">Brands Supplied</p>
                  <p className="text-lg font-semibold">Electrolux, SirAir</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] font-bold text-sm uppercase tracking-wide mb-1">Installation Time</p>
                  <p className="text-lg font-semibold">Typically 2-4 weeks</p>
                </div>
              </div>
              
              <Link href="/contact" className="w-full inline-block mt-8 bg-[#00b4d8] text-[#1a3a8f] py-3 rounded font-bold text-center hover:bg-white transition-colors">
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SYSTEM TYPES ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-12 text-center">System Configurations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'VRF Cooling Only',
                desc: 'High-efficiency cooling for tropical climates and high-load facilities',
                features: ['Maximum cooling capacity', 'Optimized for heat rejection', 'Lower investment', 'Proven reliability']
              },
              {
                title: 'VRV Heat Pump',
                desc: 'Dual-function heating and cooling with energy recovery',
                features: ['Simultaneous H/C operation', 'Heat recovery capability', 'Year-round comfort', 'Energy efficient']
              },
              {
                title: 'VRV 3 Systems',
                desc: 'Next-gen technology with AI-driven optimization',
                features: ['Smart predictive control', 'Enhanced connectivity', 'Ultra-quiet operation', 'Future-ready']
              },
              {
                title: 'Modular VRF Units',
                desc: 'Scalable systems that grow with your facility',
                features: ['Add capacity anytime', 'No complete replacement', 'Flexible design', 'Cost effective']
              },
              {
                title: 'Outdoor Units',
                desc: 'Advanced condensers with low noise profiles',
                features: ['Compact footprint', 'Weather-resistant', 'Long-lasting', 'Eco-friendly refrigerant']
              },
              {
                title: 'Indoor Terminal Units',
                desc: 'Various mounting options for aesthetic integration',
                features: ['Wall-mounted units', 'Ceiling cassettes', 'Floor-standing', 'Ducted options']
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1a3a8f] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#00b4d8] font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-12">Ideal For</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Office Buildings', icon: '🏢' },
            { title: 'Hotels & Hospitality', icon: '🏨' },
            { title: 'Healthcare Facilities', icon: '🏥' },
            { title: 'Educational Campuses', icon: '🎓' },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg text-center border border-[#00b4d8]/20">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1a3a8f] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Experience the Future of Climate Control</h2>
          <p className="text-lg mb-8 opacity-90">Let's design a VRF/VRV system tailored to your facility's unique needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#00b4d8] text-[#1a3a8f] font-bold py-4 px-8 rounded hover:bg-white transition-colors inline-block">
              Schedule Assessment
            </Link>
            <Link href="/solutions/air-conditioning" className="bg-white/20 text-white font-bold py-4 px-8 rounded border-2 border-white hover:bg-white/30 transition-colors inline-block">
              Explore AC Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
