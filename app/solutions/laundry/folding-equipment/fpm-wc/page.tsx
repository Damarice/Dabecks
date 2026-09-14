import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function FPMWC() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'FPM-WC' },
      ]}
      category="Electrolux Professional"
      model="FPM-WC"
      subtitle="Laundry press · Manually operated"
      image="/products/folding-equipment/fpm-wc.jpg"
      placeholder="FPM-WC"
      keySpecs={[
        { label: 'Type', value: 'Laundry press' },
        { label: 'Operation', value: 'Manual' },
        { label: 'Use', value: 'Wet/damp garments' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional FPM-WC is a manually operated laundry press for finishing wet and damp garments straight from the wash.',
        'Steam and heat work together to remove creases and deliver a crisp finish, making it ideal for shirts, uniforms, and garments requiring immediate presentation-ready finishing.',
      ]}
      featureStrip={[
        { icon: '🖐️', label: 'Operation', value: 'Manual' },
        { icon: '💧', label: 'Use', value: 'Wet/damp garments' },
        { icon: '♨️', label: 'Finishing', value: 'Steam & heat' },
        { icon: '✨', label: 'Result', value: 'Crease-free finish' },
      ]}
      specs={[
        { label: 'Type', value: 'Laundry press' },
        { label: 'Operation', value: 'Manually operated' },
        { label: 'Application', value: 'Wet and damp garments' },
        { label: 'Finishing', value: 'Steam and heat pressing' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Wet Garment Finishing', desc: 'Designed to press damp garments directly from washing, saving drying time and delivering a ready-to-wear finish.' },
        { title: 'Steam & Heat Pressing', desc: 'Combined steam and heat removes even stubborn creases for a crisp, professional finish.' },
        { title: 'Manual Flexibility', desc: 'Operator-controlled pressing allows adjustment for different fabric thicknesses and garment types.' },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
