import CategoryLandingPage from '@/app/components/CategoryLandingPage';

export default function KitchenPage() {
  return (
    <CategoryLandingPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems' }]}
      heroImage="/hero-kitchen.jpg"
      heroTitle="Kitchen Systems"
      heroSubtitle="Professional commercial kitchen equipment for restaurants, hotels, hospitals, and institutional food service operations across East Africa."
      introTitle="Built for professional kitchens"
      introText="Our commercial kitchen range brings together the best global brands — from high-volume combi ovens and fryers to industrial dishwashers and cooking ranges. Every product is selected for reliability, energy efficiency, and performance under pressure."
      featured={[
        { title: 'Commercial Ovens', desc: 'Convection, combi, and deck ovens for professional baking and cooking at volume.', image: '/kitchen-categories/commercial-ovens.webp', href: '/solutions/kitchen/commercial-ovens' },
        { title: 'Dishwashers', desc: 'Undercounter to rack conveyor dishwashers for hygienic, fast cleaning in commercial kitchens.', image: '/kitchen-categories/dishwashers.webp', href: '/solutions/kitchen/dishwashers' },
        { title: 'Cooking Ranges', desc: 'Professional gas and electric ranges built for the demands of high-volume kitchen service.', image: '/kitchen-categories/cooking-ranges.jpg', href: '/solutions/kitchen/cooking-ranges' },
      ]}
      categories={[
        { label: 'Commercial Ovens', href: '/solutions/kitchen/commercial-ovens', image: '/kitchen-categories/commercial-ovens.webp' },
        { label: 'Fryers', href: '/solutions/kitchen/fryers', image: '/kitchen-categories/fryers.webp' },
        { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers', image: '/kitchen-categories/dishwashers.webp' },
        { label: 'Steamers', href: '/solutions/kitchen/steamers', image: '/kitchen-categories/steamers.webp' },
        { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges', image: '/kitchen-categories/cooking-ranges.jpg' },
        { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles', image: '/kitchen-categories/grills-griddles.jpg' },
      ]}
      standards={[
        { icon: '🌡️', title: 'Precision Cooking', desc: 'Every product delivers precise temperature control for consistent results across all menu items.' },
        { icon: '🧼', title: 'Hygiene First', desc: 'NSF-certified equipment meeting international food safety and sanitation standards.' },
        { icon: '⚡', title: 'Energy Efficient', desc: 'ENERGY STAR and CE certified equipment reduces energy consumption and operating costs.' },
        { icon: '🛠️', title: 'Full Service Support', desc: 'Installation, training, maintenance, and repair coverage across East Africa.' },
      ]}
      customers={[
        { name: 'Nairobi Serena Hotel', type: 'Hospitality', quote: 'Dabecks equipped our entire kitchen with professional-grade equipment. The installation was seamless and the after-sales support has been outstanding.', image: '/about-team.jpg' },
        { name: 'Aga Khan Hospital', type: 'Healthcare', quote: 'Our high-volume patient catering kitchen runs on Dabecks equipment. NSF-certified and reliable — exactly what a hospital environment demands.', image: '/about-journey.jpg' },
        { name: 'Kenya School of Government', type: 'Institution', quote: 'The full kitchen refit was delivered on time and within budget. Staff training was included and the equipment has been excellent.', image: '/hero-clients.jpg' },
      ]}
      news={[
        { date: 'April 2026', title: 'Rational iCombi Pro Now Available in East Africa', desc: 'Dabecks is now the authorised distributor for Rational combi ovens in East Africa — the world\'s leading combi oven brand.', image: '/hero-kitchen.jpg' },
        { date: 'February 2026', title: 'Commercial Kitchen Fit-Out: 5-Star Hotel Nairobi', desc: 'A complete kitchen refit for a 5-star Nairobi hotel — from cooking equipment to dishwashing and ventilation.', image: '/hero-clients.jpg' },
        { date: 'December 2025', title: 'Energy Saving in Commercial Kitchens: A Guide', desc: 'Our team shares practical tips for reducing energy costs in commercial kitchens without compromising performance.', image: '/about-journey.jpg' },
      ]}
    />
  );
}
