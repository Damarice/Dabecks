import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function HeroDryFreestandingBlower() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'HeroDry Free-standing blower' }]}
      category="Dishwashing" model="HeroDry Free-standing blower" subtitle="Freestanding drying blower for professional warewashing lines"
      image="/products/kitchen/dishwashers/herodry-freestanding-blower.webp" placeholder="HeroDry+Freestanding+Blower"
      keySpecs={[{ label: 'Type', value: 'Drying blower' }, { label: 'Configuration', value: 'Freestanding' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      description={['The HeroDry Free-standing Blower is a professional drying unit that complements commercial dishwashing lines by ensuring dishes, glasses, and utensils are thoroughly dried after washing. It eliminates manual drying labour and reduces water spotting.', 'Designed to integrate with existing warewashing setups, the HeroDry blower improves kitchen workflow and ensures ready-to-use items at all times.']}
      featureStrip={[{ icon: '💨', label: 'Function', value: 'Drying blower' }, { icon: '📐', label: 'Type', value: 'Freestanding' }, { icon: '⚡', label: 'Efficiency', value: 'Fast drying' }, { icon: '🔗', label: 'Integration', value: 'Works with wash lines' }]}
      specs={[{ label: 'Type', value: 'Drying blower unit' }, { label: 'Configuration', value: 'Freestanding' }, { label: 'Series', value: 'HeroDry' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Powerful Drying', desc: 'High-powered blower ensures dishes and glasses are completely dry after washing.' }, { title: 'Freestanding Design', desc: 'Self-contained unit integrates easily into any existing warewashing line.' }, { title: 'Eliminates Manual Drying', desc: 'Removes the need for manual towel drying, saving labour time and cost.' }, { title: 'Reduces Water Spotting', desc: 'Fast drying prevents water spots on glassware and crockery.' }, { title: 'Hygienic Operation', desc: 'Contactless drying maintains hygiene standards throughout the process.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
