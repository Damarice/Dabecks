import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DaikinFDQ125() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Ducted Systems', href: '/solutions/air-conditioning/ducted-systems' }, { label: 'Daikin FDQ125' }]}
      category="Ducted Systems" model="Daikin FDQ125" subtitle="Premium ceiling concealed ducted · 5 ton"
      image="/products/ac/daikin-fdq125.jpg" placeholder="Daikin+FDQ125"
      keySpecs={[{ label: 'Capacity', value: '5 ton / 60,000 BTU' }, { label: 'Brand', value: 'Daikin' }, { label: 'ESP', value: '200 Pa' }]}
      description={['The Daikin FDQ125 is a premium ceiling-concealed ducted unit from the world\'s leading AC brand. Its 200 Pa external static pressure and wide airflow range make it ideal for complex duct configurations in commercial buildings.', 'Fully compatible with Daikin\'s VRV systems, it can operate as part of a larger multi-zone installation.']}
      featureStrip={[{ icon: '⭐', label: 'Brand', value: 'Daikin quality' }, { icon: '❄️', label: 'Capacity', value: '5 ton' }, { icon: '🌬️', label: 'ESP', value: '200 Pa' }, { icon: '🔗', label: 'Compatible', value: 'Daikin VRV ready' }]}
      specs={[{ label: 'Model', value: 'Daikin FDQ125B' }, { label: 'Cooling Capacity', value: '12.5 kW (5 ton)' }, { label: 'ESP', value: '200 Pa' }, { label: 'Airflow', value: '2700 m³/hr' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Noise Level', value: '40 dB(A)' }, { label: 'Indoor Unit (W×H×D)', value: '1400 × 280 × 820 mm' }, { label: 'Indoor Weight', value: '40 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Compatibility', value: 'Daikin VRV / standalone' }]}
      features={[{ title: 'Daikin Reliability', desc: 'World\'s leading HVAC brand — guaranteed quality and parts availability.' }, { title: 'VRV Compatible', desc: 'Operates as part of a Daikin VRV multi-zone system.' }, { title: 'High ESP', desc: '200 Pa handles complex duct layouts in large buildings.' }, { title: 'Auto Restart', desc: 'Restores previous settings automatically after power failure.' }, { title: 'Quiet Fan', desc: 'DC fan motor for low noise and energy-efficient operation.' }, { title: 'Filter Indicator', desc: 'Alerts when filter needs cleaning to maintain performance.' }]}
      backHref="/solutions/air-conditioning/ducted-systems" backLabel="All Ducted Systems"
    />
  );
}
