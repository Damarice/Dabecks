import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Fryer700XPGasTop7L() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: '700XP One Well Gas Fryer Top 7L' }]}
      category="Gas Fryer Tops" model="Modular Cooking Range Line 700XP One Well Gas Fryer Top 7 liter" subtitle="COD 371066"
      image="/products/kitchen/fryers/fryer-700xp-gas-top-7l.jpg" placeholder="700XP+Gas+Fryer+Top+7L"
      keySpecs={[{ label: 'Tank Capacity', value: '7 litres' }, { label: 'Fuel Type', value: 'Gas' }, { label: 'Configuration', value: 'One well · Top unit' }]}
      description={['The Modular Cooking Range Line 700XP One Well Gas Fryer Top is a professional countertop gas fryer designed for modular kitchen installations. With a 7-litre tank capacity, it delivers fast oil recovery and consistent frying results.', 'Ideal for hotels, restaurants, and institutional kitchens requiring flexible kitchen layouts, this top unit integrates seamlessly into the 700XP modular cooking range.']}
      featureStrip={[{ icon: '🔥', label: 'Fuel', value: 'Gas' }, { icon: '🛢️', label: 'Capacity', value: '7 litres' }, { icon: '📐', label: 'Type', value: 'Top unit' }, { icon: '🔗', label: 'Series', value: '700XP Modular' }]}
      specs={[{ label: 'Model Code', value: '371066' }, { label: 'Tank Capacity', value: '7 litres' }, { label: 'Fuel Type', value: 'Gas' }, { label: 'Configuration', value: 'One well, top unit' }, { label: 'Series', value: 'Modular Cooking Range Line 700XP' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Modular Design', desc: 'Integrates with the 700XP range for flexible kitchen configuration.' }, { title: 'Fast Oil Recovery', desc: 'High-powered gas burners restore oil temperature quickly between batches.' }, { title: 'One Well Tank', desc: '7-litre single well ideal for à la carte and moderate volume frying.' }, { title: 'Top Unit', desc: 'Countertop configuration saves space and suits modular kitchen setups.' }, { title: 'Easy Cleaning', desc: 'Smooth stainless steel surfaces and removable components simplify cleaning.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
