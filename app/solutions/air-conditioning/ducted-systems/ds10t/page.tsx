import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DS10T() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Ducted Systems', href: '/solutions/air-conditioning/ducted-systems' }, { label: 'DS-10T' }]}
      category="Ducted Systems" model="DS-10T" subtitle="Ceiling concealed ducted · 10 ton / 120,000 BTU"
      image="/products/ac/ds10t.jpg" placeholder="DS-10T"
      keySpecs={[{ label: 'Capacity', value: '120,000 BTU / 10 ton' }, { label: 'Coverage', value: 'Up to 300 m²' }, { label: 'Floors', value: '1–2 floors' }]}
      description={['The DS-10T is the largest single ducted unit in our range — 10 ton capacity for entire floor conditioning in large commercial buildings. Suitable for entire hotel floors, large restaurants, and hospital wards.', 'Designed for 3-phase power supply with full inverter control for energy efficiency across all load conditions.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '10 ton / 120,000 BTU' }, { icon: '🏢', label: 'Scale', value: 'Full-floor cooling' }, { icon: '⚡', label: 'Power', value: '3-phase supply' }, { icon: '📏', label: 'Coverage', value: 'Up to 300 m²' }]}
      specs={[{ label: 'Model', value: 'DS-10T' }, { label: 'Cooling Capacity', value: '120,000 BTU/hr (35 kW)' }, { label: 'ESP', value: '250 Pa' }, { label: 'Airflow', value: '5500 m³/hr' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Coverage', value: 'Up to 300 m²' }, { label: 'Indoor Unit (W×H×D)', value: '1800 × 400 × 1050 mm' }, { label: 'Indoor Weight', value: '95 kg' }, { label: 'Supply Voltage', value: '380–415 V / 3-phase / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A' }]}
      features={[{ title: 'Full Floor Conditioning', desc: '10 ton capacity conditions entire large commercial floors.' }, { title: 'High Static Pressure', desc: '250 Pa allows long, complex duct distributions.' }, { title: 'Three-Phase Power', desc: 'Efficient 3-phase operation for large capacity units.' }, { title: 'Inverter Efficiency', desc: 'Part-load efficiency reduces energy at low-demand periods.' }, { title: 'Integrated Controls', desc: 'Full BMS and central controller integration.' }, { title: 'Modular Redundancy', desc: 'Can be paired for redundancy in critical environments.' }]}
      backHref="/solutions/air-conditioning/ducted-systems" backLabel="All Ducted Systems"
    />
  );
}
