import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function IB5725F() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'IB5725-F' },
      ]}
      category="Electrolux Professional"
      model="IB5725-F"
      subtitle="Flatwork ironer · Rear delivery · Integrated feeder"
      image="/products/ironers/ib5725-f.jpg"
      placeholder="IB5725-F"
      keySpecs={[
        { label: 'Type', value: 'Flatwork ironer' },
        { label: 'Delivery', value: 'Rear delivery' },
        { label: 'Automation', value: 'Integrated feeder' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional IB5725-F is a flatwork ironer with rear delivery and an integrated feeder, combining ironing and automatic feeding in a single compact unit.',
        'The integrated feeder reduces manual handling and operator effort, improving throughput and consistency for hotels, hospitals, and large laundry operations.',
      ]}
      featureStrip={[
        { icon: '🤖', label: 'Feeder', value: 'Integrated automatic' },
        { icon: '🔄', label: 'Delivery', value: 'Rear' },
        { icon: '⚡', label: 'Heating', value: 'Electric / Gas / Steam' },
        { icon: '⏱️', label: 'Throughput', value: 'High productivity' },
      ]}
      specs={[
        { label: 'Type', value: 'Flatwork ironer with feeder' },
        { label: 'Delivery', value: 'Rear delivery' },
        { label: 'Automation', value: 'Integrated feeder' },
        { label: 'Heating Options', value: 'Electric, Gas, Steam' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Integrated Automatic Feeder', desc: 'Built-in feeder automatically spreads and feeds linen into the ironer, reducing manual labour and improving consistency.' },
        { title: 'Higher Throughput', desc: 'Automation reduces operator workload and increases the volume of linen processed per hour.' },
        { title: 'Compact Combined Unit', desc: 'Feeder and ironer in one footprint — ideal for laundry rooms where space is limited.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers & Presses"
    />
  );
}
