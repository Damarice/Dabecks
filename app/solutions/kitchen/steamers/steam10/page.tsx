import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Steam10() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Steamers', href: '/solutions/kitchen/steamers' }, { label: 'Steam-10' }]}
      category="Steamers" model="Steam-10" subtitle="Floor convection steamer · 10 pans"
      image="/products/steamers/steam10.jpg" placeholder="Steam-10"
      keySpecs={[{ label: 'Pans', value: '10 × GN 1/1' }, { label: 'Type', value: 'Convection steam' }, { label: 'Power', value: '12 kW' }]}
      description={['The Steam-10 is a full-size floor convection steamer with 10-pan capacity — the industry standard for medium-to-large commercial kitchens. Ideal for hospitals, schools, hotels, and restaurants requiring reliable high-volume steam cooking.', 'Plumbed or connectionless options available. Its smart control system allows precise timing and temperature management.']}
      featureStrip={[{ icon: '♨️', label: 'Capacity', value: '10 × GN 1/1' }, { icon: '⚡', label: 'Power', value: '12 kW' }, { icon: '🔌', label: 'Options', value: 'Plumbed or connectionless' }, { icon: '🎯', label: 'Control', value: 'Smart timer' }]}
      specs={[{ label: 'Model', value: 'Steam-10' }, { label: 'Capacity', value: '10 × GN 1/1' }, { label: 'Type', value: 'Convection steamer' }, { label: 'Power', value: '12 kW' }, { label: 'Connection', value: 'Plumbed or reservoir' }, { label: 'Temperature', value: '100 °C steam' }, { label: 'Width × Height × Depth', value: '790 × 1050 × 665 mm' }, { label: 'Net Weight', value: '78 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Certification', value: 'NSF, CE' }]}
      features={[{ title: '10-Pan Capacity', desc: 'Full-size floor unit handles large volumes for high-output kitchens.' }, { title: 'Smart Controls', desc: 'Digital timer and temperature controls for precise cooking management.' }, { title: 'Dual Connection', desc: 'Choose plumbed or reservoir connection to suit your installation.' }, { title: 'Even Steam', desc: 'Convection fans distribute steam uniformly across all pan positions.' }, { title: 'Healthy Cooking', desc: 'Steam preserves nutrients, colour, and texture better than boiling.' }, { title: 'Easy Cleaning', desc: 'Self-draining chamber and stainless interior simplify daily cleaning.' }]}
      backHref="/solutions/kitchen/steamers" backLabel="All Steamers"
    />
  );
}
