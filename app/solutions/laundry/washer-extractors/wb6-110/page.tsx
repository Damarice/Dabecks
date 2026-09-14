import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WB6110() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'WB6-110' },
      ]}
      category="Electrolux Professional"
      model="WB6-110"
      subtitle="Pullman barrier washer · 110 kg · Maximum capacity"
      image="/products/washer-extractors/wb6-110.jpg"
      placeholder="WB6-110"
      keySpecs={[
        { label: 'Capacity', value: '110 kg' },
        { label: 'Type', value: 'Pullman barrier washer' },
        { label: 'Application', value: 'Industrial / Centralised linen service' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional WB6-110 Pullman is the highest-capacity barrier washer in the WB6 range at 110 kg, designed for the largest centralised laundry operations.',
        'Built for maximum productivity with minimal operator effort, it delivers complete hygienic separation and certified disinfection in every cycle.',
      ]}
      featureStrip={[
        { icon: '🏭', label: 'Scale', value: 'Maximum / 110 kg' },
        { icon: '🚧', label: 'Barrier', value: 'Pullman design' },
        { icon: '👷', label: 'Ergonomics', value: 'Raised drum loading' },
        { icon: '🏆', label: 'Capacity', value: 'Highest in WB6 range' },
      ]}
      specs={[
        { label: 'Model', value: 'WB6-110' },
        { label: 'Capacity', value: '110 kg' },
        { label: 'Type', value: 'Pullman barrier washer-extractor' },
        { label: 'Configuration', value: 'Pullman (raised drum)' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: '110 kg — Maximum Capacity', desc: 'The largest drum in the WB6 range, ideal for centralised hospital or industrial laundry operations with the highest daily volumes.' },
        { title: 'Pullman Raised Drum', desc: 'Elevated drum position significantly reduces operator loading effort, supporting continuous high-throughput production.' },
        { title: 'Full Hygienic Barrier', desc: 'Complete physical separation between dirty and clean sides — certified for international healthcare infection control standards.' },
      ]}
      backHref="/solutions/laundry/washer-extractors"
      backLabel="All Washer Extractors"
    />
  );
}
