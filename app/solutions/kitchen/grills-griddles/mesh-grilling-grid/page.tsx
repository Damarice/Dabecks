import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function MeshGrillingGrid() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: '12 Inch Mesh Grilling Grid' }]}
      category="Grills & Griddles" model="12 Inch Mesh Grilling Grid Compatible with Commercial Cooking" subtitle="COD 922713"
      image="/products/kitchen/grills-griddles/mesh-grilling-grid.webp" placeholder="Mesh+Grilling+Grid"
      keySpecs={[{ label: 'Size', value: '12 inch' }, { label: 'Type', value: 'Mesh grilling grid' }, { label: 'Use', value: 'Commercial cooking' }]}
      description={['The 12 Inch Mesh Grilling Grid is a professional cooking accessory compatible with commercial cooking equipment. Its mesh design allows fat and juices to drain away from food during grilling, producing healthier results with enhanced flavour.', 'Suitable for grilling vegetables, fish, small cuts of meat, and more — ideal for hotel restaurants, buffet stations, and à la carte kitchens.']}
      featureStrip={[{ icon: '🔥', label: 'Type', value: 'Mesh grid' }, { icon: '📐', label: 'Size', value: '12 inch' }, { icon: '🍗', label: 'Use', value: 'Grilling' }, { icon: '✅', label: 'Fit', value: 'Commercial compatible' }]}
      specs={[{ label: 'Product Code', value: '922713' }, { label: 'Size', value: '12 inch' }, { label: 'Type', value: 'Mesh grilling grid' }, { label: 'Compatibility', value: 'Commercial cooking equipment' }]}
      features={[{ title: 'Mesh Design', desc: 'Open mesh allows fat and juices to drain for healthier grilled results.' }, { title: 'Commercial Compatible', desc: 'Designed to work with professional commercial cooking equipment.' }, { title: 'Versatile Use', desc: 'Suitable for vegetables, fish, meat, and more.' }, { title: 'Even Heat Transfer', desc: 'Mesh structure promotes even heat distribution across food items.' }, { title: 'Easy Cleaning', desc: 'Mesh grid is straightforward to clean after service.' }, { title: 'Professional Grade', desc: 'Built for continuous use in commercial kitchen environments.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
