import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function PrimusT13() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'Primus T13' },
      ]}
      category="Industrial Dryers"
      model="Primus T13"
      subtitle="Industrial tumble dryer · 13 kg capacity"
      image="/products/dryers/primus-t13.jpg"
      placeholder="Primus+T13"
      keySpecs={[
        { label: 'Capacity', value: '13 kg' },
        { label: 'Power', value: '4.2 kW' },
        { label: 'Energy', value: 'A+' },
      ]}
      description={[
        'The Primus T13 is a robust industrial tumble dryer built for continuous heavy-duty use. With 13kg capacity and A+ energy rating, it delivers reliable performance for commercial laundries, fitness centres, and hospitality operations.',
        'Its heavy-duty construction ensures long service life with minimal maintenance interruptions.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Energy Class', value: 'A+ rated' },
        { icon: '🌀', label: 'Drum Volume', value: '175 litres' },
        { icon: '🏭', label: 'Build', value: 'Industrial grade' },
        { icon: '🔧', label: 'Downtime', value: 'Minimal maintenance' },
      ]}
      specs={[
        { label: 'Model', value: 'Primus T13' },
        { label: 'Load Capacity', value: '13 kg' },
        { label: 'Drum Volume', value: '175 litres' },
        { label: 'Heating Power', value: '4.2 kW' },
        { label: 'Motor Power', value: '0.30 kW' },
        { label: 'Energy Class', value: 'A+' },
        { label: 'Width × Height × Depth', value: '700 × 950 × 700 mm' },
        { label: 'Net Weight', value: '55 kg' },
        { label: 'Supply Voltage', value: '380–415 V / 50 Hz' },
        { label: 'Noise Level', value: '67 dB(A)' },
      ]}
      features={[
        { title: 'Industrial Build', desc: 'Designed for heavy daily use without performance degradation.' },
        { title: 'Energy Efficient', desc: 'A+ energy class keeps operational costs low.' },
        { title: 'Reversing Drum', desc: 'Prevents bunching and ensures uniform drying throughout.' },
        { title: 'Robust Casing', desc: 'Heavy-gauge steel construction for long service life.' },
        { title: 'Low Downtime', desc: 'Accessible components make servicing fast and simple.' },
        { title: 'Versatile Programs', desc: 'Suitable for cottons, workwear, and mixed loads.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Dryers"
    />
  );
}
