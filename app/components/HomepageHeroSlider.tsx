'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: '/slide1.jpg',
    title: 'East Africa\'s Trusted Partner for 15 Years',
    btnLabel: 'ABOUT US',
    btnHref: '/about',
  },
  {
    image: '/slide2.jpg',
    title: 'Professional Kitchen Solutions that Work',
    btnLabel: 'KITCHEN SYSTEMS',
    btnHref: '/solutions/kitchen',
  },
  {
    image: '/slide3.jpg',
    title: 'High-Performance Laundry for Every Scale',
    btnLabel: 'LAUNDRY EQUIPMENT',
    btnHref: '/solutions/laundry',
  },
];

export default function HomepageHeroSlider() {
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
        {/* Background images — crossfade */}
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

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0, 0, 0, 0.4)' }}
        />

        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute z-30 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-colors hover:bg-[#1a3a8f]"
          style={{ background: '#00b4d8', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
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
          style={{ background: '#00b4d8', right: '12px', top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* ── CENTERED TITLE ── */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center"
          style={{ textAlign: 'center' }}
        >
          <h1
            className="font-black leading-tight text-white"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              whiteSpace: 'pre-line',
              maxWidth: '90%',
            }}
          >
            {slide.title}
          </h1>
        </div>

        {/* ── BOTTOM NAVIGATION BAR ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-6"
          style={{ background: 'transparent' }}
        >
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
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex-1" />
        </div>
      </section>
    </div>
  );
}
