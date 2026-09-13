import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function VRF20HP() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'VRF/VRV Systems', href: '/solutions/air-conditioning/vrf-vrv-systems' }, { label: 'VRF-20HP' }]}
      category="VRF/VRV Systems" model="VRF-20HP" subtitle="VRF outdoor unit · 20 HP / 56 kW"
      image="/products/ac/vrf20hp.jpg" placeholder="VRF-20HP"
      keySpecs={[{ label: 'Capacity', value: '20 HP / 56 kW' }, { label: 'Zones', value: 'Up to 31' }, { label: 'EER', value: '3.8' }]}
      description={['The VRF-20HP is our highest single-unit capacity outdoor system at 20 HP, supporting up to 31 indoor zones. Designed for large commercial projects — tower offices, 4-5 star hotels, and hospitals.', 'Advanced inverter twin-rotary compressor technology ensures reliable, efficient operation across the full capacity range.']}
      featureStrip={[{ icon: '🏗️', label: 'Capacity', value: '20 HP / 56 kW' }, { icon: '🏢', label: 'Zones', value: 'Up to 31' }, { icon: '⚙️', label: 'Compressor', value: 'Twin-rotary inverter' }, { icon: '⚡', label: 'EER', value: '3.8' }]}
      specs={[{ label: 'Model', value: 'VRF-20HP' }, { label: 'Capacity', value: '56 kW (20 HP)' }, { label: 'Max Indoor Units', value: '31' }, { label: 'EER', value: '3.8' }, { label: 'Compressor', value: 'Twin-rotary inverter' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Max Piping Length', value: '300 m' }, { label: 'Height Difference', value: 'Up to 90 m' }, { label: 'Net Weight', value: '380 kg' }, { label: 'Supply Voltage', value: '380–415 V / 3-phase / 50 Hz' }]}
      features={[{ title: 'Highest Single-Unit Capacity', desc: '56 kW from a single outdoor installation for large commercial projects.' }, { title: 'Twin-Rotary Compressor', desc: 'Dual compressor technology for reliability and precise capacity control.' }, { title: 'Up to 31 Zones', desc: 'Comprehensive multi-zone coverage for large buildings.' }, { title: '90 m Height Difference', desc: 'Suitable for the tallest commercial buildings.' }, { title: 'Full BMS Integration', desc: 'Supports all major building management protocols.' }, { title: 'Tandem Capable', desc: 'Combine with additional units for unlimited building capacity.' }]}
      backHref="/solutions/air-conditioning/vrf-vrv-systems" backLabel="All VRF/VRV Systems"
    />
  );
}
