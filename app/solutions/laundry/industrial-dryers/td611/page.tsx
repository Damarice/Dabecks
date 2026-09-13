import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function TD611() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'TD6-11' },
      ]}
      category="Industrial Dryers"
      model="TD6-11"
      subtitle="Tumble dryer · 11 kg capacity"
      image="/products/dryers/td611.jpg"
      placeholder="TD6-11"
      keySpecs={[
        { label: 'Capacity', value: '11 kg' },
        { label: 'Power', value: '3.8 kW' },
        { label: 'Energy', value: 'A++' },
      ]}
      description={[
        'The TD6-11 is a mid-range commercial tumble dryer offering 11kg capacity and efficient energy performance. Ideal for medium-volume laundry operations in hotels, sports facilities, and care homes.',
        'With its large drum volume and intelligent moisture sensing, the TD6-11 delivers thorough, gentle drying across all fabric types.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Energy Class', value: 'A++ rated' },
        { icon: '🌀', label: 'Drum Volume', value: '155 litres' },
        { icon: '⏱️', label: 'Cycle Time', value: 'From 50 min' },
        { icon: '🔇', label: 'Noise Level', value: '66 dB(A)' },
      ]}
      specs={[
        { label: 'Model', value: 'TD6-11' },
        { label: 'Load Capacity', value: '11 kg' },
        { label: 'Drum Volume', value: '155 litres' },
        { label: 'Heating Power', value: '3.8 kW' },
        { label: 'Motor Power', value: '0.30 kW' },
        { label: 'Energy Class', value: 'A++' },
        { label: 'Width × Height × Depth', value: '598 × 850 × 600 mm' },
        { label: 'Net Weight', value: '44 kg' },
        { label: 'Supply Voltage', value: '220–240 V / 50 Hz' },
        { label: 'Noise Level', value: '66 dB(A)' },
      ]}
      features={[
        { title: 'Larger Capacity', desc: '11 kg handles bigger loads for higher volume operations.' },
        { title: 'Intelligent Sensor', desc: 'Auto moisture detection stops cycle when laundry is dry.' },
        { title: 'Stainless Drum', desc: 'Corrosion-resistant drum for commercial longevity.' },
        { title: 'Gentle on Fabrics', desc: 'Low-temperature programs protect delicate linens.' },
        { title: 'Simple Controls', desc: 'Straightforward interface for all operator levels.' },
        { title: 'Quick Service Access', desc: 'Front-panel design for fast maintenance.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Dryers"
    />
  );
}
