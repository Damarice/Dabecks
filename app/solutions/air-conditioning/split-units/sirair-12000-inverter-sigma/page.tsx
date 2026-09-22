import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SirAir12000InverterSigma() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: '12000 BTU Inverter Midwall Split Aircon' }]}
      category="Split Units" model="12000 BTU Inverter Midwall Split Aircon + 3m Pipe Kit" subtitle="SIRAIR Sigma Series · 5 Year Warranty"
      image="/products/ac/split-units/sirair-12000-inverter-sigma.webp" placeholder="SIRAIR+12000+Sigma"
      keySpecs={[{ label: 'Capacity', value: '12,000 BTU' }, { label: 'Type', value: 'Inverter' }, { label: 'Includes', value: '3m Pipe Kit' }]}
      description={['The SIRAIR Sigma Series 12000 BTU Inverter Midwall Split Aircon delivers efficient, reliable cooling for medium-sized rooms and commercial spaces. Its inverter technology adjusts compressor speed to maintain the desired temperature without constant on/off cycling, saving energy and reducing noise.', 'Includes a 3m pipe kit for easy installation and comes with a 5-year warranty, making it an ideal choice for offices, hotel rooms, and small commercial spaces.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '12,000 BTU' }, { icon: '⚡', label: 'Type', value: 'Inverter' }, { icon: '🔧', label: 'Includes', value: '3m Pipe Kit' }, { icon: '🛡️', label: 'Warranty', value: '5 Years' }]}
      specs={[{ label: 'Capacity', value: '12,000 BTU' }, { label: 'Series', value: 'Sigma' }, { label: 'Type', value: 'Inverter Midwall Split' }, { label: 'Pipe Kit', value: '3 metres included' }, { label: 'Warranty', value: '5 Years' }, { label: 'Brand', value: 'SIRAIR' }]}
      features={[{ title: 'Inverter Technology', desc: 'Variable-speed compressor maintains temperature efficiently without constant cycling.' }, { title: '12,000 BTU Capacity', desc: 'Ideal for medium rooms and small commercial spaces up to 35m².' }, { title: '3m Pipe Kit Included', desc: 'Complete pipe kit included for straightforward installation.' }, { title: '5 Year Warranty', desc: 'Backed by a 5-year SIRAIR warranty for peace of mind.' }, { title: 'Energy Efficient', desc: 'Inverter motor reduces energy consumption compared to non-inverter models.' }, { title: 'Quiet Operation', desc: 'Low noise levels suitable for offices, hotel rooms, and bedrooms.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
