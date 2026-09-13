'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import CTASection from '@/app/components/CTASection';
import PageHero from '@/app/components/PageHero';
import { useState } from 'react';

/* ─── Types ─────────────────────────────────────────────────── */

interface BreadcrumbItem { label: string; href?: string; }

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

/* ─── Component ─────────────────────────────────────────────── */

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
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', message: '',
  });

  return (
    <div>
      <PageHero
        image={heroImage}
        heading={heroTitle}
        subtext={heroSubtitle}
        breadcrumbs={breadcrumbs}
      />

      {/* ══ INTRO ══════════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="ds-section-header-centered" style={{ maxWidth: '680px', margin: '0 auto 3.5rem' }}>
            <span className="ds-eyebrow">About This Range</span>
            <h2
              className="ds-h2"
              style={{ color: 'var(--color-brand-navy)', marginTop: '0.75rem' }}
            >
              {introTitle}
            </h2>
            <span className="ds-accent-line-center" />
            <p
              className="ds-lead"
              style={{ color: 'var(--color-text-muted)', marginTop: '1.5rem' }}
            >
              {introText}
            </p>
          </div>
        </div>
      </section>

      {/* ══ FEATURED PRODUCTS ══════════════════════════════════ */}
      <section id="featured" className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div className="ds-section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Featured</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>
              Featured Products
            </h2>
            <span className="ds-accent-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="group block overflow-hidden"
                style={{
                  background: '#ffffff',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'box-shadow var(--transition-base), transform var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-lg)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-sm)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div className="overflow-hidden" style={{ height: '220px' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    style={{ transition: 'transform var(--transition-slow)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                </div>
                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 className="ds-h4" style={{ color: 'var(--color-brand-navy)', marginBottom: '0.625rem' }}>
                    {p.title}
                  </h3>
                  <p className="ds-body-sm" style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: '1.55' }}>
                    {p.desc}
                  </p>
                  <span
                    className="ds-label"
                    style={{ color: 'var(--color-brand-cyan)', fontSize: '0.75rem' }}
                  >
                    Explore Range →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CATEGORIES ═════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="ds-section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Browse by category</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>
              Product Categories
            </h2>
            <span className="ds-accent-line" />
          </div>

          <div
            className={`grid gap-3 ${
              categories.length <= 4
                ? 'grid-cols-2 md:grid-cols-4'
                : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
            }`}
          >
            {categories.map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className="group relative overflow-hidden block"
                style={{ borderRadius: 'var(--radius-sm)' }}
              >
                <div className="relative overflow-hidden" style={{ height: '160px' }}>
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover"
                    style={{ transition: 'transform var(--transition-slow)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0 flex items-end p-3"
                    style={{
                      background: 'linear-gradient(to top, rgba(10,20,60,0.8) 0%, rgba(10,20,60,0.2) 60%, transparent 100%)',
                      transition: 'background var(--transition-base)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        lineHeight: 1.3,
                      }}
                    >
                      {cat.label}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STANDARDS ══════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: 'var(--color-brand-navy)' }}>
        <div className="ds-container">
          <div className="ds-section-header-centered" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="ds-eyebrow" style={{ color: 'var(--color-brand-cyan)' }}>Why choose Dabecks</span>
            <h2 className="ds-h2" style={{ color: '#ffffff', marginTop: '0.5rem' }}>
              Our Standards
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {standards.map((s, i) => (
              <div key={i} className="text-center">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1 }}>
                  {s.icon}
                </div>
                <h3
                  className="ds-h5"
                  style={{ color: '#ffffff', marginBottom: '0.625rem', fontFamily: 'var(--font-display)' }}
                >
                  {s.title}
                </h3>
                <p className="ds-body-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.55' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CUSTOMERS ══════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="ds-section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Social proof</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>
              Our Customers
            </h2>
            <p className="ds-body" style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
              Real stories. Real results.
            </p>
            <span className="ds-accent-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customers.map((c, i) => (
              <div
                key={i}
                className="overflow-hidden"
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                {/* Image with overlay */}
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-5"
                    style={{
                      background: 'linear-gradient(to top, rgba(26,58,143,0.85) 0%, rgba(26,58,143,0.3) 70%, transparent 100%)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-brand-cyan)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {c.type}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.0625rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.2,
                      }}
                    >
                      {c.name}
                    </p>
                  </div>
                </div>
                {/* Quote */}
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  {/* Quote mark */}
                  <div style={{ color: 'var(--color-brand-cyan)', fontSize: '2rem', lineHeight: 1, marginBottom: '0.5rem', fontFamily: 'Georgia, serif' }}>
                    &ldquo;
                  </div>
                  <p
                    className="ds-body-sm"
                    style={{
                      color: 'var(--color-text-muted)',
                      fontStyle: 'italic',
                      lineHeight: '1.6',
                    }}
                  >
                    {c.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NEWS ═══════════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div className="ds-section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Stay informed</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>
              Latest News
            </h2>
            <span className="ds-accent-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <article
                key={i}
                className="group overflow-hidden"
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  transition: 'box-shadow var(--transition-base)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div className="overflow-hidden" style={{ height: '180px' }}>
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover"
                    style={{ transition: 'transform var(--transition-slow)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <p
                    className="ds-eyebrow"
                    style={{ marginBottom: '0.625rem' }}
                  >
                    {n.date}
                  </p>
                  <h3
                    className="ds-h5"
                    style={{
                      color: 'var(--color-brand-navy)',
                      marginBottom: '0.625rem',
                      lineHeight: 1.3,
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {n.title}
                  </h3>
                  <p className="ds-body-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.55' }}>
                    {n.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT FORM ═══════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff', borderTop: '1px solid var(--color-border)' }}>
        <div className="ds-container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            {/* Header */}
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <span className="ds-eyebrow">Free consultation</span>
              <h2
                className="ds-h2"
                style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem', marginBottom: '0.5rem' }}
              >
                Tell us your needs
              </h2>
              <span className="ds-accent-line-center" />
              <p
                className="ds-body"
                style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}
              >
                We&apos;ll design the right solution for you.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { key: 'name', label: 'Full Name', placeholder: 'Your full name', type: 'text' },
                  { key: 'email', label: 'Email Address', placeholder: 'your@email.com', type: 'email' },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label className="ds-label-form">{label}</label>
                    <input
                      type={type}
                      className="ds-input"
                      placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { key: 'phone', label: 'Phone Number', placeholder: '+254 000 000 000', type: 'tel' },
                  { key: 'company', label: 'Company / Organisation', placeholder: 'Your company name', type: 'text' },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label className="ds-label-form">{label}</label>
                    <input
                      type={type}
                      className="ds-input"
                      placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="ds-label-form">Your Requirements</label>
                <textarea
                  rows={5}
                  className="ds-input"
                  style={{ resize: 'none' }}
                  placeholder="Describe your needs — capacity, facility type, daily volume…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="ds-btn ds-btn-primary ds-btn-lg w-full">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
