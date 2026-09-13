import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function UnimacUC60() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'UniMac UC60' },
      ]}
      category="Commercial Washers"
      model="UniMac UC60"
      subtitle="Universal commercial washer · 60 lbs / 27 kg"
      image="/products/washers/unimac-uc60.jpg"
      placeholder="UniMac UC60"
      keySpecs={[
        { label: 'Capacity', value: '27 kg' },
        { label: 'Spin Speed', value: '1200 RPM' },
        { label: 'Rating', value: 'ENERGY STAR' },
      ]}
      description={[
        'The UniMac UC60 is a versatile universal commercial washer that adapts to existing laundry systems. With ENERGY STAR certification and 60 lbs capacity, it is ideal for medium-to-large commercial facilities.',
        'Engineered for reliability and efficiency, the UC60 combines proven technology with modern performance standards — delivering consistent, high-quality results in hotels, hospitals, and on-premise laundries.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'ENERGY STAR', value: 'Certified efficient operation' },
        { icon: '💧', label: 'Water Savings', value: 'Low consumption per cycle' },
        { icon: '⚙️', label: 'Spin Speed', value: '1200 RPM extraction' },
        { icon: '🔧', label: 'Universal', value: 'Adapts to existing systems' },
      ]}
      specs={[
        { label: 'Model', value: 'UniMac UC60' },
        { label: 'Load Capacity', value: '60 lbs (27 kg)' },
        { label: 'Drum Volume', value: '250 litres' },
        { label: 'Spin Speed (max)', value: '1200 RPM' },
        { label: 'Water Usage per Cycle', value: '90 litres' },
        { label: 'Certification', value: 'ENERGY STAR' },
        { label: 'Heating Element Power', value: '9.0 kW' },
        { label: 'Motor Power', value: '2.2 kW' },
        { label: 'Width × Height × Depth', value: '750 × 1000 × 1050 mm' },
        { label: 'Net Weight', value: '140 kg' },
        { label: 'Supply Voltage', value: '380–415 V / 60 Hz' },
        { label: 'Noise Level (wash / spin)', value: '55 / 75 dB(A)' },
      ]}
      features={[
        { title: 'Universal Compatibility', desc: 'Designed to integrate seamlessly with existing laundry system setups.' },
        { title: 'ENERGY STAR Certified', desc: 'Meets rigorous efficiency standards for reduced utility costs.' },
        { title: 'Large Capacity', desc: '60 lbs handles high-volume loads efficiently.' },
        { title: 'Advanced Programs', desc: 'Wide range of wash programs adaptable to different linen types.' },
        { title: 'Low Maintenance', desc: 'Simplified design reduces service frequency and repair costs.' },
        { title: 'Proven Reliability', desc: 'Widely deployed in commercial laundries across multiple industries.' },
      ]}
      backHref="/solutions/laundry/commercial-washers"
      backLabel="All Commercial Washers"
    />
  );
}
