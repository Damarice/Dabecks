import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Fryer700XPGasFreestanding7L() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: '700XP One Well Freestanding Gas Fryer 7L' }]}
      category="Freestanding Gas Fryers" model="Modular Cooking Range Line 700XP One Well Freestanding Gas Fryer 7 liter" subtitle="COD 371068"
      image="/products/kitchen/fryers/fryer-700xp-gas-freestanding-7l.jpg" placeholder="700XP+Gas+Freestanding+Fryer+7L"
      keySpecs={[{ label: 'Tank Capacity', value: '7 litres' }, { label: 'Fuel Type', value: 'Gas' }, { label: 'Configuration', value: 'One well · Freestanding' }]}
      description={['The Modular Cooking Range Line 700XP One Well Freestanding Gas Fryer is a self-contained professional gas fryer with a 7-litre tank. Its freestanding design makes it suitable for standalone installation or as part of a modular kitchen suite.', 'Built for commercial kitchens in hotels, restaurants, and catering operations, it delivers reliable performance and easy maintenance.']}
      featureStrip={[{ icon: '🔥', label: 'Fuel', value: 'Gas' }, { icon: '🛢️', label: 'Capacity', value: '7 litres' }, { icon: '📐', label: 'Type', value: 'Freestanding' }, { icon: '🔗', label: 'Series', value: '700XP Modular' }]}
      specs={[{ label: 'Model Code', value: '371068' }, { label: 'Tank Capacity', value: '7 litres' }, { label: 'Fuel Type', value: 'Gas' }, { label: 'Configuration', value: 'One well, freestanding' }, { label: 'Series', value: 'Modular Cooking Range Line 700XP' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Freestanding Unit', desc: 'Self-contained design for flexible placement in any commercial kitchen.' }, { title: 'Fast Oil Recovery', desc: 'High-powered gas burners restore oil temperature quickly between batches.' }, { title: 'One Well Tank', desc: '7-litre single well ideal for moderate volume frying operations.' }, { title: 'Modular Series', desc: 'Part of the 700XP range for consistent equipment standards across the kitchen.' }, { title: 'Easy Cleaning', desc: 'Removable tank and smooth surfaces for quick end-of-service cleaning.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
