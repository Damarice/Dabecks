import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function L00EcoDegreaser() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'L00 – Laundry Eco Degreaser' },
      ]}
      category="Laundry Accessories"
      model="L00 – Laundry Eco Degreaser"
      subtitle="Heavy-duty eco degreaser · Pre-treatment"
      image="/products/accessories/l00-eco-degreaser.webp"
      placeholder="L00 Eco Degreaser"
      keySpecs={[
        { label: 'Type', value: 'Degreaser / Pre-treatment' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Use', value: 'Heavy grease & oil stains' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'L00 Laundry Eco Degreaser is a powerful eco-certified degreasing detergent designed for pre-treatment and washing of heavily grease-soiled linen and workwear.',
        'Ideal for industrial laundries, kitchen uniforms, and facilities handling heavily soiled items that standard detergents cannot fully clean.',
      ]}
      featureStrip={[
        { icon: '🌿', label: 'Certified', value: 'Eco certified' },
        { icon: '💪', label: 'Action', value: 'Heavy-duty degreasing' },
        { icon: '🍳', label: 'Use Case', value: 'Kitchen & workwear' },
        { icon: '♻️', label: 'Formula', value: 'Biodegradable' },
      ]}
      specs={[
        { label: 'Product Code', value: 'L00' },
        { label: 'Type', value: 'Degreaser / Pre-treatment' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Application', value: 'Grease, oil, heavy soiling' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Powerful Degreasing Action', desc: 'Specially formulated to cut through heavy grease, oil, and cooking residues on uniforms and workwear.' },
        { title: 'Eco Certified', desc: 'Effective heavy-duty performance without compromising eco-certification standards.' },
        { title: 'Pre-Treatment & Wash', desc: 'Can be used as a pre-treatment spot application or added directly to the wash cycle for maximum effect.' },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Accessories"
    />
  );
}
