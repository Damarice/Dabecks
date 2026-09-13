'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import CTASection from '@/app/components/CTASection';

/* ─── Types ─────────────────────────────────────────────────── */
interface BreadcrumbItem { label: string; href?: string; }
interface Spec           { label: string; value: string; }
interface Feature        { title: string; desc: string; }
interface FeatureStrip   { icon: string; label: string; value: string; }

interface ProductDetailPageProps {
  breadcrumbs: BreadcrumbItem[];
  category: string;
  model: string;
  subtitle: string;
  image: string;
  placeholder: string;
  keySpecs: Spec[];
  description: string[];
  featureStrip: FeatureStrip[];
  specs: Spec[];
  features: Feature[];
  backHref: string;
  backLabel: string;
}

/* ─── Component ─────────────────────────────────────────────── */
export default function ProductDetailPage({
  breadcrumbs, category, model, subtitle,
  image, placeholder, keySpecs, description,
  featureStrip, specs, features, backHref, backLabel,
}: ProductDetailPageProps) {
  return (
    <div>
      <Breadcrumb items={breadcrumbs} />

      {/* ══ PRODUCT HERO — split: image left, info right ════ */}
      <section className="stripe-white" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="split-feature" style={{ minHeight: '560px' }}>

          {/* Image panel — clean gray background */}
          <div
            className="img-frame"
            style={{
              minHeight: '480px',
              background: 'var(--color-surface)',
              padding: '3.5rem',
            }}
          >
            <img
              src={image}
              alt={model}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  `https://via.placeholder.com/480x400/f2f2f2/9a9a9a?text=${encodeURIComponent(placeholder)}`;
              }}
              style={{ maxHeight: '400px', width: 'auto', objectFit: 'contain', transition: 'transform var(--transition-slow)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
            />
          </div>

          {/* Info panel */}
          <div
            className="split-feature__content"
            style={{ background: '#ffffff', borderLeft: '1px solid var(--color-border)' }}
          >
            <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>{category}</span>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: 'var(--color-neutral-950)',
                marginBottom: '0.5rem',
              }}
            >
              {model}
            </h1>
            <p className="ds-body-lg" style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{subtitle}</p>
            <span className="ds-accent-line" style={{ marginBottom: '2rem' }} />

            {/* Key specs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${keySpecs.length}, 1fr)`,
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              {keySpecs.map((s, i) => (
                <div key={i} className="cyan-bar">
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>{s.label}</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 1.5vw, 1.375rem)', fontWeight: 800, color: 'var(--color-brand-navy)', lineHeight: 1.1 }}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* CTA pair */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="ds-btn ds-btn-primary ds-btn-lg">Request a Quote</Link>
              <Link href="/contact" className="ds-btn ds-btn-outline ds-btn-lg">Download Specs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURE STRIP — navy band with 4 highlights ══════ */}
      <section className="dark-band" style={{ paddingBlock: '2.5rem' }}>
        <div className="ds-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featureStrip.map((f, i) => (
              <div key={i}>
                <div style={{ fontSize: '1.75rem', lineHeight: 1, marginBottom: '0.5rem' }}>{f.icon}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-brand-cyan)', marginBottom: '0.25rem' }}>{f.label}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 500, color: '#ffffff', lineHeight: 1.35 }}>{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DESCRIPTION + SIDEBAR ════════════════════════════ */}
      <section className="stripe-white py-section">
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.625rem' }}>Product Overview</span>
              <h2 className="ds-h3" style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>About this Product</h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {description.map((para, i) => (
                  <p key={i} className="ds-body-lg" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{para}</p>
                ))}
              </div>
            </div>

            {/* Product info sidebar */}
            <div
              style={{
                background: 'var(--color-surface)',
                padding: '1.75rem',
                border: '1px solid var(--color-border)',
                alignSelf: 'start',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '1.25rem', paddingBottom: '0.875rem', borderBottom: '1px solid var(--color-border)' }}>
                Product Info
              </h3>
              {[
                { label: 'Model', value: model },
                { label: 'Category', value: category },
                { label: 'Warranty', value: '2 Years' },
                { label: 'Service', value: 'East Africa Coverage' },
              ].map(({ label, value }, i) => (
                <div key={i} style={{ marginBottom: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '0.125rem' }}>{label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-brand-navy)' }}>{value}</p>
                </div>
              ))}
              <Link href="/contact" className="ds-btn ds-btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.75rem' }}>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TECHNICAL SPECIFICATIONS ═════════════════════════ */}
      <section className="stripe-surface py-section">
        <div className="ds-container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="ds-eyebrow">Data Sheet</span>
            <h2 className="ds-h3" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem', fontFamily: 'var(--font-display)' }}>Technical Specifications</h2>
            <span className="ds-accent-line" />
          </div>
          <table className="specs-table" style={{ width: '100%' }}>
            <tbody>
              {specs.map((spec, i) => (
                <tr key={i}>
                  <td>{spec.label}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ══ KEY FEATURES ═════════════════════════════════════ */}
      <section className="stripe-white py-section">
        <div className="ds-container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="ds-eyebrow">What Makes It Great</span>
            <h2 className="ds-h3" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem', fontFamily: 'var(--font-display)' }}>Key Features</h2>
            <span className="ds-accent-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="ed-card" style={{ border: '1px solid var(--color-border)' }}>
                <div className="ed-card__number">{String(i + 1).padStart(2, '0')}</div>
                <span className="ds-accent-line" style={{ marginBottom: '0.875rem', display: 'block' }} />
                <h3 className="ed-card__title">{f.title}</h3>
                <p className="ed-card__body">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BACK LINK + CTA ══════════════════════════════════ */}
      <div
        className="stripe-surface"
        style={{ paddingBlock: '1.5rem', borderTop: '1px solid var(--color-border)' }}
      >
        <div className="ds-container">
          <Link href={backHref} className="text-link">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            {backLabel}
          </Link>
        </div>
      </div>

      <CTASection
        heading="Ready to get started?"
        subtext="Contact us for pricing, availability, and expert installation support."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel={backLabel}
        secondaryHref={backHref}
        phone={true}
      />
    </div>
  );
}
