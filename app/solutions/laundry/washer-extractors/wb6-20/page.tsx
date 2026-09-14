import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WB620() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'WB6-20' },
      ]}
      category="Washer Extractors"
      model="WB6-20"
      subtitle="Barrier washer · 20 kg · Hygienic separation"
      image="/products/washer-extractors/wb6-20.jpg"
      placeholder="WB6-20"
      keySpecs={[
        { label: 'Capacity', value: '20 kg' },
        { label: 'Type', value: 'Barrier washer' },
        { label: 'Application', value: 'Healthcare / Institutional' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional WB6-20 is a 20 kg barrier washer designed to provide complete hygienic separation between soiled and clean laundry — an essential requirement in healthcare and care home environments.',
        'The barrier design means dirty linen is loaded from one side and clean linen retrieved from the other, preventing cross-contamination and meeting the strictest hygiene standards.',
      ]}
      featureStrip={[
        { icon: '🏥', label: 'Application', value: 'Healthcare / Institutional' },
        { icon: '🚧', label: 'Barrier', value: 'Full dirty/clean separation' },
        { icon: '⚡', label: 'Capacity', value: '20 kg' },
        { icon: '⚙️', label: 'Cycles', value: 'Programmable hygiene' },
      ]}
      specs={[
        { label: 'Model', value: 'WB6-20' },
        { label: 'Capacity', value: '20 kg' },
        { label: 'Type', value: 'Barrier washer-extractor' },
        { label: 'Loading', value: 'Front-load (dirty side)' },
        { label: 'Unloading', value: 'Front (clean side)' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Hygienic Barrier Design', desc: 'Physical separation between dirty and clean sides prevents cross-contamination, essential for hospitals and care facilities.' },
        { title: 'Programmable Hygiene Cycles', desc: 'Pre-set and customisable wash programmes including thermal disinfection cycles that meet healthcare hygiene standards.' },
        { title: 'Heavy-Duty Construction', desc: 'Built for continuous operation in demanding institutional environments with minimal maintenance.' },
      ]}
      backHref="/solutions/laundry/washer-extractors"
      backLabel="All Washer Extractors"
    />
  );
}
