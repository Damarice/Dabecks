import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SirAir18000InverterOmega() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: '18000 BTU Inverter Midwall Split Air Conditioner' }]}
      category="Split Units" model="18000 BTU Inverter Midwall Split Air Conditioner" subtitle="SIRAIR Omega Series · 5 Year Warranty"
      image="/products/ac/split-units/sirair-18000-inverter-omega.webp" placeholder="SIRAIR+18000+Omega"
      keySpecs={[{ label: 'Capacity', value: '18,000 BTU' }, { label: 'Type', value: 'Inverter' }, { label: 'Series', value: 'Omega' }]}
      description={['The SIRAIR Omega Series 18000 BTU Inverter Midwall Split Air Conditioner delivers premium mid-capacity cooling for commercial spaces. Part of the top-tier Omega range, it combines sophisticated design with efficient inverter performance.', 'Ideal for medium-to-large hotel rooms, boardrooms, and commercial offices needing reliable, quiet, and stylish climate control.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '18,000 BTU' }, { icon: '⚡', label: 'Type', value: 'Inverter' }, { icon: '✨', label: 'Series', value: 'Omega' }, { icon: '🛡️', label: 'Warranty', value: '5 Years' }]}
      specs={[{ label: 'Capacity', value: '18,000 BTU' }, { label: 'Series', value: 'Omega' }, { label: 'Type', value: 'Inverter Midwall Split' }, { label: 'Warranty', value: '5 Years' }, { label: 'Brand', value: 'SIRAIR' }]}
      features={[{ title: 'Omega Premium Series', desc: 'Top-tier SIRAIR design for upscale commercial and hospitality spaces.' }, { title: '18,000 BTU Capacity', desc: 'Covers medium-to-large rooms and offices up to 50m².' }, { title: 'Inverter Technology', desc: 'Energy-efficient inverter compressor for lower running costs.' }, { title: '5 Year Warranty', desc: 'Backed by a full 5-year SIRAIR warranty.' }, { title: 'Quiet Operation', desc: 'Low noise output for hotel rooms, boardrooms, and offices.' }, { title: 'Sleek Design', desc: 'Premium Omega aesthetics for modern commercial environments.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
