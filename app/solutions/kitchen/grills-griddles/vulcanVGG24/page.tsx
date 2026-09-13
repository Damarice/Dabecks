import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function VulcanVGG24() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: 'Vulcan VGG24' }]}
      category="Grills & Griddles" model="Vulcan VGG24" subtitle="Commercial gas griddle · 24 inch"
      image="/products/grills/vulcan-vgg24.jpg" placeholder="Vulcan+VGG24"
      keySpecs={[{ label: 'Width', value: '24 inch' }, { label: 'BTU', value: '60,000' }, { label: 'Brand', value: 'Vulcan' }]}
      description={['The Vulcan VGG24 is a professional 24-inch gas griddle from Vulcan — one of the most trusted names in commercial cooking equipment. Its polished steel cooking surface and powerful burners deliver consistent results for breakfast, lunch, and dinner service.', 'ENERGY STAR certified with a proven low-profile design that fits any commercial kitchen configuration.']}
      featureStrip={[{ icon: '⚡', label: 'Rating', value: 'ENERGY STAR' }, { icon: '🔥', label: 'BTU', value: '60,000' }, { icon: '🍳', label: 'Surface', value: 'Polished steel' }, { icon: '✅', label: 'Brand', value: 'Vulcan trusted' }]}
      specs={[{ label: 'Model', value: 'Vulcan VGG24' }, { label: 'Cooking Width', value: '610 mm (24 inch)' }, { label: 'Total BTU', value: '60,000' }, { label: 'Burners', value: '2' }, { label: 'Plate Material', value: 'Polished steel' }, { label: 'Energy Certification', value: 'ENERGY STAR' }, { label: 'Width × Height × Depth', value: '610 × 915 × 660 mm' }, { label: 'Net Weight', value: '60 kg' }, { label: 'Gas Type', value: 'Natural gas or LP' }, { label: 'Certification', value: 'NSF, ENERGY STAR, CE' }]}
      features={[{ title: 'ENERGY STAR', desc: 'Certified energy efficiency for lower daily operating costs.' }, { title: 'Polished Surface', desc: 'Smooth polished steel for easy food release and cleaning.' }, { title: 'Dual Fuel', desc: 'Available for natural gas or LPG.' }, { title: 'Vulcan Quality', desc: 'Built to Vulcan\'s exacting commercial kitchen standards.' }, { title: 'Even Heat', desc: 'Well-designed burner layout eliminates temperature variations.' }, { title: 'Easy Installation', desc: 'Standard connections and dimensions simplify fitting into existing lines.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
