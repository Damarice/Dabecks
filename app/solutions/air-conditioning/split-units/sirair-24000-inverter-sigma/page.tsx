import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SirAir24000InverterSigma() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: '24000 BTU Inverter Midwall Split Aircon' }]}
      category="Split Units" model="24000 BTU Inverter Midwall Split Aircon + 3m Pipe Kit" subtitle="SIRAIR Sigma Series · 5 Year Warranty"
      image="/products/ac/split-units/sirair-24000-inverter-sigma.webp" placeholder="SIRAIR+24000+Sigma"
      keySpecs={[{ label: 'Capacity', value: '24,000 BTU' }, { label: 'Type', value: 'Inverter' }, { label: 'Includes', value: '3m Pipe Kit' }]}
      description={['The SIRAIR Sigma Series 24000 BTU Inverter Midwall Split Aircon is built for larger commercial spaces needing powerful, efficient cooling. Its high-capacity inverter system maintains consistent temperatures across open-plan offices, large hotel rooms, and retail environments.', 'Complete with a 3m pipe kit and backed by a 5-year warranty for reliable, long-term performance.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '24,000 BTU' }, { icon: '⚡', label: 'Type', value: 'Inverter' }, { icon: '🔧', label: 'Includes', value: '3m Pipe Kit' }, { icon: '🛡️', label: 'Warranty', value: '5 Years' }]}
      specs={[{ label: 'Capacity', value: '24,000 BTU' }, { label: 'Series', value: 'Sigma' }, { label: 'Type', value: 'Inverter Midwall Split' }, { label: 'Pipe Kit', value: '3 metres included' }, { label: 'Warranty', value: '5 Years' }, { label: 'Brand', value: 'SIRAIR' }]}
      features={[{ title: 'High Capacity Cooling', desc: 'Handles larger spaces up to 65m² comfortably and efficiently.' }, { title: 'Inverter Technology', desc: 'Smart compressor control saves energy while maintaining precise temperatures.' }, { title: '3m Pipe Kit Included', desc: 'Installation-ready with pipe kit included.' }, { title: '5 Year Warranty', desc: 'Backed by a 5-year SIRAIR warranty.' }, { title: 'Energy Efficient', desc: 'Inverter motor significantly reduces running costs vs non-inverter.' }, { title: 'Commercial Grade', desc: 'Designed for continuous use in commercial and hospitality environments.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
