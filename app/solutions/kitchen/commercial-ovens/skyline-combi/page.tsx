import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SkyLineCombi() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Commercial Ovens', href: '/solutions/kitchen/commercial-ovens' }, { label: 'SkyLine Combi Ovens' }]}
      category="Commercial Ovens" model="SkyLine Combi Ovens" subtitle="Professional combi ovens with advanced cooking technology"
      image="/products/kitchen/commercial-ovens/skyline-combi.webp" placeholder="SkyLine+Combi+Ovens"
      keySpecs={[{ label: 'Capacity', value: '10 trays' }, { label: 'Modes', value: 'Steam/Convection/Combi' }, { label: 'Power', value: '15 kW' }]}
      description={['The Combi-10 is a full-size combination oven offering steam, convection, and combi cooking modes in a single unit. With 10-tray capacity, it handles everything from roasting and baking to steaming and regenerating.', 'Its programmable cooking system stores up to 99 recipes, making it the ultimate tool for consistent, high-volume professional cooking.']}
      featureStrip={[{ icon: '🌡️', label: 'Temp Range', value: '30–300 °C' }, { icon: '💧', label: 'Steam', value: 'Boiler or injection' }, { icon: '📱', label: 'Programs', value: '99 stored recipes' }, { icon: '🧽', label: 'Cleaning', value: 'Automatic self-clean' }]}
      specs={[{ label: 'Model', value: 'Combi-10' }, { label: 'Capacity', value: '10 × GN 1/1' }, { label: 'Cooking Modes', value: 'Steam, Convection, Combi' }, { label: 'Temperature Range', value: '30–300 °C' }, { label: 'Total Power', value: '15 kW' }, { label: 'Steam System', value: 'Boiler or direct injection' }, { label: 'Width × Height × Depth', value: '848 × 1050 × 835 mm' }, { label: 'Net Weight', value: '120 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Programs', value: '99 recipes' }]}
      features={[{ title: 'Three Cooking Modes', desc: 'Steam, convection, and combination modes handle any menu item.' }, { title: 'Programmable Recipes', desc: 'Store and recall up to 99 recipes for consistent results every service.' }, { title: 'Automatic Cleaning', desc: 'Self-cleaning system reduces post-service labour significantly.' }, { title: 'Core Temperature Probe', desc: 'Precision probe ensures perfect internal temperatures every time.' }, { title: 'Delta-T Cooking', desc: 'Gradual temperature ramping for perfectly tender roasts.' }, { title: 'Boiler Steam System', desc: 'True saturated steam for superior moisture and crust control.' }]}
      backHref="/solutions/kitchen/commercial-ovens" backLabel="All Ovens"
    />
  );
}
