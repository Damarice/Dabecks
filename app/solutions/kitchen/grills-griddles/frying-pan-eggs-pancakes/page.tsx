import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function FryingPanEggsPancakes() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: '12 Inch Frying Pan for Eggs and Pancakes' }]}
      category="Grills & Griddles" model="12 Inch Frying Pan for Eggs and Pancakes Stainless Steel" subtitle="COD 925005"
      image="/products/kitchen/grills-griddles/frying-pan-eggs-pancakes.webp" placeholder="Frying+Pan+Eggs+Pancakes"
      keySpecs={[{ label: 'Size', value: '12 inch' }, { label: 'Material', value: 'Stainless steel' }, { label: 'Use', value: 'Eggs & pancakes' }]}
      description={['The 12 Inch Frying Pan for Eggs and Pancakes in Stainless Steel is a professional cooking accessory designed for hotel breakfast stations and commercial kitchens. Its stainless steel construction ensures durability and hygienic cooking of eggs and pancakes at volume.', 'Compatible with professional commercial cooking equipment, it delivers consistent results during high-demand breakfast and brunch service.']}
      featureStrip={[{ icon: '🍳', label: 'Use', value: 'Eggs & pancakes' }, { icon: '📐', label: 'Size', value: '12 inch' }, { icon: '🏗️', label: 'Material', value: 'Stainless steel' }, { icon: '✅', label: 'Grade', value: 'Professional' }]}
      specs={[{ label: 'Product Code', value: '925005' }, { label: 'Size', value: '12 inch' }, { label: 'Material', value: 'Stainless steel' }, { label: 'Use', value: 'Eggs and pancakes' }, { label: 'Type', value: 'Professional frying pan' }]}
      features={[{ title: 'Breakfast Specialist', desc: 'Optimised for cooking eggs, pancakes, and similar breakfast items at volume.' }, { title: 'Stainless Steel', desc: 'Hygienic, durable stainless steel construction for commercial kitchen use.' }, { title: '12-Inch Size', desc: 'Practical size for professional breakfast and brunch service operations.' }, { title: 'Even Heat', desc: 'Designed for even heat distribution across the cooking surface.' }, { title: 'Easy to Clean', desc: 'Smooth stainless steel surface wipes clean quickly after service.' }, { title: 'Professional Grade', desc: 'Built for continuous use in hotel and commercial kitchen environments.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
