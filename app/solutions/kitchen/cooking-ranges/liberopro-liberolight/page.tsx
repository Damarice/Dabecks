import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function LiberoProLiberoLight() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges' }, { label: 'LiberoPro & LiberoLight Mobile Cooking' }]}
      category="Cooking Ranges" model="LiberoPro & LiberoLight Mobile Cooking" subtitle="Mobile cooking solutions for flexible and event catering"
      image="/products/kitchen/cooking-ranges/liberopro-liberolight.webp" placeholder="LiberoPro+LiberoLight+Mobile"
      keySpecs={[{ label: 'Type', value: 'Mobile cooking' }, { label: 'Series', value: 'LiberoPro & LiberoLight' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      description={['The LiberoPro and LiberoLight Mobile Cooking solutions offer unmatched flexibility for kitchens that need moveable cooking equipment. Whether for banqueting, events, or flexible kitchen layouts, these units can be repositioned as needed.', 'LiberoPro suits high-performance professional applications while LiberoLight offers a lighter, more compact solution ideal for catering and flexible service environments.']}
      featureStrip={[{ icon: '🚀', label: 'Type', value: 'Mobile cooking' }, { icon: '📐', label: 'Range', value: 'Pro & Light' }, { icon: '🔌', label: 'Setup', value: 'Quick connect' }, { icon: '🎯', label: 'Use', value: 'Events & catering' }]}
      specs={[{ label: 'Series', value: 'LiberoPro & LiberoLight' }, { label: 'Configuration', value: 'Mobile / freestanding' }, { label: 'Application', value: 'Events, banqueting, flexible kitchens' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'Mobile Design', desc: 'Wheeled base allows repositioning across kitchen areas and event spaces.' }, { title: 'LiberoPro', desc: 'High-performance cooking output for professional and high-volume applications.' }, { title: 'LiberoLight', desc: 'Compact and lightweight for catering, pop-up kitchens, and events.' }, { title: 'Quick Connection', desc: 'Fast hookup to utilities for rapid setup and breakdown at events.' }, { title: 'Versatile Application', desc: 'Suitable for banqueting halls, outdoor events, and flexible kitchen operations.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/cooking-ranges" backLabel="All Cooking Ranges"
    />
  );
}
