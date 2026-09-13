import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function AllianceL18() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'Alliance L18' },
      ]}
      category="Commercial Washers"
      model="Alliance L18"
      subtitle="Commercial washer · 18 kg capacity"
      image="/products/washers/alliance-l18.jpg"
      placeholder="Alliance L18"
      keySpecs={[
        { label: 'Capacity', value: '18 kg' },
        { label: 'Spin Speed', value: '1200 RPM' },
        { label: 'Energy', value: 'A++' },
      ]}
      description={[
        'The Alliance L18 is a high-capacity commercial washer built for large-scale operations. With 18 kg load capacity, it is the ideal choice for hotels, hospitals, and industrial laundries requiring consistent, reliable performance.',
        'Built with robust materials and proven reliability, it delivers dependable performance for demanding commercial environments — backed by Alliance\'s globally trusted build quality.',
      ]}
      featureStrip={[
        { icon: '🏭', label: 'High Capacity', value: '18 kg per cycle' },
        { icon: '💧', label: 'Water Efficiency', value: 'Optimised usage per load' },
        { icon: '⚙️', label: 'Spin Speed', value: '1200 RPM extraction' },
        { icon: '✅', label: 'Certified', value: 'International quality standards' },
      ]}
      specs={[
        { label: 'Model', value: 'Alliance L18' },
        { label: 'Load Capacity', value: '18 kg' },
        { label: 'Drum Volume', value: '165 litres' },
        { label: 'Spin Speed (max)', value: '1200 RPM' },
        { label: 'Water Usage per Cycle', value: '80 litres' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Heating Element Power', value: '6.0 kW' },
        { label: 'Motor Power', value: '1.5 kW' },
        { label: 'Width × Height × Depth', value: '700 × 950 × 1000 mm' },
        { label: 'Net Weight', value: '120 kg' },
        { label: 'Supply Voltage', value: '380–415 V / 50 Hz' },
        { label: 'Noise Level (wash / spin)', value: '54 / 74 dB(A)' },
      ]}
      features={[
        { title: 'High Capacity', desc: '18 kg handles large volumes in fewer cycles, boosting productivity.' },
        { title: 'Heavy-Duty Build', desc: 'Robust construction engineered to withstand intensive daily use.' },
        { title: 'Simple Operation', desc: 'User-friendly controls that require minimal training for staff.' },
        { title: 'Reliable Performance', desc: 'Consistent wash results across all programs and load sizes.' },
        { title: 'Easy Maintenance', desc: 'Accessible design for quick servicing and low downtime.' },
        { title: 'Industry Proven', desc: 'Widely trusted by commercial laundries around the world.' },
      ]}
      backHref="/solutions/laundry/commercial-washers"
      backLabel="All Commercial Washers"
    />
  );
}
