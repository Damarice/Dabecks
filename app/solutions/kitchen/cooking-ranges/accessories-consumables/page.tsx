import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function AccessoriesConsumables() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges' }, { label: 'Accessories and consumables' }]}
      category="Cooking Ranges" model="Accessories and consumables" subtitle="Professional accessories and consumables for cooking ranges"
      image="/products/kitchen/cooking-ranges/accessories-consumables.webp" placeholder="Accessories+Consumables"
      keySpecs={[{ label: 'Type', value: 'Accessories & consumables' }, { label: 'Compatibility', value: 'Electrolux Professional ranges' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      description={['Electrolux Professional offers a comprehensive range of accessories and consumables to complement and enhance your cooking range equipment. From pasta baskets and gastronorm pans to cleaning products and spare parts, everything is designed to work seamlessly with your kitchen suite.', 'Using genuine Electrolux Professional accessories ensures optimal performance, longevity, and hygiene compliance across all your cooking equipment.']}
      featureStrip={[{ icon: '🔧', label: 'Type', value: 'Accessories' }, { icon: '✅', label: 'Fit', value: 'OEM compatible' }, { icon: '🧼', label: 'Hygiene', value: 'Food-safe materials' }, { icon: '📦', label: 'Range', value: 'Full catalogue' }]}
      specs={[{ label: 'Type', value: 'Accessories and consumables' }, { label: 'Compatibility', value: 'Electrolux Professional cooking ranges' }, { label: 'Materials', value: 'Food-safe, stainless steel' }, { label: 'Brand', value: 'Electrolux Professional' }]}
      features={[{ title: 'OEM Compatibility', desc: 'Designed and tested to work perfectly with Electrolux Professional cooking ranges.' }, { title: 'Wide Range', desc: 'Pasta baskets, pans, grids, trays, and more available for every module type.' }, { title: 'Food-Safe Materials', desc: 'All accessories manufactured to food safety and hygiene standards.' }, { title: 'Genuine Parts', desc: 'Using genuine accessories protects your equipment warranty and performance.' }, { title: 'Cleaning Products', desc: 'Approved cleaning and maintenance consumables for long equipment life.' }, { title: 'Electrolux Professional', desc: 'Backed by Electrolux Professional global service and parts network.' }]}
      backHref="/solutions/kitchen/cooking-ranges" backLabel="All Cooking Ranges"
    />
  );
}
