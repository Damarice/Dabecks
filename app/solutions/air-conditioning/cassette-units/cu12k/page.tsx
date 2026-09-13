import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function CU12K() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Cassette Units', href: '/solutions/air-conditioning/cassette-units' }, { label: 'CU-12K' }]}
      category="Cassette Units" model="CU-12K" subtitle="Ceiling cassette · 12,000 BTU / 1 ton"
      image="/products/ac/cu12k.jpg" placeholder="CU-12K"
      keySpecs={[{ label: 'Capacity', value: '12,000 BTU' }, { label: 'Airflow', value: '4-way' }, { label: 'Panel', value: '600 × 600 mm' }]}
      description={['The CU-12K is a compact 1-ton ceiling cassette unit ideal for small offices, meeting rooms, and retail units. Its 600×600mm panel fits standard ceiling grid tiles for easy, clean installation.', '4-way airflow distribution ensures even temperature across the entire room without uncomfortable draughts.']}
      featureStrip={[{ icon: '🔄', label: 'Airflow', value: '4-way distribution' }, { icon: '📐', label: 'Panel', value: '600 × 600 mm' }, { icon: '❄️', label: 'Capacity', value: '12,000 BTU' }, { icon: '🔇', label: 'Noise', value: '28 dB(A)' }]}
      specs={[{ label: 'Model', value: 'CU-12K' }, { label: 'Cooling Capacity', value: '12,000 BTU/hr (3.5 kW)' }, { label: 'Airflow Direction', value: '4-way' }, { label: 'Panel Size', value: '600 × 600 mm' }, { label: 'Noise Level', value: '28 dB(A)' }, { label: 'Refrigerant', value: 'R32' }, { label: 'Body Size (W×H×D)', value: '570 × 250 × 570 mm' }, { label: 'Body Weight', value: '13 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A+' }]}
      features={[{ title: '4-Way Airflow', desc: 'Air distributed in all four directions for uniform room coverage.' }, { title: 'Standard Grid Fit', desc: '600×600mm panel fits standard suspended ceiling grid tiles.' }, { title: 'Auto Swing', desc: 'Motorised louvres automatically adjust airflow direction.' }, { title: 'Condensate Pump', desc: 'Built-in condensate pump for flexible drain pipe routing.' }, { title: 'Filter Alert', desc: 'Indicator light signals when filter requires cleaning.' }, { title: 'Inverter Option', desc: 'Available in inverter version for improved energy efficiency.' }]}
      backHref="/solutions/air-conditioning/cassette-units" backLabel="All Cassette Units"
    />
  );
}
