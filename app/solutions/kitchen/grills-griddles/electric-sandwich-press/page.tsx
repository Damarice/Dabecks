import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function ElectricSandwichPress() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: '14 Inch Electric Sandwich Press with Adjustable Plate' }]}
      category="Grills & Griddles" model="14 Inch Electric Sandwich Press with Adjustable Plate" subtitle="COD 603941"
      image="/products/kitchen/grills-griddles/electric-sandwich-press.webp" placeholder="Electric+Sandwich+Press"
      keySpecs={[{ label: 'Size', value: '14 inch' }, { label: 'Power', value: 'Electric' }, { label: 'Feature', value: 'Adjustable plate' }]}
      description={['The 14 Inch Electric Sandwich Press with Adjustable Plate is a professional countertop unit designed for high-volume sandwich and panini production. Its adjustable top plate accommodates different bread and food thicknesses for consistent pressing results.', 'Ideal for hotel breakfast stations, cafés, and quick-service kitchens needing fast, consistent toasted sandwich output throughout service.']}
      featureStrip={[{ icon: '⚡', label: 'Power', value: 'Electric' }, { icon: '📐', label: 'Size', value: '14 inch' }, { icon: '🔧', label: 'Plate', value: 'Adjustable' }, { icon: '🥪', label: 'Use', value: 'Sandwiches & panini' }]}
      specs={[{ label: 'Product Code', value: '603941' }, { label: 'Size', value: '14 inch' }, { label: 'Power', value: 'Electric' }, { label: 'Plate', value: 'Adjustable top plate' }, { label: 'Type', value: 'Sandwich press' }]}
      features={[{ title: 'Adjustable Plate', desc: 'Top plate adjusts to different thicknesses for various breads and fillings.' }, { title: 'Electric Heating', desc: 'Fast electric heating for quick warm-up and consistent pressing temperature.' }, { title: '14-Inch Size', desc: 'Wide cooking surface handles multiple sandwiches simultaneously.' }, { title: 'Consistent Results', desc: 'Even heat distribution ensures uniform toasting across every sandwich.' }, { title: 'Quick Service Ready', desc: 'Designed for high-volume breakfast stations, cafés, and quick-service kitchens.' }, { title: 'Professional Grade', desc: 'Built for continuous commercial kitchen use.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
