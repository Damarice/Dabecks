import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SirAir12000InverterAlpha() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: '12000 BTU Inverter Midwall Split Air Conditioner' }]}
      category="Split Units" model="12000 BTU Inverter Midwall Split Air Conditioner" subtitle="SIRAIR Alpha Series · 5 Year Warranty"
      image="/products/ac/split-units/sirair-12000-inverter-alpha.webp" placeholder="SIRAIR+12000+Alpha"
      keySpecs={[{ label: 'Capacity', value: '12,000 BTU' }, { label: 'Type', value: 'Inverter' }, { label: 'Series', value: 'Alpha' }]}
      description={['The SIRAIR Alpha Series 12000 BTU Inverter Midwall Split Air Conditioner offers premium inverter cooling in a sleek, modern design. The Alpha series is built for spaces that demand both performance and aesthetics.', 'Ideal for boutique hotels, executive offices, and modern commercial interiors where design and efficiency are equally important.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '12,000 BTU' }, { icon: '⚡', label: 'Type', value: 'Inverter' }, { icon: '✨', label: 'Series', value: 'Alpha' }, { icon: '🛡️', label: 'Warranty', value: '5 Years' }]}
      specs={[{ label: 'Capacity', value: '12,000 BTU' }, { label: 'Series', value: 'Alpha' }, { label: 'Type', value: 'Inverter Midwall Split' }, { label: 'Warranty', value: '5 Years' }, { label: 'Brand', value: 'SIRAIR' }]}
      features={[{ title: 'Alpha Series Design', desc: 'Premium aesthetics for modern commercial and hospitality interiors.' }, { title: 'Inverter Technology', desc: 'Smart compressor delivers energy savings and precise temperature control.' }, { title: '12,000 BTU Capacity', desc: 'Suitable for rooms and offices up to 35m².' }, { title: '5 Year Warranty', desc: 'Full 5-year SIRAIR warranty coverage.' }, { title: 'Quiet Operation', desc: 'Low noise indoor unit ideal for executive offices and hotel rooms.' }, { title: 'Energy Saving', desc: 'Inverter motor reduces electricity consumption significantly.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
