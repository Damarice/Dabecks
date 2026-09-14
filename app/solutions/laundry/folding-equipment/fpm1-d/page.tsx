import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function FPM1D() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'FPM1-D' },
      ]}
      category="Folding Equipment"
      model="FPM1-D"
      subtitle="Dry work press · Manually operated"
      image="/products/folding-equipment/fpm1-d.jpg"
      placeholder="FPM1-D"
      keySpecs={[
        { label: 'Type', value: 'Dry work press' },
        { label: 'Operation', value: 'Manual' },
        { label: 'Use', value: 'Dry garments, uniforms' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional FPM1-D is a manually operated dry work press designed for finishing dry garments without steam or moisture.',
        'Ideal for uniforms, jackets, and structured garments that require precise pressing with heat only — no water or steam connection required.',
      ]}
      featureStrip={[
        { icon: '👕', label: 'Type', value: 'Dry work press' },
        { icon: '🖐️', label: 'Operation', value: 'Manual' },
        { icon: '🔌', label: 'Setup', value: 'No water connection needed' },
        { icon: '✨', label: 'Finish', value: 'Heat press quality' },
      ]}
      specs={[
        { label: 'Type', value: 'Dry work press' },
        { label: 'Operation', value: 'Manually operated' },
        { label: 'Steam', value: 'Not required' },
        { label: 'Application', value: 'Dry garments, uniforms, jackets' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Dry Operation', desc: 'No steam or water connection required — ideal for facilities where plumbing connections are limited.' },
        { title: 'Manual Control', desc: 'Operator-controlled pressing gives flexibility for different garment types and finishing requirements.' },
        { title: 'Compact & Versatile', desc: 'Suitable for a wide range of dry garments including uniforms, jackets, and structured clothing.' },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
