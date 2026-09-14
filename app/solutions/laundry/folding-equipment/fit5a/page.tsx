import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function FIT5A() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'FIT5A' },
      ]}
      category="Electrolux Professional"
      model="FIT5A"
      subtitle="Rectangular vacuum ironing table"
      image="/products/folding-equipment/fit5a.jpg"
      placeholder="FIT5A"
      keySpecs={[
        { label: 'Type', value: 'Vacuum ironing table' },
        { label: 'Surface', value: 'Rectangular' },
        { label: 'Function', value: 'Vacuum suction' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional FIT5A is a rectangular vacuum ironing table designed for professional garment finishing in hotels, hospitals, and commercial laundries.',
        'The vacuum suction holds garments flat and in place during ironing, significantly improving finish quality and reducing the effort required for each piece.',
      ]}
      featureStrip={[
        { icon: '🔲', label: 'Shape', value: 'Rectangular surface' },
        { icon: '💨', label: 'Function', value: 'Vacuum suction' },
        { icon: '✨', label: 'Finish', value: 'Professional quality' },
        { icon: '⚡', label: 'Speed', value: 'Faster ironing' },
      ]}
      specs={[
        { label: 'Type', value: 'Vacuum ironing table' },
        { label: 'Surface Shape', value: 'Rectangular' },
        { label: 'Function', value: 'Vacuum suction' },
        { label: 'Application', value: 'Shirts, uniforms, flat linen' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Vacuum Suction', desc: 'Holds garments firmly in position during ironing, reducing movement and improving finish consistency.' },
        { title: 'Rectangular Work Surface', desc: 'Large flat working area accommodates shirts, flat linen, and uniforms with ease.' },
        { title: 'Faster Finishing', desc: 'Vacuum assistance reduces the strokes needed per garment, increasing throughput per operator hour.' },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
