import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function SplitUnits() {
  return (
    <SubpageListingPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units' }]}
      heroImage="/hero-ac.jpg"
      category="Air Conditioning"
      title="Split Units"
      heroSubtitle="Wall-mounted and ceiling split AC units — energy-efficient inverter technology for homes, offices, hotels, and commercial spaces."
      introTitle="Cool any space. Efficiently."
      introText="Our split unit range covers capacities from 9,000 BTU for small offices to 36,000 BTU for large commercial spaces. All models feature inverter technology for energy savings up to 60%, quiet operation, and intelligent controls."
      benefits={[
        { icon: '❄️', title: 'Inverter Technology', desc: 'Variable-speed compressors reduce energy consumption by up to 60% versus fixed-speed units.' },
        { icon: '🔇', title: 'Ultra Quiet', desc: 'Indoor units as low as 19 dB — ideal for bedrooms, offices, and healthcare environments.' },
        { icon: '📱', title: 'Smart Controls', desc: 'Wi-Fi enabled models allow remote control via smartphone app for convenience and efficiency.' },
      ]}
      products={[
        { model: '12000 BTU Inverter Midwall Split Aircon + 3m Pipe Kit', desc: 'SIRAIR Sigma Series', slug: 'sirair-12000-inverter-sigma', placeholder: 'SIRAIR+12000+Sigma', image: '/products/ac/split-units/sirair-12000-inverter-sigma.webp' },
        { model: '24000 BTU Inverter Midwall Split Aircon + 3m Pipe Kit', desc: 'SIRAIR Sigma Series', slug: 'sirair-24000-inverter-sigma', placeholder: 'SIRAIR+24000+Sigma', image: '/products/ac/split-units/sirair-24000-inverter-sigma.webp' },
        { model: '12000 BTU Inverter Midwall Split Air Conditioner', desc: 'SIRAIR Alpha Series', slug: 'sirair-12000-inverter-alpha', placeholder: 'SIRAIR+12000+Alpha', image: '/products/ac/split-units/sirair-12000-inverter-alpha.webp' },
        { model: '9000 BTU Non-Inverter Midwall Split Aircon + 3m Pipe Kit', desc: 'SIRAIR Calibre Series', slug: 'sirair-9000-noninverter-calibre', placeholder: 'SIRAIR+9000+Calibre', image: '/products/ac/split-units/sirair-9000-noninverter-calibre.webp' },
        { model: '24000 BTU Inverter Midwall Split Air Conditioner', desc: 'SIRAIR Omega Series', slug: 'sirair-24000-inverter-omega', placeholder: 'SIRAIR+24000+Omega', image: '/products/ac/split-units/sirair-24000-inverter-omega.webp' },
        { model: '18000 BTU Inverter Midwall Split Air Conditioner', desc: 'SIRAIR Omega Series', slug: 'sirair-18000-inverter-omega', placeholder: 'SIRAIR+18000+Omega', image: '/products/ac/split-units/sirair-18000-inverter-omega.webp' },
      ]}
      basePath="/solutions/air-conditioning/split-units"
    />
  );
}
