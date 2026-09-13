import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function WE18() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'WE-18' },
      ]}
      category="Washer Extractors" model="WE-18" subtitle="Washer extractor · 18 kg"
      image="/products/extractors/we18.jpg" placeholder="WE-18"
      keySpecs={[{ label: 'Capacity', value: '18 kg' }, { label: 'G-Force', value: '400 G' }, { label: 'Spin', value: '1000 RPM' }]}
      description={[
        'The WE-18 is a high-performance washer extractor combining powerful washing with 400G extraction force. Reduces residual moisture to 45%, cutting drying time significantly.',
        'Ideal for hotels, hospitals, and care facilities requiring reliable, high-throughput laundry processing.',
      ]}
      featureStrip={[
        { icon: '💧', label: 'G-Force', value: '400 G extraction' },
        { icon: '🌀', label: 'Spin Speed', value: '1000 RPM' },
        { icon: '⚡', label: 'Energy', value: 'A++ rated' },
        { icon: '🔧', label: 'Programs', value: '16 pre-set' },
      ]}
      specs={[
        { label: 'Model', value: 'WE-18' },
        { label: 'Load Capacity', value: '18 kg' },
        { label: 'G-Force', value: '400 G' },
        { label: 'Spin Speed', value: '1000 RPM' },
        { label: 'Residual Moisture', value: '45%' },
        { label: 'Water Usage', value: '80 L/cycle' },
        { label: 'Width × Height × Depth', value: '700 × 950 × 1000 mm' },
        { label: 'Net Weight', value: '185 kg' },
        { label: 'Supply Voltage', value: '380–415 V / 50 Hz' },
        { label: 'Noise Level', value: '60 dB(A)' },
      ]}
      features={[
        { title: 'High G-Force Extraction', desc: '400G removes maximum moisture for faster drying.' },
        { title: 'Low Residual Moisture', desc: 'Delivers 45% RMC for reduced dryer energy use.' },
        { title: 'Programmable Controls', desc: '16 pre-set programs for all fabric and soil types.' },
        { title: 'Robust Construction', desc: 'Heavy-duty frame handles continuous industrial use.' },
        { title: 'Water Efficient', desc: 'Optimised water usage reduces operational costs.' },
        { title: 'Low Vibration', desc: 'Balanced drum minimises vibration and noise.' },
      ]}
      backHref="/solutions/laundry/washer-extractors" backLabel="All Washer Extractors"
    />
  );
}
