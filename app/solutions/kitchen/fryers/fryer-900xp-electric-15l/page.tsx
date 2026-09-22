import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Fryer900XPElectric15L() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: '900XP One Well Electric Fryer 15L' }]}
      category="Electric Fryers" model="Modular Cooking Range Line 900XP One Well Electric Fryer 15 liter" subtitle="COD 391087"
      image="/products/kitchen/fryers/fryer-900xp-electric-15l.jpg" placeholder="900XP+Electric+Fryer+15L"
      keySpecs={[{ label: 'Tank Capacity', value: '15 litres' }, { label: 'Fuel Type', value: 'Electric' }, { label: 'Configuration', value: 'One well · Freestanding' }]}
      description={['The Modular Cooking Range Line 900XP One Well Electric Fryer offers high-capacity electric frying with a 15-litre tank. Precise electric heating ensures consistent oil temperatures throughout long service periods.', 'Part of the premium 900XP series, it suits large hotels, institutions, and catering kitchens where gas supply is unavailable or electric cooking is preferred.']}
      featureStrip={[{ icon: '⚡', label: 'Fuel', value: 'Electric' }, { icon: '🛢️', label: 'Capacity', value: '15 litres' }, { icon: '📐', label: 'Type', value: 'Freestanding' }, { icon: '🔗', label: 'Series', value: '900XP Modular' }]}
      specs={[{ label: 'Model Code', value: '391087' }, { label: 'Tank Capacity', value: '15 litres' }, { label: 'Fuel Type', value: 'Electric' }, { label: 'Configuration', value: 'One well, freestanding' }, { label: 'Series', value: 'Modular Cooking Range Line 900XP' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'High Capacity', desc: '15-litre tank for large-volume frying in busy commercial environments.' }, { title: 'Precise Electric Heating', desc: 'Electric elements maintain consistent oil temperature for reliable results.' }, { title: '900XP Premium Series', desc: 'Heavy-duty construction built for the most demanding professional kitchens.' }, { title: 'Freestanding Design', desc: 'Self-contained unit for flexible standalone or suite installation.' }, { title: 'No Gas Required', desc: 'Electric operation suits kitchens without gas supply infrastructure.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
