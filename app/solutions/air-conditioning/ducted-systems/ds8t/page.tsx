import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DS8T() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Ducted Systems', href: '/solutions/air-conditioning/ducted-systems' }, { label: 'DS-8T' }]}
      category="Ducted Systems" model="DS-8T" subtitle="Ceiling concealed ducted · 8 ton / 96,000 BTU"
      image="/products/ac/ds8t.jpg" placeholder="DS-8T"
      keySpecs={[{ label: 'Capacity', value: '96,000 BTU / 8 ton' }, { label: 'Coverage', value: 'Up to 250 m²' }, { label: 'ESP', value: '200 Pa' }]}
      description={['The DS-8T is a high-capacity ducted unit for large open-plan floors, hotel lobbies, and conference centres up to 250 m². Its 200 Pa ESP handles complex multi-branch duct systems.', 'Advanced inverter control maintains precise temperature while minimising energy consumption during part-load operation.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '8 ton / 96,000 BTU' }, { icon: '📏', label: 'Coverage', value: 'Up to 250 m²' }, { icon: '⚡', label: 'Inverter', value: 'Part-load efficient' }, { icon: '🌬️', label: 'ESP', value: '200 Pa' }]}
      specs={[{ label: 'Model', value: 'DS-8T' }, { label: 'Cooling Capacity', value: '96,000 BTU/hr (28 kW)' }, { label: 'ESP', value: '200 Pa' }, { label: 'Airflow', value: '4500 m³/hr' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Coverage', value: 'Up to 250 m²' }, { label: 'Indoor Unit (W×H×D)', value: '1600 × 350 × 950 mm' }, { label: 'Indoor Weight', value: '68 kg' }, { label: 'Supply Voltage', value: '380–415 V / 3-phase / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A' }]}
      features={[{ title: 'Large Floor Coverage', desc: '8 ton covers entire large floors from a single concealed unit.' }, { title: '200 Pa High Pressure', desc: 'Allows long duct runs and complex branching for large floorplates.' }, { title: 'Inverter Control', desc: 'Efficient part-load operation reduces energy at off-peak times.' }, { title: 'Multi-Zone Support', desc: 'Works with VAV boxes for individual zone temperature control.' }, { title: 'BMS Ready', desc: 'BACnet and MODBUS connectivity for building management.' }, { title: 'Fresh Air Handling', desc: 'Optional heat recovery ventilator connection for fresh air.' }]}
      backHref="/solutions/air-conditioning/ducted-systems" backLabel="All Ducted Systems"
    />
  );
}
