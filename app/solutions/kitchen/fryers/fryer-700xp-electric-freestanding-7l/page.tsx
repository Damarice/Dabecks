import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Fryer700XPElectricFreestanding7L() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: '700XP One Well Freestanding Electric Fryer 7L' }]}
      category="Freestanding Electric Fryers" model="Modular Cooking Range Line 700XP One Well Freestanding Electric Fryer 7 liter" subtitle="COD 371077"
      image="/products/kitchen/fryers/fryer-700xp-electric-freestanding-7l.jpg" placeholder="700XP+Electric+Freestanding+Fryer+7L"
      keySpecs={[{ label: 'Tank Capacity', value: '7 litres' }, { label: 'Fuel Type', value: 'Electric' }, { label: 'Configuration', value: 'One well · Freestanding' }]}
      description={['The Modular Cooking Range Line 700XP One Well Freestanding Electric Fryer delivers precise electric heating in a standalone 7-litre configuration. Ideal for kitchens where gas is not available or where electric cooking is preferred.', 'Its freestanding design suits standalone placement or integration into a modular 700XP kitchen suite.']}
      featureStrip={[{ icon: '⚡', label: 'Fuel', value: 'Electric' }, { icon: '🛢️', label: 'Capacity', value: '7 litres' }, { icon: '📐', label: 'Type', value: 'Freestanding' }, { icon: '🔗', label: 'Series', value: '700XP Modular' }]}
      specs={[{ label: 'Model Code', value: '371077' }, { label: 'Tank Capacity', value: '7 litres' }, { label: 'Fuel Type', value: 'Electric' }, { label: 'Configuration', value: 'One well, freestanding' }, { label: 'Series', value: 'Modular Cooking Range Line 700XP' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Freestanding Unit', desc: 'Self-contained design for flexible placement without gas supply requirement.' }, { title: 'Electric Precision', desc: 'Precise electric heating for accurate temperature control throughout service.' }, { title: 'One Well Tank', desc: '7-litre single well for moderate volume frying operations.' }, { title: 'Modular Series', desc: 'Part of the 700XP range for consistent equipment across the kitchen.' }, { title: 'Easy Cleaning', desc: 'Removable tank and heating elements for quick post-service cleaning.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
