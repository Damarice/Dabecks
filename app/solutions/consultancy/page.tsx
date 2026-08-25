import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

export default function ConsultancySolutions() {
  const steps = [
    { num: '1', title: 'Initial Consultation', desc: 'Understanding your needs, challenges, and objectives through detailed discussions.' },
    { num: '2', title: 'Site Assessment', desc: 'On-site evaluation of your space, utilities, and existing infrastructure.' },
    { num: '3', title: 'Analysis & Recommendations', desc: 'Comprehensive analysis with actionable recommendations and cost projections.' },
    { num: '4', title: 'Implementation Support', desc: 'Ongoing guidance during procurement, installation, and commissioning phases.' },
  ];

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Consultancy' }]} />

      {/* Header */}
      <section className="bg-[#1a3a8f] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Solutions</span>
          <h1 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Engineering Consultancy</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">Expert guidance from concept to completion for your projects</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Approach</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-6 leading-tight">Tailored Engineering Solutions</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every facility is different. Our consultancy service ensures you get the right equipment, properly sized, correctly installed, and optimally configured for your specific operation.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">How We Work</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="bg-white p-8 border border-gray-100 shadow-sm hover:border-[#00b4d8] transition-colors">
                <div className="bg-[#1a3a8f] text-[#00b4d8] font-black text-3xl w-14 h-14 flex items-center justify-center mb-5">
                  {num}
                </div>
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
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">What We Cover</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Consultancy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Equipment Sizing & Selection', desc: 'We help you choose the right equipment capacity and specifications for your throughput and space.' },
              { title: 'Layout & Design', desc: 'Optimised kitchen, laundry, and HVAC layouts for efficiency, safety, and compliance.' },
              { title: 'Energy Audits', desc: 'Analysis of energy consumption with recommendations to reduce operating costs.' },
              { title: 'Procurement Guidance', desc: 'Vendor evaluation, specification writing, and procurement process support.' },
              { title: 'Project Management', desc: 'End-to-end coordination of installation, commissioning, and handover.' },
              { title: 'Training & Documentation', desc: 'Operator training and comprehensive documentation for your team.' },
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
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Work With Us</span>
          <h2 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Start Your Project Today</h2>
          <p className="text-white/75 text-lg mb-8">Talk to our engineers for a free initial consultation on your facility needs.</p>
          <Link href="/contact" className="inline-block bg-[#00b4d8] text-white font-bold px-8 py-4 text-sm uppercase tracking-wide hover:bg-white hover:text-[#1a3a8f] transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

