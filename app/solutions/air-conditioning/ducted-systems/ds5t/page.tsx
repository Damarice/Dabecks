import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DS5T() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Ducted Systems', href: '/solutions/air-conditioning/ducted-systems' }, { label: 'DS-5T' }]}
      category="Ducted Systems" model="DS-5T" subtitle="Ceiling concealed ducted · 5 ton / 60,000 BTU"
      image="/products/ac/ds5t.jpg" placeholder="DS-5T"
      keySpecs={[{ label: 'Capacity', value: '60,000 BTU / 5 ton' }, { label: 'Coverage', value: 'Up to 150 m²' }, { label: 'ESP', value: '150 Pa' }]}
      description={['The DS-5T is a mid-size ducted unit covering open-plan offices, restaurant dining areas, and conference rooms up to 150 m². Its 150 Pa ESP allows longer duct runs and multi-outlet configurations.', 'Paired with zoned dampers, it can serve multiple areas from a single unit, reducing installation and equipment costs.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '5 ton / 60,000 BTU' }, { icon: '📏', label: 'Coverage', value: 'Up to 150 m²' }, { icon: '🌬️', label: 'ESP', value: '150 Pa' }, { icon: '🔀', label: 'Zoning', value: 'Multi-zone capable' }]}
      specs={[{ label: 'Model', value: 'DS-5T' }, { label: 'Cooling Capacity', value: '60,000 BTU/hr (17.6 kW)' }, { label: 'ESP', value: '150 Pa' }, { label: 'Airflow', value: '2800 m³/hr' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Coverage', value: 'Up to 150 m²' }, { label: 'Indoor Unit (W×H×D)', value: '1400 × 300 × 850 mm' }, { label: 'Indoor Weight', value: '42 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A' }]}
      features={[{ title: 'High Capacity', desc: '5 ton covers large open-plan areas from a single ceiling-mounted unit.' }, { title: 'Long Duct Runs', desc: '150 Pa ESP enables flexible multi-outlet duct configurations.' }, { title: 'Zoning Ready', desc: 'Works with motorised dampers for zone-by-zone temperature control.' }, { title: 'Low Profile', desc: 'Compact height minimises ceiling void requirement.' }, { title: 'Quiet FCU', desc: 'Fan coil unit noise isolated from occupied areas.' }, { title: 'Fresh Air Connection', desc: 'Built-in mixing box for fresh air integration.' }]}
      backHref="/solutions/air-conditioning/ducted-systems" backLabel="All Ducted Systems"
    />
  );
}
