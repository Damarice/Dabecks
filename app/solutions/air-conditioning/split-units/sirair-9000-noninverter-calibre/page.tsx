import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SirAir9000NonInverterCalibre() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: '9000 BTU Non-Inverter Midwall Split Aircon' }]}
      category="Split Units" model="9000 BTU Non-Inverter Midwall Split Aircon + 3m Pipe Kit" subtitle="SIRAIR Calibre Series · 5 Year Warranty"
      image="/products/ac/split-units/sirair-9000-noninverter-calibre.webp" placeholder="SIRAIR+9000+Calibre"
      keySpecs={[{ label: 'Capacity', value: '9,000 BTU' }, { label: 'Type', value: 'Non-Inverter' }, { label: 'Includes', value: '3m Pipe Kit' }]}
      description={['The SIRAIR Calibre Series 9000 BTU Non-Inverter Midwall Split Aircon is a reliable, cost-effective cooling solution for small rooms and offices. Its straightforward non-inverter operation makes it easy to maintain and affordable to run.', 'Includes a 3m pipe kit for quick installation and backed by a 5-year warranty, making it an excellent entry-level commercial cooling option.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '9,000 BTU' }, { icon: '🔌', label: 'Type', value: 'Non-Inverter' }, { icon: '🔧', label: 'Includes', value: '3m Pipe Kit' }, { icon: '🛡️', label: 'Warranty', value: '5 Years' }]}
      specs={[{ label: 'Capacity', value: '9,000 BTU' }, { label: 'Series', value: 'Calibre' }, { label: 'Type', value: 'Non-Inverter Midwall Split' }, { label: 'Pipe Kit', value: '3 metres included' }, { label: 'Warranty', value: '5 Years' }, { label: 'Brand', value: 'SIRAIR' }]}
      features={[{ title: 'Compact Capacity', desc: 'Ideal for small rooms, offices, and spaces up to 25m².' }, { title: 'Non-Inverter Reliability', desc: 'Simple, robust non-inverter system easy to maintain and service.' }, { title: '3m Pipe Kit Included', desc: 'Complete pipe kit for straightforward installation.' }, { title: '5 Year Warranty', desc: 'Full 5-year SIRAIR warranty for long-term confidence.' }, { title: 'Affordable Cooling', desc: 'Cost-effective entry-level solution for budget-conscious installations.' }, { title: 'SIRAIR Quality', desc: 'Built to SIRAIR standards for reliable commercial performance.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
