import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function TD620LAC() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'TD6-20LAC' },
      ]}
      category="Electrolux Professional"
      model="TD6-20LAC"
      subtitle="Tumble dryer · 20 kg · Left-hand door"
      image="/products/dryers/td6-20lac.jpg"
      placeholder="TD6-20LAC"
      keySpecs={[
        { label: 'Capacity', value: '20 kg' },
        { label: 'Door', value: 'Left-hand opening (LAC)' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional TD6-20LAC is a large-capacity 20 kg tumble dryer with left-hand door opening, built for high-volume industrial laundry operations.',
        'Ideal for large hotels, hospitals, and commercial laundry services that require fast turnaround on heavy linen loads with maximum energy efficiency.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Capacity', value: '20 kg' },
        { icon: '🚪', label: 'Door', value: 'Left-hand (LAC)' },
        { icon: '💧', label: 'Energy Class', value: 'A++' },
        { icon: '⚙️', label: 'Controls', value: 'Compass Pro' },
      ]}
      specs={[
        { label: 'Model', value: 'TD6-20LAC' },
        { label: 'Capacity', value: '20 kg' },
        { label: 'Door Configuration', value: 'Left-hand opening (LAC)' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Controls', value: 'Compass Pro programmable' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: '20 kg Industrial Capacity', desc: 'Large drum handles heavy hotel and hospital linen loads, significantly reducing the number of drying cycles per day.' },
        { title: 'Left-Hand Door (LAC)', desc: 'Flexible door configuration for optimised laundry room workflow and installation layouts.' },
        { title: 'Compass Pro Controls', desc: 'Programmable control panel with multiple preset programmes for linen, towels, and delicates.' },
        { title: 'Low Cost of Operation', desc: 'A++ energy class and optimised airflow reduce energy costs across every drying cycle.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Industrial Dryers"
    />
  );
}
