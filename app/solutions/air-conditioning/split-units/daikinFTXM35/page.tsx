import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DaikinFTXM35() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: 'Daikin FTXM35' }]}
      category="Split Units" model="Daikin FTXM35" subtitle="Premium inverter split · 12,000 BTU"
      image="/products/ac/daikin-ftxm35.jpg" placeholder="Daikin+FTXM35"
      keySpecs={[{ label: 'Capacity', value: '12,000 BTU' }, { label: 'SCOP', value: '5.1 A++' }, { label: 'Brand', value: 'Daikin' }]}
      description={['The Daikin FTXM35 is a premium inverter split unit from the world\'s leading air conditioning brand. Its A++ energy rating, whisper-quiet operation, and advanced air filtration make it the preferred choice for premium hotel rooms, executive offices, and healthcare environments.', 'Daikin\'s 2-area Intelligent Eye sensor detects occupancy and adjusts cooling automatically, saving energy when the room is unoccupied.']}
      featureStrip={[{ icon: '⭐', label: 'Brand', value: 'Daikin — world #1' }, { icon: '⚡', label: 'SCOP', value: '5.1 A++ rating' }, { icon: '👁️', label: 'Sensor', value: 'Intelligent Eye' }, { icon: '🔇', label: 'Noise', value: '19 dB(A)' }]}
      specs={[{ label: 'Model', value: 'Daikin FTXM35R' }, { label: 'Cooling Capacity', value: '12,000 BTU/hr (3.5 kW)' }, { label: 'SCOP', value: '5.1 (A++)' }, { label: 'Indoor Noise', value: '19 dB(A)' }, { label: 'Refrigerant', value: 'R32' }, { label: 'Coverage Area', value: 'Up to 40 m²' }, { label: 'Indoor Unit (W×H×D)', value: '800 × 295 × 219 mm' }, { label: 'Indoor Weight', value: '9 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A++' }]}
      features={[{ title: 'Daikin Quality', desc: 'World\'s leading AC brand — trusted in premium commercial and residential installations.' }, { title: 'A++ Efficiency', desc: 'SCOP 5.1 delivers class-leading energy performance.' }, { title: 'Intelligent Eye', desc: 'Occupancy sensor saves energy by adjusting when room is empty.' }, { title: 'Coanda Airflow', desc: 'Air directed along the ceiling for draught-free comfort.' }, { title: 'Flash Streamer', desc: 'Advanced air purification technology deactivates bacteria and allergens.' }, { title: 'Whisper Quiet', desc: '19 dB(A) — among the quietest split units available.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
