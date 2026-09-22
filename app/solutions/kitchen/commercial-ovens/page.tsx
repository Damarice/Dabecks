import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function CommercialOvens() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Kitchen Systems', href: '/solutions/kitchen' },
        { label: 'Commercial Ovens' },
      ]}
      heroImage="/kitchen-categories/commercial-ovens.webp"
      category="Kitchen Systems"
      title="Commercial Ovens"
      heroSubtitle="High-performance convection, combi, and deck ovens built for professional kitchens — delivering precise, consistent cooking results at volume."
      introTitle="Precision baking. Professional results."
      introText="Our commercial oven range covers every professional kitchen need — from compact convection ovens for à la carte cooking to high-volume combi ovens for banqueting and institutional food service. Every model is selected for reliability, energy efficiency, and ease of use."
      benefits={[
        { icon: '🌡️', title: 'Precise Temperature Control', desc: 'Digital controls maintain exact temperatures for consistent cooking results across every batch.' },
        { icon: '⚡', title: 'Energy Efficient', desc: 'Advanced insulation and heat recovery systems reduce energy consumption by up to 30%.' },
        { icon: '🍽️', title: 'Multiple Cooking Modes', desc: 'Convection, steam, and combination modes adapt to every menu requirement.' },
      ]}
      products={[
        { model: 'SkyLine Combi Ovens', desc: 'Commercial Ovens', slug: 'skyline-combi', placeholder: 'SkyLine+Combi+Ovens', image: '/products/kitchen/commercial-ovens/skyline-combi.webp' },
        { model: 'Crosswise Convection Ovens', desc: 'Commercial Ovens', slug: 'crosswise-convection', placeholder: 'Crosswise+Convection+Ovens', image: '/products/kitchen/commercial-ovens/crosswise-convection.webp' },
        { model: 'SkyLine Cook and Chill Solutions', desc: 'Commercial Ovens', slug: 'skyline-cook-chill', placeholder: 'SkyLine+Cook+Chill', image: '/products/kitchen/commercial-ovens/skyline-cook-chill.webp' },
        { model: 'GourmeXpress High Speed Ovens', desc: 'Commercial Ovens', slug: 'gourmexpress-highspeed', placeholder: 'GourmeXpress+High+Speed', image: '/products/kitchen/commercial-ovens/gourmexpress-highspeed.webp' },
        { model: 'MultiSlim Compact Ovens', desc: 'Commercial Ovens', slug: 'multislim-compact', placeholder: 'MultiSlim+Compact+Ovens', image: '/products/kitchen/commercial-ovens/multislim-compact.webp' },
        { model: 'Accessories', desc: 'Commercial Ovens', slug: 'accessories', placeholder: 'Oven+Accessories', image: '/products/kitchen/commercial-ovens/accessories.webp' },
      ]}
      basePath="/solutions/kitchen/commercial-ovens"
    />
  );
}
