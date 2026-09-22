import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function Dishwashers() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Kitchen Systems', href: '/solutions/kitchen' },
        { label: 'Dishwashers' },
      ]}
      heroImage="/kitchen-categories/dishwashers.webp"
      category="Kitchen Systems"
      title="Dishwashers"
      heroSubtitle="Industrial dishwashers for fast, hygienic cleaning — from undercounter units to high-volume rack conveyors for large-scale operations."
      introTitle="Clean. Fast. Hygienic."
      introText="Our commercial dishwasher range handles everything from small café operations to large hotel banqueting. Every machine delivers hygienically clean results in minimal time, with low water and chemical consumption. NSF and WRAS certified."
      benefits={[
        { icon: '🧼', title: 'Hygienic Results', desc: 'High-temperature sanitising cycles meet international food safety and hygiene standards.' },
        { icon: '💧', title: 'Low Water Use', desc: 'Efficient wash systems use less than 2 litres per rack, reducing utility costs significantly.' },
        { icon: '⚡', title: 'Fast Cycles', desc: 'Cycle times from 60 seconds mean continuous throughput for busy operations.' },
      ]}
      products={[
        { model: 'NeoBlue Glasswashers', desc: 'Dishwashing', slug: 'neoblue-glasswashers', placeholder: 'NeoBlue+Glasswashers', image: '/products/kitchen/dishwashers/neoblue-glasswashers.webp' },
        { model: 'NeoBlue Touch Undercounter', desc: 'Dishwashing', slug: 'neoblue-touch-undercounter', placeholder: 'NeoBlue+Touch+Undercounter', image: '/products/kitchen/dishwashers/neoblue-touch-undercounter.webp' },
        { model: 'green&clean Glasswashers', desc: 'Dishwashing', slug: 'greenclean-glasswashers', placeholder: 'green+clean+Glasswashers', image: '/products/kitchen/dishwashers/greenclean-glasswashers.webp' },
        { model: 'green&clean Undercounter', desc: 'Dishwashing', slug: 'greenclean-undercounter', placeholder: 'green+clean+Undercounter', image: '/products/kitchen/dishwashers/greenclean-undercounter.webp' },
        { model: 'green&clean Hood Type', desc: 'Dishwashing', slug: 'greenclean-hood-type', placeholder: 'green+clean+Hood+Type', image: '/products/kitchen/dishwashers/greenclean-hood-type.webp' },
        { model: 'HeroDry Free-standing blower', desc: 'Dishwashing', slug: 'herodry-freestanding-blower', placeholder: 'HeroDry+Freestanding+Blower', image: '/products/kitchen/dishwashers/herodry-freestanding-blower.webp' },
      ]}
      basePath="/solutions/kitchen/dishwashers"
    />
  );
}
