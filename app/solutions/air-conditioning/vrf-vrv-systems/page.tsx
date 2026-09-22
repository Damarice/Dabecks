'use client';

import PageHero from '@/app/components/PageHero';
import CTASection from '@/app/components/CTASection';
import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';

export default function VRFVRVSystems() {
  return (
    <div>
      <PageHero
        image="/hero-ac.jpg"
        eyebrow="Air Conditioning"
        heading="VRF/VRV Systems"
        subtext="Variable refrigerant flow systems for large multi-zone commercial buildings — maximum efficiency, precise zone control, and flexible design."
        breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'VRF/VRV Systems' }]}
      />

      {/* Intro */}
      <section className="py-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>Overview</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem' }}>One system. Total control.</h2>
              <span className="ds-accent-line" style={{ marginBottom: '1.5rem' }} />
              <p className="ds-lead" style={{ color: 'var(--color-text-muted)', lineHeight: '1.65' }}>
                VRF/VRV systems connect a single outdoor unit to multiple indoor units across a building — delivering independent temperature control in every zone while consuming significantly less energy than traditional systems. Ideal for hotels, offices, hospitals, and shopping centres.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { title: 'Multi-Zone Control', desc: 'Up to 64 indoor units on a single outdoor system, each independently controlled.' },
                { title: 'Energy Efficient', desc: 'Inverter-driven compressors and heat recovery reduce energy costs by up to 30%.' },
                { title: 'Flexible Design', desc: 'Wide range of indoor unit types — wall, ceiling, cassette, ducted — for any space.' },
              ].map((b, i) => (
                <div key={i} style={{ borderLeft: '4px solid var(--color-brand-cyan)', paddingLeft: '1.125rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-brand-navy)', marginBottom: '0.375rem' }}>{b.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.55', margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="ds-eyebrow">Browse the Range</span>
            <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginTop: '0.5rem' }}>Our Range</h2>
            <span className="ds-accent-line" />
          </div>

          {/* Coming Soon card */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '5rem 3rem',
              textAlign: 'center',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                background: 'var(--color-brand-navy)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--color-brand-cyan)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Soon
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.875rem',
                fontWeight: 800,
                color: 'var(--color-brand-navy)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.03em',
              }}
            >
              Coming Soon
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--color-text-muted)',
                lineHeight: '1.65',
                marginBottom: '2rem',
              }}
            >
              We are currently working on new VRF/VRV projects. Our product range will be listed here soon. In the meantime, contact us to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="ds-btn ds-btn-primary"
              style={{ display: 'inline-block' }}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Interested in VRF/VRV Systems?"
        subtext="Our team will assess your building and recommend the right multi-zone solution."
        primaryLabel="Talk to an Expert"
        primaryHref="/contact"
        phone={true}
      />
    </div>
  );
}
