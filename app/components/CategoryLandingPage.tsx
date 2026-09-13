'use client';

import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';
import { useState } from 'react';

interface BreadcrumbItem { label: string; href?: string; }
interface FeaturedProduct { title: string; desc: string; image: string; href: string; }
interface Category        { label: string; href: string; image: string; }
interface Standard        { icon: string; title: string; desc: string; }
interface Customer        { name: string; type: string; quote: string; image: string; }
interface NewsItem        { date: string; title: string; desc: string; image: string; }

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
  breadcrumbs, heroImage, heroTitle, heroSubtitle,
  introTitle, introText, featured, categories, standards, customers, news,
}: CategoryLandingPageProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  return (
    <div>
      <PageHero image={heroImage} heading={heroTitle} subtext={heroSubtitle} breadcrumbs={breadcrumbs} />

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>Overview</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem' }}>{introTitle}</h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', lineHeight: '1.65' }}>{introText}</p>
            </div>
            {/* Standards tiles */}
            <div className="grid grid-cols-2 gap-4">
              {standards.map((s, i) => (
                <div key={i} style={{ background: 'var(--color-surface)', padding: '1.5rem', borderTop: '3px solid var(--color-brand-cyan)' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.625rem', lineHeight: 1 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.375rem' }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: '1.55' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────────────────────── */}
      <section style={{ background: 'var(--color-surface)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Featured</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Featured Products</h2>
            <span className="ds-accent-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                style={{
                  display: 'block',
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'box-shadow 200ms ease, transform 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 350ms ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                </div>
                <div style={{ padding: '1.5rem', borderTop: '3px solid var(--color-brand-cyan)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.5rem', lineHeight: 1.25 }}>{p.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: '1.55' }}>{p.desc}</p>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-brand-cyan)' }}>Explore Range →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES GRID ────────────────────────────────────── */}
      <section style={{ background: '#ffffff', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Browse by category</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Product Categories</h2>
            <span className="ds-accent-line" />
          </div>
          <div
            className={categories.length <= 4 ? 'grid grid-cols-2 md:grid-cols-4 gap-4' : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3'}
          >
            {categories.map((cat, i) => (
              <Link key={i} href={cat.href} style={{ display: 'block', overflow: 'hidden', textDecoration: 'none', position: 'relative' }}>
                <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                  <img src={cat.image} alt={cat.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 350ms ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                  <div
                    style={{
                      position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '0.75rem',
                      background: 'linear-gradient(to top, rgba(10,20,60,0.82) 0%, rgba(10,20,60,0.2) 60%, transparent 100%)',
                    }}
                  >
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1.3 }}>
                      {cat.label}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMERS ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-surface)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Social Proof</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Real stories. Real results.</h2>
            <span className="ds-accent-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customers.map((c, i) => (
              <div key={i} style={{ border: '1px solid var(--color-border)', overflow: 'hidden', background: '#ffffff' }}>
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={c.image} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,58,143,0.85) 0%, transparent 60%)', display: 'flex', alignItems: 'flex-end', padding: '1.25rem' }}>
                    <div>
                      <span className="ds-eyebrow" style={{ display: 'block', color: 'var(--color-brand-cyan)', marginBottom: '0.25rem' }}>{c.type}</span>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>{c.name}</p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ color: 'var(--color-brand-cyan)', fontSize: '1.75rem', lineHeight: 1, fontFamily: 'Georgia, serif', marginBottom: '0.375rem' }}>&ldquo;</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-muted)', fontStyle: 'italic', lineHeight: '1.6' }}>{c.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS ────────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Stay Informed</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Latest News</h2>
            <span className="ds-accent-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <article key={i} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', overflow: 'hidden', transition: 'box-shadow 200ms ease', cursor: 'pointer' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img src={n.image} alt={n.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 350ms ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>{n.date}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-brand-navy)', lineHeight: 1.3, marginBottom: '0.5rem' }}>{n.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: '1.55' }}>{n.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-surface)', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid var(--color-border)' }}>
        <div className="ds-container" style={{ maxWidth: '680px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Free Consultation</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>Tell us your needs</h2>
            <span className="ds-accent-line-center" />
            <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>We&apos;ll design the right solution for you.</p>
          </div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="ds-label-form">Full Name</label><input className="ds-input" type="text" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div><label className="ds-label-form">Email Address</label><input className="ds-input" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="ds-label-form">Phone</label><input className="ds-input" type="tel" placeholder="+254 000 000 000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
              <div><label className="ds-label-form">Company</label><input className="ds-input" type="text" placeholder="Your company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></div>
            </div>
            <div><label className="ds-label-form">Requirements</label><textarea className="ds-input" rows={4} style={{ resize: 'none' }} placeholder="Describe your needs…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
            <button type="submit" className="ds-btn ds-btn-primary ds-btn-lg" style={{ justifyContent: 'center' }}>Send Enquiry</button>
          </form>
        </div>
      </section>

      <CTASection
        heading="Ready to upgrade your facility?"
        subtext="Talk to our team for a free consultation and expert recommendation."
        primaryLabel="Talk to an Expert"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
