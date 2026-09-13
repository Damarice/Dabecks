import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SU24K() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: 'SU-24K' }]}
      category="Split Units" model="SU-24K" subtitle="Wall-mounted inverter split · 24,000 BTU / 2 ton"
      image="/products/ac/su24k.jpg" placeholder="SU-24K"
      keySpecs={[{ label: 'Capacity', value: '24,000 BTU' }, { label: 'Coverage', value: 'Up to 70 m²' }, { label: 'EER', value: '3.6' }]}
      description={['The SU-24K is a 2-ton inverter split unit for large offices, boardrooms, restaurant sections, and open-plan areas up to 70 m². Its powerful cooling output and efficient inverter compressor maintain comfort even in challenging climates.', 'The built-in air purification system and 4-directional airflow ensure even, clean comfort across large spaces.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '24,000 BTU / 2 ton' }, { icon: '📏', label: 'Coverage', value: 'Up to 70 m²' }, { icon: '🌿', label: 'Air', value: 'Purification built-in' }, { icon: '⚡', label: 'Inverter', value: 'High efficiency' }]}
      specs={[{ label: 'Model', value: 'SU-24K' }, { label: 'Cooling Capacity', value: '24,000 BTU/hr (7.0 kW)' }, { label: 'EER', value: '3.6' }, { label: 'Indoor Noise', value: '32 dB(A)' }, { label: 'Refrigerant', value: 'R32' }, { label: 'Coverage Area', value: 'Up to 70 m²' }, { label: 'Indoor Unit (W×H×D)', value: '1050 × 320 × 240 mm' }, { label: 'Indoor Weight', value: '16 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A+' }]}
      features={[{ title: 'Large Capacity', desc: '2 ton / 24,000 BTU covers large offices and boardrooms up to 70 m².' }, { title: 'Air Purification', desc: 'Integrated purification filter removes pollutants and allergens.' }, { title: 'Powerful Airflow', desc: 'High-static fan motor distributes air across larger floor areas.' }, { title: 'Follow Me', desc: 'Remote sensor directs cooling toward occupants for personalised comfort.' }, { title: 'Energy Monitor', desc: 'Real-time energy consumption display for usage tracking.' }, { title: 'Night Mode', desc: 'Quiet, efficient operation mode for overnight use.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
