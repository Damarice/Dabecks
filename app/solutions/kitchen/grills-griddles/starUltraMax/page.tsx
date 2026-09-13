import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function StarUltraMax() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: 'Star Ultra-Max 624HA' }]}
      category="Grills & Griddles" model="Star Ultra-Max 624HA" subtitle="Heavy-duty commercial griddle · 24 inch"
      image="/products/grills/star-ultramax.jpg" placeholder="Star+Ultra-Max"
      keySpecs={[{ label: 'Width', value: '24 inch' }, { label: 'Plate', value: '3/4 inch steel' }, { label: 'BTU', value: '60,000' }]}
      description={['The Star Ultra-Max 624HA is a heavy-duty commercial griddle featuring a thick 3/4 inch polished steel cooking plate — one of the thickest in its class. This mass delivers exceptional heat retention and stability for demanding high-volume service.', 'Its robust construction and large grease management system make it ideal for busy hotel buffets, diners, and institutional kitchens.']}
      featureStrip={[{ icon: '🍳', label: 'Plate', value: '3/4 inch thick' }, { icon: '🔥', label: 'BTU', value: '60,000' }, { icon: '🏗️', label: 'Build', value: 'Heavy-duty' }, { icon: '♨️', label: 'Heat Retention', value: 'Exceptional mass' }]}
      specs={[{ label: 'Model', value: 'Star Ultra-Max 624HA' }, { label: 'Cooking Width', value: '610 mm (24 inch)' }, { label: 'Plate Thickness', value: '3/4 inch (19 mm)' }, { label: 'Total BTU', value: '60,000' }, { label: 'Burners', value: '2' }, { label: 'Plate Material', value: 'Polished steel' }, { label: 'Width × Height × Depth', value: '610 × 930 × 660 mm' }, { label: 'Net Weight', value: '72 kg' }, { label: 'Gas Type', value: 'Natural gas or LP' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: '3/4 Inch Plate', desc: 'Extra-thick cooking plate delivers superior heat retention and stability.' }, { title: 'High-Volume Output', desc: 'Thick plate maintains temperature under heavy loads for consistent cooking.' }, { title: 'Heavy-Duty Construction', desc: 'Built to withstand the most demanding commercial kitchen environments.' }, { title: 'Large Grease Drawer', desc: 'Extra-capacity grease collection system reduces cleaning frequency.' }, { title: 'Even Heat Distribution', desc: 'Wide burner design eliminates cold spots across the cooking surface.' }, { title: 'Easy to Clean', desc: 'Flat surface and accessible grease management simplify end-of-service cleaning.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
