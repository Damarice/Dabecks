'use client';

import Link from 'next/link';

const clientLogos = [
  { name: 'Radisson Blu',                logo: '/logos/clients/radisson-blu.png',         darkBg: false },
  { name: 'Marriott',                    logo: '/logos/clients/marriott.png',              darkBg: false },
  { name: 'Hyatt',                       logo: '/logos/clients/hyatt.png',                 darkBg: false },
  { name: 'Holiday Inn',                 logo: '/logos/clients/holiday-inn.png',           darkBg: false },
  { name: 'IHG',                         logo: '/logos/clients/ihg.png',                   darkBg: false },
  { name: 'Nairobi Safari Club',         logo: '/logos/clients/nairobi-safari-club.jpg',   darkBg: false },
  { name: 'Safari Park Hotel',           logo: '/logos/clients/safari-park-hotel.png',     darkBg: false },
  { name: 'Serena Hotels',               logo: '/logos/clients/serena.jpg',                darkBg: false },
  { name: 'Sarova White Sands',          logo: '/logos/clients/sarova.png',                darkBg: false },
  { name: 'JKUAT',                       logo: '/logos/clients/jkuat.webp',                darkBg: false },
  { name: 'Multimedia University',       logo: '/logos/clients/multimedia-university.png', darkBg: false },
  { name: 'Strathmore University',       logo: '/logos/clients/strathmore.png',            darkBg: false },
  { name: 'Kenyatta National Hospital',  logo: '/logos/clients/knh.jpg',                   darkBg: false },
  { name: 'Aga Khan Hospital',           logo: '/logos/clients/aga-khan.png',              darkBg: false },
  { name: 'Nairobi Hospital',            logo: '/logos/clients/nairobi-hospital.png',      darkBg: false },
  { name: 'Kenya Airways',               logo: '/logos/clients/kenya-airways.png',         darkBg: false },
  { name: 'Kenya Revenue Authority',     logo: '/logos/clients/kra.jpg',                   darkBg: false },
  { name: 'Maersk East Africa',          logo: '/logos/clients/maersk.png',                darkBg: false },
  { name: 'EABL',                        logo: '/logos/clients/eabl.png',                  darkBg: false },
  { name: 'KCB',                         logo: '/logos/clients/kcb.jpg',                   darkBg: false },
];

// Duplicate for seamless infinite loop
const doubled = [...clientLogos, ...clientLogos];

export default function LogoMarquee() {
  return (
    <div
      style={{
        background: 'var(--color-brand-navy)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem 0.75rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.45)',
          }}
        >
          Trusted By
        </span>
        <Link
          href="/clients"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-brand-cyan)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
          }}
        >
          View All Clients →
        </Link>
      </div>

      {/* Marquee track */}
      <div
        style={{
          paddingBottom: '1.25rem',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            gap: '0px',
            width: 'max-content',
            animation: 'marquee-scroll 40s linear infinite',
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: '140px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 1.25rem',
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  maxWidth: '110px',
                  maxHeight: '40px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.7,
                  transition: 'opacity 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '1'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.7'; }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
