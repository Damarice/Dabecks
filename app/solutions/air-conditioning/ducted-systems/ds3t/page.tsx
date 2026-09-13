import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DS3T() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Ducted Systems', href: '/solutions/air-conditioning/ducted-systems' }, { label: 'DS-3T' }]}
      category="Ducted Systems" model="DS-3T" subtitle="Ceiling concealed ducted · 3 ton / 36,000 BTU"
      image="/products/ac/ds3t.jpg" placeholder="DS-3T"
      keySpecs={[{ label: 'Capacity', value: '36,000 BTU / 3 ton' }, { label: 'Coverage', value: 'Up to 90 m²' }, { label: 'ESP', value: '100 Pa' }]}
      description={['The DS-3T is a compact ceiling-concealed ducted unit ideal for individual offices, meeting rooms, and hotel suites up to 90 m². Its 100 Pa external static pressure allows flexible duct routing for most room layouts.', 'With hidden installation behind the ceiling, only slim grilles are visible — maintaining a clean, professional interior aesthetic.']}
      featureStrip={[{ icon: '👁️', label: 'Install', value: 'Hidden in ceiling' }, { icon: '❄️', label: 'Capacity', value: '3 ton / 36,000 BTU' }, { icon: '🌬️', label: 'ESP', value: '100 Pa' }, { icon: '🔇', label: 'Noise', value: 'Remote FCU' }]}
      specs={[{ label: 'Model', value: 'DS-3T' }, { label: 'Cooling Capacity', value: '36,000 BTU/hr (10.5 kW)' }, { label: 'ESP', value: '100 Pa' }, { label: 'Airflow', value: '1700 m³/hr' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Coverage', value: 'Up to 90 m²' }, { label: 'Indoor Unit (W×H×D)', value: '1100 × 250 × 720 mm' }, { label: 'Indoor Weight', value: '28 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A' }]}
      features={[{ title: 'Concealed Installation', desc: 'Unit hides behind ceiling with only discreet grilles visible.' }, { title: 'Flexible Duct Routes', desc: '100 Pa ESP allows ducts to run around structural obstacles.' }, { title: 'Even Distribution', desc: 'Multiple supply outlets ensure even temperature across the room.' }, { title: 'Quiet Operation', desc: 'Fan coil unit located away from occupied space for low noise.' }, { title: 'Fresh Air Intake', desc: 'Optional fresh air connection improves indoor air quality.' }, { title: 'Energy Efficient', desc: 'Inverter option available for reduced energy consumption.' }]}
      backHref="/solutions/air-conditioning/ducted-systems" backLabel="All Ducted Systems"
    />
  );
}
