import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function DosingUnitPage() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'Dosing Unit Pro' },
      ]}
      category="Laundry Accessories"
      model="Dosing Unit Pro"
      subtitle="Automatic Chemical Dosing System — Precision Detergent & Softener Dispensing"
      image="/products/dosingunit.jpg"
      placeholder="Dosing Unit Pro"
      keySpecs={[
        { label: 'Channels', value: '4 Independent' },
        { label: 'Accuracy', value: '±2% Dose Precision' },
        { label: 'Machine Interface', value: 'Universal Signal Input' },
      ]}
      description={[
        'The Dosing Unit Pro is a precision automatic chemical dosing system designed to integrate seamlessly with commercial washing machines, ensuring accurate, consistent delivery of detergents, bleach, softeners, and other laundry chemicals on every cycle. By eliminating manual chemical measurement, it dramatically reduces chemical waste, prevents overdosing damage to linen, and improves wash result consistency across all machine types.',
        'With four independent dosing channels, the system handles complete detergent programs — pre-wash detergent, main wash detergent, bleach, and softener — all triggered automatically via standard wash machine signal outputs. The unit\'s programmable dosing volumes per channel, combined with ±2% dispense accuracy, ensure optimum chemical utilisation and full compliance with linen care and hygiene protocols.',
      ]}
      featureStrip={[
        { icon: '🧪', label: 'Channels', value: '4 Independent Chemical Channels' },
        { icon: '🎯', label: 'Accuracy', value: '±2% Dispensing Precision' },
        { icon: '🔌', label: 'Interface', value: 'Universal Machine Signal Input' },
        { icon: '💰', label: 'Savings', value: 'Reduces Chemical Waste by 30%' },
      ]}
      specs={[
        { label: 'Number of Channels', value: '4 independent' },
        { label: 'Dosing Accuracy', value: '±2%' },
        { label: 'Pump Type', value: 'Peristaltic dosing pumps' },
        { label: 'Flow Rate per Channel', value: '0.1 – 2.0 L/min (adjustable)' },
        { label: 'Signal Input', value: '24V DC / 230V AC signal compatible' },
        { label: 'Chemical Compatibility', value: 'Acid, alkali, bleach, softener' },
        { label: 'Container Size Supported', value: '5 – 25 L drum' },
        { label: 'Power Supply', value: '230V AC, 50 Hz' },
        { label: 'Dimensions (W×D×H)', value: '380 × 220 × 480 mm' },
        { label: 'Net Weight', value: '8.5 kg' },
      ]}
      features={[
        {
          title: '4 Independent Dosing Channels',
          desc: 'Separate peristaltic pump circuits for pre-wash, main wash, bleach, and softener allow fully automated complete chemical programs with precise independent control of each product.',
        },
        {
          title: '±2% Dispensing Accuracy',
          desc: 'Calibrated peristaltic pump heads deliver chemicals within ±2% of programmed dose volume, ensuring wash quality consistency and preventing costly chemical overdosing.',
        },
        {
          title: 'Universal Machine Compatibility',
          desc: 'Accepts standard 24V DC or 230V AC wash machine signal outputs, allowing connection to virtually any commercial washing machine brand or model.',
        },
        {
          title: 'Chemical Waste Reduction',
          desc: 'Precise automated dosing typically reduces total chemical consumption by up to 30% compared to manual dispensing, lowering chemical procurement costs and environmental impact.',
        },
        {
          title: 'Level Monitoring Alerts',
          desc: 'Integrated chemical level sensors on each channel trigger visual and audible low-level alerts, preventing wash cycles from running without the correct chemicals.',
        },
        {
          title: 'Easy Calibration & Programming',
          desc: 'Front-panel digital display with keypad allows quick dosing volume adjustment and calibration per channel, with program storage for multiple machine types.',
        },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Laundry Accessories"
    />
  );
}
