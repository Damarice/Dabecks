'use client';

import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';

/* ─── Types ─────────────────────────────────────────────────── */
interface BreadcrumbItem { label: string; href?: string; }
interface Product { model: string; desc: string; slug: string; placeholder: string; image?: string; }
interface Benefit { icon: string; title: string; desc: string; }

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
  breadcrumbs, heroImage, category, title, heroSubtitle,
  introTitle, introText, benefits, products, basePath,
}: SubpageListingPageProps) {
  return (
    <div>
      <PageHero
        image={heroImage}
        eyebrow={category}
        heading={title}
        subtext={heroSubtitle}
        breadcrumbs={breadcrumbs}
      />

      {/* ══ INTRO ════════════════════════════════════════════ */}
      <section className="stripe-white py-section">
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Heading + text — 2 cols */}
            <div className="lg:col-span-2">
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>Overview</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem' }}>{introTitle}</h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', lineHeight: '1.65' }}>{introText}</p>
            </div>
            {/* Benefits — 1 col, stacked with left cyan bar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '0.25rem' }}>
              {benefits.map((b, i) => (
                <div key={i} className="cyan-bar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.375rem' }}>
                    <span style={{ fontSize: '1.125rem' }}>{b.icon}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-brand-navy)' }}>{b.title}</h3>
                  </div>
                  <p className="ds-caption" style={{ color: 'var(--color-text-muted)', lineHeight: '1.55' }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCT GRID ════════════════════════════════════ */}
      <section id="products" className="stripe-surface py-section">
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Browse the Range</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Our Range</h2>
            <span className="ds-accent-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <article key={i} className="product-showcase">
                {/* Image */}
                <div className="product-showcase__image">
                  <img
                    src={product.image || `https://via.placeholder.com/400x300/f2f2f2/9a9a9a?text=${encodeURIComponent(product.placeholder)}`}
                    alt={product.model}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x300/f2f2f2/9a9a9a?text=${encodeURIComponent(product.placeholder)}`;
                    }}
                  />
                </div>
                {/* Content */}
                <div className="product-showcase__content">
                  <p className="ds-caption" style={{ color: 'var(--color-text-muted)', marginBottom: '0.25rem', fontWeight: 500 }}>
                    {product.desc}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)',
                      fontWeight: 800,
                      color: 'var(--color-brand-navy)',
                      letterSpacing: '-0.02em',
                      marginBottom: '1.25rem',
                      lineHeight: 1.15,
                    }}
                  >
                    {product.model}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                    <Link href={`${basePath}/${product.slug}`} className="text-link" style={{ fontSize: '0.8125rem', fontWeight: 700 }}>
                      View product →
                    </Link>
                    <Link
                      href="/contact"
                      className="ds-btn ds-btn-outline ds-btn-sm"
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

      <CTASection
        heading="Not sure which model is right for you?"
        subtext="Our team will assess your needs and recommend the best solution."
        primaryLabel="Talk to an Expert"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
