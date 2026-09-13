import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function WinterhalterUCM() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'Winterhalter UC-M' }]}
      category="Dishwashers" model="Winterhalter UC-M" subtitle="Undercounter commercial dishwasher"
      image="/products/dishwashers/winterhalter-ucm.jpg" placeholder="Winterhalter+UC-M"
      keySpecs={[{ label: 'Racks/hr', value: '35' }, { label: 'Cycle', value: '60 seconds' }, { label: 'Water/rack', value: '1.9 L' }]}
      description={['The Winterhalter UC-M is a premium undercounter dishwasher renowned for its class-leading water efficiency and wash quality. With just 1.9 L per rack, it delivers outstanding results while minimising running costs.', 'ConnectLine technology allows remote monitoring and data logging, making it ideal for operations that require HACCP documentation and service tracking.']}
      featureStrip={[{ icon: '💧', label: 'Water/rack', value: '1.9 L — best in class' }, { icon: '📡', label: 'ConnectLine', value: 'Remote monitoring' }, { icon: '⏱️', label: 'Cycle', value: '60 seconds' }, { icon: '🌡️', label: 'Rinse Temp', value: '85 °C' }]}
      specs={[{ label: 'Model', value: 'Winterhalter UC-M' }, { label: 'Capacity', value: '35 racks/hr' }, { label: 'Cycle Time', value: '60 seconds' }, { label: 'Water per Rack', value: '1.9 L' }, { label: 'Rinse Temperature', value: '85 °C' }, { label: 'Connectivity', value: 'ConnectLine' }, { label: 'Width × Height × Depth', value: '600 × 820 × 600 mm' }, { label: 'Net Weight', value: '45 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'NSF, CE, WRAS' }]}
      features={[{ title: 'Best-in-Class Water Use', desc: '1.9 L per rack — lowest water consumption in its class.' }, { title: 'ConnectLine', desc: 'Remote monitoring, HACCP logging, and service alerts via connectivity.' }, { title: 'Perfect Wash Quality', desc: 'Winterhalter wash chemistry system guarantees spotless results.' }, { title: 'Quiet Operation', desc: 'Low noise levels suitable for open kitchen environments.' }, { title: 'Compact Footprint', desc: 'Standard 600mm undercounter form factor for easy installation.' }, { title: 'Long Service Life', desc: 'Built to last with robust components and global service support.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
