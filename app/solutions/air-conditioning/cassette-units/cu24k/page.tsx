import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function CU24K() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Cassette Units', href: '/solutions/air-conditioning/cassette-units' }, { label: 'CU-24K' }]}
      category="Cassette Units" model="CU-24K" subtitle="Ceiling cassette · 24,000 BTU / 2 ton"
      image="/products/ac/cu24k.jpg" placeholder="CU-24K"
      keySpecs={[{ label: 'Capacity', value: '24,000 BTU' }, { label: 'Coverage', value: 'Up to 70 m²' }, { label: 'Airflow', value: '4-way' }]}
      description={['The CU-24K is a 2-ton cassette unit suitable for larger offices, restaurant sections, and retail floors up to 70 m². Its powerful fan motor pushes air to the room perimeter for truly even temperature distribution.', 'Compatible with most commercial building ceiling systems and designed for easy installation by certified HVAC engineers.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '2 ton / 24,000 BTU' }, { icon: '📏', label: 'Coverage', value: 'Up to 70 m²' }, { icon: '🌬️', label: 'Reach', value: 'Perimeter airflow' }, { icon: '⚡', label: 'Inverter', value: 'Variable speed' }]}
      specs={[{ label: 'Model', value: 'CU-24K' }, { label: 'Cooling Capacity', value: '24,000 BTU/hr (7.0 kW)' }, { label: 'Airflow', value: '4-way' }, { label: 'Panel Size', value: '900 × 900 mm' }, { label: 'Noise Level', value: '35 dB(A)' }, { label: 'Refrigerant', value: 'R32' }, { label: 'Body Size (W×H×D)', value: '840 × 290 × 840 mm' }, { label: 'Body Weight', value: '22 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A+' }]}
      features={[{ title: 'Perimeter Airflow', desc: 'Powerful fan reaches room perimeter for truly even coverage.' }, { title: '2-Ton Capacity', desc: 'Handles larger commercial spaces up to 70 m².' }, { title: 'Quiet Inverter', desc: 'Variable speed inverter for efficient and quiet operation.' }, { title: 'Condensate Management', desc: 'Built-in pump with auto-protection against overflow.' }, { title: 'BMS Ready', desc: 'Optional BMS interface for centralised building control.' }, { title: 'Easy Maintenance', desc: 'Drop-down panel for fast filter access without special tools.' }]}
      backHref="/solutions/air-conditioning/cassette-units" backLabel="All Cassette Units"
    />
  );
}
