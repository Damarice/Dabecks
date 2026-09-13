import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WB66() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'WB6-6' },
      ]}
      category="Commercial Washers"
      model="WB6-6"
      subtitle="Front-load washer · 6 kg capacity"
      image="/products/washers/wb66.jpg"
      placeholder="WB6-6"
      keySpecs={[
        { label: 'Capacity', value: '6 kg' },
        { label: 'Spin Speed', value: '1400 RPM' },
        { label: 'Energy', value: 'A+++' },
      ]}
      description={[
        'The WB6-6 is a compact yet powerful front-load washer designed for commercial laundry environments with moderate to high volume demands. Delivers professional-grade results with exceptional energy efficiency.',
        'With advanced technology and efficient operation, the WB6-6 is a strong performer for guesthouses, care facilities, and smaller commercial operations requiring reliable, consistent results.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Energy Savings', value: 'Up to 40% less consumption' },
        { icon: '💧', label: 'Water Efficiency', value: 'Optimised per-cycle usage' },
        { icon: '⚙️', label: 'Spin Speed', value: '1400 RPM extraction' },
        { icon: '📏', label: 'Footprint', value: 'Compact 598mm width' },
      ]}
      specs={[
        { label: 'Model', value: 'WB6-6' },
        { label: 'Load Capacity', value: '6 kg' },
        { label: 'Drum Volume', value: '58 litres' },
        { label: 'Spin Speed (max)', value: '1400 RPM' },
        { label: 'Water Usage per Cycle', value: '40 litres' },
        { label: 'Energy Class', value: 'A+++' },
        { label: 'Heating Element Power', value: '2.5 kW' },
        { label: 'Motor Power', value: '0.65 kW' },
        { label: 'Width × Height × Depth', value: '598 × 850 × 603 mm' },
        { label: 'Net Weight', value: '83 kg' },
        { label: 'Supply Voltage', value: '220–240 V / 50 Hz' },
        { label: 'Noise Level (wash / spin)', value: '52 / 70 dB(A)' },
      ]}
      features={[
        { title: 'Compact Footprint', desc: 'Space-efficient 598mm width fits into smaller laundry rooms without sacrificing output.' },
        { title: 'Energy Efficient', desc: 'A+++ rated — lowest energy consumption in the WB6 range.' },
        { title: 'Stainless Drum', desc: 'Premium drum resists corrosion for long-term commercial reliability.' },
        { title: 'High Extraction', desc: '1400 RPM spin reduces residual moisture and drying time.' },
        { title: 'Simple Operation', desc: 'Intuitive controls require minimal operator training.' },
        { title: 'Hygiene Certified', desc: 'Programs certified for hospitality and care facility compliance.' },
      ]}
      backHref="/solutions/laundry/commercial-washers"
      backLabel="All Commercial Washers"
    />
  );
}
