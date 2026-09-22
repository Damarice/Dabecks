import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function EXP700900Modular() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges' }, { label: 'e-XP 700 and 900 Modular Cooking' }]}
      category="Cooking Ranges" model="e-XP 700 and 900 Modular Cooking" subtitle="Flexible modular cooking ranges for professional kitchens"
      image="/products/kitchen/cooking-ranges/exp-700-900-modular.webp" placeholder="e-XP+700+900+Modular"
      keySpecs={[{ label: 'Series', value: 'e-XP 700 & 900' }, { label: 'Type', value: 'Modular cooking' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      description={['The e-XP 700 and 900 Modular Cooking range offers professional kitchen flexibility with two series depths. The 700 series suits medium-volume operations while the 900 series handles the demands of large-scale food production.', 'With a wide variety of modules available — gas burners, induction hobs, griddles, and more — the e-XP range lets you build a cooking suite precisely matched to your menu and kitchen workflow.']}
      featureStrip={[{ icon: '🔗', label: 'Type', value: 'Modular cooking' }, { icon: '📐', label: 'Series', value: '700 & 900' }, { icon: '🔥', label: 'Options', value: 'Gas & electric' }, { icon: '⚙️', label: 'Modules', value: 'Mix & match' }]}
      specs={[{ label: 'Series', value: 'e-XP 700 / e-XP 900' }, { label: 'Configuration', value: 'Modular' }, { label: 'Energy', value: 'Gas and electric options' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Two Series Options', desc: '700 series for mid-volume and 900 series for high-volume kitchen operations.' }, { title: 'Modular Configuration', desc: 'Choose from burners, griddles, fryers, and more to build your ideal suite.' }, { title: 'Gas and Electric', desc: 'Available in gas and electric versions to suit your kitchen infrastructure.' }, { title: 'Robust Construction', desc: 'Heavy-duty stainless steel built for continuous professional kitchen use.' }, { title: 'Scalable Setup', desc: 'Expand or reconfigure your suite as your operation grows.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/cooking-ranges" backLabel="All Cooking Ranges"
    />
  );
}
