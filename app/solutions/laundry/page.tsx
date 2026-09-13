'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';
import { useState } from 'react';

export default function LaundryPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        image="/hero-laundry.jpg"
        eyebrow="Solutions"
        heading="Commercial Laundry Solutions"
        subtext="We bring a complete laundry system to your door, designed to meet your professional needs and deliver exceptional results — every cycle."
        breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Laundry Equipment' }]}
      />

      {/* ── INTRO: A NEW GENERATION ── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">A New Generation Begins</h2>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our latest range of professional laundry equipment sets a new benchmark in energy efficiency, ergonomics, and reliability — built for the demands of modern commercial operations.
          </p>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-2 text-center">Featured Products</h2>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'High-Efficiency Commercial Washers',
                desc: 'Front-load washers with up to 40% energy savings, designed for hotels, hospitals, and large-scale laundry operations.',
                image: '/hero-laundry.jpg',
                href: '/solutions/laundry/commercial-washers',
              },
              {
                title: 'Heat Pump Dryers',
                desc: 'Next-generation tumble dryers with heat pump technology — dramatically lower energy use without compromising on drying performance.',
                image: '/hero-laundry.jpg',
                href: '/solutions/laundry/industrial-dryers',
              },
              {
                title: 'Flatwork Ironers',
                desc: 'Professional ironers for high-volume flatwork finishing. Fast, consistent results for linen, tablecloths, and uniforms.',
                image: '/hero-laundry.jpg',
                href: '/solutions/laundry/ironers-presses',
              },
            ].map((p, i) => (
              <div key={i} className="bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1a3a8f]/30 group-hover:bg-[#1a3a8f]/10 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#1a3a8f] mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{p.desc}</p>
                  <Link
                    href={p.href}
                    className="inline-block bg-[#1a3a8f] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#00b4d8] transition-colors"
                  >
                    Explore Range
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY PRODUCTS ── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-2 text-center">Category Products</h2>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers', image: '/hero-laundry.jpg' },
              { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers', image: '/hero-laundry.jpg' },
              { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses', image: '/hero-laundry.jpg' },
              { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors', image: '/hero-laundry.jpg' },
              { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment', image: '/hero-laundry.jpg' },
              { label: 'Accessories', href: '/solutions/laundry/accessories', image: '/hero-laundry.jpg' },
            ].map((cat, i) => (
              <Link key={i} href={cat.href} className="group relative overflow-hidden block">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1a3a8f]/50 group-hover:bg-[#1a3a8f]/70 transition-colors" />
                  <div className="absolute inset-0 flex items-end p-3">
                    <p className="text-white text-xs font-black uppercase leading-tight">{cat.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STANDARDS ── */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-2 text-center">Our Standards</h2>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '⚡', title: 'Energy Efficiency', desc: 'Up to 40% reduction in water and energy consumption across our entire range.' },
              { icon: '🔒', title: 'Reliability', desc: 'Every product is tested for continuous commercial use before leaving the factory.' },
              { icon: '🛠️', title: 'Service Support', desc: 'Full installation, maintenance, and repair services across East Africa.' },
              { icon: '✅', title: 'Certified Quality', desc: 'International certifications including energy and hygiene compliance standards.' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-black text-[#1a3a8f] mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR CUSTOMERS ── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-1 text-center">Our Customers</h2>
          <p className="text-center text-gray-500 text-sm mb-2">Real stories. Real results.</p>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Nairobi Serena Hotel',
                type: 'Hospitality',
                quote: 'The new washers cut our energy bill by 35% in the first quarter. The reliability and after-sales support has been outstanding.',
                image: '/about-team.jpg',
              },
              {
                name: 'Aga Khan Hospital',
                type: 'Healthcare',
                quote: 'Hygiene compliance is non-negotiable for us. Dabecks delivered certified equipment and handles all our maintenance — completely stress-free.',
                image: '/about-journey.jpg',
              },
              {
                name: 'Kenya School of Government',
                type: 'Institution',
                quote: 'We equipped our entire laundry facility with Dabecks equipment. Excellent service from consultation right through to installation.',
                image: '/hero-clients.jpg',
              },
            ].map((c, i) => (
              <div key={i} className="border border-gray-200 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#1a3a8f]/50" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-[#00b4d8] text-xs font-bold uppercase tracking-widest">{c.type}</p>
                    <p className="text-white text-lg font-black">{c.name}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 leading-relaxed italic">&ldquo;{c.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR LATEST NEWS ── */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-2 text-center">Our Latest News</h2>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: 'March 2026',
                title: 'New Heat Pump Dryer Range Now Available in East Africa',
                desc: 'Dabecks introduces the latest heat pump tumble dryer technology — offering up to 60% energy savings compared to conventional dryers.',
                image: '/hero-laundry.jpg',
              },
              {
                date: 'January 2026',
                title: 'Dabecks Equips Largest Hotel Laundry in Nairobi',
                desc: 'A major 5-star hotel in Nairobi completed a full laundry refit with Dabecks — 24 washers, 18 dryers, and flatwork ironers.',
                image: '/hero-clients.jpg',
              },
              {
                date: 'November 2025',
                title: 'Commercial Laundry Maintenance: What You Need to Know',
                desc: 'Our technical team shares the top maintenance tips to extend equipment life and avoid costly downtime in commercial laundry facilities.',
                image: '/about-journey.jpg',
              },
            ].map((n, i) => (
              <div key={i} className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#00b4d8] text-xs font-bold uppercase tracking-widest mb-2">{n.date}</p>
                  <h3 className="text-base font-black text-[#1a3a8f] mb-3 leading-snug">{n.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-2 text-center">Tell us your needs</h2>
          <p className="text-center text-gray-500 text-base mb-2">We&apos;ll design the right solution for you.</p>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-10" />

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a8f] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a8f] transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+254 000 000 000"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a8f] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Company / Organisation</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Your company name"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a8f] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Your Requirements</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe your laundry needs — number of machines, daily volume, facility type..."
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a8f] transition-colors resize-none"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#1a3a8f] text-white font-black text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#00b4d8] transition-colors"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
