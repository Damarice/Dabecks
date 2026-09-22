import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function GreenCleanUndercounter() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'green&clean Undercounter' }]}
      category="Dishwashing" model="green&clean Undercounter" subtitle="Eco-efficient undercounter dishwasher for commercial kitchens"
      image="/products/kitchen/dishwashers/greenclean-undercounter.webp" placeholder="green+clean+Undercounter"
      keySpecs={[{ label: 'Type', value: 'Undercounter dishwasher' }, { label: 'Focus', value: 'Eco efficiency' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      description={['The green&clean Undercounter dishwasher delivers high-performance warewashing in a compact undercounter format, designed for maximum eco-efficiency. It uses minimal water and energy per cycle while meeting the highest hygiene standards.', 'Ideal for cafés, small restaurants, and kitchens where space and sustainability are both priorities.']}
      featureStrip={[{ icon: '🌱', label: 'Eco', value: 'Low water & energy' }, { icon: '📐', label: 'Type', value: 'Undercounter' }, { icon: '⚡', label: 'Cycle', value: 'Fast wash cycles' }, { icon: '🧼', label: 'Hygiene', value: 'High-temp sanitising' }]}
      specs={[{ label: 'Type', value: 'Undercounter dishwasher' }, { label: 'Series', value: 'green&clean' }, { label: 'Focus', value: 'Eco efficiency' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Eco Efficiency', desc: 'Industry-leading low water and energy use per wash cycle.' }, { title: 'Undercounter Design', desc: 'Compact form fits under standard counters for space-efficient kitchens.' }, { title: 'Fast Cycles', desc: 'Quick wash programmes maintain throughput during busy service.' }, { title: 'High-Temp Sanitising', desc: 'Hot rinse cycle ensures hygienic results every time.' }, { title: 'Low Chemical Use', desc: 'Smart dosing reduces detergent and rinse aid consumption.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
