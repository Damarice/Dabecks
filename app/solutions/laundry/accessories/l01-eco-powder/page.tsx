import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function L01EcoPowder() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'L01 – Laundry Eco Powder' },
      ]}
      category="Laundry Accessories"
      model="L01 – Laundry Eco Powder"
      subtitle="Eco laundry powder · Professional grade"
      image="/products/accessories/l01-eco-powder.webp"
      placeholder="L01 Eco Powder"
      keySpecs={[
        { label: 'Type', value: 'Powder detergent' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Biodegradable', value: 'Yes' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'L01 Laundry Eco Powder is a professional-grade eco-certified powder detergent designed for commercial laundry operations.',
        'Its concentrated powder formula delivers powerful cleaning performance on heavily soiled linen while remaining biodegradable and environmentally responsible.',
      ]}
      featureStrip={[
        { icon: '🌿', label: 'Certified', value: 'Eco certified' },
        { icon: '♻️', label: 'Formula', value: 'Biodegradable' },
        { icon: '💪', label: 'Cleaning', value: 'Heavily soiled linen' },
        { icon: '📦', label: 'Type', value: 'Powder' },
      ]}
      specs={[
        { label: 'Product Code', value: 'L01' },
        { label: 'Type', value: 'Powder detergent' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Biodegradable', value: 'Yes' },
        { label: 'Compatibility', value: 'All commercial washers' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Concentrated Powder Formula', desc: 'High-concentration formula means less product per cycle, reducing costs and packaging waste.' },
        { title: 'Eco Certified', desc: 'Independently verified eco certification for operations with sustainability commitments.' },
        { title: 'Effective on Heavy Soiling', desc: 'Powerful enzymatic action removes tough stains and heavy soiling from hotel and hospital linen.' },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Accessories"
    />
  );
}
