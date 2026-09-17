'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Icon from '@/app/components/Icon';

const slides = [
  {
    image: '/slide1.jpg',
    eyebrow: 'Serving East Africa Since 2011',
    title: "Commercial Laundry,\nKitchen & HVAC Solutions",
    sub: 'Equipment supply • Professional installation • Commissioning • Training • Maintenance\nServing hotels, hospitals, institutions and commercial facilities.',
    btnLabel: 'About Dabecks',
    btnHref: '/about',
  },
  {
    image: '/slide2.jpg',
    eyebrow: 'Kitchen Systems',
    title: 'Professional Kitchen\nEquipment',
    sub: 'From commercial ovens and fryers to dishwashers and cooking ranges — complete kitchen setups.',
    btnLabel: 'Explore Kitchen',
    btnHref: '/solutions/kitchen',
  },
  {
    image: '/slide3.jpg',
    eyebrow: 'Laundry Equipment',
    title: 'High-Performance\nLaundry Systems',
    sub: 'Sprint cleaning with the lowest water, energy and detergent consumption in the industry.',
    btnLabel: 'Explore Laundry',
    btnHref: '/solutions/laundry',
  },
];

export default function HomepageHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent((idx + slides.length) % slides.length);
      setFading(false);
    }, 200);
  }, []);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    const t = setInterval(() => goTo(current + 1), 6500);
    return () => clearInterval(t);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        aria-label="Homepage hero"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: 'clamp(560px, 75vh, 800px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Slides — crossfade */}
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              opacity: i === current ? 1 : 0,
              transition: 'opacity 900ms ease',
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Left-to-right gradient overlay — dark left, image visible right */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(8,14,44,0.92) 0%, rgba(8,14,44,0.72) 38%, rgba(8,14,44,0.32) 68%, rgba(8,14,44,0.08) 100%)',
          }}
        />

        {/* Content — left-aligned */}
        <div
          className="ds-container"
          style={{
            position: 'relative', zIndex: 10, width: '100%',
            paddingTop: '6rem', paddingBottom: '8rem',
          }}
        >
          <div
            style={{
              maxWidth: '640px',
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(8px)' : 'translateY(0)',
              transition: 'opacity 300ms ease, transform 300ms ease',
            }}
          >
            {/* Eyebrow */}
            <span
              className="ds-eyebrow"
              style={{ display: 'block', color: 'var(--color-brand-cyan)', marginBottom: '1.25rem' }}
            >
              {slide.eyebrow}
            </span>

            {/* Display headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 800,
                lineHeight: 0.96,
                letterSpacing: '-0.045em',
                color: '#ffffff',
                whiteSpace: 'pre-line',
                marginBottom: '1.5rem',
              }}
            >
              {slide.title}
            </h1>

            {/* Sub */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.78)',
                maxWidth: '480px',
                marginBottom: '2.5rem',
              }}
            >
              {slide.sub}
            </p>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
              <Link href={slide.btnHref} className="ds-btn ds-btn-cyan ds-btn-lg">
                {slide.btnLabel}
                <Icon name="arrowRight" size="sm" />
              </Link>
              <Link href="/contact" className="ds-btn ds-btn-ghost-white ds-btn-lg">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Nav arrows */}
        {(['prev', 'next'] as const).map((dir) => (
          <button
            key={dir}
            onClick={dir === 'prev' ? prev : next}
            aria-label={dir === 'prev' ? 'Previous slide' : 'Next slide'}
            style={{
              position: 'absolute', zIndex: 20, top: '50%',
              transform: 'translateY(-50%)',
              [dir === 'prev' ? 'left' : 'right']: '1.5rem',
              width: '46px', height: '46px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background var(--transition-base)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-brand-cyan)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.10)'; }}
          >
            <Icon name={dir === 'prev' ? 'chevronLeft' : 'chevronRight'} />
          </button>
        ))}

        {/* Dot indicators — bottom left */}
        <div
          style={{
            position: 'absolute', bottom: '2.5rem', left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20, display: 'flex', gap: '8px', alignItems: 'center',
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? '28px' : '8px',
                height: '8px', borderRadius: '9999px',
                background: i === current ? 'var(--color-brand-cyan)' : 'rgba(255,255,255,0.3)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'width 300ms ease, background 300ms ease',
              }}
            />
          ))}
        </div>
      </section>

      {/* ── CLIENT TRUST BAR ─────────────────────────────── */}
      <div style={{ background: 'var(--color-brand-navy)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          className="ds-container"
          style={{ display: 'flex', alignItems: 'stretch', minHeight: '60px' }}
        >
          {/* Label */}
          <div
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              paddingRight: '2rem',
              borderRight: '1px solid rgba(255,255,255,0.1)',
              marginRight: '2rem',
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

          {/* Client logos carousel */}
          <div
            style={{
              flex: 1,
              overflow: 'hidden',
              position: 'relative',
              paddingBlock: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '3rem',
                animation: 'scroll-logos 40s linear infinite',
                width: 'max-content',
              }}
            >
              {/* First set */}
              {[
                '/logos/clients/radisson-blu.png',
                '/logos/clients/holiday-inn.png',
                '/logos/clients/hyatt.png',
                '/logos/clients/ihg.png',
                '/logos/clients/maersk.png',
                '/logos/clients/marriott.png',
                '/logos/clients/serena.jpg',
                '/logos/clients/safari-park-hotel.png',
                '/logos/clients/kenya-airways.png',
                '/logos/clients/knh.jpg',
              ].map((logo, i) => (
                <div
                  key={`logo-1-${i}`}
                  style={{
                    minWidth: '120px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={logo}
                    alt="Client logo"
                    style={{
                      maxWidth: '110px',
                      maxHeight: '45px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                      opacity: 0.7,
                    }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                '/logos/clients/radisson-blu.png',
                '/logos/clients/holiday-inn.png',
                '/logos/clients/hyatt.png',
                '/logos/clients/ihg.png',
                '/logos/clients/maersk.png',
                '/logos/clients/marriott.png',
                '/logos/clients/serena.jpg',
                '/logos/clients/safari-park-hotel.png',
                '/logos/clients/kenya-airways.png',
                '/logos/clients/knh.jpg',
              ].map((logo, i) => (
                <div
                  key={`logo-2-${i}`}
                  style={{
                    minWidth: '120px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={logo}
                    alt="Client logo"
                    style={{
                      maxWidth: '110px',
                      maxHeight: '45px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                      opacity: 0.7,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center flex-shrink-0 pl-4">
            <Link href="/clients" className="ds-btn ds-btn-cyan ds-btn-sm" style={{ whiteSpace: 'nowrap' }}>
              All Clients
              <Icon name="chevronRight" size="xs" />
            </Link>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
