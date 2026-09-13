import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function HennyF5() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: 'Henny Penny F5' }]}
      category="Fryers" model="Henny Penny F5" subtitle="Pressure fryer · 5-head capacity"
      image="/products/fryers/henny-f5.jpg" placeholder="Henny+Penny+F5"
      keySpecs={[{ label: 'Type', value: 'Pressure fryer' }, { label: 'Capacity', value: '5 heads / 8 kg' }, { label: 'Cycle', value: '10–14 min' }]}
      description={['The Henny Penny F5 is a professional pressure fryer designed for producing consistently juicy, high-quality fried chicken and other proteins. Pressure frying seals in moisture while reducing cooking time and oil absorption.', 'The F5 is the industry standard for high-volume fried chicken operations, trusted by major QSR brands and independent restaurants worldwide.']}
      featureStrip={[{ icon: '🔒', label: 'Pressure', value: 'Sealed cooking' }, { icon: '🍗', label: 'Capacity', value: '5 heads per batch' }, { icon: '⏱️', label: 'Cycle Time', value: '10–14 minutes' }, { icon: '💧', label: 'Oil Use', value: 'Up to 40% less' }]}
      specs={[{ label: 'Model', value: 'Henny Penny F5' }, { label: 'Type', value: 'Pressure fryer' }, { label: 'Capacity', value: '5 heads / 8 kg per batch' }, { label: 'Cooking Pressure', value: '12 PSI' }, { label: 'Cycle Time', value: '10–14 minutes' }, { label: 'Oil Capacity', value: '15 L' }, { label: 'Width × Height × Depth', value: '584 × 1118 × 889 mm' }, { label: 'Net Weight', value: '95 kg' }, { label: 'Supply Voltage', value: '208–240 V / 60 Hz' }, { label: 'Certification', value: 'NSF, UL, CE' }]}
      features={[{ title: 'Pressure Frying', desc: 'Sealed pressure cooking retains moisture and flavour for juicier products.' }, { title: 'Reduced Oil Absorption', desc: 'Pressure sealing reduces oil absorbed by up to 40% vs open frying.' }, { title: 'Faster Cooking', desc: 'Pressure cuts cooking time significantly compared to open fryers.' }, { title: 'Consistent Results', desc: 'Precise pressure and temperature control for repeatable batch quality.' }, { title: 'Filtration System', desc: 'Built-in filtration extends oil life and maintains quality.' }, { title: 'Global Standard', desc: 'Trusted by leading QSR brands in over 100 countries.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
