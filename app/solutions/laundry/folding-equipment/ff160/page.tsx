import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function FF160Page() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'FF-160' },
      ]}
      category="Folding Equipment"
      model="FF-160"
      subtitle="1,600 mm Width High-Capacity Automatic Flatwork Folder — Dual Lane"
      image="/products/ff160.jpg"
      placeholder="FF-160"
      keySpecs={[
        { label: 'Folding Width', value: '1,600 mm' },
        { label: 'Output Speed', value: 'Up to 900 pcs/hr' },
        { label: 'Lanes', value: '2 Independent Lanes' },
      ]}
      description={[
        'The FF-160 is a high-capacity dual-lane automatic flatwork folder built for large commercial laundries and industrial linen processing operations. Its 1,600 mm working width accommodates king-size bed linen, large tablecloths, and oversized institutional sheets, while the independent dual-lane design doubles throughput by processing two smaller items simultaneously.',
        'Designed to integrate directly with continuous-feed ironing lines and linen spreaders, the FF-160 forms the cornerstone of fully automated flatwork finishing systems. Advanced programmable logic and servo-driven fold plates ensure perfect fold geometry across every piece, reducing labour dependency and achieving consistent presentation standards demanded by luxury hospitality clients.',
      ]}
      featureStrip={[
        { icon: '📐', label: 'Fold Width', value: '1,600 mm Maximum' },
        { icon: '🚀', label: 'Throughput', value: 'Up to 900 Pieces / Hour' },
        { icon: '🔀', label: 'Lanes', value: '2 Independent Processing Lanes' },
        { icon: '🤖', label: 'Automation', value: 'Full Ironing Line Integration' },
      ]}
      specs={[
        { label: 'Maximum Fold Width', value: '1,600 mm' },
        { label: 'Maximum Piece Length', value: '4,000 mm' },
        { label: 'Output Speed', value: 'Up to 900 pieces/hr' },
        { label: 'Fold Patterns', value: '12 programmable' },
        { label: 'Number of Lanes', value: '2 independent lanes' },
        { label: 'Infeed Method', value: 'Spreader / Feeder Interface' },
        { label: 'Drive Power', value: '3.0 kW' },
        { label: 'Compressed Air', value: '6 bar, 55 L/min' },
        { label: 'Dimensions (W×D×H)', value: '1,900 × 1,050 × 1,500 mm' },
        { label: 'Net Weight', value: '580 kg' },
      ]}
      features={[
        {
          title: 'Dual-Lane Processing',
          desc: 'Two independently controlled processing lanes double throughput on smaller items while still accommodating full-width king-size linen in single-lane mode.',
        },
        {
          title: '12 Programmable Fold Patterns',
          desc: 'Servo-driven fold plates execute complex multi-stage fold sequences with precision, supporting luxury presentation standards for high-end hospitality clients.',
        },
        {
          title: 'Full Ironing Line Integration',
          desc: 'Standardised interface connects directly to chest ironers and linen spreaders, enabling fully automated flatwork finishing from feed to stacked output.',
        },
        {
          title: 'Oversized Linen Handling',
          desc: '1,600 mm working width with extended infeed conveyor handles king-size sheets (up to 4,000 mm length) without bunching or misalignment.',
        },
        {
          title: 'Servo-Driven Fold Plates',
          desc: 'Electronically controlled servo actuators replace pneumatic cylinder fold systems, delivering faster cycle times, lower energy consumption, and superior fold repeatability.',
        },
        {
          title: 'Stacked Output Management',
          desc: 'Integrated batch counter and automatic stacking conveyor deliver pre-counted stacks ready for shelf or trolley loading, streamlining post-fold handling.',
        },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
