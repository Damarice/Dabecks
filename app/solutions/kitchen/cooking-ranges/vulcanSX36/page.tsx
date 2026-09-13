import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function VulcanSX36() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges' }, { label: 'Vulcan SX36' }]}
      category="Cooking Ranges" model="Vulcan SX36" subtitle="Commercial gas range · 36 inch"
      image="/products/ranges/vulcan-sx36.jpg" placeholder="Vulcan+SX36"
      keySpecs={[{ label: 'Width', value: '36 inch / 914 mm' }, { label: 'Burners', value: '6' }, { label: 'Brand', value: 'Vulcan' }]}
      description={['The Vulcan SX36 is a high-performance 36-inch commercial gas range featuring 6 burners and a full-size oven — Vulcan\'s proven workhorse for restaurant and hotel kitchen use.', 'ENERGY STAR certified, it delivers the power professional chefs need while meeting modern energy efficiency standards.']}
      featureStrip={[{ icon: '🔥', label: 'Burners', value: '6 × 30,000 BTU' }, { icon: '⚡', label: 'Rating', value: 'ENERGY STAR' }, { icon: '📏', label: 'Width', value: '36 inch' }, { icon: '✅', label: 'Certified', value: 'NSF, ENERGY STAR' }]}
      specs={[{ label: 'Model', value: 'Vulcan SX36' }, { label: 'Burners', value: '6' }, { label: 'BTU per Burner', value: '30,000' }, { label: 'Oven BTU', value: '35,000' }, { label: 'Oven Capacity', value: 'Standard deck' }, { label: 'Energy Certification', value: 'ENERGY STAR' }, { label: 'Width × Height × Depth', value: '914 × 1067 × 813 mm' }, { label: 'Net Weight', value: '185 kg' }, { label: 'Gas Type', value: 'Natural gas or LP' }, { label: 'Certification', value: 'NSF, ENERGY STAR, CE' }]}
      features={[{ title: 'ENERGY STAR Certified', desc: 'Meets energy efficiency standards for lower operational costs.' }, { title: 'Dual Fuel Options', desc: 'Available for natural gas or LPG to suit your installation.' }, { title: 'Standard Deck Oven', desc: 'Full-size oven base handles GN 1/1 pans with ease.' }, { title: 'Vulcan Durability', desc: 'Built to Vulcan\'s exacting quality standards for long service life.' }, { title: 'Easy Flame Adjustment', desc: 'Individual valve controls for precise heat management per burner.' }, { title: 'Removable Components', desc: 'All burner caps and grates removable for thorough cleaning.' }]}
      backHref="/solutions/kitchen/cooking-ranges" backLabel="All Ranges"
    />
  );
}
