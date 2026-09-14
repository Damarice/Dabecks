import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function FoldingEquipment() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment' },
      ]}
      heroImage="/hero-laundry.jpg"
      category="Laundry Equipment"
      title="Folding Equipment"
      heroSubtitle="Professional laundry presses, finishing cabinets, and ironing tables for hotels, hospitals, and commercial laundries — delivering perfectly finished garments every time."
      introTitle="The perfect finish for every garment."
      introText="Our finishing equipment range covers everything from air-operated laundry presses and dry work presses to vacuum ironing tables and rotary finishing cabinets. Each product is built for professional laundry operations demanding consistent, high-quality results."
      benefits={[
        { icon: '✨', title: 'Professional Finish', desc: 'Air, steam, and vacuum technology delivers crisp, wrinkle-free results on all garment types.' },
        { icon: '⚡', title: 'Fast Throughput', desc: 'Designed for production speed — process more garments per hour with less operator effort.' },
        { icon: '🛡️', title: 'Fabric Safe', desc: 'Adjustable pressure, temperature, and steam settings protect all fabric types.' },
      ]}
      products={[
        { model: 'FPA1-WC', desc: 'Electrolux Professional · Laundry press · Air operated', slug: 'fpa1-wc', placeholder: 'FPA1-WC', image: '/products/folding-equipment/fpa1-wc.jpg' },
        { model: 'FPM1-D', desc: 'Electrolux Professional · Dry work press · Manually operated', slug: 'fpm1-d', placeholder: 'FPM1-D', image: '/products/folding-equipment/fpm1-d.jpg' },
        { model: 'FPM-WC', desc: 'Electrolux Professional · Laundry press · Manually operated', slug: 'fpm-wc', placeholder: 'FPM-WC', image: '/products/folding-equipment/fpm-wc.jpg' },
        { model: 'FRC1', desc: 'Electrolux Professional · Rotary finishing cabinet', slug: 'frc1', placeholder: 'FRC1', image: '/products/folding-equipment/frc1.jpg' },
        { model: 'FIT5A', desc: 'Electrolux Professional · Rectangular vacuum ironing table', slug: 'fit5a', placeholder: 'FIT5A', image: '/products/folding-equipment/fit5a.jpg' },
        { model: 'FIT6A', desc: 'Electrolux Professional · Vacuum/blowing ironing table', slug: 'fit6a', placeholder: 'FIT6A', image: '/products/folding-equipment/fit6a.jpg' },
      ]}
      basePath="/solutions/laundry/folding-equipment"
    />
  );
}
