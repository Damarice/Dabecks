import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function TD67() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'TD6-7' },
      ]}
      category="Industrial Dryers"
      model="TD6-7"
      subtitle="Tumble dryer · 7 kg"
      image="/products/dryers/td6-7.jpg"
      placeholder="TD6-7"
      keySpecs={[
        { label: 'Capacity', value: '7 kg' },
        { label: 'Loading', value: 'Front-load' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional TD6-7 is a compact 7 kg tumble dryer ideal for small hotels, guesthouses, salons, and on-premise laundry operations with moderate daily volumes.',
        'Built on the reliable TD6 platform, it delivers consistent drying performance with energy-efficient operation and easy-to-use programmable controls.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Capacity', value: '7 kg' },
        { icon: '💧', label: 'Energy Class', value: 'A++' },
        { icon: '⚙️', label: 'Controls', value: 'Programmable' },
        { icon: '🔒', label: 'Build', value: 'Commercial grade' },
      ]}
      specs={[
        { label: 'Model', value: 'TD6-7' },
        { label: 'Capacity', value: '7 kg' },
        { label: 'Loading Type', value: 'Front-load' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Controls', value: 'Programmable' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Compact 7 kg Capacity', desc: 'Right-sized for small commercial operations, delivering professional drying results without excess energy use.' },
        { title: 'Energy Efficient', desc: 'A++ energy rating significantly reduces running costs compared to conventional commercial dryers.' },
        { title: 'Programmable Controls', desc: 'Multiple preset drying programmes for different fabric types — towels, linen, delicates, and more.' },
        { title: 'Durable Commercial Build', desc: 'Heavy-duty construction designed for continuous daily use in demanding commercial environments.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Industrial Dryers"
    />
  );
}
