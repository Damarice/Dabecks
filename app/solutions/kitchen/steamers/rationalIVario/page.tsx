import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function RationalIVario() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Steamers', href: '/solutions/kitchen/steamers' }, { label: 'Rational iVario' }]}
      category="Steamers" model="Rational iVario" subtitle="Multi-function combi cooker"
      image="/products/steamers/rational-ivario.jpg" placeholder="Rational+iVario"
      keySpecs={[{ label: 'Capacity', value: '2 × 17 L pans' }, { label: 'Modes', value: '4 cooking modes' }, { label: 'Intelligence', value: 'iCookingSuite' }]}
      description={['The Rational iVario replaces up to 4 conventional cooking appliances — tilting pan, kettle, steamer, and fryer — in a single intelligent unit. Its iCookingSuite automatically controls all cooking parameters for perfect results.', 'Ideal for institutional catering, banqueting, and hotel kitchens seeking to consolidate equipment, reduce energy, and improve consistency.']}
      featureStrip={[{ icon: '🧠', label: 'Intelligence', value: 'iCookingSuite' }, { icon: '🔄', label: 'Replaces', value: '4 appliances' }, { icon: '⚡', label: 'Energy', value: 'Up to 40% savings' }, { icon: '📡', label: 'Connected', value: 'ConnectedCooking' }]}
      specs={[{ label: 'Model', value: 'Rational iVario Pro 2-2/3' }, { label: 'Pan Capacity', value: '2 × 17 L' }, { label: 'Cooking Modes', value: 'Fry, boil, steam, slow cook' }, { label: 'Temperature Range', value: '30–200 °C' }, { label: 'Heating Power', value: '11 kW' }, { label: 'Connectivity', value: 'ConnectedCooking' }, { label: 'Width × Height × Depth', value: '1500 × 900 × 800 mm' }, { label: 'Net Weight', value: '175 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Certification', value: 'CE, NSF' }]}
      features={[{ title: 'Replaces 4 Appliances', desc: 'Tilting pan, kettle, steamer, and fryer in a single intelligent unit.' }, { title: 'iCookingSuite', desc: 'Intelligent cooking system automatically adjusts all parameters.' }, { title: 'ConnectedCooking', desc: 'Cloud connectivity for remote monitoring and recipe management.' }, { title: 'Energy Efficient', desc: 'Up to 40% energy savings versus conventional cooking appliances.' }, { title: 'Precise Temperature', desc: 'Degree-by-degree control from 30 to 200 °C.' }, { title: 'Easy Cleaning', desc: 'Integrated cleaning program minimises post-service labour.' }]}
      backHref="/solutions/kitchen/steamers" backLabel="All Steamers"
    />
  );
}
