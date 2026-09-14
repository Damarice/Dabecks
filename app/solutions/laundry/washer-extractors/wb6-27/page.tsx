import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WB627() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'WB6-27' },
      ]}
      category="Washer Extractors"
      model="WB6-27"
      subtitle="Barrier washer · 27 kg · Hygienic separation"
      image="/products/washer-extractors/wb6-27.jpg"
      placeholder="WB6-27"
      keySpecs={[
        { label: 'Capacity', value: '27 kg' },
        { label: 'Type', value: 'Barrier washer' },
        { label: 'Application', value: 'Healthcare / Institutional' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional WB6-27 is a 27 kg barrier washer providing complete hygienic separation for mid-size healthcare and institutional laundry operations.',
        'With a larger drum capacity than the WB6-20, it handles higher daily linen volumes while maintaining the strict hygiene separation required in hospital and care environments.',
      ]}
      featureStrip={[
        { icon: '🏥', label: 'Application', value: 'Healthcare / Institutional' },
        { icon: '🚧', label: 'Barrier', value: 'Full dirty/clean separation' },
        { icon: '⚡', label: 'Capacity', value: '27 kg' },
        { icon: '⚙️', label: 'Cycles', value: 'Programmable hygiene' },
      ]}
      specs={[
        { label: 'Model', value: 'WB6-27' },
        { label: 'Capacity', value: '27 kg' },
        { label: 'Type', value: 'Barrier washer-extractor' },
        { label: 'Loading', value: 'Front-load (dirty side)' },
        { label: 'Unloading', value: 'Front (clean side)' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Hygienic Barrier Design', desc: 'Physical separation between dirty and clean sides prevents cross-contamination in healthcare settings.' },
        { title: 'Higher Capacity', desc: '27 kg drum handles larger volumes per cycle, reducing the number of daily wash cycles needed.' },
        { title: 'Thermal Disinfection', desc: 'Supports wash programmes with thermal disinfection to meet hospital-grade hygiene requirements.' },
      ]}
      backHref="/solutions/laundry/washer-extractors"
      backLabel="All Washer Extractors"
    />
  );
}
