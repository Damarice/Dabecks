import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function NeoBluleTouchUndercounter() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'NeoBlue Touch Undercounter' }]}
      category="Dishwashing" model="NeoBlue Touch Undercounter" subtitle="Touch-controlled undercounter dishwasher for professional kitchens"
      image="/products/kitchen/dishwashers/neoblue-touch-undercounter.webp" placeholder="NeoBlue+Touch+Undercounter"
      keySpecs={[{ label: 'Type', value: 'Undercounter dishwasher' }, { label: 'Control', value: 'Touch interface' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      description={['The NeoBlue Touch Undercounter dishwasher combines advanced touch-screen controls with efficient undercounter design. Its intuitive interface makes operation simple while delivering consistently hygienic results.', 'Ideal for small to medium commercial kitchens, cafés, and restaurants needing reliable dishwashing without a large footprint.']}
      featureStrip={[{ icon: '📱', label: 'Control', value: 'Touch interface' }, { icon: '💧', label: 'Water Use', value: 'Low consumption' }, { icon: '⚡', label: 'Cycle', value: 'Fast wash cycles' }, { icon: '🧼', label: 'Hygiene', value: 'High-temp sanitising' }]}
      specs={[{ label: 'Type', value: 'Undercounter dishwasher' }, { label: 'Control', value: 'Touch screen' }, { label: 'Series', value: 'NeoBlue Touch' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Touch Controls', desc: 'Intuitive touch interface for easy programme selection and operation.' }, { title: 'Undercounter Design', desc: 'Compact form factor fits under standard counters saving valuable kitchen space.' }, { title: 'Fast Cycle Times', desc: 'Short wash cycles maintain throughput during busy service periods.' }, { title: 'Low Water Consumption', desc: 'Efficient wash system minimises water and chemical use per cycle.' }, { title: 'High-Temp Rinse', desc: 'Sanitising rinse ensures dishes meet food safety hygiene standards.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
