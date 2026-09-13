import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function IronersAndPresses() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses' }
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
          <h1 className="font-black text-5xl md:text-6xl mb-6 leading-tight">Ironers & Presses</h1>
          <p className="text-lg md:text-xl font-normal opacity-95">Professional pressing solutions for commercial laundries and hospitality operations</p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-6">Precision Pressing for Every Load</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our ironers and presses deliver professional-grade finishing for high-volume laundry operations. From flat work finishing to specialized garment pressing, we provide solutions that save time, reduce labor costs, and ensure consistent, professional results every single time.
            </p>
            
            <div className="space-y-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-[#1a3a8f] mb-3">Why Choose Our Ironing Solutions?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-sm">✓</span>
                    <span className="text-gray-700 font-medium">Automated precision finishing with minimal operator training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-sm">✓</span>
                    <span className="text-gray-700 font-medium">Dramatically increased productivity compared to manual pressing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-sm">✓</span>
                    <span className="text-gray-700 font-medium">Uniform results that enhance your reputation with clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-sm">✓</span>
                    <span className="text-gray-700 font-medium">Energy-efficient designs reduce operating costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00b4d8] text-white font-bold flex-shrink-0 text-sm">✓</span>
                    <span className="text-gray-700 font-medium">Durable, proven equipment with long service life</span>
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
                  <p className="text-[#00b4d8] font-bold text-sm uppercase tracking-wide mb-1">Processing Capacity</p>
                  <p className="text-lg font-semibold">Up to 2,500+ items/hour</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] font-bold text-sm uppercase tracking-wide mb-1">Typical Investment</p>
                  <p className="text-lg font-semibold">Financing available</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] font-bold text-sm uppercase tracking-wide mb-1">Brands Supplied</p>
                  <p className="text-lg font-semibold">Alliance, UniMac, Primus</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] font-bold text-sm uppercase tracking-wide mb-1">Warranty</p>
                  <p className="text-lg font-semibold">Full coverage + support</p>
                </div>
              </div>
              
              <Link href="/contact" className="w-full inline-block mt-8 bg-[#00b4d8] text-[#1a3a8f] py-3 rounded font-bold text-center hover:bg-white transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT TYPES ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-12 text-center">Our Equipment Range</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Flat Work Ironers',
                desc: 'High-capacity automated ironing for sheets, tablecloths, and flat items',
                features: ['Adjustable temperature', 'Variable speed control', 'Wide roll diameter', 'Steam or electric']
              },
              {
                title: 'Steam Presses',
                desc: 'Professional pressing for garments, uniforms, and delicate fabrics',
                features: ['Precision pressure adjustment', 'Quick heat recovery', 'Ergonomic design', 'Commercial duty']
              },
              {
                title: 'Collar & Cuff Presses',
                desc: 'Specialized equipment for shirt collars, cuffs, and delicate details',
                features: ['Automated cycle timing', 'Multiple size options', 'Quick changeover', 'Consistent results']
              },
              {
                title: 'Form Finishers',
                desc: 'Body pressing equipment for complete garment finishing',
                features: ['Adjustable height', 'Steam saturation control', 'Smooth operation', 'Energy efficient']
              },
              {
                title: 'Sleeve Pressing',
                desc: 'Dedicated equipment for sleeve finishing and detail work',
                features: ['Precise temperature', 'Variable pressure', 'Quick release', 'Professional finish']
              },
              {
                title: 'Continuous Processing',
                desc: 'Combination systems for integrated laundry workflows',
                features: ['Seamless integration', 'High throughput', 'Quality consistent', 'Reduced bottlenecks']
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
        <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-12">Perfect For</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Hotels & Resorts', icon: '🏨' },
            { title: 'Hospitals & Healthcare', icon: '🏥' },
            { title: 'Commercial Laundries', icon: '🧺' },
            { title: 'Educational Institutions', icon: '🎓' },
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Upgrade Your Pressing System?</h2>
          <p className="text-lg mb-8 opacity-90">Contact our team for a facility assessment and customized quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#00b4d8] text-[#1a3a8f] font-bold py-4 px-8 rounded hover:bg-white transition-colors inline-block">
              Request Consultation
            </Link>
            <Link href="/solutions/laundry" className="bg-white/20 text-white font-bold py-4 px-8 rounded border-2 border-white hover:bg-white/30 transition-colors inline-block">
              Explore All Laundry Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
