import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function FT8L() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: 'FT-8L' }]}
      category="Fryers" model="FT-8L" subtitle="Single tank electric fryer · 8 L"
      image="/products/fryers/ft8l.jpg" placeholder="FT-8L"
      keySpecs={[{ label: 'Tank', value: '8 L' }, { label: 'Power', value: '6 kW' }, { label: 'Recovery', value: 'Fast' }]}
      description={['The FT-8L is a compact single-tank electric fryer ideal for small to medium commercial kitchens. With 8L oil capacity and a powerful 6kW heating element, it delivers fast oil recovery for continuous service.', 'Its cool-zone design prevents food debris from burning and extends oil life, reducing operating costs.']}
      featureStrip={[{ icon: '🔥', label: 'Power', value: '6 kW' }, { icon: '🛢️', label: 'Tank', value: '8 L capacity' }, { icon: '❄️', label: 'Cool Zone', value: 'Extended oil life' }, { icon: '🌡️', label: 'Temp Range', value: '60–190 °C' }]}
      specs={[{ label: 'Model', value: 'FT-8L' }, { label: 'Tank Capacity', value: '8 L' }, { label: 'Heating Power', value: '6 kW' }, { label: 'Temperature Range', value: '60–190 °C' }, { label: 'Production Capacity', value: '8 kg/hr' }, { label: 'Cool Zone', value: 'Yes' }, { label: 'Width × Height × Depth', value: '300 × 870 × 750 mm' }, { label: 'Net Weight', value: '22 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Basket', value: '1 × full basket' }]}
      features={[{ title: 'Fast Recovery', desc: 'Powerful element restores oil temperature quickly between batches.' }, { title: 'Cool Zone Design', desc: 'Cold oil zone at tank bottom prevents food debris carbonisation.' }, { title: 'Adjustable Thermostat', desc: 'Precise temperature control from 60 to 190 °C.' }, { title: 'Easy Filtration', desc: 'Drain valve and filter system extend oil life and reduce costs.' }, { title: 'Safety Thermostat', desc: 'Automatic cut-off prevents overheating.' }, { title: 'Compact Footprint', desc: 'Space-saving design for busy kitchen counters.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
