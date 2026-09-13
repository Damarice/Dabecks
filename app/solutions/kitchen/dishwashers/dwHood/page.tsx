import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DWHood() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'DW-Hood' }]}
      category="Dishwashers" model="DW-Hood" subtitle="Hood-type pass-through dishwasher"
      image="/products/dishwashers/dw-hood.jpg" placeholder="DW-Hood"
      keySpecs={[{ label: 'Racks/hr', value: '60' }, { label: 'Cycle', value: '60 seconds' }, { label: 'Water/rack', value: '3.2 L' }]}
      description={['The DW-Hood is a professional hood-type dishwasher for medium-to-large restaurants and hotel kitchens. Its 60-rack per hour capacity and 60-second cycle make it the workhorse of busy kitchen dishwash areas.', 'The lift-up hood design allows quick loading and unloading of full racks, reducing labour time significantly compared to undercounter units.']}
      featureStrip={[{ icon: '⏱️', label: 'Cycle Time', value: '60 seconds' }, { icon: '📦', label: 'Capacity', value: '60 racks/hr' }, { icon: '💧', label: 'Water Use', value: '3.2 L/rack' }, { icon: '🌡️', label: 'Rinse Temp', value: '85 °C' }]}
      specs={[{ label: 'Model', value: 'DW-Hood' }, { label: 'Capacity', value: '60 racks/hr' }, { label: 'Cycle Time', value: '60 seconds' }, { label: 'Wash Temperature', value: '60 °C' }, { label: 'Rinse Temperature', value: '85 °C' }, { label: 'Water per Rack', value: '3.2 L' }, { label: 'Width × Height × Depth', value: '620 × 1450 × 750 mm' }, { label: 'Net Weight', value: '88 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Certification', value: 'NSF, WRAS' }]}
      features={[{ title: 'Hood Design', desc: 'Lift-up hood allows fast, ergonomic loading without bending.' }, { title: 'High Throughput', desc: '60 racks/hr handles peak service periods with ease.' }, { title: 'Fast Cycle', desc: '60-second cycles ensure continuous throughput throughout service.' }, { title: 'Integrated Softener', desc: 'Built-in water softener protects machine and improves results.' }, { title: 'Heat Recovery', desc: 'Heat exchanger reduces energy consumption and kitchen heat.' }, { title: 'Auto Drain', desc: 'Automatic drain and fill system reduces operator intervention.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
