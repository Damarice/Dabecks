import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function RibbedGrillScraper() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Grills & Griddles', href: '/solutions/kitchen/grills-griddles' }, { label: '7.88 Inch Ribbed Griddle Grill Scraper' }]}
      category="Grills & Griddles" model="7.88 Inch Ribbed Griddle Grill Scraper Manual Tool Stainless Steel" subtitle="COD 206420"
      image="/products/kitchen/grills-griddles/ribbed-grill-scraper.webp" placeholder="Ribbed+Grill+Scraper"
      keySpecs={[{ label: 'Size', value: '7.88 inch' }, { label: 'Material', value: 'Stainless steel' }, { label: 'Type', value: 'Ribbed scraper' }]}
      description={['The 7.88 Inch Ribbed Griddle Grill Scraper is a professional manual cleaning tool designed for ribbed griddle surfaces. Its stainless steel construction provides durability and effective cleaning of cooked-on residue between service periods.', 'An essential accessory for any commercial kitchen using ribbed griddles, it helps maintain cooking surface hygiene and performance.']}
      featureStrip={[{ icon: '🔧', label: 'Size', value: '7.88 inch' }, { icon: '🏗️', label: 'Material', value: 'Stainless steel' }, { icon: '🧽', label: 'Use', value: 'Ribbed surfaces' }, { label: 'Type', icon: '🎯', value: 'Manual tool' }]}
      specs={[{ label: 'Product Code', value: '206420' }, { label: 'Size', value: '7.88 inch' }, { label: 'Material', value: 'Stainless steel' }, { label: 'Surface Type', value: 'Ribbed griddle' }, { label: 'Type', value: 'Manual scraper tool' }]}
      features={[{ title: 'Ribbed Surface Design', desc: 'Specifically shaped to clean ribbed griddle and grill surfaces effectively.' }, { title: 'Stainless Steel Build', desc: 'Durable stainless steel construction resists corrosion and withstands daily use.' }, { title: 'Manual Operation', desc: 'Simple manual tool for quick cleaning between service periods.' }, { title: 'Maintains Hygiene', desc: 'Removes food residue and grease to keep cooking surfaces hygienic.' }, { title: 'Professional Grade', desc: 'Designed for professional commercial kitchen environments.' }, { title: 'Compatible Accessory', desc: 'Designed to work with professional ribbed griddle cooking equipment.' }]}
      backHref="/solutions/kitchen/grills-griddles" backLabel="All Grills & Griddles"
    />
  );
}
