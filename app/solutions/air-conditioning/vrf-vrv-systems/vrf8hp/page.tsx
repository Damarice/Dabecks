import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function VRF8HP() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'VRF/VRV Systems', href: '/solutions/air-conditioning/vrf-vrv-systems' }, { label: 'VRF-8HP' }]}
      category="VRF/VRV Systems" model="VRF-8HP" subtitle="VRF outdoor unit · 8 HP / 22.4 kW"
      image="/products/ac/vrf8hp.jpg" placeholder="VRF-8HP"
      keySpecs={[{ label: 'Capacity', value: '8 HP / 22.4 kW' }, { label: 'Zones', value: 'Up to 13' }, { label: 'EER', value: '4.2' }]}
      description={['The VRF-8HP outdoor unit supports up to 13 indoor units across different zones in a single building. Its variable refrigerant flow technology adjusts output precisely to meet demand in each zone, delivering exceptional energy efficiency.', 'Ideal for small to medium commercial buildings, boutique hotels, and office suites requiring independent zone control.']}
      featureStrip={[{ icon: '🏢', label: 'Zones', value: 'Up to 13 indoor units' }, { icon: '⚡', label: 'EER', value: '4.2 high efficiency' }, { icon: '🔄', label: 'Technology', value: 'Variable refrigerant flow' }, { icon: '🌿', label: 'Refrigerant', value: 'R410A' }]}
      specs={[{ label: 'Model', value: 'VRF-8HP' }, { label: 'Capacity', value: '22.4 kW (8 HP)' }, { label: 'Max Indoor Units', value: '13' }, { label: 'EER', value: '4.2' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Piping Length', value: 'Up to 165 m total' }, { label: 'Height Difference', value: 'Up to 50 m' }, { label: 'Dimensions (W×H×D)', value: '940 × 1490 × 320 mm' }, { label: 'Net Weight', value: '165 kg' }, { label: 'Supply Voltage', value: '380–415 V / 3-phase / 50 Hz' }]}
      features={[{ title: 'Multi-Zone Control', desc: 'Connect up to 13 indoor units, each independently controlled.' }, { title: 'High EER', desc: '4.2 EER for outstanding energy efficiency across all zones.' }, { title: 'Flexible Piping', desc: 'Up to 165 m total piping length for flexible building layouts.' }, { title: 'Heat Recovery Option', desc: 'Optional heat recovery module allows simultaneous heating and cooling.' }, { title: 'BMS Integration', desc: 'Connects to building management systems for centralised control.' }, { title: 'Quiet Outdoor Unit', desc: 'Low-noise design suitable for urban buildings with noise restrictions.' }]}
      backHref="/solutions/air-conditioning/vrf-vrv-systems" backLabel="All VRF/VRV Systems"
    />
  );
}
