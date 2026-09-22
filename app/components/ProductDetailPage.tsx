'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import CTASection from '@/app/components/CTASection';
import Icon from '@/app/components/Icon';
import { emojiToIcon } from '@/app/utils/emojiToIcon';

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

export default function ProductDetailPage({
  breadcrumbs, category, model, subtitle, image, placeholder,
  keySpecs, description, featureStrip, specs, features, backHref, backLabel,
}: ProductDetailPageProps) {
  return (
    <div>
      <Breadcrumb items={breadcrumbs} />

      {/* ── PRODUCT HERO ──────────────────────────────────── */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid var(--color-border)' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ minHeight: 'clamp(520px, 100vw, 520px)' }}>

            {/* Image */}
            <div
              style={{
                background: 'var(--color-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'clamp(300px, 50vw, 400px)',
                padding: 'clamp(1.5rem, 3vw, 3rem)',
              }}
            >
              <img
                src={image}
                alt={model}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://placehold.co/480x400/f2f2f2/9a9a9a?text=${encodeURIComponent(placeholder)}`;
                }}
                style={{
                  maxWidth: '100%',
                  maxHeight: '380px',
                  objectFit: 'contain',
                  display: 'block',
                  transition: 'transform 350ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Info */}
            <div
              style={{
                background: '#ffffff',
                borderLeft: '1px solid var(--color-border)',
                padding: 'clamp(1.5rem, 3vw, 3rem) clamp(1rem, 2vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>{category}</span>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.0,
                  color: '#111111',
                  marginBottom: '0.5rem',
                }}
              >
                {model}
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{subtitle}</p>
              <span className="ds-accent-line" style={{ marginBottom: '2rem' }} />

              {/* Key specs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(auto-fit, minmax(140px, 1fr))`,
                  gap: 'clamp(0.75rem, 1.5vw, 1rem)',
                  marginBottom: '2.5rem',
                }}
              >
                {keySpecs.map((s, i) => (
                  <div key={i} style={{ borderLeft: '3px solid var(--color-brand-cyan)', paddingLeft: '0.875rem' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>{s.label}</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 1.5vw, 1.375rem)', fontWeight: 800, color: 'var(--color-brand-navy)', lineHeight: 1.1 }}>{s.value}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 'clamp(0.5rem, 1.5vw, 0.75rem)', flexWrap: 'wrap' }}>
                <Link href="/contact" className="ds-btn ds-btn-primary ds-btn-lg" style={{ flex: '1 1 auto', minWidth: 'clamp(130px, 30vw, 160px)' }}>Request a Quote</Link>
                <Link href="/contact" className="ds-btn ds-btn-outline ds-btn-lg" style={{ flex: '1 1 auto', minWidth: 'clamp(130px, 30vw, 160px)' }}>Download Specs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE STRIP ─────────────────────────────────── */}
      <section style={{ background: 'var(--color-brand-navy)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="ds-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
            {featureStrip.map((f, i) => (
              <div key={i}>
                <div style={{ fontSize: '1.5rem', lineHeight: 1, marginBottom: '0.75rem', color: 'var(--color-brand-cyan)' }}>
                  <Icon name={emojiToIcon[f.icon] ?? 'bolt'} />
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-brand-cyan)', marginBottom: '0.25rem' }}>{f.label}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 500, color: '#ffffff', lineHeight: 1.35 }}>{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION + SIDEBAR ─────────────────────────── */}
      <section className="py-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            <div className="lg:col-span-2">
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.625rem' }}>Product Overview</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '1rem', lineHeight: 1.12 }}>About this Product</h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {description.map((para, i) => (
                  <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{para}</p>
                ))}
              </div>
            </div>
            {/* Sidebar */}
            <div style={{ background: 'var(--color-surface)', padding: 'clamp(1rem, 2vw, 1.75rem)', border: '1px solid var(--color-border)', alignSelf: 'start' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '1.25rem', paddingBottom: '0.875rem', borderBottom: '1px solid var(--color-border)' }}>Product Info</h3>
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
              <Link href="/contact" className="ds-btn ds-btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.75rem' }}>Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS ──────────────────────── */}
      <section className="py-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="ds-eyebrow">Data Sheet</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', fontWeight: 700, color: 'var(--color-brand-navy)', marginTop: '0.5rem', lineHeight: 1.12 }}>Technical Specifications</h2>
            <span className="ds-accent-line" />
          </div>
          <div style={{ border: '1px solid var(--color-border)', overflow: 'auto' }}>
            {specs.map((spec, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 'clamp(0.75rem, 1.5vw, 0.875rem) clamp(0.75rem, 1.5vw, 1.25rem)',
                  borderBottom: i < specs.length - 1 ? '1px solid var(--color-border)' : 'none',
                  background: i % 2 === 0 ? '#ffffff' : 'var(--color-surface)',
                  gap: '1rem',
                  minWidth: 'fit-content',
                }}
              >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)', flexShrink: 0 }}>{spec.label}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-navy)', textAlign: 'right' }}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ──────────────────────────────────── */}
      <section className="py-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="ds-eyebrow">What Makes It Great</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', fontWeight: 700, color: 'var(--color-brand-navy)', marginTop: '0.5rem', lineHeight: 1.12 }}>Key Features</h2>
            <span className="ds-accent-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-brand-cyan)',
                  padding: '1.5rem',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BACK LINK ─────────────────────────────────────── */}
      <div style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
        <div className="ds-container">
          <Link
            href={backHref}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700,
              color: 'var(--color-brand-navy)', textDecoration: 'none',
              transition: 'color 200ms ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-brand-cyan)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-brand-navy)'; }}
          >
            <Icon name="chevronLeft" size="sm" />
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
