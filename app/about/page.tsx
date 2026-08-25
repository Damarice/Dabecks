import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'About' }]} />

      {/* Page Header */}
      <section className="bg-[#1a3a8f] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Company</span>
          <h1 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">About Us</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">Learn more about Dabecks Laundry & Kitchen Solutions</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Story</span>
            <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-6 leading-tight">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Dabecks Laundry & Kitchen Solutions Ltd is a trusted mechanical partner in East Africa, providing high-performance laundry, kitchen, and air conditioning systems since 2011.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We work with hospitality, healthcare, education, and government clients to deliver durable, efficient, and tailored engineering solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Foundation</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Mission, Vision & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Mission', text: 'Deliver high-standard, reliable solutions with lasting value.' },
              { num: '02', title: 'Vision', text: "Become East Africa's preferred mechanical and utility partner." },
              { num: '03', title: 'Core Values', text: 'Innovation, Excellence, Trust, Teamwork, Professionalism.' },
            ].map(({ num, title, text }) => (
              <div key={num} className="bg-white p-8 shadow-sm border-t-4 border-[#00b4d8]">
                <div className="bg-[#1a3a8f] text-white w-14 h-14 flex items-center justify-center text-xl font-black mb-5">
                  {num}
                </div>
                <h3 className="text-xl font-black text-[#1a3a8f] mb-3">{title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Timeline</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Our Journey</h2>
          <div className="max-w-3xl space-y-5">
            {[
              { year: '2011', event: 'Launched as electrical & mechanical works' },
              { year: '2013', event: 'Entered laundry & kitchen markets' },
              { year: '2014', event: 'Registered as Limited company' },
              { year: '2017', event: 'Electrolux Professional dealership' },
              { year: '2021', event: 'Alliance Laundry Systems dealership' },
              { year: '2016–2022', event: 'Secured top clients including NAS, Radisson Blu, Utalii College' },
              { year: '2024', event: 'Milnor/Chicago dealership' },
            ].map(({ year, event }) => (
              <div key={year} className="flex items-start gap-6">
                <div className="flex-shrink-0 bg-[#1a3a8f] text-[#00b4d8] font-black text-sm px-4 py-2 min-w-[90px] text-center">
                  {year}
                </div>
                <p className="text-gray-600 text-lg pt-1">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Org Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Structure</span>
          <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-10 leading-tight">Organisational Structure</h2>
          <div className="max-w-3xl">
            <div className="bg-[#1a3a8f] text-white text-center py-4 mb-8 font-black text-lg">DIRECTOR</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { role: 'TECH-MANAGER', sub: 'TECHNICIANS', color: '#1a3a8f' },
                { role: 'ACCOUNTS & HR', sub: 'ACCOUNTS', color: '#00b4d8' },
                { role: 'SALES REP', sub: 'SALES', color: '#0e8fa8' },
              ].map(({ role, sub, color }) => (
                <div key={role}>
                  <div className="text-white text-center py-4 font-black text-sm mb-2" style={{ backgroundColor: color }}>{role}</div>
                  <div className="text-white text-center py-3 font-semibold text-sm opacity-80" style={{ backgroundColor: color }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-20 bg-[#1a3a8f] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Our Reach</span>
          <h2 className="text-white font-black text-5xl mt-3 mb-6 leading-tight">Regional Presence</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Dabecks has worked on or supported projects in Kenya and surrounding East African countries.
          </p>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We continue to explore partnerships in the Middle East and across Africa, expanding our reach and offering regional equipment support and consultancy.
          </p>
          <Link href="/contact" className="inline-block bg-[#00b4d8] text-white font-bold px-8 py-4 text-sm uppercase tracking-wide hover:bg-white hover:text-[#1a3a8f] transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

