import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function AllianceFI165() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'Alliance FI165' },
      ]}
      category="Ironers & Presses"
      model="Alliance FI165"
      subtitle="Double-roll flatwork ironer · 1650 mm"
      image="/products/ironers/alliance-fi165.jpg"
      placeholder="Alliance+FI165"
      keySpecs={[{ label: 'Roller', value: '1650 mm' }, { label: 'Rolls', value: 'Double' }, { label: 'Speed', value: '10 m/min' }]}
      description={[
        'The Alliance FI165 is a double-roll flatwork ironer with a 1650mm working width — designed for the highest-volume commercial linen processing. Ideal for large hotel groups, hospital linen services, and dedicated laundry plants.',
        'The double-roll configuration doubles throughput while maintaining exceptional finish quality across all linen types.',
      ]}
      featureStrip={[
        { icon: '🌡️', label: 'Roller Width', value: '1650 mm' },
        { icon: '⚡', label: 'Throughput', value: '10 m/min' },
        { icon: '🔄', label: 'Configuration', value: 'Double roll' },
        { icon: '🏭', label: 'Volume', value: 'Highest capacity' },
      ]}
      specs={[
        { label: 'Model', value: 'Alliance FI165' },
        { label: 'Roller Width', value: '1650 mm' },
        { label: 'Configuration', value: 'Double roll' },
        { label: 'Max Speed', value: '10 m/min' },
        { label: 'Heating Options', value: 'Gas, Steam, or Electric' },
        { label: 'Max Temperature', value: '175 °C' },
        { label: 'Width × Height × Depth', value: '1850 × 1150 × 680 mm' },
        { label: 'Net Weight', value: '320 kg' },
        { label: 'Supply Voltage', value: '380–415 V / 50 Hz' },
        { label: 'Noise Level', value: '68 dB(A)' },
      ]}
      features={[
        { title: 'Double-Roll System', desc: 'Two heated rollers double throughput for maximum productivity.' },
        { title: '1650 mm Width', desc: 'Processes the widest commercial linen in a single pass.' },
        { title: 'Multiple Heat Options', desc: 'Gas, steam, or electric to suit any facility setup.' },
        { title: 'Auto Feeding', desc: 'Integrated feed table for smooth, continuous operation.' },
        { title: 'Precision Temperature', desc: 'Independent temperature control on each roller.' },
        { title: 'Heavy-Duty Frame', desc: 'Industrial construction for non-stop operation.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers"
    />
  );
}
