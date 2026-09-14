import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WB690() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'WB6-90' },
      ]}
      category="Washer Extractors"
      model="WB6-90"
      subtitle="Pullman barrier washer · 90 kg · Industrial scale"
      image="/products/washer-extractors/wb6-90.jpg"
      placeholder="WB6-90"
      keySpecs={[
        { label: 'Capacity', value: '90 kg' },
        { label: 'Type', value: 'Pullman barrier washer' },
        { label: 'Application', value: 'Industrial / Centralised linen service' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional WB6-90 Pullman is a 90 kg industrial barrier washer built for the highest-volume centralised laundry operations.',
        'With its Pullman raised-drum configuration and 90 kg capacity, it dramatically reduces cycle count and labour requirements while maintaining full hygienic barrier separation.',
      ]}
      featureStrip={[
        { icon: '🏭', label: 'Scale', value: 'Industrial / 90 kg' },
        { icon: '🚧', label: 'Barrier', value: 'Pullman design' },
        { icon: '👷', label: 'Ergonomics', value: 'Raised drum loading' },
        { icon: '⚙️', label: 'Cycles', value: 'Thermal disinfection' },
      ]}
      specs={[
        { label: 'Model', value: 'WB6-90' },
        { label: 'Capacity', value: '90 kg' },
        { label: 'Type', value: 'Pullman barrier washer-extractor' },
        { label: 'Configuration', value: 'Pullman (raised drum)' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: '90 kg Maximum Capacity', desc: 'Processes the highest linen volumes per cycle, minimising downtime and maximising productivity in large operations.' },
        { title: 'Pullman Ergonomic Design', desc: 'Raised drum reduces physical strain on operators, supporting health and safety in high-throughput environments.' },
        { title: 'Certified Hygiene Compliance', desc: 'Designed to meet the strictest international healthcare hygiene and infection control standards.' },
      ]}
      backHref="/solutions/laundry/washer-extractors"
      backLabel="All Washer Extractors"
    />
  );
}
