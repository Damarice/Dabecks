import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function FT25L() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: 'FT-25L' }]}
      category="Fryers" model="FT-25L" subtitle="High-volume fryer · 25 L"
      image="/products/fryers/ft25l.jpg" placeholder="FT-25L"
      keySpecs={[{ label: 'Capacity', value: '25 L' }, { label: 'Power', value: '18 kW' }, { label: 'Output', value: '25 kg/hr' }]}
      description={['The FT-25L is a high-volume single tank fryer designed for large-scale food service operations. With 25L oil capacity and 18kW heating, it delivers exceptional throughput for hotel buffets, canteens, and institutional catering.', 'Built with a stainless steel tank and heavy-duty heating elements, it is designed for continuous production throughout service periods.']}
      featureStrip={[{ icon: '🔥', label: 'Power', value: '18 kW' }, { icon: '🛢️', label: 'Capacity', value: '25 L' }, { icon: '📈', label: 'Output', value: '25 kg/hr' }, { icon: '❄️', label: 'Cool Zone', value: 'Extended oil life' }]}
      specs={[{ label: 'Model', value: 'FT-25L' }, { label: 'Tank Capacity', value: '25 L' }, { label: 'Heating Power', value: '18 kW' }, { label: 'Temperature Range', value: '60–190 °C' }, { label: 'Production Capacity', value: '25 kg/hr' }, { label: 'Filtration', value: 'Built-in filter pump' }, { label: 'Width × Height × Depth', value: '400 × 870 × 800 mm' }, { label: 'Net Weight', value: '55 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Baskets', value: '2 × half baskets' }]}
      features={[{ title: 'High Capacity', desc: '25 L oil capacity for sustained high-volume production.' }, { title: 'Built-in Filtration', desc: 'Integrated filter pump extends oil life and maintains quality.' }, { title: 'Rapid Recovery', desc: '18 kW heating restores temperature quickly between large batches.' }, { title: 'Heavy-Duty Tank', desc: 'Thick-gauge stainless steel tank for long service life.' }, { title: 'Dual Baskets', desc: 'Two half-baskets allow flexible loading and production management.' }, { title: 'Safe Drain System', desc: 'Safe and easy oil drain for filtration and changes.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
