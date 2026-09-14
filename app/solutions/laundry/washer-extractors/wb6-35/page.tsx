import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WB635() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'WB6-35' },
      ]}
      category="Electrolux Professional"
      model="WB6-35"
      subtitle="Barrier washer · 35 kg · Hygienic separation"
      image="/products/washer-extractors/wb6-35.jpg"
      placeholder="WB6-35"
      keySpecs={[
        { label: 'Capacity', value: '35 kg' },
        { label: 'Type', value: 'Barrier washer' },
        { label: 'Application', value: 'Healthcare / Large institutions' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional WB6-35 is a 35 kg barrier washer built for large healthcare facilities and institutions with high daily linen volumes.',
        'Its large drum capacity reduces cycle frequency while maintaining the complete hygienic separation critical in hospital laundry operations.',
      ]}
      featureStrip={[
        { icon: '🏥', label: 'Application', value: 'Large healthcare facilities' },
        { icon: '🚧', label: 'Barrier', value: 'Full dirty/clean separation' },
        { icon: '⚡', label: 'Capacity', value: '35 kg' },
        { icon: '⚙️', label: 'Cycles', value: 'Thermal disinfection' },
      ]}
      specs={[
        { label: 'Model', value: 'WB6-35' },
        { label: 'Capacity', value: '35 kg' },
        { label: 'Type', value: 'Barrier washer-extractor' },
        { label: 'Loading', value: 'Front-load (dirty side)' },
        { label: 'Unloading', value: 'Front (clean side)' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: '35 kg High Capacity', desc: 'Large drum processes more linen per cycle, ideal for hospitals and large care facilities with heavy daily volumes.' },
        { title: 'Barrier Separation', desc: 'Complete physical barrier between dirty and clean sides ensures zero cross-contamination risk.' },
        { title: 'Certified Hygiene Programmes', desc: 'Wash programmes designed to meet international healthcare hygiene and infection control standards.' },
      ]}
      backHref="/solutions/laundry/washer-extractors"
      backLabel="All Washer Extractors"
    />
  );
}
