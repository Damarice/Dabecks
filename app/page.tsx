import Link from 'next/link';
import HomepageHeroSlider from '@/app/components/HomepageHeroSlider';

// ── Shared style tokens ───────────────────────────────────────────────────────
// eyebrow:   cyan, 12px, bold, uppercase, wide tracking
// h2:        navy, font-black, text-5xl, tight leading
// body:      gray-600, text-lg (16px), relaxed
// section-white:   bg-white  py-20
// section-gray:    bg-gray-50 py-20
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-white" style={{ fontFamily: "'Nunito', Arial, sans-serif" }}>
      {/* ── HERO ── */}
      <HomepageHeroSlider />

      {/* ── SOLUTIONS OVERVIEW ── bg-white ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-8 pb-16 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                img: '/hero-laundry.jpg',
                title: 'Commercial Laundry\nSolutions',
                href: '/solutions/laundry',
              },
              {
                img: '/hero-kitchen.jpg',
                title: 'Commercial Kitchen\nSolutions',
                href: '/solutions/kitchen',
              },
              {
                img: '/hero-ac.jpg',
                title: 'Commercial\nBeverage Solutions',
                href: '/solutions/air-conditioning',
              },
            ].map(({ img, title, href }) => (
              <div key={href} className="group relative overflow-hidden h-96 md:h-[420px] shadow-lg hover:shadow-2xl transition-shadow">
                {/* Background image */}
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-all duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-8">
                  <h2 className="text-white font-black text-4xl md:text-5xl mb-10 leading-tight whitespace-pre-line" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.2rem)' }}>{title}</h2>
                  <Link
                    href={href}
                    className="inline-block bg-[#00b4d8] text-white font-bold px-10 py-3 hover:bg-[#0099bb] transition-all duration-300 text-base md:text-lg"
                  >
                    Discover more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHORISED PARTNER ── bg-gray-50 ── */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="text-[#00b4d8] text-xs md:text-sm font-bold uppercase tracking-widest block mb-2">About Dabecks</span>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mb-4 md:mb-6 leading-tight">
                We are long-term<br />Authorised Partner &<br />mechanical experts
              </h2>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-3 md:mb-4">
                Since 2011, Dabecks has been East Africa's trusted commercial equipment partner. We serve hotels, hospitals, universities, and government institutions.
              </p>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                Authorised dealer for Alliance Laundry Systems, Electrolux Professional, and Milnor — backed by certified technicians and a dedicated after-sales team.
              </p>
              <div className="flex items-center gap-6 md:gap-10 mb-6 md:mb-8 flex-wrap">
                {[
                  { num: '15+', label: 'Years Experience' },
                  { num: '100+', label: 'Clients Served' },
                  { num: '3', label: 'Brand Dealerships' },
                ].map(({ num, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-[#00b4d8] font-black text-4xl md:text-5xl leading-none">{num}</div>
                    <div className="text-gray-500 text-xs md:text-lg mt-1 font-semibold">{label}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-block bg-[#1a3a8f] text-white font-bold px-6 md:px-7 py-3 md:py-3.5 text-xs md:text-sm uppercase tracking-wide hover:bg-[#00b4d8] transition-colors">
                More About Dabecks
              </Link>
            </div>
            <div className="relative">
              <img
                src="/home-partner.jpg"
                alt="Professional team"
                className="w-full h-auto md:h-[480px] object-cover"
              />
              <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 w-24 md:w-36 h-24 md:h-36 rounded-full bg-[#1a3a8f] flex flex-col items-center justify-center shadow-2xl border-4 border-white">
                <span className="text-[#00b4d8] font-black text-3xl md:text-5xl leading-none">25</span>
                <span className="text-white text-xs md:text-sm font-semibold text-center mt-1 leading-tight px-2 md:px-3">years in<br />the business</span>
              </div>
              <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 bg-[#00b4d8] text-white p-4 md:p-7 shadow-2xl">
                <div className="font-black text-3xl md:text-5xl leading-none mb-1 md:mb-2">1500+</div>
                <div className="text-xs md:text-sm font-semibold leading-tight">Clients in<br />East Africa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR NEWS ── bg-white ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 md:mb-12 gap-4">
            <div>
              <span className="text-[#00b4d8] text-xs md:text-sm font-bold uppercase tracking-widest block mb-1">Latest Updates</span>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl">Our News</h2>
            </div>
            <Link href="/about" className="text-[#1a3a8f] text-xs md:text-sm font-bold hover:text-[#00b4d8] transition-colors inline-flex items-center gap-1 flex-shrink-0">
              View all
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
            {[
              { day: '27', month: 'Mar', title: 'Dabecks expands service coverage across East Africa', img: '/hero-about.jpg' },
              { day: '28', month: 'Feb', title: 'New Milnor dealership strengthens industrial laundry offering', img: '/hero-laundry.jpg' },
              { day: '27', month: 'Jan', title: 'Electrolux Professional training completed by our technicians', img: '/hero-kitchen.jpg' },
            ].map(({ day, month, title, img }) => (
              <div key={day + month} className="bg-white border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow overflow-hidden">
                <div className="overflow-hidden h-40 md:h-48">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="bg-[#00b4d8] text-white text-center px-2 md:px-3 py-1 md:py-2 leading-none flex-shrink-0">
                      <div className="font-black text-base md:text-xl">{day}</div>
                      <div className="text-xs md:text-sm font-bold uppercase mt-0.5">{month}</div>
                    </div>
                    <span className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wide">News</span>
                  </div>
                  <h4 className="text-[#1a3a8f] font-bold text-sm md:text-lg leading-snug group-hover:text-[#00b4d8] transition-colors">{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL SOLUTION ── bg-gray-50 ── */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/home-chef.jpg"
                alt="Professional chef"
                className="w-full h-auto md:h-[460px] object-cover"
              />
              <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 bg-white px-3 md:px-4 py-2 md:py-3 shadow-xl flex items-center gap-2 md:gap-3">
                <div className="w-7 md:w-9 h-7 md:h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 md:w-4 h-3 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#1a3a8f] font-bold text-xs md:text-sm">ISO Certified</div>
                  <div className="text-gray-400 text-xs md:text-sm">Quality Guaranteed</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#00b4d8] text-xs md:text-sm font-bold uppercase tracking-widest block mb-2">Why Choose Us</span>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mb-4 md:mb-6 leading-tight">
                Professional Solution<br />for Professional<br />Results
              </h2>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-3 md:mb-4">
                Reliable equipment is the backbone of every hotel, hospital, and institution. When your kitchen or laundry systems fail, operations stop.
              </p>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                Dabecks partners with world-class brands and backs every installation with expert commissioning, staff training, and ongoing maintenance.
              </p>
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {[
                  'Authorised dealerships with genuine parts',
                  'Certified installation and commissioning',
                  'Preventive maintenance contracts',
                  'Rapid response repair service',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-[#00b4d8] flex items-center justify-center flex-shrink-0">
                      <svg className="w-2 md:w-3 h-2 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/solutions/consultancy" className="inline-flex items-center gap-2 text-[#1a3a8f] font-bold text-xs md:text-sm hover:text-[#00b4d8] transition-colors">
                Learn about our consultancy
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── bg-white ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

            {/* Form */}
            <div>
              <span className="text-[#00b4d8] text-xs md:text-sm font-bold uppercase tracking-widest block mb-2">Get in Touch</span>
              <h2 className="text-[#1a3a8f] font-black text-3xl md:text-5xl mb-2 md:mb-3 leading-tight">Send Us a Message</h2>
              <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-8">Have a project? Get a free consultation from our team.</p>
              <form className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <input type="text" placeholder="Full Name *" className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a3a8f] text-xs md:text-sm font-medium bg-white" />
                  <input type="text" placeholder="Company / Organisation" className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a3a8f] text-xs md:text-sm font-medium bg-white" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <input type="email" placeholder="Email Address *" className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a3a8f] text-xs md:text-sm font-medium bg-white" />
                  <input type="tel" placeholder="Phone Number *" className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a3a8f] text-xs md:text-sm font-medium bg-white" />
                </div>
                <select className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 text-gray-600 focus:outline-none focus:border-[#1a3a8f] text-xs md:text-sm font-medium bg-white">
                  <option value="">Select a Service</option>
                  <option value="laundry">Laundry Equipment</option>
                  <option value="kitchen">Kitchen Systems</option>
                  <option value="ac">Air Conditioning</option>
                  <option value="consultancy">Consultancy</option>
                </select>
                <textarea rows={4} placeholder="Your Message *" className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a3a8f] text-xs md:text-sm font-medium resize-none bg-white" />
                <button type="submit" className="bg-[#1a3a8f] text-white font-bold px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm uppercase tracking-widest hover:bg-[#00b4d8] transition-colors w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info card */}
            <div className="bg-gray-50 border border-gray-200 p-5 md:p-8 flex flex-col">
              <img src="/logo.png" alt="Dabecks" className="h-10 md:h-14 mb-4 md:mb-5 object-contain object-left" />
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 border-b border-gray-200 pb-6 md:pb-8">
                Your trusted partner for commercial laundry, kitchen, and air conditioning solutions across East Africa since 2011.
              </p>
              <div className="space-y-4 md:space-y-6 flex-1">
                {[
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />, label: 'Phone', value: '+254 729 212 254\n+254 733 788 357' },
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />, label: 'Email', value: 'info@dabeckslaundry.com' },
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />, label: 'Location', value: 'Baraka Estate, Airport North Road\nNairobi, Kenya' },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-[#1a3a8f] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 md:w-4 h-3 md:h-4 text-[#00b4d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <div>
                      <div className="text-[#1a3a8f] font-bold text-xs md:text-sm uppercase tracking-wide mb-1">{label}</div>
                      <div className="text-gray-600 text-sm md:text-lg leading-relaxed whitespace-pre-line">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                <div className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wide mb-2">Business Hours</div>
                <div className="text-gray-600 text-sm md:text-lg">Mon – Fri: 8:00 AM – 5:00 PM</div>
                <div className="text-gray-600 text-sm md:text-lg">Saturday: 9:00 AM – 1:00 PM</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

