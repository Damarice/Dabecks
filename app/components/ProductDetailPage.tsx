'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

/* ─── Types ─────────────────────────────────────────────────── */

interface BreadcrumbItem { label: string; href?: string; }
interface Spec          { label: string; value: string; }
interface Feature       { title: string; desc: string; }

interface FeatureStrip {
  icon: string;
  label: string;
  value: string;
}

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
  breadcrumbs,
  category,
  model,
  subtitle,
  image,
  placeholder,
  keySpecs,
  description,
  featureStrip,
  specs,
  features,
  backHref,
  backLabel,
}: ProductDetailPageProps) {
  return (
    <div>
      <Breadcrumb items={breadcrumbs} />

      {/* ══ PRODUCT HERO ═══════════════════════════════════════ */}
      <section
        style={{
          background: '#ffffff',
          borderBottom: '1px solid var(--color-border)',
          paddingTop: '3rem',
          paddingBottom: '3rem',
        }}
      >
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-start">

            {/* Image panel */}
            <div
              className="flex items-center justify-center"
              style={{
                background: 'var(--color-surface)',
                minHeight: '460px',
                padding: '3rem',
              }}
            >
              <img
                src={image}
                alt={model}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://via.placeholder.com/480x400/f2f2f2/9a9a9a?text=${encodeURIComponent(placeholder)}`;
                }}
                style={{
                  maxHeight: '380px',
                  width: 'auto',
                  objectFit: 'contain',
                  transition: 'transform var(--transition-slow)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Info panel */}
            <div
              style={{
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
              }}
            >
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
                {category}
              </span>

              <h1
                className="ds-h1"
                style={{ color: 'var(--color-neutral-950)', marginBottom: '0.5rem' }}
              >
                {model}
              </h1>

              <p
                className="ds-body-lg"
                style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}
              >
                {subtitle}
              </p>

              <span className="ds-accent-line" style={{ marginBottom: '2rem' }} />

              {/* Key specs */}
              <div
                className="grid grid-cols-3 gap-4"
                style={{ marginBottom: '2.5rem', marginTop: '1.5rem' }}
              >
                {keySpecs.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      borderLeft: '2px solid var(--color-brand-cyan)',
                      paddingLeft: '0.875rem',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1rem, 1.5vw, 1.375rem)',
                        fontWeight: 800,
                        color: 'var(--color-brand-navy)',
                        lineHeight: 1.2,
                      }}
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="ds-btn ds-btn-primary ds-btn-lg" style={{ flex: 1, justifyContent: 'center' }}>
                  Request a Quote
                </Link>
                <Link href="/contact" className="ds-btn ds-btn-outline ds-btn-lg" style={{ flex: 1, justifyContent: 'center' }}>
                  Download Specs
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ FEATURE STRIP ══════════════════════════════════════ */}
      <section style={{ background: 'var(--color-brand-navy)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="ds-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featureStrip.map((f, i) => (
              <div key={i}>
                <div style={{ fontSize: '1.75rem', lineHeight: 1, marginBottom: '0.625rem' }}>
                  {f.icon}
                </div>
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
                  {f.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: '#ffffff',
                    lineHeight: 1.4,
                  }}
                >
                  {f.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DESCRIPTION + SIDEBAR ══════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Description */}
            <div className="lg:col-span-2">
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.625rem' }}>Product Overview</span>
              <h2
                className="ds-h3"
                style={{ color: 'var(--color-brand-navy)', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}
              >
                About this Product
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {description.map((para, i) => (
                  <p
                    key={i}
                    className="ds-body-lg"
                    style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                padding: '1.75rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: 'var(--color-brand-navy)',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                Product Info
              </h3>

              {[
                { label: 'Model', value: model },
                { label: 'Category', value: category },
                { label: 'Warranty', value: '2 Years' },
                { label: 'Service', value: 'East Africa Coverage' },
              ].map(({ label, value }, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.125rem',
                    marginBottom: '1rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--color-brand-navy)',
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}

              <Link
                href="/contact"
                className="ds-btn ds-btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
              >
                Get a Quote
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══ TECHNICAL SPECIFICATIONS ═══════════════════════════ */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div className="ds-section-header" style={{ marginBottom: '2rem' }}>
            <span className="ds-eyebrow">Data sheet</span>
            <h2
              className="ds-h3"
              style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem', fontFamily: 'var(--font-display)' }}
            >
              Technical Specifications
            </h2>
            <span className="ds-accent-line" />
          </div>

          {/* Alternating rows table */}
          <div
            style={{
              border: '1px solid var(--color-border)',
              overflow: 'hidden',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4"
                  style={{
                    padding: '0.875rem 1.25rem',
                    borderBottom: '1px solid var(--color-border)',
                    background: i % 2 === 0 ? '#ffffff' : 'var(--color-surface)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    {spec.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--color-brand-navy)',
                      textAlign: 'right',
                    }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ KEY FEATURES ═══════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="ds-section-header" style={{ marginBottom: '2rem' }}>
            <span className="ds-eyebrow">What makes it great</span>
            <h2
              className="ds-h3"
              style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem', fontFamily: 'var(--font-display)' }}
            >
              Key Features
            </h2>
            <span className="ds-accent-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  padding: '1.5rem',
                }}
              >
                <span
                  className="ds-accent-line"
                  style={{ marginBottom: '1rem', width: '2.5rem' }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    color: 'var(--color-brand-navy)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {f.title}
                </h3>
                <p className="ds-body" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ═════════════════════════════════════════ */}
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
                style={{ color: '#ffffff', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}
              >
                Ready to get started?
              </h2>
              <p className="ds-body" style={{ color: 'var(--color-brand-cyan)' }}>
                Contact us for pricing, availability, and installation support.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 flex-wrap">
              <Link href="/contact" className="ds-btn ds-btn-cyan ds-btn-lg">
                Get in Touch
              </Link>
              <Link href={backHref} className="ds-btn ds-btn-ghost-white ds-btn-lg">
                {backLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
