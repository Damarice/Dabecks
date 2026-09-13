import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Vulcan1ER50DF() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: 'Vulcan 1ER50DF' }]}
      category="Fryers" model="Vulcan 1ER50DF" subtitle="Electric fryer · 50 lb oil capacity"
      image="/products/fryers/vulcan-1er50df.jpg" placeholder="Vulcan+1ER50DF"
      keySpecs={[{ label: 'Oil Capacity', value: '50 lb / 23 L' }, { label: 'Power', value: '21 kW' }, { label: 'Output', value: '60 lb/hr' }]}
      description={['The Vulcan 1ER50DF is a heavy-duty electric deep fryer with 50 lb oil capacity and built-in filtration system. Designed for high-volume commercial kitchens that demand reliability and consistent performance.', 'The integrated filtration drawer makes oil maintenance fast and safe, extending oil life and reducing operating costs.']}
      featureStrip={[{ icon: '⚡', label: 'Power', value: '21 kW electric' }, { icon: '🛢️', label: 'Capacity', value: '50 lb oil' }, { icon: '🔽', label: 'Filtration', value: 'Built-in drawer' }, { icon: '📈', label: 'Output', value: '60 lb/hr' }]}
      specs={[{ label: 'Model', value: 'Vulcan 1ER50DF' }, { label: 'Oil Capacity', value: '50 lb (23 L)' }, { label: 'Heating Power', value: '21 kW' }, { label: 'Production Rate', value: '60 lb/hr' }, { label: 'Temperature Range', value: '200–375 °F (93–190 °C)' }, { label: 'Filtration', value: 'Built-in drawer system' }, { label: 'Width × Height × Depth', value: '381 × 1168 × 889 mm' }, { label: 'Net Weight', value: '82 kg' }, { label: 'Supply Voltage', value: '208–240 V / 60 Hz' }, { label: 'Certification', value: 'NSF, UL, ENERGY STAR' }]}
      features={[{ title: 'Built-In Filtration', desc: 'Integrated filtration drawer extends oil life and maintains frying quality.' }, { title: 'High Output', desc: '60 lb/hr production capacity for busy food service environments.' }, { title: 'ENERGY STAR', desc: 'Certified for energy efficiency — reduces operating costs.' }, { title: 'Solid State Controls', desc: 'Precise temperature control for consistent frying results.' }, { title: 'Cool Zone Design', desc: 'Cold zone traps sediment and prevents oil degradation.' }, { title: 'Safety Features', desc: 'High-limit thermostat and safe drain system as standard.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
