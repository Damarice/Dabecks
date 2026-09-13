import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function AlliancePFPage() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'Alliance PF' },
      ]}
      category="Folding Equipment"
      model="Alliance PF"
      subtitle="Automatic Piece Folder — Mixed Small-Piece Processing at Production Speed"
      image="/products/alliancepf.jpg"
      placeholder="Alliance PF"
      keySpecs={[
        { label: 'Output Speed', value: 'Up to 40 pcs / min' },
        { label: 'Item Range', value: 'Mixed Small-Piece' },
        { label: 'Fold Patterns', value: '8 Programmable' },
      ]}
      description={[
        'The Alliance PF is an automatic piece folder built for commercial laundries that need to handle a high-throughput mix of small-piece items — including towels, pillowcases, napkins, and garment covers — within a single machine. Processing up to 40 pieces per minute, it delivers consistently folded output that meets the presentation standards of hospitality and healthcare clients without requiring dedicated operators per fold station.',
        'Alliance\'s proven fold-plate and roller architecture, combined with an intelligent optical infeed system, ensures reliable operation across varying fabric weights and item sizes. The PF\'s robust steel frame and minimal wear components translate into low maintenance requirements and high operational availability, making it a dependable fixture in busy commercial laundry environments.',
      ]}
      featureStrip={[
        { icon: '🚀', label: 'Speed', value: 'Up to 40 Pieces Per Minute' },
        { icon: '🔍', label: 'Infeed', value: 'Optical Item Detection System' },
        { icon: '🏨', label: 'Applications', value: 'Hospitality & Healthcare Linen' },
        { icon: '🔩', label: 'Durability', value: 'Heavy-Gauge Steel Construction' },
      ]}
      specs={[
        { label: 'Output Speed', value: 'Up to 40 pieces/min' },
        { label: 'Maximum Item Width', value: '700 mm' },
        { label: 'Maximum Item Length', value: '1,400 mm' },
        { label: 'Fold Patterns', value: '8 programmable' },
        { label: 'Item Detection', value: 'Optical infeed sensing' },
        { label: 'Infeed Type', value: 'Manual single-piece infeed' },
        { label: 'Drive Power', value: '0.9 kW' },
        { label: 'Compressed Air', value: '6 bar, 22 L/min' },
        { label: 'Dimensions (W×D×H)', value: '900 × 850 × 1,250 mm' },
        { label: 'Net Weight', value: '210 kg' },
      ]}
      features={[
        {
          title: 'Mixed Small-Piece Processing',
          desc: 'Processes a broad mix of small-piece linen types in a single session, with optical sensing automatically adapting fold settings to each detected item.',
        },
        {
          title: 'Optical Infeed Detection',
          desc: 'Infeed sensors measure item width and length as each piece enters, enabling automatic program selection without operator intervention between different item types.',
        },
        {
          title: '8 Programmable Fold Patterns',
          desc: 'Eight stored fold programs cover standard hospitality and healthcare small-piece configurations, from quarter-fold towels to tri-fold napkins and envelope pillowcase folds.',
        },
        {
          title: 'Heavy-Gauge Steel Frame',
          desc: 'Robust welded steel chassis withstands the demands of continuous-shift commercial laundry operations, maintaining alignment and fold accuracy over the long term.',
        },
        {
          title: 'Low Maintenance Architecture',
          desc: 'Minimal wear components, easy-access belt tensioners, and front-opening service covers keep preventive maintenance time short and unplanned downtime to a minimum.',
        },
        {
          title: 'Compact Workstation Design',
          desc: 'Single-operator workstation footprint fits neatly at the output of dryers or ironers, integrating into existing production lines without significant floor reconfiguration.',
        },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
