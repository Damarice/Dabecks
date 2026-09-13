import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function ElectroluxWT4() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'Electrolux WT4' }]}
      category="Dishwashers" model="Electrolux WT4" subtitle="Pass-through dishwasher"
      image="/products/dishwashers/electrolux-wt4.jpg" placeholder="Electrolux+WT4"
      keySpecs={[{ label: 'Racks/hr', value: '70' }, { label: 'Cycle', value: '50 seconds' }, { label: 'Water/rack', value: '2.5 L' }]}
      description={['The Electrolux WT4 pass-through dishwasher is engineered for medium-to-large commercial kitchens. Its 50-second cycle and 70 racks per hour capacity deliver exceptional throughput in a space-efficient pass-through configuration.', 'The air break and heat recovery system reduce steam emission and energy consumption, improving the kitchen working environment.']}
      featureStrip={[{ icon: '⏱️', label: 'Cycle', value: '50 seconds' }, { icon: '💧', label: 'Water/rack', value: '2.5 L' }, { icon: '🌫️', label: 'Steam', value: 'Air break system' }, { icon: '⚡', label: 'Recovery', value: 'Heat recovery built-in' }]}
      specs={[{ label: 'Model', value: 'Electrolux WT4' }, { label: 'Type', value: 'Pass-through' }, { label: 'Capacity', value: '70 racks/hr' }, { label: 'Cycle Time', value: '50 seconds' }, { label: 'Water per Rack', value: '2.5 L' }, { label: 'Rinse Temperature', value: '85 °C' }, { label: 'Width × Height × Depth', value: '640 × 1500 × 750 mm' }, { label: 'Net Weight', value: '95 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Certification', value: 'NSF, CE, WRAS' }]}
      features={[{ title: 'Air Break System', desc: 'Reduces steam emission to keep kitchen comfortable during peak service.' }, { title: 'Heat Recovery', desc: 'Recovers heat from exhaust to reduce energy consumption.' }, { title: 'Pass-Through Design', desc: 'Dirty in one side, clean out the other — streamlines dishwash workflow.' }, { title: 'Fast 50s Cycle', desc: 'Rapid cycle handles 70 racks per hour without compromising cleanliness.' }, { title: 'Low Water Use', desc: '2.5 L per rack reduces water bills and environmental impact.' }, { title: 'Easy Service Access', desc: 'Front panel access for fast maintenance and filter cleaning.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
