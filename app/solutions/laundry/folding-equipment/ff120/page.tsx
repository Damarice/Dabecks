import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function FF120Page() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'FF-120' },
      ]}
      category="Folding Equipment"
      model="FF-120"
      subtitle="1,200 mm Width Automatic Flatwork Folder for Sheets, Tablecloths & Large Linens"
      image="/products/ff120.jpg"
      placeholder="FF-120"
      keySpecs={[
        { label: 'Folding Width', value: '1,200 mm' },
        { label: 'Output Speed', value: 'Up to 600 pcs/hr' },
        { label: 'Fold Patterns', value: '8 Programmable' },
      ]}
      description={[
        'The FF-120 is a compact yet high-performance automatic flatwork folder designed for commercial laundries processing sheets, duvet covers, tablecloths, and other large flat linen items up to 1,200 mm wide. Equipped with eight programmable fold patterns, it delivers precise, consistent folds at speeds of up to 600 pieces per hour, significantly reducing manual labour requirements.',
        'With an intuitive touchscreen controller and quick-change format rollers, the FF-120 adapts seamlessly between different linen types without lengthy reconfiguration. Its compact footprint makes it ideal for on-premise laundries in hotels, hospitals, and linen rental operations where floor space is at a premium.',
      ]}
      featureStrip={[
        { icon: '📐', label: 'Fold Width', value: '1,200 mm Maximum' },
        { icon: '🚀', label: 'Throughput', value: 'Up to 600 Pieces / Hour' },
        { icon: '🔀', label: 'Fold Patterns', value: '8 Programmable Patterns' },
        { icon: '📟', label: 'Controller', value: 'Touch-Screen Program Control' },
      ]}
      specs={[
        { label: 'Maximum Fold Width', value: '1,200 mm' },
        { label: 'Maximum Piece Length', value: '3,200 mm' },
        { label: 'Output Speed', value: 'Up to 600 pieces/hr' },
        { label: 'Fold Patterns', value: '8 programmable' },
        { label: 'Number of Lanes', value: '1 Lane' },
        { label: 'Infeed Method', value: 'Manual / Spreader Compatible' },
        { label: 'Drive Power', value: '1.5 kW' },
        { label: 'Compressed Air', value: '6 bar, 30 L/min' },
        { label: 'Dimensions (W×D×H)', value: '1,450 × 900 × 1,350 mm' },
        { label: 'Net Weight', value: '320 kg' },
      ]}
      features={[
        {
          title: '8 Programmable Fold Patterns',
          desc: 'Supports cross-fold, quarter-fold, thirds, and combination patterns, configurable per linen type and stored for instant one-touch recall.',
        },
        {
          title: 'Consistent Fold Accuracy',
          desc: 'Precision guide rollers and pneumatic fold plates ensure repeatable fold alignment within ±5 mm across the entire production run.',
        },
        {
          title: 'Quick Format Changeover',
          desc: 'Adjustable side guides and format rollers allow fast changeover between different linen sizes without the need for tools.',
        },
        {
          title: 'Spreader Feed Compatibility',
          desc: 'Direct interface connection available for automatic linen spreader/feeders, enabling a fully automated ironer-to-folder production line.',
        },
        {
          title: 'Compact Footprint',
          desc: 'Space-efficient design suits installations where floor area is limited, without sacrificing throughput capacity or fold quality.',
        },
        {
          title: 'Low Maintenance Design',
          desc: 'Easily accessible belt drives, fold rollers, and pneumatic components minimise service intervals and keep operational downtime to a minimum.',
        },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
