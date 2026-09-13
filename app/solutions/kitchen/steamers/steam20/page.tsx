import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Steam20() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Steamers', href: '/solutions/kitchen/steamers' }, { label: 'Steam-20' }]}
      category="Steamers" model="Steam-20" subtitle="High-volume steamer · 20 pans"
      image="/products/steamers/steam20.jpg" placeholder="Steam-20"
      keySpecs={[{ label: 'Pans', value: '20 × GN 1/1' }, { label: 'Power', value: '24 kW' }, { label: 'Output', value: 'High volume' }]}
      description={['The Steam-20 is a high-volume industrial steamer with 20-pan capacity — designed for large-scale institutional catering, hospital food production, and hotel banqueting operations.', 'Its dual-compartment design allows simultaneous cooking of different items at different steam levels, maximising kitchen productivity.']}
      featureStrip={[{ icon: '♨️', label: 'Capacity', value: '20 × GN 1/1' }, { icon: '⚡', label: 'Power', value: '24 kW' }, { icon: '🔀', label: 'Compartments', value: '2 independent' }, { icon: '🏭', label: 'Volume', value: 'Industrial scale' }]}
      specs={[{ label: 'Model', value: 'Steam-20' }, { label: 'Capacity', value: '20 × GN 1/1 (2 × 10)' }, { label: 'Compartments', value: '2 independent' }, { label: 'Total Power', value: '24 kW' }, { label: 'Connection', value: 'Plumbed (required)' }, { label: 'Steam Temperature', value: '100 °C' }, { label: 'Width × Height × Depth', value: '790 × 1800 × 665 mm' }, { label: 'Net Weight', value: '145 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: 'Dual Compartments', desc: 'Two independent compartments allow simultaneous cooking of different items.' }, { title: 'High Volume', desc: '20-pan capacity for the largest institutional catering operations.' }, { title: 'Independent Control', desc: 'Each compartment has its own timer and controls.' }, { title: 'HACCP Logging', desc: 'Data logging available for food safety compliance.' }, { title: 'Drain Management', desc: 'Automatic drain management prevents flooding and simplifies cleaning.' }, { title: 'Heavy-Duty Build', desc: 'Industrial-grade construction for continuous daily use.' }]}
      backHref="/solutions/kitchen/steamers" backLabel="All Steamers"
    />
  );
}
