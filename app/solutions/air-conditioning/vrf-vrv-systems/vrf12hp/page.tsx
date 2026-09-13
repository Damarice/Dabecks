import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function VRF12HP() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'VRF/VRV Systems', href: '/solutions/air-conditioning/vrf-vrv-systems' }, { label: 'VRF-12HP' }]}
      category="VRF/VRV Systems" model="VRF-12HP" subtitle="VRF outdoor unit · 12 HP / 33.5 kW"
      image="/products/ac/vrf12hp.jpg" placeholder="VRF-12HP"
      keySpecs={[{ label: 'Capacity', value: '12 HP / 33.5 kW' }, { label: 'Zones', value: 'Up to 19' }, { label: 'EER', value: '4.0' }]}
      description={['The VRF-12HP supports up to 19 indoor units — ideal for medium commercial buildings, 3–5 storey office blocks, and medium hotels. Variable refrigerant flow technology delivers precise, energy-efficient climate control across all zones.', 'Two outdoor units can be combined for larger installations, providing scalability as your building needs grow.']}
      featureStrip={[{ icon: '🏢', label: 'Zones', value: 'Up to 19 indoor units' }, { icon: '⚡', label: 'EER', value: '4.0' }, { icon: '📐', label: 'Scalable', value: 'Combinable units' }, { icon: '🌿', label: 'Refrigerant', value: 'R410A' }]}
      specs={[{ label: 'Model', value: 'VRF-12HP' }, { label: 'Capacity', value: '33.5 kW (12 HP)' }, { label: 'Max Indoor Units', value: '19' }, { label: 'EER', value: '4.0' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Piping Length', value: 'Up to 200 m total' }, { label: 'Height Difference', value: 'Up to 50 m' }, { label: 'Dimensions (W×H×D)', value: '1050 × 1680 × 320 mm' }, { label: 'Net Weight', value: '220 kg' }, { label: 'Supply Voltage', value: '380–415 V / 3-phase / 50 Hz' }]}
      features={[{ title: 'Up to 19 Zones', desc: 'Covers medium commercial buildings with independent zone control throughout.' }, { title: 'Combinable', desc: 'Two units can be combined on a single refrigerant circuit for larger buildings.' }, { title: 'Long Piping', desc: 'Up to 200 m total piping for flexible installation across floors.' }, { title: 'Heat Recovery', desc: 'Optional HR module enables simultaneous heating and cooling in different zones.' }, { title: 'BMS Compatible', desc: 'Integrates with BACNET, MODBUS, and other building management protocols.' }, { title: 'Low Ambient', desc: 'Operates down to -15 °C ambient for year-round performance.' }]}
      backHref="/solutions/air-conditioning/vrf-vrv-systems" backLabel="All VRF/VRV Systems"
    />
  );
}
