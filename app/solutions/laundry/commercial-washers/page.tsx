import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function CommercialWashers() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers' },
      ]}
      heroImage="/hero-laundry.jpg"
      category="Laundry Equipment"
      title="Commercial Washers"
      heroSubtitle="High-productivity front-load washers built for hotels, hospitals, and commercial laundries — safe, fast, and cost-controlled."
      introTitle="Performance built for commercial laundry"
      introText="Our commercial washer range combines cutting-edge technology with robust construction to deliver outstanding results across hotels, hospitals, guesthouses, and industrial laundry facilities. Every model is selected for its energy efficiency, reliability, and low cost of ownership."
      benefits={[
        {
          icon: '⚡',
          title: 'Energy Savings',
          desc: 'Reduce operational expenditure by up to 40% without compromising productivity. Built-in technologies optimise water, energy, and detergent use automatically.',
        },
        {
          icon: '⚙️',
          title: 'Intuitive Operation',
          desc: 'Simple, programmable controls designed for effortless daily use. Operators require minimal training, reducing errors and improving throughput.',
        },
        {
          icon: '🔒',
          title: 'Long-Term Reliability',
          desc: 'Every machine is built from premium materials for years of continuous commercial use, backed by our full service and maintenance support.',
        },
      ]}
      products={[
        {
          model: 'WB6-7',
          desc: 'Front-load washer · 7 kg',
          slug: 'wb67',
          placeholder: 'WB6-7',
          image: '/products/washers/wb67.jpg',
        },
        {
          model: 'WB6-8',
          desc: 'Front-load washer · 8 kg',
          slug: 'wb68',
          placeholder: 'WB6-8',
          image: '/products/washers/wb68.jpg',
        },
        {
          model: 'WB6-6',
          desc: 'Front-load washer · 6 kg',
          slug: 'wb66',
          placeholder: 'WB6-6',
          image: '/products/washers/wb66.jpg',
        },
        {
          model: 'Alliance L18',
          desc: 'Commercial washer · 18 kg',
          slug: 'alliancell18',
          placeholder: 'Alliance L18',
          image: '/products/washers/alliance-l18.jpg',
        },
        {
          model: 'UniMac UC60',
          desc: 'Universal washer · 60 lbs / 27 kg',
          slug: 'unimacuc60',
          placeholder: 'UniMac UC60',
          image: '/products/washers/unimac-uc60.jpg',
        },
        {
          model: 'Primus FX55',
          desc: 'Industrial washer · 55 lbs / 25 kg',
          slug: 'primusfx55',
          placeholder: 'Primus FX55',
          image: '/products/washers/primus-fx55.jpg',
        },
      ]}
      basePath="/solutions/laundry/commercial-washers"
    />
  );
}
