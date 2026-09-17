import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function GrillsGriddles() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Kitchen Systems', href: '/solutions/kitchen' },
        { label: 'Grills & Griddles' },
      ]}
      heroImage="/kitchen-categories/grills-griddles.jpg"
      category="Kitchen Systems"
      title="Grills & Griddles"
      heroSubtitle="Commercial grills and griddles for high-volume food service — consistent heat, durable surfaces, and fast recovery for busy kitchens."
      introTitle="Sear. Grill. Serve."
      introText="Our commercial grill and griddle range delivers consistent, high-temperature cooking surfaces for proteins, vegetables, and breakfast items. Built for continuous use in hotel buffets, restaurants, and institutional catering."
      benefits={[
        { icon: '🌡️', title: 'Even Heat Distribution', desc: 'Precision-engineered cooking surfaces distribute heat evenly for consistent results across the full plate.' },
        { icon: '⚡', title: 'Fast Recovery', desc: 'High-output burners restore surface temperature quickly between batches.' },
        { icon: '🧽', title: 'Easy Cleaning', desc: 'Smooth cooking surfaces and removable drip trays make end-of-service cleaning fast and simple.' },
      ]}
      products={[
        { model: 'Grill-24', desc: '24-inch gas char-grill', slug: 'grill24', placeholder: 'Grill-24' },
        { model: 'Grill-36', desc: '36-inch gas char-grill', slug: 'grill36', placeholder: 'Grill-36' },
        { model: 'Griddle-24', desc: '24-inch flat-top griddle', slug: 'griddle24', placeholder: 'Griddle-24' },
        { model: 'Griddle-36', desc: '36-inch flat-top griddle', slug: 'griddle36', placeholder: 'Griddle-36' },
        { model: 'Vulcan VGG24', desc: 'Gas griddle · 24 inch', slug: 'vulcanVGG24', placeholder: 'Vulcan+VGG24' },
        { model: 'Star Ultra-Max 624HA', desc: 'Heavy-duty griddle', slug: 'starUltraMax', placeholder: 'Star+Ultra-Max' },
      ]}
      basePath="/solutions/kitchen/grills-griddles"
    />
  );
}
