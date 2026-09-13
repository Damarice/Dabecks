import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WB67() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'WB6-7' },
      ]}
      category="Commercial Washers"
      model="WB6-7"
      subtitle="Front-load washer · 7 kg capacity"
      image="/products/washers/wb67.jpg"
      placeholder="WB6-7"
      keySpecs={[
        { label: 'Capacity', value: '7 kg' },
        { label: 'Spin Speed', value: '1400 RPM' },
        { label: 'Energy', value: 'A+++' },
      ]}
      description={[
        'The WB6-7 is a professional-grade front-load washer designed specifically for commercial laundry operations. With a 7 kg load capacity and advanced water management systems, it delivers consistent, high-quality washing results while minimising operational costs.',
        'Built for reliability and performance, this washer features intuitive controls, efficient energy consumption, and easy maintenance access — ideal for hotels, hospitals, and professional laundry services.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Energy Savings', value: 'Up to 40% less consumption' },
        { icon: '💧', label: 'Water Efficiency', value: 'Optimised per-cycle usage' },
        { icon: '⚙️', label: 'Spin Speed', value: '1400 RPM extraction' },
        { icon: '✅', label: 'Certified', value: 'International quality standards' },
      ]}
      specs={[
        { label: 'Model', value: 'WB6-7' },
        { label: 'Load Capacity', value: '7 kg' },
        { label: 'Drum Volume', value: '65 litres' },
        { label: 'Spin Speed (max)', value: '1400 RPM' },
        { label: 'Water Usage per Cycle', value: '45 litres' },
        { label: 'Energy Class', value: 'A+++' },
        { label: 'Heating Element Power', value: '2.8 kW' },
        { label: 'Motor Power', value: '0.75 kW' },
        { label: 'Width × Height × Depth', value: '598 × 850 × 603 mm' },
        { label: 'Net Weight', value: '85 kg' },
        { label: 'Supply Voltage', value: '220–240 V / 50 Hz' },
        { label: 'Noise Level (wash / spin)', value: '52 / 72 dB(A)' },
      ]}
      features={[
        { title: 'Energy Efficiency', desc: 'Built-in load sensing adjusts water and energy in real time, reducing operational costs by up to 40%.' },
        { title: 'Intuitive Control Panel', desc: 'Simple, clear interface with pre-set wash programs. Minimal training required for operators.' },
        { title: 'Durable Stainless Drum', desc: 'Premium stainless steel drum resists corrosion and withstands years of continuous commercial use.' },
        { title: 'High Extraction Speed', desc: '1400 RPM spin reduces residual moisture, cutting drying time and overall cycle time.' },
        { title: 'Easy Maintenance', desc: 'Front-accessible components and self-cleaning filter make servicing fast and straightforward.' },
        { title: 'Hygiene Certified', desc: 'Certified wash programs for healthcare and hospitality ensure compliance with hygiene regulations.' },
      ]}
      backHref="/solutions/laundry/commercial-washers"
      backLabel="All Commercial Washers"
    />
  );
}
