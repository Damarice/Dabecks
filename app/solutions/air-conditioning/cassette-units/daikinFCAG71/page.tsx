import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DaikinFCAG71() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Cassette Units', href: '/solutions/air-conditioning/cassette-units' }, { label: 'Daikin FCAG71' }]}
      category="Cassette Units" model="Daikin FCAG71" subtitle="Premium ceiling cassette · 2.5 ton"
      image="/products/ac/daikin-fcag71.jpg" placeholder="Daikin+FCAG71"
      keySpecs={[{ label: 'Capacity', value: '2.5 ton / 30,000 BTU' }, { label: 'Brand', value: 'Daikin' }, { label: 'EER', value: '4.2' }]}
      description={['The Daikin FCAG71 is a premium 2.5-ton ceiling cassette unit from the world\'s leading AC brand. Its advanced 3D airflow technology distributes conditioned air horizontally and vertically for truly draught-free comfort.', 'Fully compatible with Daikin\'s VRV system as well as standalone split operation, offering maximum installation flexibility.']}
      featureStrip={[{ icon: '⭐', label: 'Brand', value: 'Daikin premium' }, { icon: '🌬️', label: 'Airflow', value: '3D distribution' }, { icon: '⚡', label: 'EER', value: '4.2 efficient' }, { icon: '🔗', label: 'Compatible', value: 'VRV and standalone' }]}
      specs={[{ label: 'Model', value: 'Daikin FCAG71' }, { label: 'Cooling Capacity', value: '7.1 kW (2.5 ton)' }, { label: 'EER', value: '4.2' }, { label: 'Airflow', value: '3D 4-way' }, { label: 'Panel Size', value: '900 × 900 mm' }, { label: 'Noise Level', value: '30 dB(A)' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Body Weight', value: '20 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Compatibility', value: 'Daikin VRV / standalone' }]}
      features={[{ title: '3D Airflow Technology', desc: 'Unique 3D distribution eliminates draughts and cold spots.' }, { title: 'Daikin EER 4.2', desc: 'Premium energy efficiency for lower long-term running costs.' }, { title: 'VRV Compatible', desc: 'Integrates directly with Daikin VRV multi-zone systems.' }, { title: 'Whisper Quiet', desc: '30 dB(A) — ideal for hotel rooms and executive offices.' }, { title: 'Coanda Effect', desc: 'Air directed along ceiling for gentle, draught-free distribution.' }, { title: 'Global Support', desc: 'Daikin\'s worldwide service network ensures parts availability.' }]}
      backHref="/solutions/air-conditioning/cassette-units" backLabel="All Cassette Units"
    />
  );
}
