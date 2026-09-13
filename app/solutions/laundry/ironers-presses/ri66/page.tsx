import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function RI66() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'RI6-6' },
      ]}
      category="Ironers & Presses"
      model="RI6-6"
      subtitle="Flatwork ironer · 600 mm roller"
      image="/products/ironers/ri66.jpg"
      placeholder="RI6-6"
      keySpecs={[{ label: 'Roller', value: '600 mm' }, { label: 'Speed', value: '4 m/min' }, { label: 'Power', value: '2.2 kW' }]}
      description={[
        'The RI6-6 is a compact flatwork ironer ideal for small to medium commercial laundry operations. Its 600mm heated roller delivers crisp, professional results on all flatwork items.',
        'Simple to operate and easy to maintain, the RI6-6 is perfect for guesthouses, care homes, and smaller hospitality operations.',
      ]}
      featureStrip={[
        { icon: '🌡️', label: 'Roller Width', value: '600 mm' },
        { icon: '⚡', label: 'Throughput', value: '4 m/min' },
        { icon: '🛡️', label: 'Fabric Safe', value: 'Adjustable temp' },
        { icon: '🔧', label: 'Maintenance', value: 'Low downtime' },
      ]}
      specs={[
        { label: 'Model', value: 'RI6-6' },
        { label: 'Roller Width', value: '600 mm' },
        { label: 'Roller Diameter', value: '120 mm' },
        { label: 'Max Speed', value: '4 m/min' },
        { label: 'Heating Power', value: '2.2 kW' },
        { label: 'Max Temperature', value: '160 °C' },
        { label: 'Width × Height × Depth', value: '780 × 910 × 520 mm' },
        { label: 'Net Weight', value: '65 kg' },
        { label: 'Supply Voltage', value: '220–240 V / 50 Hz' },
        { label: 'Noise Level', value: '63 dB(A)' },
      ]}
      features={[
        { title: 'Heated Roller', desc: 'Electrically heated roller delivers consistent flatwork finish.' },
        { title: 'Adjustable Speed', desc: 'Variable speed control adapts to different fabric types.' },
        { title: 'Safety Ribbon Guard', desc: 'Protective ribbon prevents fabric and operator incidents.' },
        { title: 'Compact Design', desc: 'Fits easily into smaller laundry rooms without sacrificing output.' },
        { title: 'Easy Controls', desc: 'Straightforward temperature and speed adjustments.' },
        { title: 'Low Maintenance', desc: 'Simple mechanism with minimal service requirements.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers"
    />
  );
}
