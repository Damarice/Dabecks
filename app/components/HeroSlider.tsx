'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Icon from '@/app/components/Icon';
import LogoMarquee from '@/app/components/LogoMarquee';

const slides = [
  {
    image: '/slide1.jpg',
    heading: 'Your Reliable\nSupplier',
    body: '15 Years Experience with Professional Equipment for the Hotels, Restaurants and Laundries',
    btnLabel: 'ABOUT US',
    btnHref: '/about',
  },
  {
    image: '/slide2.jpg',
    heading: 'Special Offer!',
    body: 'Special Prices for Cook&Chill Convection Ovens and Blast Chillers/Freezers',
    btnLabel: 'VIEW MODELS',
    btnHref: '/solutions/kitchen',
  },
  {
    image: '/slide3.jpg',
    heading: 'Line 6000 washer\nand dryer',
    body: 'Sprint cleaning with the lowest water, energy and detergent consumption.',
    btnLabel: 'DISCOVER MORE',
    btnHref: '/solutions/laundry',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + slides.length) % slides.length);
  }, []);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <div style={{ lineHeight: 0 }}>
      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: '520px', display: 'block' }}
      >
        {/* Background images — crossfade, object-contain so machines show fully */}
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt=""
            className="absolute inset-0 w-full h-full transition-opacity duration-700"
            style={{
              opacity: i === current ? 1 : 0,
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
        ))}

        {/* Left arrow — outside the panel, vertically centred in image area */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute z-30 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-colors hover:bg-[#1a3a8f]"
          style={{ background: '#00b4d8', left: '12px', top: '50%', transform: 'translateY(-60%)' }}
        >
          <Icon name="chevronLeft" style={{ color: '#ffffff', fontSize: '1.25rem' }} />
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute z-30 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-colors hover:bg-[#1a3a8f]"
          style={{ background: '#00b4d8', right: '12px', top: '50%', transform: 'translateY(-60%)' }}
        >
          <Icon name="chevronRight" style={{ color: '#ffffff', fontSize: '1.25rem' }} />
        </button>

        {/* ── FLOATING PANEL ──
            - left margin: does NOT touch left edge
            - top margin: does NOT touch top edge
            - bottom: reaches bottom of slide (panel + nav bar together = slide bottom)
            - right: diagonal top-right cut, ~60% width
        */}
        <div
          className="absolute z-20 flex flex-col"
          style={{
            left: 'clamp(1rem, 4vw, 6%)',
            top: 'clamp(1rem, 4vw, 12%)',
            width: 'clamp(90%, 55vw, 58%)',
            right: 'clamp(1rem, 4vw, 6%)',
            bottom: 'clamp(0.5rem, 2vw, 8%)',
          }}
        >
          {/* Frosted white text area — diagonal top-right corner */}
          <div
            className="flex-1 flex flex-col justify-center"
            style={{
              padding: '2rem 3rem 1.5rem 2.5rem',
              clipPath: 'polygon(0 0, 83% 0, 100% 9%, 100% 100%, 0 100%)',
              background: 'rgba(232, 238, 250, 0.86)',
            }}
          >
            <h1
              className="font-black leading-tight mb-5"
              style={{
                color: '#1a3a8f',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                whiteSpace: 'pre-line',
              }}
            >
              {slide.heading}
            </h1>
            <p
              className="font-semibold leading-relaxed"
              style={{ color: '#374151', fontSize: '1rem', maxWidth: '380px' }}
            >
              {slide.body}
            </p>
          </div>

          {/* Dark navy bar — same width as panel, at the bottom */}
          <div
            className="flex items-center gap-5 flex-shrink-0"
            style={{ background: '#1a3a8f', padding: '1rem 2.5rem' }}
          >
            <Link
              href={slide.btnHref}
              className="inline-flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest rounded-full shadow-md flex-shrink-0 hover:opacity-85 transition-opacity"
              style={{ background: '#00b4d8', padding: '0.7rem 1.6rem' }}
            >
              {slide.btnLabel}
              <Icon name="chevronDoubleRight" style={{ fontSize: '1rem' }} />
            </Link>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '22px' : '8px',
                    height: '8px',
                    background: i === current ? '#00b4d8' : 'rgba(255,255,255,0.4)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS MARQUEE ── */}
      <LogoMarquee />
    </div>
  );
}

