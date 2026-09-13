import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function UnoxCHEFTOP() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Commercial Ovens', href: '/solutions/kitchen/commercial-ovens' }, { label: 'Unox CHEFTOP' }]}
      category="Commercial Ovens" model="Unox CHEFTOP" subtitle="Convection oven · 10 trays"
      image="/products/ovens/unox-cheftop.jpg" placeholder="Unox+CHEFTOP"
      keySpecs={[{ label: 'Capacity', value: '10 trays' }, { label: 'Technology', value: 'STEAM.Maxi' }, { label: 'Power', value: '13 kW' }]}
      description={['The Unox CHEFTOP is a professional convection oven featuring STEAM.Maxi technology for precise humidity control. Its 10-tray capacity and AIR.Maxi fan system ensure perfect air circulation for consistent results across every tray.', 'Designed for reliability and ease of use, it is a trusted choice for professional kitchens across hospitality and institutional food service.']}
      featureStrip={[{ icon: '💨', label: 'Air System', value: 'AIR.Maxi' }, { icon: '💧', label: 'Steam', value: 'STEAM.Maxi' }, { icon: '📱', label: 'Control', value: 'CHEFTOP.NET' }, { icon: '⚡', label: 'Power', value: '13 kW' }]}
      specs={[{ label: 'Model', value: 'Unox CHEFTOP' }, { label: 'Capacity', value: '10 × GN 1/1' }, { label: 'Temperature Range', value: '30–270 °C' }, { label: 'Total Power', value: '13 kW' }, { label: 'Air System', value: 'AIR.Maxi (6-speed)' }, { label: 'Steam System', value: 'STEAM.Maxi' }, { label: 'Width × Height × Depth', value: '900 × 905 × 782 mm' }, { label: 'Net Weight', value: '105 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Connectivity', value: 'CHEFTOP.NET' }]}
      features={[{ title: 'AIR.Maxi Technology', desc: '6-speed fan system ensures perfectly even air distribution across all trays.' }, { title: 'STEAM.Maxi', desc: 'Precise humidity injection for baking, steaming, and combination cooking.' }, { title: 'CHEFTOP.NET', desc: 'Remote connectivity for monitoring and recipe management.' }, { title: 'Automatic Cleaning', desc: 'Built-in washing system simplifies end-of-service cleaning.' }, { title: 'Recipe Storage', desc: 'Unlimited recipe storage for consistent results across multiple sites.' }, { title: 'HACCP Ready', desc: 'Automatic cooking log for food safety compliance.' }]}
      backHref="/solutions/kitchen/commercial-ovens" backLabel="All Ovens"
    />
  );
}
