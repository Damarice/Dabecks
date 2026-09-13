import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function TD68() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'TD6-8' },
      ]}
      category="Industrial Dryers"
      model="TD6-8"
      subtitle="Tumble dryer · 8 kg capacity"
      image="/products/dryers/td68.jpg"
      placeholder="TD6-8"
      keySpecs={[
        { label: 'Capacity', value: '8 kg' },
        { label: 'Power', value: '2.9 kW' },
        { label: 'Energy', value: 'A++' },
      ]}
      description={[
        'The TD6-8 is a compact yet powerful tumble dryer designed for commercial laundry operations. With an 8kg capacity and efficient airflow system, it delivers fast, consistent drying results for hotels, guesthouses, and care facilities.',
        'Built with a stainless steel drum and durable construction, the TD6-8 handles continuous use with ease, ensuring your laundry operation keeps moving.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Energy Class', value: 'A++ rated' },
        { icon: '🌀', label: 'Drum Type', value: 'Stainless steel' },
        { icon: '⏱️', label: 'Cycle Time', value: 'From 45 min' },
        { icon: '🔇', label: 'Noise Level', value: '65 dB(A)' },
      ]}
      specs={[
        { label: 'Model', value: 'TD6-8' },
        { label: 'Load Capacity', value: '8 kg' },
        { label: 'Drum Volume', value: '108 litres' },
        { label: 'Heating Power', value: '2.9 kW' },
        { label: 'Motor Power', value: '0.25 kW' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Width × Height × Depth', value: '598 × 850 × 600 mm' },
        { label: 'Net Weight', value: '39 kg' },
        { label: 'Supply Voltage', value: '220–240 V / 50 Hz' },
        { label: 'Noise Level', value: '65 dB(A)' },
      ]}
      features={[
        { title: 'Fast Drying', desc: 'Optimised airflow reduces drying time and increases throughput.' },
        { title: 'Stainless Drum', desc: 'Premium drum resists corrosion for long-term reliability.' },
        { title: 'Sensor Drying', desc: 'Automatic moisture sensing prevents over-drying and saves energy.' },
        { title: 'Easy Filter Access', desc: 'Front-accessible lint filter for quick, simple cleaning.' },
        { title: 'Low Vibration', desc: 'Balanced drum design minimises noise and vibration.' },
        { title: 'Multiple Programs', desc: 'Pre-set programs for different fabric types and loads.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Dryers"
    />
  );
}
