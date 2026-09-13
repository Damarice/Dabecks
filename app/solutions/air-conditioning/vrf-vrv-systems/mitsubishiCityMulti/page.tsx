import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function MitsubishiCityMulti() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'VRF/VRV Systems', href: '/solutions/air-conditioning/vrf-vrv-systems' }, { label: 'Mitsubishi City Multi' }]}
      category="VRF/VRV Systems" model="Mitsubishi City Multi" subtitle="VRF system · R2 series"
      image="/products/ac/mitsubishi-city-multi.jpg" placeholder="Mitsubishi+City+Multi"
      keySpecs={[{ label: 'Zones', value: 'Up to 50' }, { label: 'EER', value: '3.8' }, { label: 'Brand', value: 'Mitsubishi Electric' }]}
      description={['The Mitsubishi Electric City Multi R2 Series is a premium VRF system trusted in large commercial installations worldwide. Its Y-branch piping system allows flexible layout design for complex building configurations.', 'Advanced 2-pipe heat recovery and the Mitsubishi TG-2000 centralised controller make it ideal for large offices, hotels, and shopping centres requiring sophisticated HVAC management.']}
      featureStrip={[{ icon: '⭐', label: 'Brand', value: 'Mitsubishi Electric' }, { icon: '🏢', label: 'Zones', value: 'Up to 50' }, { icon: '🔀', label: 'Piping', value: 'Y-branch flexible' }, { icon: '🖥️', label: 'Control', value: 'TG-2000 central' }]}
      specs={[{ label: 'Model', value: 'City Multi R2 Series' }, { label: 'Max Indoor Units', value: '50' }, { label: 'EER', value: '3.8' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Piping System', value: 'Y-branch' }, { label: 'Capacity Range', value: '8–48 HP' }, { label: 'Max Piping', value: '300 m equivalent' }, { label: 'Height Difference', value: 'Up to 90 m' }, { label: 'Supply Voltage', value: '380–415 V / 3-phase / 50 Hz' }, { label: 'BMS', value: 'BACNET, MODBUS, LON' }]}
      features={[{ title: 'Y-Branch Piping', desc: 'Flexible Y-branch design simplifies installation in complex floor plans.' }, { title: 'Heat Recovery', desc: '2-pipe heat recovery delivers simultaneous heating and cooling.' }, { title: 'TG-2000 Controller', desc: 'Centralised management of all indoor units from a single interface.' }, { title: 'BMS Integration', desc: 'Full BACNET, MODBUS, and LON support for building management systems.' }, { title: 'Wide Capacity Range', desc: '8–48 HP covers any commercial building size.' }, { title: 'Proven Reliability', desc: 'Mitsubishi Electric quality — trusted in installations across 150 countries.' }]}
      backHref="/solutions/air-conditioning/vrf-vrv-systems" backLabel="All VRF/VRV Systems"
    />
  );
}
