import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function PitcoSG14() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: 'Pitco SG14' }]}
      category="Fryers" model="Pitco SG14" subtitle="Gas fryer · 14 L tank"
      image="/products/fryers/pitco-sg14.jpg" placeholder="Pitco+SG14"
      keySpecs={[{ label: 'Tank', value: '14 L' }, { label: 'Heat', value: 'Natural gas' }, { label: 'Output', value: '45 kg/hr' }]}
      description={['The Pitco SG14 is a full-size gas fryer offering superior production capacity for high-volume commercial kitchens. Gas heating provides instant high-output power for fast oil recovery between batches.', 'The millivolt control system allows operation without electrical power, making it ideal for locations with limited electrical capacity.']}
      featureStrip={[{ icon: '🔥', label: 'Fuel', value: 'Natural gas' }, { icon: '🛢️', label: 'Capacity', value: '14 L' }, { icon: '📈', label: 'Output', value: '45 kg/hr' }, { icon: '⚡', label: 'Control', value: 'Millivolt (no electricity)' }]}
      specs={[{ label: 'Model', value: 'Pitco SG14' }, { label: 'Tank Capacity', value: '14 L (30 lbs)' }, { label: 'Heat Source', value: 'Natural Gas' }, { label: 'BTU Rating', value: '90,000 BTU/hr' }, { label: 'Production', value: '45 kg/hr' }, { label: 'Control Type', value: 'Millivolt thermostat' }, { label: 'Width × Height × Depth', value: '394 × 1168 × 864 mm' }, { label: 'Net Weight', value: '54 kg' }, { label: 'Gas Connection', value: '3/4 inch NPT' }, { label: 'Certification', value: 'NSF, CSA' }]}
      features={[{ title: 'Gas-Powered', desc: 'Natural gas heating for powerful, fast oil recovery between batches.' }, { title: 'High Production', desc: '45 kg/hr capacity for the busiest food service operations.' }, { title: 'Millivolt Control', desc: 'Operates without electrical supply — ideal for varied installations.' }, { title: 'Large Drain Valve', desc: 'Full-port drain valve for fast oil changes and cleaning.' }, { title: 'Open Pot Design', desc: 'Easy access to tank for cleaning and maintenance.' }, { title: 'NSF Certified', desc: 'Meets international food safety and sanitation standards.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
