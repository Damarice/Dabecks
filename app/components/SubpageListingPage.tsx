'use client';

import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';
import Icon, { IconName } from '@/app/components/Icon';

const emojiToIcon: Record<string, IconName> = {
  '⚡': 'bolt', '🛠️': 'tools', '✅': 'check', '🔒': 'shield', '💧': 'leaf',
  '🏭': 'industry', '⚙️': 'cogs', '✨': 'star', '🛡️': 'shield', '🔧': 'wrench',
  '♨️': 'bolt', '🎯': 'certificate', '⭐': 'star', '🔥': 'bolt', '🏥': 'hospital',
  '🏨': 'building', '🤖': 'cogs', '📐': 'clipboard', '📦': 'box', '🔄': 'cogs',
  '⭕': 'bolt', '⏱️': 'clock', '🚪': 'building', '🚚': 'truck', '🏆': 'award',
  '👷': 'users', '🚧': 'shield', '🌿': 'leaf', '📊': 'chartLine',
};

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

export default function SubpageListingPage({
  breadcrumbs, heroImage, category, title, heroSubtitle,
  introTitle, introText, benefits, products, basePath,
}: SubpageListingPageProps) {
  return (
    <div>
      <PageHero image={heroImage} eyebrow={category} heading={title} subtext={heroSubtitle} breadcrumbs={breadcrumbs} />

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Text — 2 cols */}
            <div className="lg:col-span-2">
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>Overview</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem' }}>{introTitle}</h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', lineHeight: '1.65' }}>{introText}</p>
            </div>
            {/* Benefits — 1 col */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {benefits.map((b, i) => (
                <div
                  key={i}
                  style={{ borderLeft: '4px solid var(--color-brand-cyan)', paddingLeft: '1.125rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                    <span style={{ fontSize: '1.125rem', lineHeight: 1, color: 'var(--color-brand-cyan)' }}>
                      <Icon name={emojiToIcon[b.icon] ?? 'bolt'} />
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-brand-navy)', margin: 0 }}>{b.title}</h3>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.55', margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ─────────────────────────────────────── */}
      <section id="products" style={{ background: 'var(--color-surface)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Browse the Range</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Our Range</h2>
            <span className="ds-accent-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <article
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  transition: 'box-shadow 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                {/* Product image */}
                <div
                  style={{
                    height: '260px',
                    background: '#f8f8f8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.25rem',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={product.image || `https://placehold.co/400x280/f2f2f2/9a9a9a?text=${encodeURIComponent(product.placeholder)}`}
                    alt={product.model}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/400x280/f2f2f2/9a9a9a?text=${encodeURIComponent(product.placeholder)}`;
                    }}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderTop: '3px solid var(--color-brand-cyan)',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 500, marginBottom: '0.25rem' }}>
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
                    <Link
                      href={`${basePath}/${product.slug}`}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: 'var(--color-brand-navy)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        transition: 'color 200ms ease',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-brand-cyan)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-brand-navy)'; }}
                    >
                      View product →
                    </Link>
                    <Link href="/contact" className="ds-btn ds-btn-outline ds-btn-sm">
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
