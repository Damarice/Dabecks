import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SU12K() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: 'SU-12K' }]}
      category="Split Units" model="SU-12K" subtitle="Wall-mounted inverter split · 12,000 BTU / 1 ton"
      image="/products/ac/su12k.jpg" placeholder="SU-12K"
      keySpecs={[{ label: 'Capacity', value: '12,000 BTU' }, { label: 'EER', value: '3.9' }, { label: 'Coverage', value: 'Up to 35 m²' }]}
      description={['The SU-12K is the most popular split AC unit in our range — ideal for medium-sized offices, hotel rooms, and retail spaces up to 35 m². Its inverter technology and R32 refrigerant deliver efficient, reliable cooling year-round.', 'Available in standard wall-mount or high-wall configurations to suit different room layouts and installation requirements.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '12,000 BTU / 1 ton' }, { icon: '⚡', label: 'EER', value: '3.9' }, { icon: '🌿', label: 'Refrigerant', value: 'R32 eco-friendly' }, { icon: '📏', label: 'Coverage', value: 'Up to 35 m²' }]}
      specs={[{ label: 'Model', value: 'SU-12K' }, { label: 'Cooling Capacity', value: '12,000 BTU/hr (3.5 kW)' }, { label: 'EER', value: '3.9' }, { label: 'Indoor Noise', value: '21 dB(A)' }, { label: 'Refrigerant', value: 'R32' }, { label: 'Coverage Area', value: 'Up to 35 m²' }, { label: 'Indoor Unit (W×H×D)', value: '830 × 295 × 195 mm' }, { label: 'Indoor Weight', value: '10 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A++' }]}
      features={[{ title: 'Most Popular Model', desc: 'Trusted choice for hotel rooms, offices, and retail units across East Africa.' }, { title: 'High EER', desc: '3.9 EER delivers excellent energy efficiency for year-round operation.' }, { title: 'Auto Swing', desc: 'Motorised louvres automatically distribute air evenly across the room.' }, { title: 'Sleep Mode', desc: 'Gradually adjusts temperature overnight for comfortable, efficient sleeping.' }, { title: 'Turbo Mode', desc: 'Rapid cooling function reaches set temperature quickly.' }, { title: 'Filter Alert', desc: 'Notifies user when filter requires cleaning for maintained performance.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
