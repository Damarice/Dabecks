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
        { model: 'Convect-6', desc: 'Convection oven · 6 trays', slug: 'convect6', placeholder: 'Convect-6' },
        { model: 'Combi-10', desc: 'Combi oven · 10 trays', slug: 'combi10', placeholder: 'Combi-10' },
        { model: 'Deck-3', desc: 'Deck oven · 3 decks', slug: 'deck3', placeholder: 'Deck-3' },
        { model: 'Rational iCombi Pro', desc: 'Combi oven · 10 trays', slug: 'rationalICombi', placeholder: 'Rational+iCombi' },
        { model: 'Unox CHEFTOP', desc: 'Convection oven · 10 trays', slug: 'unoxCHEFTOP', placeholder: 'Unox+CHEFTOP' },
        { model: 'Hobart HEC', desc: 'Heavy-duty convection oven', slug: 'hobartHEC', placeholder: 'Hobart+HEC' },
      ]}
      basePath="/solutions/kitchen/commercial-ovens"
    />
  );
}
