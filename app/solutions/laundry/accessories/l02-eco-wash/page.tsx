import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function L02EcoWash() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'L02 – Laundry Eco Wash' },
      ]}
      category="Laundry Accessories"
      model="L02 – Laundry Eco Wash"
      subtitle="Liquid laundry detergent · Eco certified"
      image="/products/accessories/l02-eco-wash.webp"
      placeholder="L02 Eco Wash"
      keySpecs={[
        { label: 'Type', value: 'Liquid detergent' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Biodegradable', value: 'Yes' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'L02 Laundry Eco Wash is a professional liquid detergent formulated for use in commercial washers across hotels, hospitals, and laundry facilities.',
        'Its eco-certified, biodegradable formula delivers excellent washing performance while minimising environmental impact — ideal for operations committed to sustainable practices.',
      ]}
      featureStrip={[
        { icon: '🌿', label: 'Certified', value: 'Eco certified' },
        { icon: '♻️', label: 'Formula', value: 'Biodegradable' },
        { icon: '✨', label: 'Performance', value: 'Professional grade' },
        { icon: '💧', label: 'Type', value: 'Liquid' },
      ]}
      specs={[
        { label: 'Product Code', value: 'L02' },
        { label: 'Type', value: 'Liquid laundry detergent' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Biodegradable', value: 'Yes' },
        { label: 'Compatibility', value: 'All commercial washers' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Eco Certified Formula', desc: 'Meets international eco-certification standards, making it suitable for facilities with sustainability requirements.' },
        { title: 'Biodegradable', desc: 'Environmentally responsible formula that breaks down naturally, reducing impact on water systems.' },
        { title: 'Commercial Washer Optimised', desc: 'Specifically formulated for use in Electrolux Professional and other commercial washers for best results.' },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Accessories"
    />
  );
}
