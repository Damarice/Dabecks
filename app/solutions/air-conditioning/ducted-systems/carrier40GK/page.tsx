import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Carrier40GK() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Ducted Systems', href: '/solutions/air-conditioning/ducted-systems' }, { label: 'Carrier 40GK' }]}
      category="Ducted Systems" model="Carrier 40GK" subtitle="Fan coil ducted unit · 4 ton"
      image="/products/ac/carrier-40gk.jpg" placeholder="Carrier+40GK"
      keySpecs={[{ label: 'Capacity', value: '4 ton / 48,000 BTU' }, { label: 'Brand', value: 'Carrier' }, { label: 'Type', value: 'Fan coil unit' }]}
      description={['The Carrier 40GK is a reliable ducted fan coil unit for connection to central chilled water systems or direct expansion AC. Its robust construction and straightforward controls make it a trusted choice for large commercial buildings.', 'Compatible with Carrier\'s full range of chillers and air-cooled condensers for complete HVAC system solutions.']}
      featureStrip={[{ icon: '⭐', label: 'Brand', value: 'Carrier trusted' }, { icon: '❄️', label: 'Capacity', value: '4 ton' }, { icon: '🔗', label: 'Type', value: 'Fan coil / chilled water' }, { icon: '⚙️', label: 'Build', value: 'Commercial grade' }]}
      specs={[{ label: 'Model', value: 'Carrier 40GK' }, { label: 'Cooling Capacity', value: '14 kW (4 ton)' }, { label: 'Type', value: 'Fan coil / chilled water' }, { label: 'Airflow', value: '2200 m³/hr' }, { label: 'ESP', value: '120 Pa' }, { label: 'Coil', value: 'Copper / aluminium' }, { label: 'Indoor Unit (W×H×D)', value: '1200 × 280 × 760 mm' }, { label: 'Indoor Weight', value: '35 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, AHRI' }]}
      features={[{ title: 'Carrier Quality', desc: 'One of the world\'s oldest and most trusted HVAC brands.' }, { title: 'Chilled Water Compatible', desc: 'Connects to central chilled water plant for large building systems.' }, { title: 'Copper Coil', desc: 'Premium copper and aluminium coil for efficient heat exchange.' }, { title: 'AHRI Certified', desc: 'Performance certified to AHRI standards for accuracy.' }, { title: 'Easy Service', desc: 'Accessible panels for simple filter and coil maintenance.' }, { title: 'Quiet Fan', desc: 'Multi-speed EC fan motor for quiet, efficient operation.' }]}
      backHref="/solutions/air-conditioning/ducted-systems" backLabel="All Ducted Systems"
    />
  );
}
