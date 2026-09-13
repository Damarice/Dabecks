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
        { model: 'SU-9K', desc: 'Split unit · 9,000 BTU / 0.75 ton', slug: 'su9k', placeholder: 'SU-9K' },
        { model: 'SU-12K', desc: 'Split unit · 12,000 BTU / 1 ton', slug: 'su12k', placeholder: 'SU-12K' },
        { model: 'SU-18K', desc: 'Split unit · 18,000 BTU / 1.5 ton', slug: 'su18k', placeholder: 'SU-18K' },
        { model: 'SU-24K', desc: 'Split unit · 24,000 BTU / 2 ton', slug: 'su24k', placeholder: 'SU-24K' },
        { model: 'SU-36K', desc: 'Split unit · 36,000 BTU / 3 ton', slug: 'su36k', placeholder: 'SU-36K' },
        { model: 'Daikin FTXM35', desc: 'Premium inverter split · 12,000 BTU', slug: 'daikinFTXM35', placeholder: 'Daikin+FTXM35' },
      ]}
      basePath="/solutions/air-conditioning/split-units"
    />
  );
}
