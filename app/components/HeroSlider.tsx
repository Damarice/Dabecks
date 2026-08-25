'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

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
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute z-30 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-colors hover:bg-[#1a3a8f]"
          style={{ background: '#00b4d8', right: '12px', top: '50%', transform: 'translateY(-60%)' }}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
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
            left: '6%',
            top: '12%',
            width: '58%',
            bottom: '8%',
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7M15 5l7 7-7 7" />
              </svg>
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

      {/* ── CLIENTS BAR ── */}
      <div
        className="flex items-stretch"
        style={{ background: '#1a3a8f', minHeight: '66px', lineHeight: 'normal' }}
      >
        {/* "Our Clients" — cyan with diagonal right cut */}
        <div
          className="flex-shrink-0 flex items-center text-white font-black text-sm leading-tight"
          style={{
            background: '#00b4d8',
            clipPath: 'polygon(0 0, 100% 0, 78% 100%, 0 100%)',
            padding: '0.75rem 4rem 0.75rem 1.5rem',
          }}
        >
          Our<br />Clients
        </div>

        {/* Client names */}
        <div className="flex items-center justify-between flex-1 px-10 gap-2">
          {['Radisson Blu', 'Holiday Inn', 'HYATT', 'IHG', 'Maersk', 'Marriott'].map(c => (
            <span
              key={c}
              className="text-white font-bold text-sm tracking-wider uppercase"
              style={{ opacity: 0.85 }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* ALL CLIENTS pill */}
        <Link
          href="/clients"
          className="flex-shrink-0 flex items-center gap-2 text-white font-black text-sm uppercase tracking-wide rounded-full my-auto mr-6 px-5 py-2.5 hover:bg-[#1a3a8f] transition-colors"
          style={{ background: '#00b4d8' }}
        >
          ALL CLIENTS
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7M15 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

