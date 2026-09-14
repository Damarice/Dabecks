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
        { model: 'IB5725', desc: 'Electrolux Professional · Flatwork ironer · Rear delivery', slug: 'ib5725', placeholder: 'IB5725', image: '/products/ironers/ib5725.jpg' },
        { model: 'IB5725-F', desc: 'Electrolux Professional · Flatwork ironer · Rear delivery with integrated feeder', slug: 'ib5725-f', placeholder: 'IB5725-F', image: '/products/ironers/ib5725-f.jpg' },
        { model: 'IC64819R', desc: 'Electrolux Professional · Cylinder ironer Ø480mm · Rear delivery', slug: 'ic64819r', placeholder: 'IC64819R', image: '/products/ironers/ic64819r.jpg' },
        { model: 'IC64819LF', desc: 'Electrolux Professional · Cylinder ironer Ø480mm · Length folding', slug: 'ic64819lf', placeholder: 'IC64819LF', image: '/products/ironers/ic64819lf.jpg' },
        { model: 'IC64819FLF', desc: 'Electrolux Professional · Cylinder ironer Ø480mm · Feeding & length folding', slug: 'ic64819flf', placeholder: 'IC64819FLF', image: '/products/ironers/ic64819flf.jpg' },
        { model: 'Line 6000 FFS', desc: 'Electrolux Professional · Cylinder ironer · Feeding, folding & stacking', slug: 'line6000-ffs', placeholder: 'Line 6000 FFS', image: '/products/ironers/ironer-ffs.jpg' },
      ]}
      basePath="/solutions/laundry/ironers-presses"
    />
  );
}
