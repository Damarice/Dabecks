import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function LaundryAccessories() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories' },
      ]}
      heroImage="/hero-laundry.jpg"
      category="Laundry Equipment"
      title="Laundry Accessories"
      heroSubtitle="Electrolux Professional eco-certified laundry detergents formulated for commercial washers — effective, sustainable, and fabric safe."
      introTitle="The right chemistry for every wash."
      introText="Our Electrolux Professional eco laundry detergent range is specifically formulated for use with commercial washers. From wash and powder to bleach, softener, booster, and degreaser — every product is eco-certified, biodegradable, and optimised for professional laundry performance."
      benefits={[
        { icon: '🌿', title: 'Eco Certified', desc: 'All detergents are biodegradable and eco-certified, reducing environmental impact without compromising performance.' },
        { icon: '✨', title: 'Professional Results', desc: 'Formulated specifically for commercial washers to deliver consistent, high-quality wash results every cycle.' },
        { icon: '💧', title: 'Efficient Dosing', desc: 'Concentrated formulas reduce the amount needed per cycle, lowering chemical costs and consumption.' },
      ]}
      products={[
        { model: 'L02 – Laundry Eco Wash', desc: 'Liquid laundry detergent', slug: 'l02-eco-wash', placeholder: 'L02 Eco Wash', image: '/products/accessories/l02-eco-wash.webp' },
        { model: 'L01 – Laundry Eco Powder', desc: 'Eco laundry powder', slug: 'l01-eco-powder', placeholder: 'L01 Eco Powder', image: '/products/accessories/l01-eco-powder.webp' },
        { model: 'L00 – Laundry Eco Degreaser', desc: 'Heavy-duty eco degreaser', slug: 'l00-eco-degreaser', placeholder: 'L00 Eco Degreaser', image: '/products/accessories/l00-eco-degreaser.webp' },
        { model: 'L05 – Laundry Eco Softener', desc: 'Fabric softener', slug: 'l05-eco-softener', placeholder: 'L05 Eco Softener', image: '/products/accessories/l05-eco-softener.webp' },
        { model: 'L04 – Laundry Eco Bleach', desc: 'Eco-certified bleach', slug: 'l04-eco-bleach', placeholder: 'L04 Eco Bleach', image: '/products/accessories/l04-eco-bleach.webp' },
        { model: 'L03 – Laundry Eco Booster', desc: 'Wash performance booster', slug: 'l03-eco-booster', placeholder: 'L03 Eco Booster', image: '/products/accessories/l03-eco-booster.webp' },
      ]}
      basePath="/solutions/laundry/accessories"
    />
  );
}
