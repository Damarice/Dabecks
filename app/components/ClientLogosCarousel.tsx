'use client';

import Link from 'next/link';

// All client logos
const clientLogos = [
  { name: 'Radisson Blu Hotel', logo: '/logos/clients/radisson-blu.png' },
  { name: 'Marriott Hotels', logo: '/logos/clients/marriott.png' },
  { name: 'Hyatt Hotels', logo: '/logos/clients/hyatt.png' },
  { name: 'Holiday Inn', logo: '/logos/clients/holiday-inn.png' },
  { name: 'IHG Hotels & Resorts', logo: '/logos/clients/ihg.png' },
  { name: 'Safari Park Hotel & Casino', logo: '/logos/clients/safari-park-hotel.png' },
  { name: 'PrideInn Hotels Mombasa', logo: '/logos/clients/prideinn.png' },
  { name: 'Sarova White Sands', logo: '/logos/clients/sarova.png' },
  { name: 'Serena Hotels', logo: '/logos/clients/serena.jpg' },
  { name: 'Kikuyu Mission Hospital', logo: '/logos/clients/kikuyu-mission.jpg' },
  { name: 'Kenyatta National Hospital (KNH)', logo: '/logos/clients/knh.jpg' },
  { name: 'Valley Hospital', logo: '/logos/clients/valley-hospital.png' },
  { name: 'Nairobi Hospital', logo: '/logos/clients/nairobi-hospital.png' },
  { name: 'Aga Khan University Hospital', logo: '/logos/clients/aga-khan.png' },
  { name: 'Mater Hospital', logo: '/logos/clients/mater-hospital.png' },
  { name: 'MP Shah Hospital', logo: '/logos/clients/mp-shah.png' },
  { name: 'Karen Hospital', logo: '/logos/clients/karen-hospital.png' },
  { name: 'JKUAT', logo: '/logos/clients/jkuat.webp' },
  { name: 'Multimedia University', logo: '/logos/clients/multimedia-university.png' },
  { name: 'Strathmore University', logo: '/logos/clients/strathmore.png' },
  { name: 'Kenya Defence Forces (KDF)', logo: '/logos/clients/kdf.jpg' },
  { name: 'Kenya Ports Authority', logo: '/logos/clients/kpa.jpg' },
  { name: 'Kenya Revenue Authority', logo: '/logos/clients/kra.jpg' },
  { name: 'Kenya Airways', logo: '/logos/clients/kenya-airways.png' },
  { name: 'Kenya Power', logo: '/logos/clients/kenya-power.jpg' },
  { name: 'NAS Servair', logo: '/logos/clients/nas-servair.png' },
  { name: 'Maersk East Africa', logo: '/logos/clients/maersk.png' },
  { name: 'Nation Media Group', logo: '/logos/clients/nation-media.png' },
  { name: 'EABL', logo: '/logos/clients/eabl.png' },
  { name: 'Kenya Commercial Bank (KCB)', logo: '/logos/clients/kcb.jpg' },
];

export default function ClientLogosCarousel() {
  return (
    <section className="py-section" style={{ background: '#ffffff', overflow: 'hidden' }}>
      <div className="ds-container">
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Trusted By</span>
          <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)' }}>Our Clients</h2>
          <span className="ds-accent-line" style={{ margin: '1rem auto' }} />
          <p className="ds-lead" style={{ color: 'var(--color-text-muted)', marginTop: '1rem', maxWidth: '640px', margin: '1rem auto 0' }}>
            Leading organisations across East Africa trust Dabecks for their commercial equipment needs
          </p>
        </div>

        {/* Infinite scrolling carousel */}
        <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
          {/* Gradient overlays */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '120px',
            background: 'linear-gradient(to right, #ffffff, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '120px',
            background: 'linear-gradient(to left, #ffffff, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />

          {/* Scrolling container */}
          <div 
            style={{
              display: 'flex',
              gap: '3rem',
              animation: 'scroll 60s linear infinite',
              width: 'max-content',
            }}
          >
            {/* First set of logos */}
            {clientLogos.map((client, i) => (
              <div
                key={`logo-1-${i}`}
                style={{
                  minWidth: '200px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  flexShrink: 0,
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{
                    maxWidth: '180px',
                    maxHeight: '90px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.7,
                    transition: 'all 300ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.filter = 'grayscale(0%)';
                    (e.target as HTMLImageElement).style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.filter = 'grayscale(100%)';
                    (e.target as HTMLImageElement).style.opacity = '0.7';
                  }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, i) => (
              <div
                key={`logo-2-${i}`}
                style={{
                  minWidth: '200px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  flexShrink: 0,
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{
                    maxWidth: '180px',
                    maxHeight: '90px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.7,
                    transition: 'all 300ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.filter = 'grayscale(0%)';
                    (e.target as HTMLImageElement).style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.filter = 'grayscale(100%)';
                    (e.target as HTMLImageElement).style.opacity = '0.7';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* View All Clients Button */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/clients"
            className="ds-btn ds-btn-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            View All Clients
            <span style={{ fontSize: '0.875rem' }}>→</span>
          </Link>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
