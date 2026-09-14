import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function TD614LAC() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'TD6-14LAC' },
      ]}
      category="Electrolux Professional"
      model="TD6-14LAC"
      subtitle="Tumble dryer · 14 kg · Left-hand door"
      image="/products/dryers/td6-14lac.jpg"
      placeholder="TD6-14LAC"
      keySpecs={[
        { label: 'Capacity', value: '14 kg' },
        { label: 'Door', value: 'Left-hand opening (LAC)' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional TD6-14LAC is a 14 kg tumble dryer with left-hand door configuration, designed for high-volume commercial laundry operations in hotels, hospitals, and institutions.',
        'The LAC configuration provides installation flexibility for laundry rooms where a standard right-hand door opening is not suitable for the workflow layout.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Capacity', value: '14 kg' },
        { icon: '🚪', label: 'Door', value: 'Left-hand (LAC)' },
        { icon: '💧', label: 'Energy Class', value: 'A++' },
        { icon: '⚙️', label: 'Controls', value: 'Compass Pro' },
      ]}
      specs={[
        { label: 'Model', value: 'TD6-14LAC' },
        { label: 'Capacity', value: '14 kg' },
        { label: 'Door Configuration', value: 'Left-hand opening (LAC)' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Controls', value: 'Compass Pro programmable' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Left-Hand Door (LAC)', desc: 'Flexible door configuration for laundry rooms where workflow direction requires a left-hand opening.' },
        { title: 'High Capacity', desc: '14 kg drum handles large linen loads efficiently, reducing cycles and improving throughput.' },
        { title: 'Compass Pro Controls', desc: 'Advanced programmable controls with multiple drying programmes for different fabric types.' },
        { title: 'Energy Efficient', desc: 'A++ energy rating reduces operational running costs without compromising drying performance.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Industrial Dryers"
    />
  );
}
