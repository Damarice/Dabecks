import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SmoothGriddleScraper() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: '12 Inch Stainless Steel Scraper for Smooth Griddle' }]}
      category="Grills & Griddles" model="12 Inch Stainless Steel Scraper for Smooth Griddle" subtitle="COD 164255"
      image="/products/kitchen/grills-griddles/smooth-griddle-scraper.webp" placeholder="Smooth+Griddle+Scraper"
      keySpecs={[{ label: 'Size', value: '12 inch' }, { label: 'Material', value: 'Stainless steel' }, { label: 'Type', value: 'Smooth griddle scraper' }]}
      description={['The 12 Inch Stainless Steel Scraper for Smooth Griddle is a professional cleaning tool specifically designed for flat, smooth griddle surfaces. Its wide blade efficiently removes food residue and grease after cooking.', 'Built from durable stainless steel, it is an essential accessory for maintaining smooth griddle surfaces in professional commercial kitchens.']}
      featureStrip={[{ icon: '🔧', label: 'Size', value: '12 inch' }, { icon: '🏗️', label: 'Material', value: 'Stainless steel' }, { icon: '🧽', label: 'Use', value: 'Smooth surfaces' }, { icon: '🎯', label: 'Type', value: 'Manual scraper' }]}
      specs={[{ label: 'Product Code', value: '164255' }, { label: 'Size', value: '12 inch' }, { label: 'Material', value: 'Stainless steel' }, { label: 'Surface Type', value: 'Smooth griddle' }, { label: 'Type', value: 'Manual scraper tool' }]}
      features={[{ title: 'Smooth Surface Design', desc: 'Wide flat blade designed specifically for smooth griddle surfaces.' }, { title: 'Stainless Steel Build', desc: 'Corrosion-resistant stainless steel for long-lasting commercial kitchen use.' }, { title: 'Wide 12-Inch Blade', desc: 'Covers more surface area per stroke for faster cleaning between services.' }, { title: 'Ergonomic Handle', desc: 'Comfortable grip for safe and effective scraping during cleaning.' }, { title: 'Maintains Performance', desc: 'Regular use keeps griddle surface clean for consistent cooking results.' }, { title: 'Compatible Accessory', desc: 'Designed for use with professional smooth griddle cooking equipment.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
