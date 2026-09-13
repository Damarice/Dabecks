import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DWUnder() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'DW-Under' }]}
      category="Dishwashers" model="DW-Under" subtitle="Undercounter commercial dishwasher"
      image="/products/dishwashers/dw-under.jpg" placeholder="DW-Under"
      keySpecs={[{ label: 'Racks/hr', value: '30' }, { label: 'Cycle', value: '90 seconds' }, { label: 'Water/rack', value: '2.7 L' }]}
      description={['The DW-Under is a compact undercounter dishwasher designed for bars, cafés, and small commercial kitchens. With 30 racks per hour capacity and a 90-second wash cycle, it delivers hygienic results in a space-saving footprint.', 'NSF certified and WRAS approved, it meets international food safety standards for commercial use.']}
      featureStrip={[{ icon: '⏱️', label: 'Cycle Time', value: '90 seconds' }, { icon: '💧', label: 'Water Use', value: '2.7 L/rack' }, { icon: '🌡️', label: 'Rinse Temp', value: '85 °C' }, { icon: '📏', label: 'Footprint', value: 'Undercounter' }]}
      specs={[{ label: 'Model', value: 'DW-Under' }, { label: 'Capacity', value: '30 racks/hr' }, { label: 'Cycle Time', value: '90 seconds' }, { label: 'Wash Temperature', value: '60 °C' }, { label: 'Rinse Temperature', value: '85 °C' }, { label: 'Water per Rack', value: '2.7 L' }, { label: 'Width × Height × Depth', value: '600 × 820 × 620 mm' }, { label: 'Net Weight', value: '42 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'NSF, WRAS' }]}
      features={[{ title: 'Fast Cycle', desc: '90-second cycles keep pace with busy bar and café service.' }, { title: 'Low Water Use', desc: '2.7 L per rack — significantly reduces water and chemical costs.' }, { title: 'High-Temp Rinse', desc: '85 °C rinse ensures hygienic sanitisation without chemicals.' }, { title: 'Compact Design', desc: 'Fits under standard counters — no dedicated dishwash area needed.' }, { title: 'Easy Loading', desc: 'Front-loading door allows efficient rack handling in tight spaces.' }, { title: 'NSF Certified', desc: 'Meets commercial food service hygiene standards.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
