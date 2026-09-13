import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function MitsubishiPLAM() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Cassette Units', href: '/solutions/air-conditioning/cassette-units' }, { label: 'Mitsubishi PLA-M' }]}
      category="Cassette Units" model="Mitsubishi PLA-M" subtitle="Premium ceiling cassette · 2 ton"
      image="/products/ac/mitsubishi-pla-m.jpg" placeholder="Mitsubishi+PLA-M"
      keySpecs={[{ label: 'Capacity', value: '2 ton / 24,000 BTU' }, { label: 'Brand', value: 'Mitsubishi Electric' }, { label: 'EER', value: '4.0' }]}
      description={['The Mitsubishi Electric PLA-M is a high-quality 2-ton ceiling cassette unit trusted in commercial installations worldwide. Its advanced 4-way airflow and intelligent sensors deliver comfortable, energy-efficient climate control.', 'Fully compatible with Mitsubishi\'s City Multi VRF system and standalone split configurations.']}
      featureStrip={[{ icon: '⭐', label: 'Brand', value: 'Mitsubishi Electric' }, { icon: '🔄', label: 'Airflow', value: '4-way intelligent' }, { icon: '⚡', label: 'EER', value: '4.0' }, { icon: '🔗', label: 'Compatible', value: 'City Multi ready' }]}
      specs={[{ label: 'Model', value: 'Mitsubishi PLA-M60' }, { label: 'Cooling Capacity', value: '6.0 kW (2 ton)' }, { label: 'EER', value: '4.0' }, { label: 'Airflow', value: '4-way' }, { label: 'Panel Size', value: '840 × 840 mm' }, { label: 'Noise Level', value: '29 dB(A)' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Body Weight', value: '17 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Compatibility', value: 'City Multi / standalone' }]}
      features={[{ title: 'Mitsubishi Quality', desc: 'Trusted in over 150 countries for commercial HVAC reliability.' }, { title: 'High EER', desc: '4.0 EER for efficient, cost-effective commercial operation.' }, { title: 'Intelligent 4-Way Airflow', desc: 'Auto-adjusting louvres optimise air distribution for comfort.' }, { title: 'City Multi Ready', desc: 'Direct integration with Mitsubishi VRF multi-zone systems.' }, { title: 'Quiet Operation', desc: '29 dB(A) — suitable for sound-sensitive commercial environments.' }, { title: 'Weekly Schedule', desc: '7-day timer for automated energy management.' }]}
      backHref="/solutions/air-conditioning/cassette-units" backLabel="All Cassette Units"
    />
  );
}
