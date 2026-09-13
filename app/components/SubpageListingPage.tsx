'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

/* ─── Types ─────────────────────────────────────────────────── */

interface BreadcrumbItem { label: string; href?: string; }

interface Product {
  model: string;
  desc: string;
  slug: string;
  placeholder: string;
  image?: string;
}

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

interface SubpageListingPageProps {
  breadcrumbs: BreadcrumbItem[];
  heroImage: string;
  category: string;
  title: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  benefits: Benefit[];
  products: Product[];
  basePath: string;
}

/* ─── Component ─────────────────────────────────────────────── */

export default function SubpageListingPage({
  breadcrumbs,
  heroImage,
  category,
  title,
  heroSubtitle,
  introTitle,
  introText,
  benefits,
  products,
  basePath,
}: SubpageListingPageProps) {
  return (
    <div>
      <Breadcrumb items={breadcrumbs} />

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section
        className="ds-hero ds-hero-tall"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="ds-hero-overlay" />
        <div className="ds-container relative z-10 w-full" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="ds-eyebrow" style={{ color: 'var(--color-brand-cyan)', display: 'block', marginBottom: '1rem' }}>
              {category}
            </span>
            <h1 className="ds-h1" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              {title}
            </h1>
            <p
              className="ds-lead"
              style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', maxWidth: '520px' }}
            >
              {heroSubtitle}
            </p>
            <a href="#products" className="ds-btn ds-btn-cyan ds-btn-lg">
              View Products
            </a>
          </div>
        </div>
      </section>

      {/* ══ INTRO ══════════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          {/* Heading */}
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <span className="ds-eyebrow">Overview</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.625rem', marginBottom: '1rem' }}>
              {introTitle}
            </h2>
            <span className="ds-accent-line" />
            <p
              className="ds-lead"
              style={{ color: 'var(--color-text-muted)', marginTop: '1.25rem', lineHeight: '1.65' }}
            >
              {introText}
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                style={{
                  borderLeft: '3px solid var(--color-brand-cyan)',
                  paddingLeft: '1.25rem',
                }}
              >
                <div style={{ fontSize: '2rem', lineHeight: 1, marginBottom: '0.75rem' }}>
                  {b.icon}
                </div>
                <h3
                  className="ds-h4"
                  style={{ color: 'var(--color-brand-navy)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}
                >
                  {b.title}
                </h3>
                <p className="ds-body" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCT GRID ═══════════════════════════════════════ */}
      <section id="products" className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div className="ds-section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Browse the range</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>
              Our Range
            </h2>
            <span className="ds-accent-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <article
                key={i}
                className="group overflow-hidden"
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  transition: 'box-shadow var(--transition-base), transform var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Product image */}
                <div
                  className="flex items-center justify-center overflow-hidden"
                  style={{
                    height: '240px',
                    background: 'var(--color-surface)',
                    padding: '1.5rem',
                  }}
                >
                  <img
                    src={product.image || `https://via.placeholder.com/320x240/f2f2f2/9a9a9a?text=${encodeURIComponent(product.placeholder)}`}
                    alt={product.model}
                    className="max-h-full max-w-full object-contain"
                    style={{ transition: 'transform var(--transition-slow)' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/320x240/f2f2f2/9a9a9a?text=${encodeURIComponent(product.placeholder)}`;
                    }}
                  />
                </div>

                {/* Product info */}
                <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
                  <p
                    className="ds-caption"
                    style={{ color: 'var(--color-text-muted)', marginBottom: '0.375rem', fontWeight: 500 }}
                  >
                    {product.desc}
                  </p>
                  <h3
                    className="ds-h4"
                    style={{
                      color: 'var(--color-brand-navy)',
                      marginBottom: '1.25rem',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {product.model}
                  </h3>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      href={`${basePath}/${product.slug}`}
                      className="ds-btn ds-btn-primary ds-btn-sm"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      View More
                    </Link>
                    <Link
                      href="/contact"
                      className="ds-btn ds-btn-outline ds-btn-sm"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--color-brand-navy)',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
        }}
      >
        <div className="ds-container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2
                className="ds-h3"
                style={{
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Not sure which model is right for you?
              </h2>
              <p className="ds-body" style={{ color: 'var(--color-brand-cyan)' }}>
                Our team will assess your needs and recommend the best solution.
              </p>
            </div>
            <Link
              href="/contact"
              className="ds-btn ds-btn-cyan ds-btn-lg flex-shrink-0"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
