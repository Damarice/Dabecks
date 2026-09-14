import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function IC64819R() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'IC64819R' },
      ]}
      category="Electrolux Professional"
      model="IC64819R"
      subtitle="Cylinder ironer · Ø480mm · Rear delivery"
      image="/products/ironers/ic64819r.jpg"
      placeholder="IC64819R"
      keySpecs={[
        { label: 'Cylinder', value: 'Ø 480 mm' },
        { label: 'Delivery', value: 'Rear delivery' },
        { label: 'Automation', value: 'No automation' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional IC64819R is a cylinder-type flatwork ironer with a Ø480mm cylinder and rear delivery, built for high-throughput laundry operations.',
        'Designed for hotels and hospitals that require reliable, consistent flatwork finishing on sheets, pillowcases, and table linen at production volumes.',
      ]}
      featureStrip={[
        { icon: '⭕', label: 'Cylinder', value: 'Ø 480 mm' },
        { icon: '🔄', label: 'Delivery', value: 'Rear' },
        { icon: '⚡', label: 'Heating', value: 'Electric / Gas / Steam' },
        { icon: '🔒', label: 'Belts', value: 'Nomex™ standard' },
      ]}
      specs={[
        { label: 'Cylinder Diameter', value: 'Ø 480 mm' },
        { label: 'Delivery', value: 'Rear delivery' },
        { label: 'Heating Options', value: 'Electric, Gas, Steam' },
        { label: 'Belts', value: 'Nomex™ standard' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Ø480mm Cylinder', desc: 'Large cylinder diameter ensures even heat distribution and consistent ironing quality across all linen types.' },
        { title: 'Nomex™ Belts Standard', desc: 'Durable Nomex™ belts reduce maintenance intervals and protect linen from damage.' },
        { title: 'Rear Delivery', desc: 'Optimised for laundry room workflows where linen exits from the rear for folding and stacking.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers & Presses"
    />
  );
}
