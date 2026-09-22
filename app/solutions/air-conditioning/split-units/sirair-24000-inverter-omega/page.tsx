import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SirAir24000InverterOmega() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: '24000 BTU Inverter Midwall Split Air Conditioner' }]}
      category="Split Units" model="24000 BTU Inverter Midwall Split Air Conditioner" subtitle="SIRAIR Omega Series · 5 Year Warranty"
      image="/products/ac/split-units/sirair-24000-inverter-omega.webp" placeholder="SIRAIR+24000+Omega"
      keySpecs={[{ label: 'Capacity', value: '24,000 BTU' }, { label: 'Type', value: 'Inverter' }, { label: 'Series', value: 'Omega' }]}
      description={['The SIRAIR Omega Series 24000 BTU Inverter Midwall Split Air Conditioner represents the premium tier of the SIRAIR split unit range. Designed for large commercial spaces, it combines high-capacity cooling with advanced inverter efficiency in a sophisticated design.', 'Perfect for large hotel rooms, executive suites, conference rooms, and open-plan offices requiring powerful, quiet, and efficient climate control.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '24,000 BTU' }, { icon: '⚡', label: 'Type', value: 'Inverter' }, { icon: '✨', label: 'Series', value: 'Omega' }, { icon: '🛡️', label: 'Warranty', value: '5 Years' }]}
      specs={[{ label: 'Capacity', value: '24,000 BTU' }, { label: 'Series', value: 'Omega' }, { label: 'Type', value: 'Inverter Midwall Split' }, { label: 'Warranty', value: '5 Years' }, { label: 'Brand', value: 'SIRAIR' }]}
      features={[{ title: 'Omega Premium Series', desc: 'Top-tier design and performance for premium commercial installations.' }, { title: 'High Capacity', desc: 'Handles large spaces up to 65m² with powerful 24,000 BTU output.' }, { title: 'Inverter Technology', desc: 'Advanced inverter for energy savings and precise temperature management.' }, { title: '5 Year Warranty', desc: 'Backed by a full 5-year SIRAIR warranty.' }, { title: 'Whisper Quiet', desc: 'Ultra-low noise operation for premium hotel and executive environments.' }, { title: 'Premium Aesthetics', desc: 'Sleek Omega design complements high-end commercial interiors.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
