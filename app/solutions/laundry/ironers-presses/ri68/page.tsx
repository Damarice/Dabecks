import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function RI68() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'RI6-8' },
      ]}
      category="Ironers & Presses"
      model="RI6-8"
      subtitle="Flatwork ironer · 800 mm roller"
      image="/products/ironers/ri68.jpg"
      placeholder="RI6-8"
      keySpecs={[{ label: 'Roller', value: '800 mm' }, { label: 'Speed', value: '5 m/min' }, { label: 'Power', value: '3.0 kW' }]}
      description={[
        'The RI6-8 offers an 800mm roller for higher throughput flatwork ironing. Suited to medium-scale hotel and hospitality operations requiring a consistent, professional finish on bedding, tablecloths, and uniforms.',
        'Its wider roller and increased speed make it a significant productivity upgrade over smaller ironer models.',
      ]}
      featureStrip={[
        { icon: '🌡️', label: 'Roller Width', value: '800 mm' },
        { icon: '⚡', label: 'Throughput', value: '5 m/min' },
        { icon: '🛡️', label: 'Fabric Safe', value: 'Adjustable temp' },
        { icon: '🔧', label: 'Maintenance', value: 'Low downtime' },
      ]}
      specs={[
        { label: 'Model', value: 'RI6-8' },
        { label: 'Roller Width', value: '800 mm' },
        { label: 'Roller Diameter', value: '150 mm' },
        { label: 'Max Speed', value: '5 m/min' },
        { label: 'Heating Power', value: '3.0 kW' },
        { label: 'Max Temperature', value: '160 °C' },
        { label: 'Width × Height × Depth', value: '980 × 920 × 540 mm' },
        { label: 'Net Weight', value: '82 kg' },
        { label: 'Supply Voltage', value: '220–240 V / 50 Hz' },
        { label: 'Noise Level', value: '64 dB(A)' },
      ]}
      features={[
        { title: 'Wider Roller', desc: '800 mm roller processes larger items in a single pass.' },
        { title: 'Higher Speed', desc: '5 m/min throughput for medium-volume operations.' },
        { title: 'Even Heat Distribution', desc: 'Consistent temperature across the full roller width.' },
        { title: 'Safety Ribbon Guard', desc: 'Operator safety protection built in as standard.' },
        { title: 'Variable Speed', desc: 'Adjust speed to suit linen type and weight.' },
        { title: 'Durable Build', desc: 'Commercial-grade construction for continuous use.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers"
    />
  );
}
