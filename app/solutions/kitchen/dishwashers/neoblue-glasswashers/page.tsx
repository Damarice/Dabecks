import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function NeoBlueGlasswashers() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'NeoBlue Glasswashers' }]}
      category="Dishwashing" model="NeoBlue Glasswashers" subtitle="Professional undercounter glasswashers for bars and hospitality"
      image="/products/kitchen/dishwashers/neoblue-glasswashers.webp" placeholder="NeoBlue+Glasswashers"
      keySpecs={[{ label: 'Type', value: 'Glasswasher' }, { label: 'Configuration', value: 'Undercounter' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      description={['The NeoBlue Glasswasher is a professional undercounter glasswashing machine designed for bars, restaurants, and hospitality operations. It delivers sparkling clean glasses quickly and efficiently with minimal water and energy consumption.', 'Built by Electrolux Professional, the NeoBlue range combines robust construction with intuitive controls for ease of use in fast-paced service environments.']}
      featureStrip={[{ icon: '🥂', label: 'Type', value: 'Glasswasher' }, { icon: '💧', label: 'Water Use', value: 'Low consumption' }, { icon: '⚡', label: 'Cycle', value: 'Fast wash cycles' }, { icon: '🧼', label: 'Hygiene', value: 'High-temp sanitising' }]}
      specs={[{ label: 'Type', value: 'Glasswasher' }, { label: 'Configuration', value: 'Undercounter' }, { label: 'Series', value: 'NeoBlue' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Designed for Glassware', desc: 'Gentle yet effective wash cycles protect delicate glassware from damage.' }, { title: 'Fast Cycle Times', desc: 'Quick wash cycles keep up with bar and restaurant service demands.' }, { title: 'Low Water Consumption', desc: 'Efficient water use reduces operational costs and environmental impact.' }, { title: 'High-Temp Sanitising', desc: 'Hot rinse cycle ensures hygienically clean glasses every time.' }, { title: 'Undercounter Design', desc: 'Compact footprint fits under bar counters for space-efficient installation.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
