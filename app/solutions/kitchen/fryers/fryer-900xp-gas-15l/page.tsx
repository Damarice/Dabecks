import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Fryer900XPGas15L() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: '900XP One Well Gas Fryer 15L' }]}
      category="Gas" model="Modular Cooking Range Line 900XP One Well Gas Fryer 15 liter" subtitle="COD 391077"
      image="/products/kitchen/fryers/fryer-900xp-gas-15l.jpg" placeholder="900XP+Gas+Fryer+15L"
      keySpecs={[{ label: 'Tank Capacity', value: '15 litres' }, { label: 'Fuel Type', value: 'Gas' }, { label: 'Configuration', value: 'One well · Freestanding' }]}
      description={['The Modular Cooking Range Line 900XP One Well Gas Fryer is a high-capacity professional gas fryer with a 15-litre tank. Designed for large-volume operations, it delivers powerful output and fast oil recovery for demanding commercial kitchens.', 'Part of the premium 900XP series, it is the ideal choice for high-throughput hotels, banqueting kitchens, and institutional food service.']}
      featureStrip={[{ icon: '🔥', label: 'Fuel', value: 'Gas' }, { icon: '🛢️', label: 'Capacity', value: '15 litres' }, { icon: '📐', label: 'Type', value: 'Freestanding' }, { icon: '🔗', label: 'Series', value: '900XP Modular' }]}
      specs={[{ label: 'Model Code', value: '391077' }, { label: 'Tank Capacity', value: '15 litres' }, { label: 'Fuel Type', value: 'Gas' }, { label: 'Configuration', value: 'One well, freestanding' }, { label: 'Series', value: 'Modular Cooking Range Line 900XP' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'High Capacity', desc: '15-litre tank for large-volume frying in busy commercial environments.' }, { title: 'Powerful Gas Heating', desc: 'High-output gas burners deliver fast oil recovery for continuous service.' }, { title: '900XP Premium Series', desc: 'Heavy-duty construction built for the most demanding professional kitchens.' }, { title: 'Freestanding Design', desc: 'Self-contained unit for flexible standalone or suite installation.' }, { title: 'High Throughput', desc: 'Designed for banqueting, institutional, and high-volume hotel kitchens.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
