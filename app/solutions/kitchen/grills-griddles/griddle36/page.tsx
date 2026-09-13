import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Griddle36() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: 'Griddle-36' }]}
      category="Grills & Griddles" model="Griddle-36" subtitle="36-inch commercial flat-top griddle"
      image="/products/grills/griddle36.jpg" placeholder="Griddle-36"
      keySpecs={[{ label: 'Width', value: '36 inch / 914 mm' }, { label: 'Plate', value: '25mm steel' }, { label: 'BTU', value: '90,000' }]}
      description={['The Griddle-36 is a high-output 36-inch flat-top griddle ideal for hotel buffets, high-volume restaurants, and institutional catering. Its wider surface handles large batches simultaneously.', 'Three independent temperature zones allow different products to cook at optimal temperatures simultaneously on the same surface.']}
      featureStrip={[{ icon: '🍳', label: 'Width', value: '36 inch' }, { icon: '🌡️', label: 'Zones', value: '3 independent' }, { icon: '🔥', label: 'BTU', value: '90,000' }, { icon: '📈', label: 'Volume', value: 'High throughput' }]}
      specs={[{ label: 'Model', value: 'Griddle-36' }, { label: 'Cooking Width', value: '914 mm (36 inch)' }, { label: 'Plate Thickness', value: '25 mm' }, { label: 'Total BTU', value: '90,000' }, { label: 'Temperature Zones', value: '3 independent' }, { label: 'Plate Material', value: 'Cold-rolled steel' }, { label: 'Width × Height × Depth', value: '914 × 950 × 650 mm' }, { label: 'Net Weight', value: '82 kg' }, { label: 'Gas Connection', value: '3/4 inch NPT' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: '3 Temperature Zones', desc: 'Independent zones allow simultaneous multi-product cooking.' }, { title: 'Wide Surface', desc: '36 inch width handles large-volume breakfast and buffet service.' }, { title: 'High Output', desc: '90,000 BTU for fast preheat and rapid recovery.' }, { title: '25mm Plate', desc: 'Thick steel plate delivers stable, even heat retention.' }, { title: 'Front Grease Management', desc: 'Angled surface channels grease into front collection drawer.' }, { title: 'Easy Cleaning', desc: 'Smooth flat surface and accessible grease drawer.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
