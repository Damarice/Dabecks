import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function TD67LAC() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'TD6-7LAC' },
      ]}
      category="Electrolux Professional"
      model="TD6-7LAC"
      subtitle="Tumble dryer · 7 kg · Left-hand door"
      image="/products/dryers/td6-7lac.jpg"
      placeholder="TD6-7LAC"
      keySpecs={[
        { label: 'Capacity', value: '7 kg' },
        { label: 'Door', value: 'Left-hand opening (LAC)' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional TD6-7LAC is a 7 kg tumble dryer with left-hand door opening, offering the same reliable performance as the TD6-7 with added installation flexibility.',
        'The LAC configuration is ideal for laundry rooms where the standard right-hand door swing would obstruct workflow or conflict with room layout.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Capacity', value: '7 kg' },
        { icon: '🚪', label: 'Door', value: 'Left-hand (LAC)' },
        { icon: '💧', label: 'Energy Class', value: 'A++' },
        { icon: '⚙️', label: 'Controls', value: 'Programmable' },
      ]}
      specs={[
        { label: 'Model', value: 'TD6-7LAC' },
        { label: 'Capacity', value: '7 kg' },
        { label: 'Door Configuration', value: 'Left-hand opening (LAC)' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Controls', value: 'Programmable' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Left-Hand Door (LAC)', desc: 'Door opens to the left, ideal for laundry rooms where the standard door swing would block workflow.' },
        { title: 'Compact 7 kg Capacity', desc: 'Suited for small hotels, salons, and on-premise laundry operations with moderate daily volumes.' },
        { title: 'Energy Efficient', desc: 'A++ energy rating reduces operational costs while maintaining consistent drying performance.' },
        { title: 'Full TD6 Performance', desc: 'All the reliability and programmability of the TD6 series in a left-hand configuration.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Industrial Dryers"
    />
  );
}
