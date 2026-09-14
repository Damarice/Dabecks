import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WH66LAC() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'WH6-6LAC' },
      ]}
      category="Electrolux Professional"
      model="WH6-6LAC"
      subtitle="Front-load commercial washer · 6 kg · Left-hand door"
      image="/products/washers/wh6-6lac.jpg"
      placeholder="WH6-6LAC"
      keySpecs={[
        { label: 'Capacity', value: '6 kg' },
        { label: 'Spin Speed', value: '1200 RPM' },
        { label: 'Energy', value: 'A+++' },
        { label: 'Door', value: 'Left-hand opening' },
      ]}
      description={[
        'The Electrolux Professional WH6-6LAC is a 6 kg front-load washer with a left-hand door opening (LAC configuration), designed for laundry rooms where a standard right-hand swing is not practical.',
        'It delivers the same professional wash performance and energy efficiency as the full WH6 series, making it the ideal solution for facilities that need flexibility in installation layout.',
      ]}
      featureStrip={[
        { icon: '🚪', label: 'Door Config', value: 'Left-hand opening (LAC)' },
        { icon: '⚡', label: 'Energy Class', value: 'A+++' },
        { icon: '💧', label: 'Water Saving', value: 'Up to 40%' },
        { icon: '⚙️', label: 'Controls', value: 'Programmable' },
      ]}
      specs={[
        { label: 'Model', value: 'WH6-6LAC' },
        { label: 'Load Capacity', value: '6 kg' },
        { label: 'Spin Speed (max)', value: '1200 RPM' },
        { label: 'Energy Class', value: 'A+++' },
        { label: 'Door Configuration', value: 'Left-hand opening (LAC)' },
        { label: 'Loading Type', value: 'Front-load' },
        { label: 'Drum Material', value: 'Stainless steel' },
        { label: 'Supply Voltage', value: '220–240 V / 50 Hz' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Left-Hand Door Opening', desc: 'LAC configuration allows flexible installation in laundry rooms where a standard right-hand door swing is not practical.' },
        { title: 'Full WH6 Performance', desc: 'All the energy efficiency, hygiene performance, and durability of the WH6 series in a configuration-specific model.' },
        { title: 'Space-Optimised', desc: 'Compact 6 kg capacity with flexible installation options for tight laundry room layouts.' },
        { title: 'Hygienic Wash Results', desc: 'Reaches wash temperatures up to 95°C, meeting hygiene standards for healthcare and hospitality.' },
      ]}
      backHref="/solutions/laundry/commercial-washers"
      backLabel="All Commercial Washers"
    />
  );
}
