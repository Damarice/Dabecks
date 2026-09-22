import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function ThermalinePremium() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges' }, { label: 'thermaline Premium Modular 80, 85 & 90' }]}
      category="Cooking Ranges" model="thermaline Premium Modular 80, 85 & 90" subtitle="Premium modular cooking suites for high-end professional kitchens"
      image="/products/kitchen/cooking-ranges/thermaline-premium.webp" placeholder="thermaline+Premium+Modular"
      keySpecs={[{ label: 'Series', value: 'thermaline Premium' }, { label: 'Depths', value: '800, 850 & 900 mm' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      description={['The thermaline Premium Modular range offers the highest level of cooking performance for professional kitchens. Available in 80, 85 and 90 cm depths, it allows complete customisation of your cooking suite to match exact kitchen requirements.', 'Designed for high-end hotels, fine dining restaurants, and large institutional kitchens, every unit is built with premium materials for outstanding durability and cooking results.']}
      featureStrip={[{ icon: '🏗️', label: 'Build', value: 'Premium grade' }, { icon: '📐', label: 'Depths', value: '80, 85 & 90 cm' }, { icon: '🔗', label: 'Type', value: 'Modular suite' }, { icon: '🔥', label: 'Performance', value: 'High output' }]}
      specs={[{ label: 'Series', value: 'thermaline Premium' }, { label: 'Available Depths', value: '800 mm / 850 mm / 900 mm' }, { label: 'Configuration', value: 'Fully modular' }, { label: 'Construction', value: 'Premium stainless steel' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Three Depth Options', desc: '80, 85 and 90 cm depths to suit different kitchen layouts and chef preferences.' }, { title: 'Fully Modular', desc: 'Mix and match cooking modules to build the perfect suite for your operation.' }, { title: 'Premium Construction', desc: 'Top-grade stainless steel and cast iron built for decades of intensive use.' }, { title: 'High Cooking Output', desc: 'Powerful burners and heating elements for professional-level cooking performance.' }, { title: 'Tailored for Fine Dining', desc: 'Designed for high-end hotels, restaurants, and banqueting kitchens.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/cooking-ranges" backLabel="All Cooking Ranges"
    />
  );
}
