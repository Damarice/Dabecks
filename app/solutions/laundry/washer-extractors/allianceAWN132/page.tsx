import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function AllianceAWN132Page() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'Alliance AWN132' },
      ]}
      category="Washer Extractors"
      model="Alliance AWN132"
      subtitle="132 lbs / 60 kg Soft-Mount Washer Extractor — 400G Extraction"
      image="/products/allianceawn132.jpg"
      placeholder="Alliance AWN132"
      keySpecs={[
        { label: 'Capacity', value: '60 kg / 132 lbs' },
        { label: 'Extract G-Force', value: '400 G' },
        { label: 'Mount Type', value: 'Soft-Mount' },
      ]}
      description={[
        'The Alliance AWN132 is a proven soft-mount washer extractor built for commercial and industrial laundry operations requiring reliable, high-throughput performance. With a 60 kg drum capacity and 400G extraction force, the AWN132 strikes the ideal balance between moisture removal efficiency and gentle linen handling, making it suitable for hotel linens, uniforms, and healthcare textiles alike.',
        'Alliance\'s proprietary ProBalance™ suspension system effectively isolates extraction vibration, allowing installation on upper floors without structural reinforcement. The machine\'s robust stainless steel drum, combined with a field-proven microprocessor controller, delivers consistent wash results while minimising lifecycle service costs.',
      ]}
      featureStrip={[
        { icon: '⚖️', label: 'Suspension', value: 'ProBalance™ Soft-Mount System' },
        { icon: '⚡', label: 'Extract Force', value: '400 G Centrifugal Extraction' },
        { icon: '🏨', label: 'Applications', value: 'Hotels, Healthcare, Uniforms' },
        { icon: '🔧', label: 'Serviceability', value: 'Front-Access Service Panels' },
      ]}
      specs={[
        { label: 'Drum Capacity', value: '60 kg / 132 lbs' },
        { label: 'Drum Volume', value: '600 L' },
        { label: 'Extract G-Force', value: '400 G' },
        { label: 'Spin Speed', value: '960 RPM' },
        { label: 'Motor Power', value: '15 kW' },
        { label: 'Heating Options', value: 'Steam or Electric' },
        { label: 'Water Connection', value: 'Hot & Cold, 1" BSP' },
        { label: 'Drain Connection', value: 'Ø 63 mm' },
        { label: 'Dimensions (W×D×H)', value: '1,280 × 1,200 × 1,820 mm' },
        { label: 'Net Weight', value: '950 kg' },
      ]}
      features={[
        {
          title: 'ProBalance™ Suspension',
          desc: 'Alliance\'s engineered soft-mount suspension system absorbs centrifugal forces during high-speed extraction, enabling floor installation without anchoring bolts.',
        },
        {
          title: '400G Extraction Efficiency',
          desc: 'Powerful 400G extraction reduces residual moisture in linen to under 55%, cutting dryer energy consumption and accelerating overall laundry throughput.',
        },
        {
          title: 'Microprocessor Program Controller',
          desc: 'Intuitive digital controller with large display supports up to 50 customisable wash programs, precise temperature control, and multi-stage rinse cycles.',
        },
        {
          title: 'Stainless Steel Drum & Spider',
          desc: 'Heavy-gauge 304 stainless steel drum with reinforced spider assembly provides exceptional resistance to chemical corrosion and mechanical fatigue.',
        },
        {
          title: 'Front-Access Serviceability',
          desc: 'All serviceable components — bearings, motor, heating elements, and control panel — are accessible from the front, minimising maintenance time and workshop footprint.',
        },
        {
          title: 'Multi-Energy Compatibility',
          desc: 'Available in steam or electric heating configurations with optional gas conversion, providing flexible integration with existing facility energy infrastructure.',
        },
      ]}
      backHref="/solutions/laundry/washer-extractors"
      backLabel="All Washer Extractors"
    />
  );
}
