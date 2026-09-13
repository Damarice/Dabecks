import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Steam6() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Steamers', href: '/solutions/kitchen/steamers' }, { label: 'Steam-6' }]}
      category="Steamers" model="Steam-6" subtitle="Countertop convection steamer · 6 pans"
      image="/products/steamers/steam6.jpg" placeholder="Steam-6"
      keySpecs={[{ label: 'Pans', value: '6 × GN 1/1' }, { label: 'Type', value: 'Convection steam' }, { label: 'Power', value: '7.5 kW' }]}
      description={['The Steam-6 is a compact countertop convection steamer ideal for small to medium kitchens needing consistent steam cooking without a full-size floor unit. Its 6-pan capacity handles most à la carte and banquet cooking needs.', 'Connectionless design with a built-in water reservoir makes installation simple — no plumbing required.']}
      featureStrip={[{ icon: '♨️', label: 'Steam Type', value: 'Convection' }, { icon: '🔌', label: 'Install', value: 'Connectionless' }, { icon: '⚡', label: 'Power', value: '7.5 kW' }, { icon: '🎯', label: 'Control', value: 'Digital precision' }]}
      specs={[{ label: 'Model', value: 'Steam-6' }, { label: 'Capacity', value: '6 × GN 1/1' }, { label: 'Type', value: 'Convection steamer' }, { label: 'Power', value: '7.5 kW' }, { label: 'Water Connection', value: 'Connectionless (reservoir)' }, { label: 'Temperature', value: '100 °C steam' }, { label: 'Width × Height × Depth', value: '790 × 570 × 665 mm' }, { label: 'Net Weight', value: '48 kg' }, { label: 'Supply Voltage', value: '208–240 V / 50-60 Hz' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: 'Connectionless Design', desc: 'Built-in water reservoir — no plumbing connection required for installation.' }, { title: 'Convection Steam', desc: 'Fan-forced steam for even, consistent cooking across all pan positions.' }, { title: 'Fast Preheat', desc: 'Reaches full steam temperature in under 5 minutes.' }, { title: 'Nutrient Preservation', desc: 'Steam cooking retains up to 90% of vitamins and minerals.' }, { title: 'Easy Cleaning', desc: 'Smooth stainless interior and self-draining design simplify daily cleaning.' }, { title: 'Compact Footprint', desc: 'Countertop design saves valuable floor space in smaller kitchens.' }]}
      backHref="/solutions/kitchen/steamers" backLabel="All Steamers"
    />
  );
}
