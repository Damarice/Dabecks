import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function CookingRanges() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Kitchen Systems', href: '/solutions/kitchen' },
        { label: 'Cooking Ranges' },
      ]}
      heroImage="/hero-kitchen.jpg"
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
        { model: 'Range-4B', desc: '4-burner commercial range', slug: 'range4b', placeholder: 'Range-4B' },
        { model: 'Range-6B', desc: '6-burner commercial range', slug: 'range6b', placeholder: 'Range-6B' },
        { model: 'Range-8B', desc: '8-burner heavy-duty range', slug: 'range8b', placeholder: 'Range-8B' },
        { model: 'Garland G60-6R', desc: 'Gas range · 6 burners', slug: 'garlandG60', placeholder: 'Garland+G60' },
        { model: 'Vulcan SX36', desc: 'Commercial gas range', slug: 'vulcanSX36', placeholder: 'Vulcan+SX36' },
        { model: 'Wolf C36S', desc: 'Pro series range', slug: 'wolfC36S', placeholder: 'Wolf+C36S' },
      ]}
      basePath="/solutions/kitchen/cooking-ranges"
    />
  );
}
