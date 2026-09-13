import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function GarlandG60() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges' }, { label: 'Garland G60-6R' }]}
      category="Cooking Ranges" model="Garland G60-6R" subtitle="Commercial gas range · 6 burners"
      image="/products/ranges/garland-g60.jpg" placeholder="Garland+G60"
      keySpecs={[{ label: 'Burners', value: '6' }, { label: 'BTU/burner', value: '33,000' }, { label: 'Brand', value: 'Garland' }]}
      description={['The Garland G60-6R is a professional 6-burner gas range trusted in commercial kitchens worldwide. Garland\'s reputation for quality and reliability is backed by decades of food service industry experience.', 'Its powerful burners, heavy-duty construction, and large oven make it a complete cooking solution for restaurants and hotel kitchens.']}
      featureStrip={[{ icon: '🔥', label: 'BTU/burner', value: '33,000' }, { icon: '🏗️', label: 'Build', value: 'Garland quality' }, { icon: '📦', label: 'Oven', value: 'Standard deck oven' }, { icon: '✅', label: 'Certified', value: 'NSF, CE' }]}
      specs={[{ label: 'Model', value: 'Garland G60-6R' }, { label: 'Burners', value: '6' }, { label: 'BTU per Burner', value: '33,000' }, { label: 'Total BTU', value: '198,000' }, { label: 'Oven Type', value: 'Deck oven' }, { label: 'Grate Material', value: 'Cast iron' }, { label: 'Width × Height × Depth', value: '1524 × 1067 × 813 mm' }, { label: 'Net Weight', value: '272 kg' }, { label: 'Gas Connection', value: '3/4 inch NPT' }, { label: 'Certification', value: 'NSF, CE, CSA' }]}
      features={[{ title: 'Garland Reliability', desc: 'Trusted by professional kitchens globally for decades of quality.' }, { title: 'Powerful Burners', desc: '33,000 BTU per burner for fast, professional heat output.' }, { title: 'Deck Oven Base', desc: 'Generous deck oven for baking, roasting, and holding.' }, { title: 'Cast-Iron Grates', desc: 'Heavy-duty grates withstand continuous professional use.' }, { title: 'Stainless Steel', desc: 'Full stainless steel body for easy cleaning and durability.' }, { title: 'Global Service', desc: 'Backed by Garland\'s worldwide service and parts network.' }]}
      backHref="/solutions/kitchen/cooking-ranges" backLabel="All Ranges"
    />
  );
}
