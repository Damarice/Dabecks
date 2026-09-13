import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Range8B() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges' }, { label: 'Range-8B' }]}
      category="Cooking Ranges" model="Range-8B" subtitle="8-burner heavy-duty commercial range"
      image="/products/ranges/range8b.jpg" placeholder="Range-8B"
      keySpecs={[{ label: 'Burners', value: '8' }, { label: 'Total BTU', value: '320,000' }, { label: 'Width', value: '1500 mm' }]}
      description={['The Range-8B is a heavy-duty 8-burner commercial range built for the highest-output professional kitchens. With 320,000 total BTU and a wide 1500mm cooking surface, it handles the most demanding service periods.', 'Ideal for large hotel kitchens, banqueting operations, and high-volume restaurants needing maximum stovetop capacity.']}
      featureStrip={[{ icon: '🔥', label: 'Total BTU', value: '320,000' }, { icon: '🏗️', label: 'Build', value: 'Heavy-duty' }, { icon: '📏', label: 'Width', value: '1500 mm' }, { icon: '🍳', label: 'Burners', value: '8 independent' }]}
      specs={[{ label: 'Model', value: 'Range-8B' }, { label: 'Burners', value: '8' }, { label: 'BTU per Burner', value: '40,000' }, { label: 'Total BTU', value: '320,000' }, { label: 'Oven Capacity', value: '2 × GN 1/1 (double oven)' }, { label: 'Grate Material', value: 'Cast iron' }, { label: 'Width × Height × Depth', value: '1500 × 900 × 750 mm' }, { label: 'Net Weight', value: '175 kg' }, { label: 'Gas Connection', value: '1 inch NPT' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: '8 Burners', desc: 'Maximum stovetop capacity for the busiest commercial kitchens.' }, { title: '40,000 BTU per Burner', desc: 'High-output burners for fast, professional-level cooking.' }, { title: 'Double Oven Base', desc: 'Two independent oven sections for simultaneous baking and roasting.' }, { title: 'Extra-Wide Surface', desc: '1500mm cooking surface accommodates large pans and stockpots.' }, { title: 'Heavy-Gauge Build', desc: 'Reinforced frame and casing for years of intensive use.' }, { title: 'Easy Maintenance', desc: 'All components removable for thorough daily cleaning.' }]}
      backHref="/solutions/kitchen/cooking-ranges" backLabel="All Ranges"
    />
  );
}
