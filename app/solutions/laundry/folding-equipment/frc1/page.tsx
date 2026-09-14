import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function FRC1() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'FRC1' },
      ]}
      category="Folding Equipment"
      model="FRC1"
      subtitle="Rotary finishing cabinet"
      image="/products/folding-equipment/frc1.jpg"
      placeholder="FRC1"
      keySpecs={[
        { label: 'Type', value: 'Rotary finishing cabinet' },
        { label: 'Use', value: 'Shirts, jackets, uniforms' },
        { label: 'Method', value: 'Steam & hot air' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional FRC1 is a rotary finishing cabinet that uses steam and hot air to remove wrinkles and refresh garments without the need for manual pressing.',
        'Garments are hung on the rotating form and finished automatically — ideal for shirts, jackets, uniforms, and delicate items that cannot be pressed flat.',
      ]}
      featureStrip={[
        { icon: '🔄', label: 'Type', value: 'Rotary cabinet' },
        { icon: '♨️', label: 'Method', value: 'Steam & hot air' },
        { icon: '👔', label: 'Garments', value: 'Shirts, jackets, uniforms' },
        { icon: '✨', label: 'Result', value: 'Wrinkle-free finish' },
      ]}
      specs={[
        { label: 'Type', value: 'Rotary finishing cabinet' },
        { label: 'Finishing Method', value: 'Steam and hot air' },
        { label: 'Application', value: 'Shirts, jackets, uniforms, delicates' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Rotary Steam Finishing', desc: 'Garments rotate on a form while steam and hot air remove wrinkles — no flat pressing required.' },
        { title: 'Shape-Preserving', desc: 'The 3D form maintains garment shape during finishing, delivering a natural, wear-ready look.' },
        { title: 'Delicate Fabric Safe', desc: 'Gentle steam finishing protects delicate fabrics and structured garments that cannot withstand flat pressing.' },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
