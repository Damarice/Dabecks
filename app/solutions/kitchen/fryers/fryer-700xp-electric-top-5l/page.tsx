import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Fryer700XPElectricTop5L() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: '700XP Two Wells Electric Fryer Top 5L' }]}
      category="Electric Fryer Tops" model="Modular Cooking Range Line 700XP Two Wells Electric Fryer Top 5 liter" subtitle="COD 371074"
      image="/products/kitchen/fryers/fryer-700xp-electric-top-5l.jpg" placeholder="700XP+Electric+Fryer+Top+5L"
      keySpecs={[{ label: 'Tank Capacity', value: '5 litres' }, { label: 'Fuel Type', value: 'Electric' }, { label: 'Configuration', value: 'Two wells · Top unit' }]}
      description={['The Modular Cooking Range Line 700XP Two Wells Electric Fryer Top is a dual-tank electric countertop fryer with 5-litre capacity per well. Its two-well design allows simultaneous frying of different products without flavour transfer.', 'Perfect for busy kitchens needing versatility, this top unit fits neatly into the 700XP modular cooking range lineup.']}
      featureStrip={[{ icon: '⚡', label: 'Fuel', value: 'Electric' }, { icon: '🛢️', label: 'Capacity', value: '5 litres' }, { icon: '📐', label: 'Type', value: 'Two wells · Top' }, { icon: '🔗', label: 'Series', value: '700XP Modular' }]}
      specs={[{ label: 'Model Code', value: '371074' }, { label: 'Tank Capacity', value: '5 litres per well' }, { label: 'Number of Wells', value: 'Two' }, { label: 'Fuel Type', value: 'Electric' }, { label: 'Configuration', value: 'Two wells, top unit' }, { label: 'Series', value: 'Modular Cooking Range Line 700XP' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Two Wells', desc: 'Dual tanks allow simultaneous frying of different products without flavour transfer.' }, { title: 'Electric Heating', desc: 'Precise electric elements for accurate temperature control and consistent results.' }, { title: 'Top Unit', desc: 'Countertop configuration integrates into modular kitchen setups.' }, { title: 'Fast Recovery', desc: 'Electric elements restore oil temperature rapidly between batches.' }, { title: 'Easy Cleaning', desc: 'Removable heating elements and smooth tank surfaces simplify cleaning.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
