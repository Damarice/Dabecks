import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function CookingRanges() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Kitchen Systems', href: '/solutions/kitchen' },
        { label: 'Cooking Ranges' },
      ]}
      heroImage="/kitchen-categories/cooking-ranges.webp"
      category="Kitchen Systems"
      title="Cooking Ranges"
      heroSubtitle="Professional cooking ranges and hobs for commercial kitchens — powerful burners, heavy-duty construction, built for the busiest services."
      introTitle="Power meets precision."
      introText="Our commercial cooking range lineup covers everything from compact 4-burner units to heavy-duty 8-burner ranges with ovens — all built to withstand the demands of professional kitchen service, day after day."
      benefits={[
        { icon: '🔥', title: 'High Output Burners', desc: 'Commercial-grade burners deliver the high BTU output needed for fast, professional cooking.' },
        { icon: '🏗️', title: 'Heavy-Duty Build', desc: 'Cast-iron grates, stainless steel surfaces, and robust frames built for long-term commercial use.' },
        { icon: '🔧', title: 'Easy Maintenance', desc: 'Removable components and accessible design make daily cleaning and servicing straightforward.' },
      ]}
      products={[
        { model: 'thermaline Premium Modular 80, 85 & 90', desc: 'Cooking Ranges', slug: 'thermaline-premium', placeholder: 'thermaline+Premium', image: '/products/kitchen/cooking-ranges/thermaline-premium.webp' },
        { model: 'e-XP 700 and 900 Modular Cooking', desc: 'Cooking Ranges', slug: 'exp-700-900-modular', placeholder: 'e-XP+700+900+Modular', image: '/products/kitchen/cooking-ranges/exp-700-900-modular.webp' },
        { model: 'LiberoPro & LiberoLight Mobile Cooking', desc: 'Cooking Ranges', slug: 'liberopro-liberolight', placeholder: 'LiberoPro+LiberoLight', image: '/products/kitchen/cooking-ranges/liberopro-liberolight.webp' },
        { model: 'Accessories and consumables', desc: 'Cooking Ranges', slug: 'accessories-consumables', placeholder: 'Accessories+Consumables', image: '/products/kitchen/cooking-ranges/accessories-consumables.webp' },
      ]}
      basePath="/solutions/kitchen/cooking-ranges"
    />
  );
}
