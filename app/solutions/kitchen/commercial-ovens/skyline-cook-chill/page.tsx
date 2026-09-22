import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SkyLineCookChill() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Commercial Ovens', href: '/solutions/kitchen/commercial-ovens' }, { label: 'SkyLine Cook and Chill Solutions' }]}
      category="Commercial Ovens" model="SkyLine Cook and Chill Solutions" subtitle="Integrated cook and chill systems for advanced production"
      image="/products/kitchen/commercial-ovens/skyline-cook-chill.webp" placeholder="SkyLine+Cook+Chill"
      keySpecs={[{ label: 'Capacity', value: '10 trays' }, { label: 'Intelligence', value: 'iCookingSuite' }, { label: 'Energy', value: 'Up to 10% savings' }]}
      description={['The Rational iCombi Pro is an intelligent combi oven that automatically adjusts cooking parameters to achieve perfect results. Its iCookingSuite recognises food and adjusts temperature, humidity, and air speed in real time.', 'Trusted by professional chefs worldwide, it reduces energy consumption by up to 10%, food weight loss, and kitchen labour while delivering consistently outstanding results.']}
      featureStrip={[{ icon: '🧠', label: 'Intelligence', value: 'Auto-adjusting cooking' }, { icon: '📊', label: 'Monitoring', value: 'ConnectedCooking' }, { icon: '🧽', label: 'Cleaning', value: 'Automatic care' }, { icon: '⚡', label: 'Energy', value: 'Up to 10% savings' }]}
      specs={[{ label: 'Model', value: 'Rational iCombi Pro 10-1/1' }, { label: 'Capacity', value: '10 × GN 1/1' }, { label: 'Cooking Modes', value: 'Steam, Hot air, Combi' }, { label: 'Temperature Range', value: '30–300 °C' }, { label: 'Total Power', value: '17.4 kW' }, { label: 'Connectivity', value: 'ConnectedCooking' }, { label: 'Width × Height × Depth', value: '847 × 775 × 771 mm' }, { label: 'Net Weight', value: '95 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Programs', value: 'Unlimited (cloud)' }]}
      features={[{ title: 'iCookingSuite', desc: 'Intelligent system recognises food and automatically optimises cooking parameters.' }, { title: 'ConnectedCooking', desc: 'Cloud connectivity for remote monitoring, updates, and recipe management.' }, { title: 'iProductionManager', desc: 'Manages up to 12 dishes simultaneously for efficient service.' }, { title: 'Automatic Cleaning', desc: 'Fully automatic care program with minimal chemical and water use.' }, { title: 'Energy Efficient', desc: 'Reduces energy, water, and food shrinkage for lower running costs.' }, { title: 'HACCP Documentation', desc: 'Automatic cooking documentation for food safety compliance.' }]}
      backHref="/solutions/kitchen/commercial-ovens" backLabel="All Ovens"
    />
  );
}
