import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function FT15L() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Fryers', href: '/solutions/kitchen/fryers' }, { label: 'FT-15L' }]}
      category="Fryers" model="FT-15L" subtitle="Twin tank electric fryer · 2 × 8 L"
      image="/products/fryers/ft15l.jpg" placeholder="FT-15L"
      keySpecs={[{ label: 'Tanks', value: '2 × 8 L' }, { label: 'Power', value: '12 kW' }, { label: 'Output', value: '16 kg/hr' }]}
      description={['The FT-15L is a twin-tank electric fryer with two independent 8L tanks — ideal for kitchens that need to fry different products simultaneously at different temperatures.', 'Each tank operates independently, allowing one to fry fish while the other handles chips — eliminating flavour transfer and maximising production flexibility.']}
      featureStrip={[{ icon: '🔥', label: 'Total Power', value: '12 kW' }, { icon: '🛢️', label: 'Tanks', value: '2 × 8 L independent' }, { icon: '❄️', label: 'Cool Zone', value: 'Both tanks' }, { icon: '🎛️', label: 'Control', value: 'Independent per tank' }]}
      specs={[{ label: 'Model', value: 'FT-15L' }, { label: 'Configuration', value: 'Twin tank' }, { label: 'Tank Capacity', value: '2 × 8 L' }, { label: 'Heating Power', value: '2 × 6 kW' }, { label: 'Temperature Range', value: '60–190 °C per tank' }, { label: 'Production Capacity', value: '16 kg/hr total' }, { label: 'Width × Height × Depth', value: '600 × 870 × 750 mm' }, { label: 'Net Weight', value: '40 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Baskets', value: '2 × full basket' }]}
      features={[{ title: 'Twin Independent Tanks', desc: 'Fry two different products simultaneously at different temperatures.' }, { title: 'No Flavour Transfer', desc: 'Separate oil in each tank eliminates cross-contamination of flavours.' }, { title: 'High Output', desc: '16 kg/hr combined capacity for busy service periods.' }, { title: 'Cool Zone', desc: 'Both tanks feature cool zones to extend oil life.' }, { title: 'Independent Controls', desc: 'Each tank has its own thermostat and basket.' }, { title: 'Easy Cleaning', desc: 'Drain valves on each tank simplify oil changes and cleaning.' }]}
      backHref="/solutions/kitchen/fryers" backLabel="All Fryers"
    />
  );
}
