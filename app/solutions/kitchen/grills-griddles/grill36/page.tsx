import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Grill36() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: 'Grill-36' }]}
      category="Grills & Griddles" model="Grill-36" subtitle="36-inch commercial gas char-grill"
      image="/products/grills/grill36.jpg" placeholder="Grill-36"
      keySpecs={[{ label: 'Width', value: '36 inch / 914 mm' }, { label: 'BTU', value: '135,000 total' }, { label: 'Grates', value: 'Cast iron' }]}
      description={['The Grill-36 is a full-size 36-inch commercial char-grill for high-volume protein cooking. With 135,000 BTU and a wide cooking surface, it handles the most demanding grill stations in large hotels and busy restaurants.', 'Its wider surface allows simultaneous cooking of multiple cuts and sizes, maximising throughput during peak service.']}
      featureStrip={[{ icon: '🔥', label: 'Total BTU', value: '135,000' }, { icon: '📏', label: 'Width', value: '36 inch' }, { icon: '🥩', label: 'Capacity', value: 'High volume' }, { icon: '🌡️', label: 'Heat', value: 'Radiant even heat' }]}
      specs={[{ label: 'Model', value: 'Grill-36' }, { label: 'Cooking Width', value: '914 mm (36 inch)' }, { label: 'Total BTU', value: '135,000' }, { label: 'Burners', value: '4' }, { label: 'Grate Material', value: 'Cast iron' }, { label: 'Heat Type', value: 'Ceramic radiant' }, { label: 'Width × Height × Depth', value: '914 × 950 × 700 mm' }, { label: 'Net Weight', value: '90 kg' }, { label: 'Gas Connection', value: '3/4 inch NPT' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: 'Wide Cooking Surface', desc: '36 inch width handles large batches simultaneously.' }, { title: 'High Output', desc: '135,000 BTU for fast recovery during busy service.' }, { title: 'Ceramic Radiants', desc: 'Even heat distribution eliminates hot spots.' }, { title: 'Cast-Iron Grates', desc: 'Premium grates for authentic char marks and even cooking.' }, { title: 'Independent Zones', desc: '4 independent burners allow different temperature zones.' }, { title: 'Easy Maintenance', desc: 'Removable components for fast, thorough daily cleaning.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
