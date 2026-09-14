import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function SC70() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'SC70' },
      ]}
      category="UniMac"
      model="SC70"
      subtitle="Professional washer · 6–8 kg · Stackable"
      image="/products/washers/sc70.png"
      placeholder="SC70"
      keySpecs={[
        { label: 'Capacity', value: '6–8 kg' },
        { label: 'Type', value: 'Front-load' },
        { label: 'Stackable', value: 'Yes' },
        { label: 'Brand', value: 'UniMac' },
      ]}
      description={[
        'The UniMac SC70 is a professional-grade washer suited for on-premise laundry installations in apartments, wellness facilities, sports clubs, and marine environments.',
        'Built for stackable configuration, the SC70 maximises floor space while delivering reliable washing performance. Multi-voltage options make it adaptable for a wide range of facility types across East Africa.',
      ]}
      featureStrip={[
        { icon: '📐', label: 'Stackable', value: 'Yes — with matching dryer' },
        { icon: '⚡', label: 'Energy Use', value: 'Low consumption' },
        { icon: '🔒', label: 'Construction', value: 'Heavy duty' },
        { icon: '🌍', label: 'Voltage', value: 'Multi-voltage options' },
      ]}
      specs={[
        { label: 'Model', value: 'SC70' },
        { label: 'Load Capacity', value: '6–8 kg' },
        { label: 'Loading Type', value: 'Front-load' },
        { label: 'Configuration', value: 'Stackable' },
        { label: 'Voltage', value: 'Multi-voltage options' },
        { label: 'Brand', value: 'UniMac' },
      ]}
      features={[
        { title: 'Stackable Design', desc: 'Can be stacked with a matching UniMac dryer, ideal for locations where floor space is at a premium.' },
        { title: 'Low Energy Consumption', desc: 'Engineered to reduce water and energy usage while maintaining excellent wash results across all programme types.' },
        { title: 'Versatile Installation', desc: 'Available in multiple voltage configurations, suitable for apartments, gyms, hospitality venues, and more.' },
        { title: 'Heavy-Duty Build', desc: 'Robust construction designed for continuous professional use in demanding environments.' },
      ]}
      backHref="/solutions/laundry/commercial-washers"
      backLabel="All Commercial Washers"
    />
  );
}
