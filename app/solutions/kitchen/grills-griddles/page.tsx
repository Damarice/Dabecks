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
        { model: '7.88 Inch Ribbed Griddle Grill Scraper Manual Tool Stainless Steel', desc: 'COD 206420', slug: 'ribbed-grill-scraper', placeholder: 'Ribbed+Grill+Scraper', image: '/products/kitchen/grills-griddles/ribbed-grill-scraper.webp' },
        { model: '12 Inch Stainless Steel Scraper for Smooth Griddle', desc: 'COD 164255', slug: 'smooth-griddle-scraper', placeholder: 'Smooth+Griddle+Scraper', image: '/products/kitchen/grills-griddles/smooth-griddle-scraper.webp' },
        { model: '12 Inch Ribbed and Smooth Double-face Griddle', desc: 'COD 925003', slug: 'double-face-griddle', placeholder: 'Double+Face+Griddle', image: '/products/kitchen/grills-griddles/double-face-griddle.webp' },
        { model: '14 Inch Electric Sandwich Press with Adjustable Plate', desc: 'COD 603941', slug: 'electric-sandwich-press', placeholder: 'Electric+Sandwich+Press', image: '/products/kitchen/grills-griddles/electric-sandwich-press.webp' },
        { model: '12 Inch Mesh Grilling Grid Compatible with Commercial Cooking', desc: 'COD 922713', slug: 'mesh-grilling-grid', placeholder: 'Mesh+Grilling+Grid', image: '/products/kitchen/grills-griddles/mesh-grilling-grid.webp' },
        { model: '12 Inch Frying Pan for Eggs and Pancakes Stainless Steel', desc: 'COD 925005', slug: 'frying-pan-eggs-pancakes', placeholder: 'Frying+Pan+Eggs+Pancakes', image: '/products/kitchen/grills-griddles/frying-pan-eggs-pancakes.webp' },
      ]}
      basePath="/solutions/kitchen/grills-griddles"
    />
  );
}
