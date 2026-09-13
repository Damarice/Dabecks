import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WB68() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'WB6-8' },
      ]}
      category="Commercial Washers"
      model="WB6-8"
      subtitle="Front-load washer · 8 kg capacity"
      image="/products/washers/wb68.jpg"
      placeholder="WB6-8"
      keySpecs={[
        { label: 'Capacity', value: '8 kg' },
        { label: 'Spin Speed', value: '1400 RPM' },
        { label: 'Energy', value: 'A+++' },
      ]}
      description={[
        'The WB6-8 is a high-capacity front-load washer engineered for demanding commercial environments. With 8 kg load capacity and advanced water management, it delivers superior cleaning results while keeping operational costs low.',
        'Built for reliability and long-term performance, the WB6-8 is the ideal choice for hotels, hospitals, and commercial laundries requiring robust equipment that performs consistently under pressure.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Energy Savings', value: 'Up to 40% less consumption' },
        { icon: '💧', label: 'Water Efficiency', value: 'Optimised per-cycle usage' },
        { icon: '⚙️', label: 'Spin Speed', value: '1400 RPM extraction' },
        { icon: '✅', label: 'Certified', value: 'International quality standards' },
      ]}
      specs={[
        { label: 'Model', value: 'WB6-8' },
        { label: 'Load Capacity', value: '8 kg' },
        { label: 'Drum Volume', value: '72 litres' },
        { label: 'Spin Speed (max)', value: '1400 RPM' },
        { label: 'Water Usage per Cycle', value: '50 litres' },
        { label: 'Energy Class', value: 'A+++' },
        { label: 'Heating Element Power', value: '3.0 kW' },
        { label: 'Motor Power', value: '0.75 kW' },
        { label: 'Width × Height × Depth', value: '598 × 850 × 603 mm' },
        { label: 'Net Weight', value: '87 kg' },
        { label: 'Supply Voltage', value: '220–240 V / 50 Hz' },
        { label: 'Noise Level (wash / spin)', value: '52 / 72 dB(A)' },
      ]}
      features={[
        { title: 'Higher Capacity', desc: '8 kg load handles larger volumes for greater throughput per cycle.' },
        { title: 'Energy Efficiency', desc: 'Load sensing technology cuts water and energy by up to 40%.' },
        { title: 'Stainless Steel Drum', desc: 'Corrosion-resistant drum built for years of heavy commercial use.' },
        { title: 'High Extraction', desc: '1400 RPM spin reduces residual moisture and drying time.' },
        { title: 'Easy Maintenance', desc: 'Front-accessible components and self-cleaning filter simplify servicing.' },
        { title: 'Hygiene Certified', desc: 'Programs certified for healthcare and hospitality compliance.' },
      ]}
      backHref="/solutions/laundry/commercial-washers"
      backLabel="All Commercial Washers"
    />
  );
}
