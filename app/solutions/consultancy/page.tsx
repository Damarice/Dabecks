import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Equipment Sizing & Selection',
    desc: 'We assess your throughput, space, and utility constraints to recommend the right equipment capacity and specifications.',
  },
  {
    num: '02',
    title: 'Layout & Design',
    desc: 'Optimised kitchen, laundry, and HVAC layouts engineered for workflow efficiency, safety, and regulatory compliance.',
  },
  {
    num: '03',
    title: 'Energy Audits',
    desc: 'We analyse your energy and utility consumption and recommend practical measures to reduce long-term operating costs.',
  },
  {
    num: '04',
    title: 'Procurement Guidance',
    desc: 'Specification writing, vendor evaluation, and full procurement process support from first draft to final order.',
  },
  {
    num: '05',
    title: 'Project Management',
    desc: 'End-to-end coordination across installation, commissioning, and handover — on time and within budget.',
  },
  {
    num: '06',
    title: 'Training & Documentation',
    desc: 'Hands-on operator training and comprehensive technical documentation for your team.',
  },
];

const steps = [
  { title: 'Consultation', desc: 'We listen. Understand your facility, goals, and constraints before recommending anything.' },
  { title: 'Site Assessment', desc: 'On-site evaluation of your space, utilities, and existing infrastructure.' },
  { title: 'Recommendations', desc: 'A clear, costed proposal with equipment specifications and layout options.' },
  { title: 'Implementation', desc: 'We stay with you through procurement, installation, and commissioning.' },
];

export default function ConsultancySolutions() {
  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Consultancy' }]} />

      {/* ── HERO ── */}
      <section
        className="relative text-white py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url("/hero-consultancy.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#1a3a8f]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Solutions</span>
          <h1 className="text-white font-black text-4xl md:text-5xl mt-3 mb-4 leading-tight">Engineering Consultancy</h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
            Expert guidance from concept to completion — for kitchens, laundries, and HVAC systems across East Africa.
          </p>
        </div>
      </section>

      {/* ── INTRO + IMAGE ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Approach</span>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 mb-6 leading-tight">
                Every facility is different.<br />We treat it that way.
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                Most equipment problems start with poor planning. Wrong sizing, bad layouts, and missed utility requirements cost businesses far more to fix later than to get right upfront.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Our engineers work with you from the first conversation through to handover — ensuring your facility is set up correctly, efficiently, and built to last.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1a3a8f] text-white font-bold px-7 py-4 text-base uppercase tracking-wide hover:bg-[#00b4d8] transition-colors"
              >
                Request a Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/hero-consultancy.jpg"
                alt="Engineering consultancy"
                className="w-full h-64 md:h-[460px] object-cover"
              />
              {/* Floating stat */}
              <div className="absolute bottom-0 left-0 bg-[#00b4d8] text-white px-6 py-5">
                <div className="font-black text-3xl md:text-4xl leading-none">13+</div>
                <div className="text-sm md:text-base font-semibold mt-1">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-10 md:mb-14">
            <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">What We Cover</span>
            <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 leading-tight">Consultancy Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {services.map(({ num, title, desc }) => (
              <div key={num} className="bg-white p-6 md:p-8 hover:bg-[#1a3a8f] transition-colors group">
                <div className="text-[#00b4d8] font-black text-4xl leading-none mb-5 group-hover:text-white/40 transition-colors">
                  {num}
                </div>
                <h3 className="font-black text-[#1a3a8f] text-base md:text-lg mb-3 group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-white/75 transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-10 md:mb-14">
            <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">How We Work</span>
            <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mt-3 leading-tight">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200">
            {steps.map(({ title, desc }, i) => (
              <div key={i} className="relative p-6 md:p-8 border-r border-gray-200 last:border-r-0 hover:bg-gray-50 transition-colors group">
                {/* Step number */}
                <div className="text-[#1a3a8f]/10 font-black text-7xl leading-none absolute top-4 right-4 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {/* Cyan top bar */}
                <div className="w-10 h-1 bg-[#00b4d8] mb-6" />
                <h3 className="font-black text-[#1a3a8f] text-base md:text-lg mb-3 relative">{title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed relative">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url("/hero-about.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">
                Start Your Project Today
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                Talk to our engineers for a free initial consultation on your facility needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1a3a8f] text-white font-bold px-8 py-4 text-base uppercase tracking-wide hover:bg-white hover:text-[#1a3a8f] transition-colors"
              >
                Book a Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+254729212254"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a3a8f] font-bold px-8 py-4 text-base uppercase tracking-wide hover:bg-[#1a3a8f] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +254 729 212 254
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
