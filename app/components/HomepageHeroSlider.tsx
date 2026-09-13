'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

/* ─── Slide data ─────────────────────────────────────────────── */

const slides = [
  {
    image: '/slide1.jpg',
    eyebrow: '15 Years of Excellence',
    title: "East Africa's\nTrusted Partner",
    btnLabel: 'About Dabecks',
    btnHref: '/about',
  },
  {
    image: '/slide2.jpg',
    eyebrow: 'Kitchen Systems',
    title: 'Professional Kitchen\nSolutions that Work',
    btnLabel: 'Explore Kitchen',
    btnHref: '/solutions/kitchen',
  },
  {
    image: '/slide3.jpg',
    eyebrow: 'Laundry Equipment',
    title: 'High-Performance\nLaundry at Any Scale',
    btnLabel: 'Explore Laundry',
    btnHref: '/solutions/laundry',
  },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function HomepageHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((idx + slides.length) % slides.length);
      setAnimating(false);
    }, 180);
  }, []);

  const prev = () => !animating && goTo(current - 1);
  const next = () => !animating && goTo(current + 1);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <>
      {/* ── HERO SLIDER ──────────────────────────────────────── */}
      <section
        aria-label="Homepage hero"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: 'clamp(480px, 70vh, 720px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background images — crossfade */}
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: i === current ? 1 : 0,
              transition: 'opacity 800ms ease',
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Overlay — dark left, fades right */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(10,18,50,0.90) 0%, rgba(10,18,50,0.70) 35%, rgba(10,18,50,0.30) 65%, rgba(10,18,50,0.05) 100%)',
          }}
        />

        {/* Content */}
        <div
          className="ds-container"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            paddingTop: '5rem',
            paddingBottom: '7rem',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            {/* Eyebrow */}
            <span
              className="ds-eyebrow"
              style={{
                display: 'block',
                color: 'var(--color-brand-cyan)',
                marginBottom: '1rem',
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(6px)' : 'translateY(0)',
                transition: 'opacity 300ms ease, transform 300ms ease',
              }}
            >
              {slide.eyebrow}
            </span>

            {/* Main headline — display size, Manrope 800 */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.75rem, 6vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 0.97,
                letterSpacing: '-0.045em',
                color: '#ffffff',
                whiteSpace: 'pre-line',
                marginBottom: '2.25rem',
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(10px)' : 'translateY(0)',
                transition: 'opacity 350ms ease 60ms, transform 350ms ease 60ms',
              }}
            >
              {slide.title}
            </h1>

            {/* CTA */}
            <div
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(8px)' : 'translateY(0)',
                transition: 'opacity 300ms ease 120ms, transform 300ms ease 120ms',
              }}
            >
              <Link href={slide.btnHref} className="ds-btn ds-btn-cyan ds-btn-lg">
                {slide.btnLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide controls — prev / next */}
        {(['prev', 'next'] as const).map((dir) => (
          <button
            key={dir}
            onClick={dir === 'prev' ? prev : next}
            aria-label={dir === 'prev' ? 'Previous slide' : 'Next slide'}
            style={{
              position: 'absolute',
              zIndex: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              [dir === 'prev' ? 'left' : 'right']: '1.25rem',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background var(--transition-base)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-brand-cyan)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)'; }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d={dir === 'prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
              />
            </svg>
          </button>
        ))}

        {/* Dot indicators */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? '28px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                background: i === current ? 'var(--color-brand-cyan)' : 'rgba(255,255,255,0.35)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 300ms ease, background 300ms ease',
              }}
            />
          ))}
        </div>
      </section>

      {/* ── CLIENT TRUST BAR ─────────────────────────────────── */}
      <div
        style={{
          background: 'var(--color-brand-navy)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          className="ds-container"
          style={{
            display: 'flex',
            alignItems: 'stretch',
            minHeight: '64px',
          }}
        >
          {/* Label */}
          <div
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              paddingRight: '2.5rem',
              paddingLeft: '0',
              borderRight: '1px solid rgba(255,255,255,0.12)',
              marginRight: '2.5rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-brand-cyan)',
                lineHeight: 1.3,
              }}
            >
              Trusted<br />By
            </span>
          </div>

          {/* Client names */}
          <div
            className="flex items-center flex-1 gap-6 md:gap-10 overflow-hidden"
            style={{ paddingBlock: '1rem' }}
          >
            {['Radisson Blu', 'Holiday Inn', 'Hyatt', 'IHG', 'Maersk', 'Marriott'].map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {name}
              </span>
            ))}
          </div>

          {/* All Clients CTA */}
          <div className="flex items-center flex-shrink-0 pl-4">
            <Link
              href="/clients"
              className="ds-btn ds-btn-cyan ds-btn-sm"
              style={{ whiteSpace: 'nowrap' }}
            >
              All Clients
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
