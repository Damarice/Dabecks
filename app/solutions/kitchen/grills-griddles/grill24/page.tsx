import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Grill24() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: 'Grill-24' }]}
      category="Grills & Griddles" model="Grill-24" subtitle="24-inch commercial gas char-grill"
      image="/products/grills/grill24.jpg" placeholder="Grill-24"
      keySpecs={[{ label: 'Width', value: '24 inch / 610 mm' }, { label: 'BTU', value: '90,000 total' }, { label: 'Grates', value: 'Cast iron' }]}
      description={['The Grill-24 is a professional 24-inch gas char-grill designed for commercial kitchens needing high-quality grilled results. Radiants distribute heat evenly across the cast-iron grates for perfect char marks and consistent cooking.', 'Ideal for steakhouses, hotel restaurants, and catering operations producing grilled proteins and vegetables at volume.']}
      featureStrip={[{ icon: '🔥', label: 'Total BTU', value: '90,000' }, { icon: '🥩', label: 'Grates', value: 'Cast iron' }, { icon: '🌡️', label: 'Heat', value: 'Radiant even heat' }, { icon: '📏', label: 'Width', value: '24 inch' }]}
      specs={[{ label: 'Model', value: 'Grill-24' }, { label: 'Cooking Width', value: '610 mm (24 inch)' }, { label: 'Total BTU', value: '90,000' }, { label: 'Burners', value: '3' }, { label: 'Grate Material', value: 'Cast iron' }, { label: 'Heat Type', value: 'Ceramic radiant' }, { label: 'Width × Height × Depth', value: '610 × 950 × 700 mm' }, { label: 'Net Weight', value: '65 kg' }, { label: 'Gas Connection', value: '3/4 inch NPT' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: 'Ceramic Radiants', desc: 'Even heat distribution across the full grate surface for consistent char.' }, { title: 'Cast-Iron Grates', desc: 'Heavy cast-iron grates retain heat and create distinctive grill marks.' }, { title: 'High BTU Output', desc: '90,000 total BTU for fast recovery between batches.' }, { title: 'Easy Cleaning', desc: 'Removable grates and drip tray simplify daily cleaning.' }, { title: 'Compact Width', desc: '24 inch width suits smaller kitchen lines without sacrificing output.' }, { title: 'Adjustable Heat', desc: 'Individual valve control per burner section.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
