import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Range4B() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges' }, { label: 'Range-4B' }]}
      category="Cooking Ranges" model="Range-4B" subtitle="4-burner commercial gas range"
      image="/products/ranges/range4b.jpg" placeholder="Range-4B"
      keySpecs={[{ label: 'Burners', value: '4' }, { label: 'BTU/burner', value: '30,000' }, { label: 'Oven', value: 'Optional' }]}
      description={['The Range-4B is a compact 4-burner commercial gas range designed for smaller kitchens needing reliable, high-output cooking performance. Cast-iron grates and heavy-duty construction ensure long service life.', 'Available with or without an oven base, it fits into tight kitchen spaces while delivering professional cooking power.']}
      featureStrip={[{ icon: '🔥', label: 'Burners', value: '4 × 30,000 BTU' }, { icon: '🏗️', label: 'Grates', value: 'Cast iron' }, { icon: '📏', label: 'Width', value: '900 mm' }, { icon: '⚙️', label: 'Oven Base', value: 'Optional' }]}
      specs={[{ label: 'Model', value: 'Range-4B' }, { label: 'Burners', value: '4' }, { label: 'BTU per Burner', value: '30,000' }, { label: 'Total BTU', value: '120,000' }, { label: 'Grate Material', value: 'Cast iron' }, { label: 'Body Material', value: 'Stainless steel' }, { label: 'Width × Height × Depth', value: '900 × 900 × 750 mm' }, { label: 'Net Weight', value: '85 kg' }, { label: 'Gas Connection', value: '3/4 inch NPT' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: 'High-Output Burners', desc: '30,000 BTU per burner delivers powerful, responsive heat for professional cooking.' }, { title: 'Cast-Iron Grates', desc: 'Heavy-duty cast-iron grates retain heat and withstand heavy pan use.' }, { title: 'Compact Width', desc: '900mm wide fits into smaller kitchen footprints.' }, { title: 'Easy Cleaning', desc: 'Removable grates and burner caps simplify daily cleaning.' }, { title: 'Robust Frame', desc: 'Heavy-gauge stainless steel construction for long service life.' }, { title: 'Optional Oven', desc: 'Available with a standard gas oven base for baking flexibility.' }]}
      backHref="/solutions/kitchen/cooking-ranges" backLabel="All Ranges"
    />
  );
}
