import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function L05EcoSoftener() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'L05 – Laundry Eco Softener' },
      ]}
      category="Laundry Accessories"
      model="L05 – Laundry Eco Softener"
      subtitle="Fabric softener · Eco certified"
      image="/products/accessories/l05-eco-softener.webp"
      placeholder="L05 Eco Softener"
      keySpecs={[
        { label: 'Type', value: 'Fabric softener' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Biodegradable', value: 'Yes' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'L05 Laundry Eco Softener is a professional fabric softener that leaves linen feeling soft, fresh, and comfortable after every wash cycle.',
        'Its eco-certified formula is biodegradable and safe for all fabric types, making it ideal for hotels and healthcare facilities where guest and patient comfort matters.',
      ]}
      featureStrip={[
        { icon: '🌿', label: 'Certified', value: 'Eco certified' },
        { icon: '🛏️', label: 'Result', value: 'Soft, fresh linen' },
        { icon: '♻️', label: 'Formula', value: 'Biodegradable' },
        { icon: '✅', label: 'Safe For', value: 'All fabric types' },
      ]}
      specs={[
        { label: 'Product Code', value: 'L05' },
        { label: 'Type', value: 'Fabric softener' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Biodegradable', value: 'Yes' },
        { label: 'Compatibility', value: 'All fabric types' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Softens All Fabrics', desc: 'Leaves towels, sheets, and uniforms soft and comfortable, enhancing the guest or patient experience.' },
        { title: 'Fresh Fragrance', desc: 'Leaves linen with a clean, fresh scent that meets professional hospitality standards.' },
        { title: 'Eco Certified & Biodegradable', desc: 'Environmentally responsible formula suitable for facilities with sustainability requirements.' },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Accessories"
    />
  );
}
