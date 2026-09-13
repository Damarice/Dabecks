import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WE32Page() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'WE-32' },
      ]}
      category="Washer Extractors"
      model="WE-32"
      subtitle="32 kg Heavy-Duty Industrial Washer Extractor — 500G Extract Force"
      image="/products/we32.jpg"
      placeholder="WE-32"
      keySpecs={[
        { label: 'Capacity', value: '32 kg' },
        { label: 'Extract G-Force', value: '500 G' },
        { label: 'Spin Speed', value: '1,200 RPM' },
      ]}
      description={[
        'The WE-32 is a high-performance industrial washer extractor engineered for demanding commercial laundry operations. With a 32 kg drum capacity and a powerful 500G extraction force, it dramatically reduces residual moisture content, cutting downstream drying times and energy consumption across your entire laundry line.',
        'Purpose-built for hotels, hospitals, industrial laundries, and large hospitality groups, the WE-32 combines a robust stainless steel drum with an advanced programmable controller that supports up to 99 custom wash programs. Its direct-drive inverter motor delivers whisper-quiet, vibration-free performance and significantly extends service life compared to conventional belt-driven machines.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'Extract Force', value: '500 G High-Speed Extraction' },
        { icon: '🔄', label: 'Programs', value: 'Up to 99 Wash Programs' },
        { icon: '💧', label: 'Water Savings', value: 'Auto Water Level Control' },
        { icon: '🔧', label: 'Drive', value: 'Inverter Direct Drive Motor' },
      ]}
      specs={[
        { label: 'Drum Capacity', value: '32 kg / 70 lbs' },
        { label: 'Drum Volume', value: '320 L' },
        { label: 'Extract G-Force', value: '500 G' },
        { label: 'Spin Speed', value: '1,200 RPM' },
        { label: 'Motor Power', value: '7.5 kW' },
        { label: 'Heating Power', value: '18 kW (Electric)' },
        { label: 'Water Connection', value: 'Hot & Cold, ¾" BSP' },
        { label: 'Drain Connection', value: 'Ø 50 mm' },
        { label: 'Dimensions (W×D×H)', value: '900 × 910 × 1,250 mm' },
        { label: 'Net Weight', value: '480 kg' },
      ]}
      features={[
        {
          title: 'High-Speed Extraction',
          desc: '500G centrifugal extraction force reduces residual moisture to under 50%, significantly cutting tumble dryer energy use and cycle times.',
        },
        {
          title: 'Inverter Direct Drive',
          desc: 'Belt-free inverter motor delivers smooth acceleration, reduces noise and vibration, and offers superior energy efficiency across all wash speeds.',
        },
        {
          title: '99 Programmable Wash Cycles',
          desc: 'Flexible microprocessor controller stores up to 99 user-defined programs covering temperature, spin speed, water levels, and chemical dosing signals.',
        },
        {
          title: 'Stainless Steel Drum & Tub',
          desc: 'Full 304-grade stainless steel drum and outer tub construction ensures corrosion resistance, longevity, and hygienic wash results.',
        },
        {
          title: 'Automatic Imbalance Detection',
          desc: 'Integrated load-sensing system detects linen imbalance during extraction and automatically redistributes or adjusts spin speed to protect the machine and linen.',
        },
        {
          title: 'Auto Chemical Dosing Interface',
          desc: 'Built-in dosing signal outputs (up to 4 channels) allow seamless integration with automatic detergent and softener dosing systems.',
        },
      ]}
      backHref="/solutions/laundry/washer-extractors"
      backLabel="All Washer Extractors"
    />
  );
}
