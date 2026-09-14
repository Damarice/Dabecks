import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WB670() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'WB6-70' },
      ]}
      category="Electrolux Professional"
      model="WB6-70"
      subtitle="Pullman barrier washer · 70 kg · Industrial scale"
      image="/products/washer-extractors/wb6-70.jpg"
      placeholder="WB6-70"
      keySpecs={[
        { label: 'Capacity', value: '70 kg' },
        { label: 'Type', value: 'Pullman barrier washer' },
        { label: 'Application', value: 'Industrial / Large hospitals' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional WB6-70 Pullman is a 70 kg large-capacity barrier washer designed for industrial-scale laundry operations in large hospitals, military facilities, and centralised linen services.',
        'The Pullman configuration provides a raised drum for ergonomic loading and unloading, reducing operator strain during high-volume production shifts.',
      ]}
      featureStrip={[
        { icon: '🏭', label: 'Scale', value: 'Industrial / 70 kg' },
        { icon: '🚧', label: 'Barrier', value: 'Pullman design' },
        { icon: '👷', label: 'Ergonomics', value: 'Raised drum loading' },
        { icon: '⚙️', label: 'Cycles', value: 'Thermal disinfection' },
      ]}
      specs={[
        { label: 'Model', value: 'WB6-70' },
        { label: 'Capacity', value: '70 kg' },
        { label: 'Type', value: 'Pullman barrier washer-extractor' },
        { label: 'Configuration', value: 'Pullman (raised drum)' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Pullman Raised Drum', desc: 'Elevated drum position reduces operator bending and physical strain during heavy loading and unloading operations.' },
        { title: '70 kg Industrial Capacity', desc: 'Handles the largest linen volumes in a single cycle, ideal for centralised hospital linen services.' },
        { title: 'Complete Hygienic Barrier', desc: 'Full separation between dirty and clean sides, certified for the most stringent healthcare hygiene standards.' },
      ]}
      backHref="/solutions/laundry/washer-extractors"
      backLabel="All Washer Extractors"
    />
  );
}
