import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function FPA1WC() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'FPA1-WC' },
      ]}
      category="Folding Equipment"
      model="FPA1-WC"
      subtitle="Laundry press · Air operated"
      image="/products/folding-equipment/fpa1-wc.jpg"
      placeholder="FPA1-WC"
      keySpecs={[
        { label: 'Type', value: 'Laundry press' },
        { label: 'Operation', value: 'Air operated' },
        { label: 'Use', value: 'Shirts, garments, uniforms' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional FPA1-WC is an air-operated laundry press designed for professional finishing of shirts, garments, and uniforms in hotels, hospitals, and commercial laundries.',
        'Air operation delivers consistent, controlled pressing pressure — reducing operator effort and improving finish quality across high daily volumes.',
      ]}
      featureStrip={[
        { icon: '💨', label: 'Operation', value: 'Air operated' },
        { icon: '✨', label: 'Finish', value: 'Professional quality' },
        { icon: '⚡', label: 'Speed', value: 'High throughput' },
        { icon: '🛡️', label: 'Fabric Safety', value: 'Adjustable pressure' },
      ]}
      specs={[
        { label: 'Type', value: 'Laundry press' },
        { label: 'Operation', value: 'Air operated' },
        { label: 'Application', value: 'Shirts, garments, uniforms' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Air-Operated Pressing', desc: 'Pneumatic operation delivers consistent, controlled pressure for professional finishing results with minimal operator effort.' },
        { title: 'Versatile Application', desc: 'Suitable for shirts, jackets, trousers, uniforms, and a wide range of garment types.' },
        { title: 'Production Speed', desc: 'Built for high daily volumes in commercial laundry environments, maintaining consistent quality throughout long shifts.' },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
