import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function WE24() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'WE-24' },
      ]}
      category="Washer Extractors" model="WE-24" subtitle="Washer extractor · 24 kg"
      image="/products/extractors/we24.jpg" placeholder="WE-24"
      keySpecs={[{ label: 'Capacity', value: '24 kg' }, { label: 'G-Force', value: '450 G' }, { label: 'Spin', value: '1100 RPM' }]}
      description={[
        'The WE-24 delivers 24kg capacity with 450G extraction force — perfect for mid-to-large commercial laundry operations needing higher throughput.',
        'Its advanced suspension system eliminates the need for concrete mounting, allowing flexible installation.',
      ]}
      featureStrip={[
        { icon: '💧', label: 'G-Force', value: '450 G' },
        { icon: '🌀', label: 'Spin Speed', value: '1100 RPM' },
        { icon: '⚡', label: 'Energy', value: 'A++ rated' },
        { icon: '🏗️', label: 'Install', value: 'No concrete pad' },
      ]}
      specs={[
        { label: 'Model', value: 'WE-24' },
        { label: 'Load Capacity', value: '24 kg' },
        { label: 'G-Force', value: '450 G' },
        { label: 'Spin Speed', value: '1100 RPM' },
        { label: 'Residual Moisture', value: '42%' },
        { label: 'Water Usage', value: '100 L/cycle' },
        { label: 'Width × Height × Depth', value: '800 × 1000 × 1050 mm' },
        { label: 'Net Weight', value: '220 kg' },
        { label: 'Supply Voltage', value: '380–415 V / 50 Hz' },
        { label: 'Noise Level', value: '61 dB(A)' },
      ]}
      features={[
        { title: '450G Extraction', desc: 'Removes more moisture per cycle for faster drying.' },
        { title: 'Free-Standing', desc: 'Advanced suspension removes need for concrete pad mounting.' },
        { title: 'Higher Capacity', desc: '24 kg handles bigger loads for greater throughput.' },
        { title: 'Smart Programs', desc: 'Programmable cycles for all linen and soil types.' },
        { title: 'Water Saving', desc: 'Integrated water reuse system reduces consumption.' },
        { title: 'Energy Efficient', desc: 'A++ rated for low operating costs.' },
      ]}
      backHref="/solutions/laundry/washer-extractors" backLabel="All Washer Extractors"
    />
  );
}
