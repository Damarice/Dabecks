import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function CU18K() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Cassette Units', href: '/solutions/air-conditioning/cassette-units' }, { label: 'CU-18K' }]}
      category="Cassette Units" model="CU-18K" subtitle="Ceiling cassette · 18,000 BTU / 1.5 ton"
      image="/products/ac/cu18k.jpg" placeholder="CU-18K"
      keySpecs={[{ label: 'Capacity', value: '18,000 BTU' }, { label: 'Coverage', value: 'Up to 50 m²' }, { label: 'Panel', value: '900 × 900 mm' }]}
      description={['The CU-18K covers medium-sized open spaces up to 50 m² with even 4-way airflow from a ceiling-mounted cassette. Its 900×900mm panel provides a wider air distribution pattern for larger rooms.', 'Auto-cleaning filter and built-in drainage pump make it easy to maintain in commercial environments.']}
      featureStrip={[{ icon: '🔄', label: 'Airflow', value: '4-way' }, { icon: '📏', label: 'Coverage', value: 'Up to 50 m²' }, { icon: '❄️', label: 'Capacity', value: '18,000 BTU' }, { icon: '🧹', label: 'Filter', value: 'Auto-cleaning' }]}
      specs={[{ label: 'Model', value: 'CU-18K' }, { label: 'Cooling Capacity', value: '18,000 BTU/hr (5.3 kW)' }, { label: 'Airflow', value: '4-way' }, { label: 'Panel Size', value: '900 × 900 mm' }, { label: 'Noise Level', value: '32 dB(A)' }, { label: 'Refrigerant', value: 'R32' }, { label: 'Body Size (W×H×D)', value: '840 × 280 × 840 mm' }, { label: 'Body Weight', value: '18 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A+' }]}
      features={[{ title: '4-Way Even Distribution', desc: 'Wide coverage pattern eliminates cold spots in medium rooms.' }, { title: 'Auto-Cleaning Filter', desc: 'Automatic filter cleaning reduces maintenance frequency.' }, { title: 'Built-In Pump', desc: 'Condensate pump allows flexible drain routing in any ceiling.' }, { title: 'Individual Louvre Control', desc: 'Each louvre direction independently adjustable.' }, { title: 'Weekly Timer', desc: '7-day schedule for automated, energy-efficient operation.' }, { title: 'Inverter Technology', desc: 'Efficient variable-speed compressor for lower running costs.' }]}
      backHref="/solutions/air-conditioning/cassette-units" backLabel="All Cassette Units"
    />
  );
}
