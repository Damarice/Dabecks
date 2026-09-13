import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function UnimacUT050() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers', href: '/solutions/laundry/industrial-dryers' },
        { label: 'UniMac UT050' },
      ]}
      category="Industrial Dryers"
      model="UniMac UT050"
      subtitle="Industrial tumble dryer · 50 lbs / 23 kg"
      image="/products/dryers/unimac-ut050.jpg"
      placeholder="UniMac+UT050"
      keySpecs={[
        { label: 'Capacity', value: '50 lbs' },
        { label: 'Rating', value: 'ENERGY STAR' },
        { label: 'Heat', value: 'Gas/Electric' },
      ]}
      description={[
        'The UniMac UT050 is a proven industrial tumble dryer designed for high-throughput commercial laundry operations. ENERGY STAR certified with both gas and electric heating options.',
        'Built for reliability and ease of use, the UT050 delivers consistent drying performance with low maintenance requirements.',
      ]}
      featureStrip={[
        { icon: '⚡', label: 'ENERGY STAR', value: 'Certified efficiency' },
        { icon: '🔥', label: 'Heat Options', value: 'Gas or electric' },
        { icon: '🌀', label: 'Drum', value: 'Stainless steel' },
        { icon: '🔧', label: 'Maintenance', value: 'Front access panel' },
      ]}
      specs={[
        { label: 'Model', value: 'UniMac UT050' },
        { label: 'Load Capacity', value: '50 lbs (23 kg)' },
        { label: 'Drum Volume', value: '210 litres' },
        { label: 'Heating Options', value: 'Gas or Electric' },
        { label: 'Certification', value: 'ENERGY STAR' },
        { label: 'Width × Height × Depth', value: '762 × 1118 × 813 mm' },
        { label: 'Net Weight', value: '95 kg' },
        { label: 'Supply Voltage', value: '208–240 V / 60 Hz' },
        { label: 'Exhaust Type', value: 'Single-point rear' },
        { label: 'Noise Level', value: '68 dB(A)' },
      ]}
      features={[
        { title: 'Dual Heat Options', desc: 'Choose gas or electric to suit your facility infrastructure.' },
        { title: 'ENERGY STAR', desc: 'Certified for low energy consumption and reduced utility costs.' },
        { title: 'High Throughput', desc: '50 lb capacity processes large loads efficiently.' },
        { title: 'Reversing Drum', desc: 'Drum reversal prevents tangling and ensures even drying.' },
        { title: 'Simple Controls', desc: 'Easy-to-use interface requires minimal operator training.' },
        { title: 'Proven Reliability', desc: 'Trusted by commercial laundries worldwide.' },
      ]}
      backHref="/solutions/laundry/industrial-dryers"
      backLabel="All Dryers"
    />
  );
}
