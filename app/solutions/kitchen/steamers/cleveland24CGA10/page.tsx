import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Cleveland24CGA10() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Steamers', href: '/solutions/kitchen/steamers' }, { label: 'Cleveland 24CGA10' }]}
      category="Steamers" model="Cleveland 24CGA10" subtitle="Gas convection steamer · 10 pans"
      image="/products/steamers/cleveland-24cga10.jpg" placeholder="Cleveland+24CGA10"
      keySpecs={[{ label: 'Pans', value: '10 × GN 1/1' }, { label: 'Fuel', value: 'Natural gas' }, { label: 'BTU', value: '40,000 BTU/hr' }]}
      description={['The Cleveland 24CGA10 is a reliable gas-powered convection steamer trusted in institutional kitchens worldwide. Its 10-pan capacity and natural gas heating deliver powerful, consistent steam cooking with lower operating costs than electric units.', 'Simple controls and a durable stainless steel construction make it a long-term workhorse for hospital, school, and hotel kitchens.']}
      featureStrip={[{ icon: '🔥', label: 'Fuel', value: 'Natural gas' }, { icon: '♨️', label: 'Capacity', value: '10 × GN 1/1' }, { icon: '💰', label: 'Cost', value: 'Low gas running cost' }, { icon: '🏗️', label: 'Build', value: 'Heavy-duty stainless' }]}
      specs={[{ label: 'Model', value: 'Cleveland 24CGA10' }, { label: 'Capacity', value: '10 × GN 1/1' }, { label: 'Fuel Type', value: 'Natural Gas' }, { label: 'BTU Rating', value: '40,000 BTU/hr' }, { label: 'Steam Temperature', value: '100 °C' }, { label: 'Water Connection', value: 'Plumbed (required)' }, { label: 'Width × Height × Depth', value: '813 × 1524 × 813 mm' }, { label: 'Net Weight', value: '120 kg' }, { label: 'Gas Connection', value: '3/4 inch NPT' }, { label: 'Certification', value: 'NSF, CE, CSA' }]}
      features={[{ title: 'Gas Efficiency', desc: 'Natural gas heating delivers lower running costs than equivalent electric units.' }, { title: 'Powerful Output', desc: '40,000 BTU ensures fast preheat and consistent steam temperature.' }, { title: 'Reliable Design', desc: 'Proven technology trusted in institutional kitchens for decades.' }, { title: 'Easy Operation', desc: 'Simple timer controls require minimal training for kitchen staff.' }, { title: 'Durable Build', desc: 'Heavy-gauge stainless steel interior and exterior.' }, { title: 'NSF Certified', desc: 'Meets international food safety and sanitation standards.' }]}
      backHref="/solutions/kitchen/steamers" backLabel="All Steamers"
    />
  );
}
