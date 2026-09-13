import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function UnoxSTEAMAIR() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Steamers', href: '/solutions/kitchen/steamers' }, { label: 'Unox STEAMAIR' }]}
      category="Steamers" model="Unox STEAMAIR" subtitle="Convection steamer · 10 pans"
      image="/products/steamers/unox-steamair.jpg" placeholder="Unox+STEAMAIR"
      keySpecs={[{ label: 'Pans', value: '10 × GN 1/1' }, { label: 'Technology', value: 'STEAM.Maxi' }, { label: 'Power', value: '11 kW' }]}
      description={['The Unox STEAMAIR combines convection and steam cooking in a versatile, easy-to-use unit. STEAM.Maxi technology delivers precise humidity control for consistent results across all products.', 'Its CHEFTOP.NET connectivity allows remote monitoring and recipe management across multiple kitchen locations.']}
      featureStrip={[{ icon: '💧', label: 'Steam Tech', value: 'STEAM.Maxi' }, { icon: '💨', label: 'Air System', value: 'AIR.Maxi 6-speed' }, { icon: '📡', label: 'Connected', value: 'CHEFTOP.NET' }, { icon: '⚡', label: 'Power', value: '11 kW' }]}
      specs={[{ label: 'Model', value: 'Unox STEAMAIR 10' }, { label: 'Capacity', value: '10 × GN 1/1' }, { label: 'Temperature Range', value: '30–130 °C (steam)' }, { label: 'Total Power', value: '11 kW' }, { label: 'Steam System', value: 'STEAM.Maxi' }, { label: 'Fan System', value: 'AIR.Maxi (6-speed)' }, { label: 'Width × Height × Depth', value: '900 × 905 × 782 mm' }, { label: 'Net Weight', value: '98 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Connectivity', value: 'CHEFTOP.NET' }]}
      features={[{ title: 'STEAM.Maxi', desc: 'Precise steam injection for controlled humidity in every cooking mode.' }, { title: 'AIR.Maxi Fan System', desc: '6-speed fan ensures even air and steam distribution.' }, { title: 'Multi-Mode Cooking', desc: 'Convection, steam, and combination modes for versatile cooking.' }, { title: 'Remote Management', desc: 'CHEFTOP.NET connectivity for multi-site recipe and monitoring.' }, { title: 'Automatic Washing', desc: 'Built-in wash program for efficient daily cleaning.' }, { title: 'HACCP Logging', desc: 'Automatic data recording for food safety compliance.' }]}
      backHref="/solutions/kitchen/steamers" backLabel="All Steamers"
    />
  );
}
