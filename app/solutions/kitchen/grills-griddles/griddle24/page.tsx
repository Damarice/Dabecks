import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Griddle24() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: 'Griddle-24' }]}
      category="Grills & Griddles" model="Griddle-24" subtitle="24-inch commercial flat-top griddle"
      image="/products/grills/griddle24.jpg" placeholder="Griddle-24"
      keySpecs={[{ label: 'Width', value: '24 inch / 610 mm' }, { label: 'Plate', value: '25mm steel' }, { label: 'BTU', value: '60,000' }]}
      description={['The Griddle-24 is a heavy-duty 24-inch flat-top griddle with a 25mm thick steel cooking plate — delivering even, stable heat for breakfast items, burgers, pancakes, and stir-fry at volume.', 'Its smooth cooking surface is ideal for kitchens requiring versatile, high-output flat-top cooking in a compact footprint.']}
      featureStrip={[{ icon: '🍳', label: 'Plate', value: '25mm thick steel' }, { icon: '🌡️', label: 'Heat', value: 'Even distribution' }, { icon: '📏', label: 'Width', value: '24 inch' }, { icon: '🔥', label: 'BTU', value: '60,000' }]}
      specs={[{ label: 'Model', value: 'Griddle-24' }, { label: 'Cooking Width', value: '610 mm (24 inch)' }, { label: 'Plate Thickness', value: '25 mm' }, { label: 'Total BTU', value: '60,000' }, { label: 'Burners', value: '2' }, { label: 'Plate Material', value: 'Cold-rolled steel' }, { label: 'Width × Height × Depth', value: '610 × 950 × 650 mm' }, { label: 'Net Weight', value: '58 kg' }, { label: 'Gas Connection', value: '1/2 inch NPT' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: 'Thick Steel Plate', desc: '25mm cold-rolled steel plate retains heat and delivers even cooking.' }, { title: 'Even Heat Distribution', desc: 'Burner design eliminates hot spots across the full cooking surface.' }, { title: 'Versatile Cooking', desc: 'Handles breakfast, burgers, stir-fry, and more on one surface.' }, { title: 'Easy Cleaning', desc: 'Flat cooking surface and front grease drawer simplify cleaning.' }, { title: 'Adjustable Thermostat', desc: 'Individual zone temperature control for multi-product cooking.' }, { title: 'Compact Footprint', desc: '24 inch width fits into most kitchen line configurations.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
