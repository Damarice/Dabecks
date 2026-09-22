import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function GreenCleanHoodType() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'green&clean Hood Type' }]}
      category="Dishwashing" model="green&clean Hood Type" subtitle="High-capacity hood dishwasher for large-volume operations"
      image="/products/kitchen/dishwashers/greenclean-hood-type.webp" placeholder="green+clean+Hood+Type"
      keySpecs={[{ label: 'Type', value: 'Hood dishwasher' }, { label: 'Volume', value: 'High capacity' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      description={['The green&clean Hood Type dishwasher is a high-capacity pass-through machine designed for large-volume commercial kitchens. Its hood-type design allows easy loading and unloading of full racks for maximum throughput during service.', 'Built for hotels, hospitals, banqueting facilities, and institutional kitchens that need to process large quantities of crockery and cookware quickly and hygienically.']}
      featureStrip={[{ icon: '🌱', label: 'Eco', value: 'Low water & energy' }, { icon: '📐', label: 'Type', value: 'Hood type' }, { icon: '🔁', label: 'Volume', value: 'High capacity' }, { icon: '🧼', label: 'Hygiene', value: 'High-temp sanitising' }]}
      specs={[{ label: 'Type', value: 'Hood dishwasher' }, { label: 'Series', value: 'green&clean' }, { label: 'Volume', value: 'High capacity' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Hood Type Design', desc: 'Lift-up hood allows fast rack loading and unloading for high throughput.' }, { title: 'High Capacity', desc: 'Processes large volumes of dishes, pots, and trays during busy service.' }, { title: 'Eco Efficiency', desc: 'Advanced water recycling and heat recovery reduce consumption significantly.' }, { title: 'High-Temp Sanitising', desc: 'Final hot rinse ensures all items meet food safety hygiene standards.' }, { title: 'Suitable for Large Kitchens', desc: 'Designed for hotels, hospitals, banqueting, and institutional food service.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
