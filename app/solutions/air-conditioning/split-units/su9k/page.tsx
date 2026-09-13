import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SU9K() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: 'SU-9K' }]}
      category="Split Units" model="SU-9K" subtitle="Wall-mounted inverter split · 9,000 BTU"
      image="/products/ac/su9k.jpg" placeholder="SU-9K"
      keySpecs={[{ label: 'Capacity', value: '9,000 BTU' }, { label: 'EER', value: '3.8' }, { label: 'Noise', value: '19 dB(A)' }]}
      description={['The SU-9K is a compact inverter split AC unit ideal for small offices, bedrooms, and server rooms up to 25 m². Its ultra-quiet 19 dB indoor unit and efficient inverter compressor deliver comfortable, cost-effective cooling.', 'Wi-Fi enabled for remote control via smartphone, it offers intelligent scheduling and energy monitoring for modern commercial use.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '9,000 BTU' }, { icon: '🔇', label: 'Noise', value: '19 dB(A) indoor' }, { icon: '📱', label: 'Control', value: 'Wi-Fi enabled' }, { icon: '⚡', label: 'Inverter', value: 'Variable speed' }]}
      specs={[{ label: 'Model', value: 'SU-9K' }, { label: 'Cooling Capacity', value: '9,000 BTU/hr (2.6 kW)' }, { label: 'EER', value: '3.8' }, { label: 'Indoor Noise', value: '19 dB(A) (low)' }, { label: 'Refrigerant', value: 'R32' }, { label: 'Coverage Area', value: 'Up to 25 m²' }, { label: 'Indoor Unit (W×H×D)', value: '770 × 270 × 185 mm' }, { label: 'Indoor Weight', value: '8 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A++' }]}
      features={[{ title: 'Inverter Compressor', desc: 'Variable speed compressor saves up to 60% energy versus fixed-speed units.' }, { title: 'Ultra Quiet', desc: '19 dB(A) indoor operation — ideal for bedrooms and quiet offices.' }, { title: 'Wi-Fi Control', desc: 'Control from anywhere via smartphone app.' }, { title: 'R32 Refrigerant', desc: 'Low global warming potential refrigerant for eco-conscious operations.' }, { title: 'Auto Restart', desc: 'Automatically restores settings after power interruption.' }, { title: 'Self-Cleaning', desc: 'Built-in self-cleaning function keeps indoor unit fresh.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
