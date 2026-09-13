import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Range6B() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges' }, { label: 'Range-6B' }]}
      category="Cooking Ranges" model="Range-6B" subtitle="6-burner commercial gas range"
      image="/products/ranges/range6b.jpg" placeholder="Range-6B"
      keySpecs={[{ label: 'Burners', value: '6' }, { label: 'BTU/burner', value: '30,000' }, { label: 'Width', value: '1200 mm' }]}
      description={['The Range-6B is a full-size 6-burner commercial range — the industry standard for medium-to-large restaurant and hotel kitchens. Its six high-output burners handle multiple cooking tasks simultaneously during busy service periods.', 'Paired with a large capacity oven base, it covers all stovetop and oven needs in a single unit.']}
      featureStrip={[{ icon: '🔥', label: 'Burners', value: '6 × 30,000 BTU' }, { icon: '🏗️', label: 'Grates', value: 'Cast iron' }, { icon: '📦', label: 'Oven', value: 'Large capacity base' }, { icon: '📏', label: 'Width', value: '1200 mm' }]}
      specs={[{ label: 'Model', value: 'Range-6B' }, { label: 'Burners', value: '6' }, { label: 'BTU per Burner', value: '30,000' }, { label: 'Total BTU', value: '180,000' }, { label: 'Oven Capacity', value: '2 × GN 1/1' }, { label: 'Grate Material', value: 'Cast iron' }, { label: 'Width × Height × Depth', value: '1200 × 900 × 750 mm' }, { label: 'Net Weight', value: '120 kg' }, { label: 'Gas Connection', value: '3/4 inch NPT' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: '6 High-Output Burners', desc: 'Handle multiple pots and pans simultaneously for busy service.' }, { title: 'Large Oven Base', desc: '2 × GN 1/1 oven handles roasting, baking, and holding.' }, { title: 'Cast-Iron Grates', desc: 'Durable grates for heavy pans and consistent heat retention.' }, { title: 'Stainless Construction', desc: 'Easy-clean stainless steel throughout for professional kitchens.' }, { title: 'Pilot Ignition', desc: 'Reliable pilot ignition on all burners for continuous service.' }, { title: 'Heavy-Duty Frame', desc: 'Adjustable stainless steel legs for stable installation.' }]}
      backHref="/solutions/kitchen/cooking-ranges" backLabel="All Ranges"
    />
  );
}
