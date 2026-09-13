import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function RI610() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'RI6-10' },
      ]}
      category="Ironers & Presses"
      model="RI6-10"
      subtitle="Flatwork ironer · 1000 mm roller"
      image="/products/ironers/ri610.jpg"
      placeholder="RI6-10"
      keySpecs={[{ label: 'Roller', value: '1000 mm' }, { label: 'Speed', value: '6 m/min' }, { label: 'Power', value: '4.0 kW' }]}
      description={[
        'The RI6-10 features a 1000mm heated roller, making it ideal for high-volume flatwork ironing in large hotels, conference centres, and industrial laundries.',
        'With a maximum speed of 6 m/min and consistent heat distribution, it delivers superior throughput and finish quality across all linen types.',
      ]}
      featureStrip={[
        { icon: '🌡️', label: 'Roller Width', value: '1000 mm' },
        { icon: '⚡', label: 'Throughput', value: '6 m/min' },
        { icon: '🛡️', label: 'Fabric Safe', value: 'Adjustable temp' },
        { icon: '✨', label: 'Finish', value: 'Hotel quality' },
      ]}
      specs={[
        { label: 'Model', value: 'RI6-10' },
        { label: 'Roller Width', value: '1000 mm' },
        { label: 'Roller Diameter', value: '165 mm' },
        { label: 'Max Speed', value: '6 m/min' },
        { label: 'Heating Power', value: '4.0 kW' },
        { label: 'Max Temperature', value: '160 °C' },
        { label: 'Width × Height × Depth', value: '1180 × 950 × 560 mm' },
        { label: 'Net Weight', value: '105 kg' },
        { label: 'Supply Voltage', value: '380–415 V / 50 Hz' },
        { label: 'Noise Level', value: '65 dB(A)' },
      ]}
      features={[
        { title: '1000 mm Roller', desc: 'Handles king-size sheets and wide tablecloths in a single pass.' },
        { title: 'High Speed', desc: '6 m/min throughput for large-volume operations.' },
        { title: 'Uniform Heating', desc: 'Precision temperature control across the full roller width.' },
        { title: 'Safety Systems', desc: 'Full ribbon guard and emergency stop as standard.' },
        { title: 'Feeding Table', desc: 'Optional feeding table for easier operator workflow.' },
        { title: 'Commercial Grade', desc: 'Built for continuous high-throughput daily use.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers"
    />
  );
}
