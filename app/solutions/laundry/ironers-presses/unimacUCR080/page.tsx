import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function UnimacUCR080() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'UniMac UCR080' },
      ]}
      category="Ironers & Presses"
      model="UniMac UCR080"
      subtitle="Chest press ironer · 800 mm"
      image="/products/ironers/unimac-ucr080.jpg"
      placeholder="UniMac+UCR080"
      keySpecs={[{ label: 'Width', value: '800 mm' }, { label: 'Type', value: 'Chest press' }, { label: 'Power', value: '3.2 kW' }]}
      description={[
        'The UniMac UCR080 is a professional chest press ironer that delivers exceptional results on shirts, uniforms, and shaped garments. Its 800mm pressing surface handles a wide variety of items efficiently.',
        'Ideal for hotel valet services, uniform cleaning operations, and commercial dry-cleaning facilities requiring consistent garment finishing.',
      ]}
      featureStrip={[
        { icon: '👔', label: 'Garment Press', value: 'Shirts & uniforms' },
        { icon: '🌡️', label: 'Press Width', value: '800 mm' },
        { icon: '⚡', label: 'Heat Up', value: 'Fast warm-up time' },
        { icon: '🛡️', label: 'Fabric Safe', value: 'Precise pressure' },
      ]}
      specs={[
        { label: 'Model', value: 'UniMac UCR080' },
        { label: 'Press Width', value: '800 mm' },
        { label: 'Press Type', value: 'Chest press' },
        { label: 'Heating Power', value: '3.2 kW' },
        { label: 'Max Temperature', value: '150 °C' },
        { label: 'Steam Pressure', value: '4–6 bar' },
        { label: 'Width × Height × Depth', value: '1000 × 1100 × 620 mm' },
        { label: 'Net Weight', value: '75 kg' },
        { label: 'Supply Voltage', value: '220–240 V / 50 Hz' },
        { label: 'Noise Level', value: '62 dB(A)' },
      ]}
      features={[
        { title: 'Chest Press Design', desc: 'Contoured pressing surface for shirts, jackets, and uniforms.' },
        { title: 'Steam Injection', desc: 'Precise steam delivery for wrinkle-free results.' },
        { title: 'Adjustable Pressure', desc: 'Control pressing pressure for different fabrics.' },
        { title: 'Fast Warm-Up', desc: 'Reaches operating temperature quickly for efficient use.' },
        { title: 'Fabric Protection', desc: 'Prevents shine and damage on delicate fabrics.' },
        { title: 'Ergonomic Design', desc: 'Comfortable working height reduces operator fatigue.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers"
    />
  );
}
