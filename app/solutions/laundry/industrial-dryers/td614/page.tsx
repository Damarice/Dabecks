import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function TD614() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'TD6-14' },
      ]}
      category="Industrial Dryers"
      model="TD6-14"
      subtitle="Tumble dryer · 14 kg capacity"
      image="/products/dryers/td614.jpg"
      placeholder="TD6-14"
      keySpecs={[
        { label: 'Capacity', value: '14 kg' },
        { label: 'Power', value: '4.8 kW' },
        { label: 'Energy', value: 'A++' },
      ]}
      description={[
        'The TD6-14 is a high-capacity commercial dryer built for demanding laundry operations. Its 14kg capacity and powerful airflow system make it the ideal choice for large hotels, hospitals, and industrial laundries.',
        'Designed for continuous use, it features robust construction and intelligent controls to maximise throughput while minimising energy consumption.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Energy Class', value: 'A++ rated' },
        { icon: '🌀', label: 'Drum Volume', value: '185 litres' },
        { icon: '⏱️', label: 'Cycle Time', value: 'From 55 min' },
        { icon: '🔇', label: 'Noise Level', value: '67 dB(A)' },
      ]}
      specs={[
        { label: 'Model', value: 'TD6-14' },
        { label: 'Load Capacity', value: '14 kg' },
        { label: 'Drum Volume', value: '185 litres' },
        { label: 'Heating Power', value: '4.8 kW' },
        { label: 'Motor Power', value: '0.35 kW' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Width × Height × Depth', value: '700 × 950 × 700 mm' },
        { label: 'Net Weight', value: '58 kg' },
        { label: 'Supply Voltage', value: '380–415 V / 50 Hz' },
        { label: 'Noise Level', value: '67 dB(A)' },
      ]}
      features={[
        { title: 'High Capacity', desc: '14 kg for large-volume drying in a single cycle.' },
        { title: 'Powerful Airflow', desc: 'High-volume air circulation cuts drying time.' },
        { title: 'Auto Moisture Sensing', desc: 'Prevents over-drying and protects fabrics.' },
        { title: 'Durable Build', desc: 'Heavy-duty construction for uninterrupted commercial use.' },
        { title: 'Energy Saving', desc: 'A++ rated for low running costs.' },
        { title: 'Wide Program Range', desc: 'Multiple programs for cottons, synthetics, and delicates.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Dryers"
    />
  );
}
