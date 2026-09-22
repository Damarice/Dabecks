import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function GreenCleanGlasswashers() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'green&clean Glasswashers' }]}
      category="Dishwashing" model="green&clean Glasswashers" subtitle="Eco-efficient glasswashers for sustainable operations"
      image="/products/kitchen/dishwashers/greenclean-glasswashers.webp" placeholder="green+clean+Glasswashers"
      keySpecs={[{ label: 'Type', value: 'Glasswasher' }, { label: 'Focus', value: 'Eco efficiency' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      description={['The green&clean Glasswasher is engineered for maximum eco-efficiency without compromising on cleaning performance. Its advanced wash system delivers sparkling results while using significantly less water and energy than conventional machines.', 'Perfect for hotels, bars, and restaurants committed to sustainable operations and lower utility costs.']}
      featureStrip={[{ icon: '🌱', label: 'Eco', value: 'Low water & energy' }, { icon: '🥂', label: 'Type', value: 'Glasswasher' }, { icon: '⚡', label: 'Cycle', value: 'Fast wash cycles' }, { icon: '🧼', label: 'Hygiene', value: 'High-temp sanitising' }]}
      specs={[{ label: 'Type', value: 'Glasswasher' }, { label: 'Series', value: 'green&clean' }, { label: 'Focus', value: 'Eco efficiency' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Eco Efficiency', desc: 'Reduced water and energy consumption for lower running costs and environmental impact.' }, { title: 'Glassware Care', desc: 'Gentle wash programme protects delicate glassware during every cycle.' }, { title: 'Fast Throughput', desc: 'Short cycle times maintain glass supply during peak service.' }, { title: 'High-Temp Sanitising', desc: 'Hot rinse ensures hygienic results meeting food safety standards.' }, { title: 'Low Chemical Use', desc: 'Efficient dosing system reduces detergent and rinse aid consumption.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
