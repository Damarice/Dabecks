import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function QuickdryCondense() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'Quickdry Condense' },
      ]}
      category="Electrolux Professional"
      model="Quickdry Condense"
      subtitle="Quick condenser dryer · Compact commercial drying"
      image="/products/dryers/quickdry-condense.jpg"
      placeholder="Quickdry Condense"
      keySpecs={[
        { label: 'Type', value: 'Condenser dryer' },
        { label: 'Heating', value: 'Electric' },
        { label: 'Venting', value: 'Ventless (condenser)' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional Quickdry Condense is a ventless condenser dryer designed for commercial operations where external venting is not possible or practical.',
        'Its condenser technology recycles heat internally, making it energy-efficient and flexible for installation in any location — no exhaust ducting required.',
      ]}
      featureStrip={[
        { icon: '🔄', label: 'Venting', value: 'Ventless condenser' },
        { icon: '⚡', label: 'Energy', value: 'Efficient heat recycling' },
        { icon: '📐', label: 'Installation', value: 'Flexible — no ducting' },
        { icon: '⏱️', label: 'Drying', value: 'Fast cycle times' },
      ]}
      specs={[
        { label: 'Type', value: 'Condenser dryer' },
        { label: 'Heating', value: 'Electric' },
        { label: 'Venting', value: 'Ventless (condenser)' },
        { label: 'Installation', value: 'No exhaust ducting required' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Ventless Operation', desc: 'Condenser technology eliminates the need for external ducting, allowing flexible installation anywhere in a facility.' },
        { title: 'Energy-Efficient Drying', desc: 'Internal heat recycling reduces energy consumption compared to conventional vented dryers.' },
        { title: 'Compact Footprint', desc: 'Designed for facilities with limited space, without sacrificing drying capacity or performance.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Industrial Dryers"
    />
  );
}
