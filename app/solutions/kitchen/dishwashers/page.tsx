import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function Dishwashers() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Kitchen Systems', href: '/solutions/kitchen' },
        { label: 'Dishwashers' },
      ]}
      heroImage="/hero-kitchen.jpg"
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
        { model: 'DW-Under', desc: 'Undercounter dishwasher', slug: 'dwUnder', placeholder: 'DW-Under' },
        { model: 'DW-Hood', desc: 'Hood-type dishwasher', slug: 'dwHood', placeholder: 'DW-Hood' },
        { model: 'DW-Rack', desc: 'Rack conveyor dishwasher', slug: 'dwRack', placeholder: 'DW-Rack' },
        { model: 'Electrolux WT4', desc: 'Pass-through dishwasher', slug: 'electroluxWT4', placeholder: 'Electrolux+WT4' },
        { model: 'Winterhalter UC-M', desc: 'Undercounter commercial', slug: 'winterhalterUCM', placeholder: 'Winterhalter+UC-M' },
        { model: 'Hobart AM16', desc: 'High-temp door-type dishwasher', slug: 'hobartAM16', placeholder: 'Hobart+AM16' },
      ]}
      basePath="/solutions/kitchen/dishwashers"
    />
  );
}
