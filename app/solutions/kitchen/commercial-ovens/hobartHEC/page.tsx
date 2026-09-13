import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function HobartHEC() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Commercial Ovens', href: '/solutions/kitchen/commercial-ovens' }, { label: 'Hobart HEC' }]}
      category="Commercial Ovens" model="Hobart HEC" subtitle="Heavy-duty convection oven"
      image="/products/ovens/hobart-hec.jpg" placeholder="Hobart+HEC"
      keySpecs={[{ label: 'Capacity', value: '5 full-size pans' }, { label: 'Power', value: '11 kW' }, { label: 'Build', value: 'Heavy-duty' }]}
      description={['The Hobart HEC is a heavy-duty commercial convection oven built for the most demanding kitchen environments. Its robust construction and powerful heating system deliver consistent results for high-volume cooking operations.', 'Trusted by institutional kitchens, large hotels, and catering operations, the HEC combines reliability with straightforward operation and easy maintenance.']}
      featureStrip={[{ icon: '🏗️', label: 'Build', value: 'Heavy-duty steel' }, { icon: '🌡️', label: 'Temp', value: 'Up to 290 °C' }, { icon: '💨', label: 'Fan', value: 'Dual-speed' }, { icon: '🔧', label: 'Service', value: 'Easy access panels' }]}
      specs={[{ label: 'Model', value: 'Hobart HEC' }, { label: 'Capacity', value: '5 full-size sheet pans' }, { label: 'Temperature Range', value: '93–290 °C' }, { label: 'Total Power', value: '11 kW' }, { label: 'Fan Speed', value: 'Dual-speed' }, { label: 'Door Type', value: 'Double-pane glass' }, { label: 'Width × Height × Depth', value: '910 × 1067 × 762 mm' }, { label: 'Net Weight', value: '135 kg' }, { label: 'Supply Voltage', value: '208–240 V / 60 Hz' }, { label: 'Warranty', value: '2 years parts & labour' }]}
      features={[{ title: 'Heavy-Duty Construction', desc: 'Stainless steel interior and exterior built for years of intensive commercial use.' }, { title: 'Dual-Speed Fan', desc: 'High and low fan speeds adapt to different cooking requirements.' }, { title: 'Even Heat Distribution', desc: 'Proven airflow system ensures uniform cooking on all rack positions.' }, { title: 'Cool-Down Mode', desc: 'Rapid cool-down function between cooking cycles.' }, { title: 'Easy Maintenance', desc: 'Accessible panels and removable racks simplify servicing.' }, { title: 'Reliable Brand', desc: 'Backed by Hobart\'s global service network.' }]}
      backHref="/solutions/kitchen/commercial-ovens" backLabel="All Ovens"
    />
  );
}
