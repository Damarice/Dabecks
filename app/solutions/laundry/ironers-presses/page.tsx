import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function IronersPresses() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses' },
      ]}
      heroImage="/hero-laundry.jpg"
      category="Laundry Equipment"
      title="Ironers & Presses"
      heroSubtitle="Professional flatwork ironers and press equipment for hotels, hospitals, and industrial laundries — delivering perfectly finished linen every time."
      introTitle="Perfect finish. Every time."
      introText="Our range of flatwork ironers and presses delivers crisp, consistent results across all linen types — from bedsheets and tablecloths to uniforms and towels. Built for high-throughput environments, each machine combines speed, precision, and durability."
      benefits={[
        { icon: '✨', title: 'Perfect Finish', desc: 'Heated roller technology delivers hotel-quality flatwork results consistently across all linen types.' },
        { icon: '⚡', title: 'High Throughput', desc: 'Process large volumes of flatwork quickly, reducing labour time and operational costs.' },
        { icon: '🛡️', title: 'Fabric Safe', desc: 'Adjustable temperature and pressure settings protect even the most delicate fabrics.' },
      ]}
      products={[
        { model: 'RI6-6', desc: 'Flatwork ironer · 600 mm roller', slug: 'ri66', placeholder: 'RI6-6' },
        { model: 'RI6-8', desc: 'Flatwork ironer · 800 mm roller', slug: 'ri68', placeholder: 'RI6-8' },
        { model: 'RI6-10', desc: 'Flatwork ironer · 1000 mm roller', slug: 'ri610', placeholder: 'RI6-10' },
        { model: 'Primus IB-15', desc: 'Industrial flatwork ironer · 1500 mm', slug: 'primusIB15', placeholder: 'Primus+IB-15' },
        { model: 'UniMac UCR080', desc: 'Chest press ironer · 800 mm', slug: 'unimacUCR080', placeholder: 'UniMac+UCR080' },
        { model: 'Alliance FI165', desc: 'Double-roll ironer · 1650 mm', slug: 'allianceFI165', placeholder: 'Alliance+FI165' },
      ]}
      basePath="/solutions/laundry/ironers-presses"
    />
  );
}
