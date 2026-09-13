import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DWRack() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'DW-Rack' }]}
      category="Dishwashers" model="DW-Rack" subtitle="Rack conveyor dishwasher"
      image="/products/dishwashers/dw-rack.jpg" placeholder="DW-Rack"
      keySpecs={[{ label: 'Racks/hr', value: '120' }, { label: 'Type', value: 'Conveyor' }, { label: 'Zones', value: '4-zone wash' }]}
      description={['The DW-Rack is a continuous rack conveyor dishwasher designed for the highest-volume operations — large hotel banqueting, hospital catering, and institutional food service. With 120 racks per hour throughput, it handles the most demanding dishwash requirements.', 'Its 4-zone wash system (pre-wash, wash, rinse, final rinse) delivers consistently hygienic results with minimal operator involvement.']}
      featureStrip={[{ icon: '🔄', label: 'Type', value: 'Rack conveyor' }, { icon: '📦', label: 'Capacity', value: '120 racks/hr' }, { icon: '4️⃣', label: 'Zones', value: '4-zone wash' }, { icon: '🤖', label: 'Operation', value: 'Semi-automatic' }]}
      specs={[{ label: 'Model', value: 'DW-Rack' }, { label: 'Type', value: 'Rack conveyor' }, { label: 'Capacity', value: '120 racks/hr' }, { label: 'Wash Zones', value: '4 (pre, wash, rinse, final)' }, { label: 'Total Power', value: '28 kW' }, { label: 'Water per Rack', value: '1.8 L' }, { label: 'Width × Height × Depth', value: '3200 × 1550 × 760 mm' }, { label: 'Net Weight', value: '320 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: '4-Zone Wash', desc: 'Dedicated pre-wash, wash, rinse, and final rinse zones for thorough cleaning.' }, { title: 'Continuous Feed', desc: 'Conveyor system allows non-stop loading for maximum throughput.' }, { title: 'Low Water Use', desc: '1.8 L per rack — class-leading water efficiency.' }, { title: 'Heat Recovery', desc: 'Energy recovery system reduces heat output into the kitchen.' }, { title: 'Auto Dosing', desc: 'Integrated chemical dosing for consistent detergent application.' }, { title: 'HACCP Ready', desc: 'Data logging available for food safety documentation.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
