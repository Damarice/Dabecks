import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function HobartAM16() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Dishwashers', href: '/solutions/kitchen/dishwashers' }, { label: 'Hobart AM16' }]}
      category="Dishwashers" model="Hobart AM16" subtitle="High-temp door-type dishwasher"
      image="/products/dishwashers/hobart-am16.jpg" placeholder="Hobart+AM16"
      keySpecs={[{ label: 'Racks/hr', value: '52' }, { label: 'Sanitise', value: '180 °F / 82 °C' }, { label: 'Cycle', value: '70 seconds' }]}
      description={['The Hobart AM16 is a high-temperature door-type dishwasher that sanitises without chemical sanitiser — using 180 °F rinse water to kill bacteria and meet NSF standards. This reduces chemical costs and simplifies compliance.', 'Built with Hobart\'s proven reliability, it handles up to 52 racks per hour for medium to large commercial kitchen operations.']}
      featureStrip={[{ icon: '🌡️', label: 'Sanitise Temp', value: '180 °F / 82 °C' }, { icon: '🧪', label: 'Chemicals', value: 'No sanitiser needed' }, { icon: '📦', label: 'Capacity', value: '52 racks/hr' }, { icon: '⏱️', label: 'Cycle', value: '70 seconds' }]}
      specs={[{ label: 'Model', value: 'Hobart AM16' }, { label: 'Type', value: 'High-temp door type' }, { label: 'Capacity', value: '52 racks/hr' }, { label: 'Cycle Time', value: '70 seconds' }, { label: 'Final Rinse Temp', value: '180 °F (82 °C)' }, { label: 'Booster Heater', value: 'Built-in 5.8 kW' }, { label: 'Width × Height × Depth', value: '660 × 1422 × 762 mm' }, { label: 'Net Weight', value: '102 kg' }, { label: 'Supply Voltage', value: '208–240 V / 60 Hz' }, { label: 'Certification', value: 'NSF, UL, ENERGY STAR' }]}
      features={[{ title: 'Chemical-Free Sanitising', desc: '180 °F rinse eliminates need for chemical sanitiser — reducing cost and complexity.' }, { title: 'Built-in Booster', desc: 'Integrated booster heater maintains final rinse temperature consistently.' }, { title: 'ENERGY STAR', desc: 'Certified for energy efficiency — lower utility costs throughout ownership.' }, { title: 'NSF Certified', desc: 'Meets rigorous food safety and sanitation standards.' }, { title: 'Durable Build', desc: 'Hobart-quality construction for years of reliable commercial use.' }, { title: 'Easy Maintenance', desc: 'Accessible scrap screen and wash arms for daily cleaning.' }]}
      backHref="/solutions/kitchen/dishwashers" backLabel="All Dishwashers"
    />
  );
}
