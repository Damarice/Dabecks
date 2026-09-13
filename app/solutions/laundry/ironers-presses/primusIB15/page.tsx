import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function PrimusIB15() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'Primus IB-15' },
      ]}
      category="Ironers & Presses"
      model="Primus IB-15"
      subtitle="Industrial flatwork ironer · 1500 mm roller"
      image="/products/ironers/primus-ib15.jpg"
      placeholder="Primus+IB-15"
      keySpecs={[{ label: 'Roller', value: '1500 mm' }, { label: 'Speed', value: '8 m/min' }, { label: 'Heat', value: 'Gas/Electric' }]}
      description={[
        'The Primus IB-15 is a heavy-duty industrial flatwork ironer with a 1500mm roller, designed for the most demanding commercial laundry environments. Available in gas or electric heating.',
        'Its high-throughput capability makes it the ideal solution for large hotels, hospital linen services, and industrial laundry facilities processing high daily volumes.',
      ]}
      featureStrip={[
        { icon: '🌡️', label: 'Roller Width', value: '1500 mm' },
        { icon: '⚡', label: 'Throughput', value: '8 m/min' },
        { icon: '🔥', label: 'Heat', value: 'Gas or electric' },
        { icon: '🏭', label: 'Build', value: 'Industrial grade' },
      ]}
      specs={[
        { label: 'Model', value: 'Primus IB-15' },
        { label: 'Roller Width', value: '1500 mm' },
        { label: 'Roller Diameter', value: '200 mm' },
        { label: 'Max Speed', value: '8 m/min' },
        { label: 'Heating Options', value: 'Gas or Electric' },
        { label: 'Max Temperature', value: '170 °C' },
        { label: 'Width × Height × Depth', value: '1700 × 1050 × 620 mm' },
        { label: 'Net Weight', value: '180 kg' },
        { label: 'Supply Voltage', value: '380–415 V / 50 Hz' },
        { label: 'Noise Level', value: '67 dB(A)' },
      ]}
      features={[
        { title: '1500 mm Industrial Roller', desc: 'Handles the widest linen items at high speed.' },
        { title: 'Gas or Electric Heat', desc: 'Flexible heating suits different facility setups.' },
        { title: 'Auto Feed Table', desc: 'Integrated feeding table for smooth, efficient operation.' },
        { title: 'Heavy-Duty Frame', desc: 'Robust industrial chassis for continuous high-volume use.' },
        { title: 'Precision Control', desc: 'Digital temperature and speed controls for perfect results.' },
        { title: 'Safety Certified', desc: 'Full safety systems including emergency stop and guards.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers"
    />
  );
}
