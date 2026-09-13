import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function UnimacUFFPage() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'UniMac UFF' },
      ]}
      category="Folding Equipment"
      model="UniMac UFF"
      subtitle="Universal Flatwork Folder — Multi-Format Linen Folding for Any Operation"
      image="/products/unimacuff.jpg"
      placeholder="UniMac UFF"
      keySpecs={[
        { label: 'Folding Width', value: 'Up to 1,400 mm' },
        { label: 'Versatility', value: 'Universal Multi-Format' },
        { label: 'Fold Patterns', value: '15 Programmable' },
      ]}
      description={[
        'The UniMac UFF is a versatile universal flatwork folder engineered to handle the broadest possible range of flat linen items in a single compact machine. From small face cloths to large king-size sheets, the UFF adapts to any item format through its 15 programmable fold patterns and continuously adjustable guide system, making it the most flexible single-machine folding solution in the UniMac portfolio.',
        'Built on UniMac\'s platform of operational reliability, the UFF features the same UniLinc™ connectivity as the broader UniMac range, enabling integration with laundry management systems for production tracking and remote diagnostics. Its modular design also allows future field expansion with optional small-piece attachment modules, protecting your investment as operational requirements evolve.',
      ]}
      featureStrip={[
        { icon: '🔀', label: 'Versatility', value: 'Universal Multi-Format Capability' },
        { icon: '📐', label: 'Fold Width', value: 'Up to 1,400 mm' },
        { icon: '💻', label: 'Connectivity', value: 'UniLinc™ Network Integration' },
        { icon: '🔧', label: 'Expandability', value: 'Modular Field Expansion Options' },
      ]}
      specs={[
        { label: 'Maximum Fold Width', value: '1,400 mm' },
        { label: 'Maximum Piece Length', value: '3,600 mm' },
        { label: 'Minimum Item Size', value: '300 × 300 mm' },
        { label: 'Fold Patterns', value: '15 programmable' },
        { label: 'Output Speed', value: 'Up to 700 pieces/hr' },
        { label: 'Infeed Method', value: 'Manual or Spreader Interface' },
        { label: 'Drive Power', value: '2.2 kW' },
        { label: 'Compressed Air', value: '6 bar, 40 L/min' },
        { label: 'Dimensions (W×D×H)', value: '1,680 × 980 × 1,420 mm' },
        { label: 'Net Weight', value: '430 kg' },
      ]}
      features={[
        {
          title: 'Universal Multi-Format Folding',
          desc: 'Handles items from small face cloths (300×300 mm) to king-size sheets (3,600 mm length) without changing major components — just select the stored program.',
        },
        {
          title: '15 Programmable Fold Patterns',
          desc: 'The largest fold pattern library in the range covers every standard hospitality, healthcare, and institutional flatwork fold configuration.',
        },
        {
          title: 'UniLinc™ Network Integration',
          desc: 'Connects to laundry management platforms for production counting, remote diagnostics, and fleet management reporting across multiple machines.',
        },
        {
          title: 'Modular Expansion Ready',
          desc: 'Factory-prepared mounting points and electrical provisions allow field installation of optional small-piece attachment modules as operational needs grow.',
        },
        {
          title: 'Continuously Adjustable Guides',
          desc: 'Motorised side guides adjust to item width automatically via program selection, eliminating manual guide repositioning during product changeovers.',
        },
        {
          title: 'Compact Universal Design',
          desc: 'Achieves broad format compatibility within a footprint comparable to single-format folders, maximising laundry floor space utilisation.',
        },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
