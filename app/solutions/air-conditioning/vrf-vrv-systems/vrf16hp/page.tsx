import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function VRF16HP() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'VRF/VRV Systems', href: '/solutions/air-conditioning/vrf-vrv-systems' }, { label: 'VRF-16HP' }]}
      category="VRF/VRV Systems" model="VRF-16HP" subtitle="VRF outdoor unit · 16 HP / 45 kW"
      image="/products/ac/vrf16hp.jpg" placeholder="VRF-16HP"
      keySpecs={[{ label: 'Capacity', value: '16 HP / 45 kW' }, { label: 'Zones', value: 'Up to 25' }, { label: 'EER', value: '3.9' }]}
      description={['The VRF-16HP is a large-capacity outdoor unit supporting up to 25 zones — suitable for 5–8 storey buildings, large hotels, and shopping centre sections. Its high capacity and efficient operation make it the backbone of large commercial HVAC projects.', 'Modular design allows pairing with additional outdoor units for buildings requiring even greater capacity.']}
      featureStrip={[{ icon: '🏗️', label: 'Capacity', value: '16 HP / 45 kW' }, { icon: '🏢', label: 'Zones', value: 'Up to 25' }, { icon: '🔄', label: 'Design', value: 'Modular' }, { icon: '⚡', label: 'EER', value: '3.9' }]}
      specs={[{ label: 'Model', value: 'VRF-16HP' }, { label: 'Capacity', value: '45 kW (16 HP)' }, { label: 'Max Indoor Units', value: '25' }, { label: 'EER', value: '3.9' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Max Piping Length', value: '250 m' }, { label: 'Height Difference', value: 'Up to 70 m' }, { label: 'Dimensions (W×H×D)', value: '1200 × 1800 × 320 mm' }, { label: 'Net Weight', value: '295 kg' }, { label: 'Supply Voltage', value: '380–415 V / 3-phase / 50 Hz' }]}
      features={[{ title: 'Large Building Scale', desc: 'Covers 5–8 storey buildings with a single outdoor installation.' }, { title: '25 Independent Zones', desc: 'Each zone independently controlled for comfort and energy savings.' }, { title: 'Extended Piping', desc: '250 m max piping and 70 m height difference for tall buildings.' }, { title: 'Modular Expansion', desc: 'Combine multiple outdoor units for buildings of any size.' }, { title: 'Central Management', desc: 'Connects to central controller for building-wide monitoring.' }, { title: 'Demand Control', desc: 'Auto demand limiting prevents peak electricity tariff overruns.' }]}
      backHref="/solutions/air-conditioning/vrf-vrv-systems" backLabel="All VRF/VRV Systems"
    />
  );
}
