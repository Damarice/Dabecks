import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function IC64819FLF() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'IC64819FLF' },
      ]}
      category="Electrolux Professional"
      model="IC64819FLF"
      subtitle="Cylinder ironer · Ø480mm · Feeding & length folding"
      image="/products/ironers/ic64819flf.jpg"
      placeholder="IC64819FLF"
      keySpecs={[
        { label: 'Cylinder', value: 'Ø 480 mm' },
        { label: 'Delivery', value: 'Front delivery' },
        { label: 'Automation', value: 'Feeding & length folding' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional IC64819FLF is a fully automated cylinder ironer combining automatic feeding and length folding in a single machine.',
        'This high-productivity unit minimises operator involvement — linen is automatically fed, ironed, and length-folded in one continuous process, ideal for large hotels and healthcare facilities.',
      ]}
      featureStrip={[
        { icon: '🤖', label: 'Feeding', value: 'Automatic' },
        { icon: '📐', label: 'Folding', value: 'Length folding' },
        { icon: '⭕', label: 'Cylinder', value: 'Ø 480 mm' },
        { icon: '⏱️', label: 'Output', value: 'Maximum throughput' },
      ]}
      specs={[
        { label: 'Cylinder Diameter', value: 'Ø 480 mm' },
        { label: 'Delivery', value: 'Front delivery' },
        { label: 'Automation', value: 'Automatic feeding + length folding' },
        { label: 'Heating Options', value: 'Electric, Gas, Steam' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Automatic Feeding', desc: 'Linen is automatically spread and fed into the ironer, eliminating the need for manual feeding operators.' },
        { title: 'Integrated Length Folding', desc: 'Finished linen is automatically folded along its length, ready for storage or distribution.' },
        { title: 'Maximum Throughput', desc: 'Full automation from feed to fold dramatically increases the volume processed per operator hour.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers & Presses"
    />
  );
}
