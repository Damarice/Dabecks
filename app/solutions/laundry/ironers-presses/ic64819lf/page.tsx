import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function IC64819LF() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'IC64819LF' },
      ]}
      category="Electrolux Professional"
      model="IC64819LF"
      subtitle="Cylinder ironer · Ø480mm · Length folding"
      image="/products/ironers/ic64819lf.jpg"
      placeholder="IC64819LF"
      keySpecs={[
        { label: 'Cylinder', value: 'Ø 480 mm' },
        { label: 'Delivery', value: 'Front delivery' },
        { label: 'Folding', value: 'Length folding' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional IC64819LF features a Ø480mm cylinder with front delivery and integrated length folding, reducing manual handling after ironing.',
        'The length folding function automatically folds finished linen along its length, saving time and improving consistency in hotels, hospitals, and large laundry operations.',
      ]}
      featureStrip={[
        { icon: '⭕', label: 'Cylinder', value: 'Ø 480 mm' },
        { icon: '📐', label: 'Folding', value: 'Length folding' },
        { icon: '🔄', label: 'Delivery', value: 'Front' },
        { icon: '🔒', label: 'Belts', value: 'Nomex™ standard' },
      ]}
      specs={[
        { label: 'Cylinder Diameter', value: 'Ø 480 mm' },
        { label: 'Delivery', value: 'Front delivery' },
        { label: 'Folding', value: 'Integrated length folding' },
        { label: 'Heating Options', value: 'Electric, Gas, Steam' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Integrated Length Folding', desc: 'Automatically folds linen along its length after ironing, reducing manual handling and saving labour time.' },
        { title: 'Front Delivery', desc: 'Linen is delivered to the front of the machine, ideal for compact laundry rooms.' },
        { title: 'High Productivity', desc: 'Combines ironing and folding in one pass, significantly increasing throughput.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers & Presses"
    />
  );
}
