'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import { useState } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface FeaturedProduct {
  title: string;
  desc: string;
  image: string;
  href: string;
}

interface Category {
  label: string;
  href: string;
  image: string;
}

interface Standard {
  icon: string;
  title: string;
  desc: string;
}

interface Customer {
  name: string;
  type: string;
  quote: string;
  image: string;
}

interface NewsItem {
  date: string;
  title: string;
  desc: string;
  image: string;
}

interface CategoryLandingPageProps {
  breadcrumbs: BreadcrumbItem[];
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  featured: FeaturedProduct[];
  categories: Category[];
  standards: Standard[];
  customers: Customer[];
  news: NewsItem[];
}

export default function CategoryLandingPage({
  breadcrumbs,
  heroImage,
  heroTitle,
  heroSubtitle,
  introTitle,
  introText,
  featured,
  categories,
  standards,
  customers,
  news,
}: CategoryLandingPageProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbs} />

      {/* ── HERO ── */}
      <section
        className="relative text-white flex items-end justify-center"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          minHeight: '520px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pb-16 pt-32">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">{heroTitle}</h1>
          <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">{heroSubtitle}</p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">{introTitle}</h2>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{introText}</p>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-2 text-center">Featured Products</h2>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <div key={i} className="bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#1a3a8f]/30 group-hover:bg-[#1a3a8f]/10 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#1a3a8f] mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{p.desc}</p>
                  <Link href={p.href} className="inline-block bg-[#1a3a8f] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#00b4d8] transition-colors">
                    Explore Range
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-2 text-center">Product Categories</h2>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-12" />
          <div className={`grid gap-4 ${categories.length <= 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'}`}>
            {categories.map((cat, i) => (
              <Link key={i} href={cat.href} className="group relative overflow-hidden block">
                <div className="relative h-40 overflow-hidden">
                  <img src={cat.image} alt={cat.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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

      {/* ── STANDARDS ── */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-2 text-center">Our Standards</h2>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {standards.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-black text-[#1a3a8f] mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMERS ── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-1 text-center">Our Customers</h2>
          <p className="text-center text-gray-500 text-sm mb-2">Real stories. Real results.</p>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customers.map((c, i) => (
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

      {/* ── NEWS ── */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-2 text-center">Our Latest News</h2>
          <div className="w-12 h-1 bg-[#00b4d8] mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((n, i) => (
              <div key={i} className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a8f] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a8f] transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+254 000 000 000" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a8f] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Company / Organisation</label>
                <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your company name" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a8f] transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Your Requirements</label>
              <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe your needs..." className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a8f] transition-colors resize-none" />
            </div>
            <div className="pt-2">
              <button type="submit" className="bg-[#1a3a8f] text-white font-black text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#00b4d8] transition-colors">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
