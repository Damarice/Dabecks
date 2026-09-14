import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function PD9C() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'PD9C' },
      ]}
      category="Industrial Dryers"
      model="PD9C"
      subtitle="Compact vented dryer · Commercial grade"
      image="/products/dryers/pd9c.jpg"
      placeholder="PD9C"
      keySpecs={[
        { label: 'Type', value: 'Vented dryer' },
        { label: 'Heating', value: 'Electric' },
        { label: 'Use', value: 'Commercial / On-Premise' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional PD9C is a compact commercial dryer built for on-premise laundry environments where reliability and simplicity are essential.',
        'With straightforward controls and durable construction, the PD9C is ideal for guesthouses, small hotels, and facilities with moderate daily drying volumes.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Heating', value: 'Electric' },
        { icon: '🔒', label: 'Build', value: 'Commercial grade' },
        { icon: '⚙️', label: 'Controls', value: 'Simple operation' },
        { icon: '🛠️', label: 'Maintenance', value: 'Front accessible' },
      ]}
      specs={[
        { label: 'Type', value: 'Vented dryer' },
        { label: 'Heating', value: 'Electric' },
        { label: 'Controls', value: 'Simple programmable' },
        { label: 'Access', value: 'Front-access service' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Simple Operation', desc: 'Intuitive controls require minimal operator training, reducing errors and improving daily throughput.' },
        { title: 'Durable Construction', desc: 'Built with commercial-grade components for reliable performance across continuous daily use.' },
        { title: 'Easy Maintenance', desc: 'Front-accessible lint filter and service points keep downtime to a minimum.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Industrial Dryers"
    />
  );
}
