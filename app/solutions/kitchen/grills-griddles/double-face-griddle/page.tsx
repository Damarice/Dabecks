import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DoubleFaceGriddle() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: '12 Inch Ribbed and Smooth Double-face Griddle' }]}
      category="Grills & Griddles" model="12 Inch Ribbed and Smooth Double-face Griddle" subtitle="COD 925003"
      image="/products/kitchen/grills-griddles/double-face-griddle.webp" placeholder="Double+Face+Griddle"
      keySpecs={[{ label: 'Size', value: '12 inch' }, { label: 'Surfaces', value: 'Ribbed & smooth' }, { label: 'Type', value: 'Double-face griddle' }]}
      description={['The 12 Inch Ribbed and Smooth Double-face Griddle offers two cooking surfaces in one — flip it for ribbed grill marks or smooth flat cooking. This versatility makes it an ideal accessory for professional kitchens needing flexibility.', 'Compatible with commercial cooking equipment, it handles everything from proteins and vegetables to eggs and pancakes with ease.']}
      featureStrip={[{ icon: '🔄', label: 'Surfaces', value: 'Ribbed & smooth' }, { icon: '📐', label: 'Size', value: '12 inch' }, { icon: '🍳', label: 'Use', value: 'Dual purpose' }, { icon: '🎯', label: 'Type', value: 'Double-face' }]}
      specs={[{ label: 'Product Code', value: '925003' }, { label: 'Size', value: '12 inch' }, { label: 'Surfaces', value: 'Ribbed one side, smooth the other' }, { label: 'Type', value: 'Double-face griddle' }]}
      features={[{ title: 'Two Surfaces in One', desc: 'Ribbed on one side for grill marks, smooth on the other for flat cooking.' }, { title: 'Versatile Cooking', desc: 'Handles proteins, vegetables, eggs, pancakes and more.' }, { title: 'Space Saving', desc: 'Replaces two separate accessories with one double-face unit.' }, { title: 'Easy to Flip', desc: 'Simply flip the griddle to switch between ribbed and smooth cooking.' }, { title: 'Professional Grade', desc: 'Built for continuous use in commercial kitchen environments.' }, { title: 'Compatible Accessory', desc: 'Designed for use with professional commercial cooking equipment.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
