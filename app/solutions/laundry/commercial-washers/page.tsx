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
          title: 'WH6-7',
          desc: 'Front-load washer · 7 kg',
          href: '/solutions/laundry/commercial-washers/wb67',
          placeholder: 'WH6-7',
          image: '/products/washers/wb67.jpg',
        },
        {
          title: 'WH6-8',
          desc: 'Front-load washer · 8 kg',
          href: '/solutions/laundry/commercial-washers/wb68',
          placeholder: 'WH6-8',
          image: '/products/washers/wb68.jpg',
        },
        {
          title: 'WH6-6',
          desc: 'Front-load washer · 6 kg',
          href: '/solutions/laundry/commercial-washers/wb66',
          placeholder: 'WH6-6',
          image: '/products/washers/wb66.jpg',
        },
        {
          title: 'WH6-6LAC',
          desc: 'Front-load washer · 6 kg',
          href: '/solutions/laundry/commercial-washers/wh66lac',
          placeholder: 'WH6-6LAC',
          image: '/products/washers/wh6-6lac.jpg',
        },
        {
          title: 'SC70',
          desc: 'UniMac · Professional washer · 6–8 kg',
          href: '/solutions/laundry/commercial-washers/sc70',
          placeholder: 'SC70',
          image: '/products/washers/sc70.png',
        },
        {
          title: 'Cabinet Hardmount',
          desc: 'Alliance Laundry · Cabinet hardmount washer-extractor',
          href: '/solutions/laundry/commercial-washers/cabinet-hardmount',
          placeholder: 'Cabinet Hardmount',
          image: '/products/washers/cabinet-hardmount.jpg',
        },
      ]}
      basePath="/solutions/laundry/commercial-washers"
    />
  );
}
