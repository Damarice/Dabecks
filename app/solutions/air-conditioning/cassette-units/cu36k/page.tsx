import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function CU36K() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Cassette Units', href: '/solutions/air-conditioning/cassette-units' }, { label: 'CU-36K' }]}
      category="Cassette Units" model="CU-36K" subtitle="Ceiling cassette · 36,000 BTU / 3 ton"
      image="/products/ac/cu36k.jpg" placeholder="CU-36K"
      keySpecs={[{ label: 'Capacity', value: '36,000 BTU / 3 ton' }, { label: 'Coverage', value: 'Up to 100 m²' }, { label: 'Panel', value: '1200 × 1200 mm' }]}
      description={['The CU-36K is a large-capacity 3-ton cassette unit with a 1200×1200mm panel, covering open-plan areas up to 100 m² with 4-way airflow. Ideal for restaurant dining rooms, hotel lobbies, and large retail floors.', 'Advanced airflow management ensures draught-free comfort even in spaces with high ceilings and complex layouts.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '3 ton / 36,000 BTU' }, { icon: '📏', label: 'Coverage', value: 'Up to 100 m²' }, { icon: '🔄', label: 'Panel', value: '1200 × 1200 mm' }, { icon: '🌬️', label: 'Airflow', value: 'Draught-free' }]}
      specs={[{ label: 'Model', value: 'CU-36K' }, { label: 'Cooling Capacity', value: '36,000 BTU/hr (10.5 kW)' }, { label: 'Airflow', value: '4-way' }, { label: 'Panel Size', value: '1200 × 1200 mm' }, { label: 'Noise Level', value: '38 dB(A)' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Body Size (W×H×D)', value: '1130 × 310 × 1130 mm' }, { label: 'Body Weight', value: '32 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A+' }]}
      features={[{ title: 'Wide Panel Coverage', desc: '1200×1200mm panel delivers airflow across large open-plan areas.' }, { title: '3-Ton Capacity', desc: 'Handles spaces up to 100 m² from a single ceiling unit.' }, { title: 'Draught-Free Design', desc: 'Optimised louvre design prevents uncomfortable draughts at occupant level.' }, { title: 'Auto Swing', desc: 'Automated louvre swing maintains even air distribution.' }, { title: 'High-Ceiling Performance', desc: 'Designed to perform in rooms with ceiling heights up to 4 m.' }, { title: 'Maintenance-Friendly', desc: 'Large drop-down panel provides full access for servicing.' }]}
      backHref="/solutions/air-conditioning/cassette-units" backLabel="All Cassette Units"
    />
  );
}
