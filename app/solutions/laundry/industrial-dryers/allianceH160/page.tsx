import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function AllianceH160() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'Alliance H160' },
      ]}
      category="Industrial Dryers"
      model="Alliance H160"
      subtitle="High-capacity industrial dryer · 160 lbs / 73 kg"
      image="/products/dryers/alliance-h160.jpg"
      placeholder="Alliance+H160"
      keySpecs={[
        { label: 'Capacity', value: '160 lbs' },
        { label: 'Heat', value: 'Gas/Steam' },
        { label: 'Drum', value: 'Stainless' },
      ]}
      description={[
        'The Alliance H160 is a heavy-duty industrial dryer built for the highest-volume commercial laundry operations. With 160 lbs capacity and gas or steam heating options, it is the workhorse of large hotel and hospital laundry rooms.',
        'Engineered for reliability, the H160 delivers consistent drying performance cycle after cycle, backed by Alliance\'s globally trusted build quality.',
      ]}
      featureStrip={[
        { icon: '🏭', label: 'Capacity', value: '160 lbs / 73 kg' },
        { icon: '🔥', label: 'Heat Options', value: 'Gas or steam' },
        { icon: '🌀', label: 'Drum', value: 'Stainless steel' },
        { icon: '⚙️', label: 'Build', value: 'Heavy-duty industrial' },
      ]}
      specs={[
        { label: 'Model', value: 'Alliance H160' },
        { label: 'Load Capacity', value: '160 lbs (73 kg)' },
        { label: 'Drum Volume', value: '680 litres' },
        { label: 'Heating Options', value: 'Gas or Steam' },
        { label: 'Motor Power', value: '3.0 kW' },
        { label: 'Width × Height × Depth', value: '1524 × 1829 × 1219 mm' },
        { label: 'Net Weight', value: '340 kg' },
        { label: 'Supply Voltage', value: '380–415 V / 60 Hz' },
        { label: 'Exhaust', value: 'Rear single-point' },
        { label: 'Noise Level', value: '72 dB(A)' },
      ]}
      features={[
        { title: 'Massive Capacity', desc: '160 lbs handles the highest-volume commercial laundry needs.' },
        { title: 'Gas or Steam Heat', desc: 'Flexible heating options to match your facility infrastructure.' },
        { title: 'Built to Last', desc: 'Heavy-gauge construction for years of uninterrupted operation.' },
        { title: 'High Throughput', desc: 'Processes large loads quickly to keep operations moving.' },
        { title: 'Reversing Drum', desc: 'Drum reversal prevents tangling in large loads.' },
        { title: 'Low Total Cost', desc: 'Designed for low energy and maintenance costs over lifetime.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Dryers"
    />
  );
}
