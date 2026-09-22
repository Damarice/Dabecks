import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function CrosswiseConvection() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Commercial Ovens', href: '/solutions/kitchen/commercial-ovens' }, { label: 'Crosswise Convection Ovens' }]}
      category="Commercial Ovens" model="Crosswise Convection Ovens" subtitle="Professional convection ovens for consistent cooking"
      image="/products/kitchen/commercial-ovens/crosswise-convection.webp" placeholder="Crosswise+Convection+Ovens"
      keySpecs={[{ label: 'Capacity', value: '6 trays' }, { label: 'Power', value: '6.5 kW' }, { label: 'Temp Range', value: '50–300 °C' }]}
      description={['The Convect-6 is a professional countertop convection oven ideal for à la carte cooking, pastry, and banqueting preparation. Its 6-tray capacity and precise temperature control deliver consistent results across all menu items.', 'Compact and energy-efficient, it is the ideal first oven for growing commercial kitchens or a secondary oven for large operations.']}
      featureStrip={[{ icon: '🌡️', label: 'Temp Range', value: '50–300 °C' }, { icon: '💨', label: 'Fan Speeds', value: '3 speed levels' }, { icon: '⚡', label: 'Power', value: '6.5 kW' }, { icon: '🧽', label: 'Cleaning', value: 'Manual / semi-auto' }]}
      specs={[{ label: 'Model', value: 'Convect-6' }, { label: 'Capacity', value: '6 × GN 1/1' }, { label: 'Temperature Range', value: '50–300 °C' }, { label: 'Heating Power', value: '6.5 kW' }, { label: 'Fan Speeds', value: '3' }, { label: 'Steam Injection', value: 'Manual' }, { label: 'Width × Height × Depth', value: '780 × 570 × 800 mm' }, { label: 'Net Weight', value: '65 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Noise Level', value: '58 dB(A)' }]}
      features={[{ title: 'Precise Temperature', desc: 'Digital controls maintain exact temperatures for consistent cooking results.' }, { title: 'Multiple Fan Speeds', desc: '3-speed fan adapts airflow to delicate pastries or robust roasts.' }, { title: 'Steam Injection', desc: 'Manual steam injection improves crust development in bread and pastries.' }, { title: 'Energy Efficient', desc: 'Insulated double-glass door retains heat and reduces energy consumption.' }, { title: 'Easy Loading', desc: 'Wide door opening and tray runners allow fast, easy loading.' }, { title: 'Simple Cleaning', desc: 'Smooth enamel interior wipes clean quickly after service.' }]}
      backHref="/solutions/kitchen/commercial-ovens" backLabel="All Ovens"
    />
  );
}
