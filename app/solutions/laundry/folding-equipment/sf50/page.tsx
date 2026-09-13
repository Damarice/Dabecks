import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function SF50Page() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'SF-50' },
      ]}
      category="Folding Equipment"
      model="SF-50"
      subtitle="50 Pieces/min Automatic Small-Piece Folder — Towels, Napkins & Pillowcases"
      image="/products/sf50.jpg"
      placeholder="SF-50"
      keySpecs={[
        { label: 'Output Speed', value: '50 pcs / min' },
        { label: 'Item Types', value: 'Towels, Napkins, Pillowcases' },
        { label: 'Fold Options', value: '6 Programmable' },
      ]}
      description={[
        'The SF-50 is a dedicated small-piece automatic folder capable of processing up to 50 pieces per minute, making it the ideal solution for high-volume towel, napkin, and pillowcase folding operations. Its intelligent item detection system automatically identifies piece size and orientation, eliminating the need for manual sorting before folding.',
        'Compact and operator-friendly, the SF-50 integrates smoothly into existing laundry workflows and can be positioned at the output of a tumble dryer or ironer. Its six programmable fold patterns cover all standard hospitality and healthcare small-piece folding requirements, ensuring perfectly folded, presentation-ready items on every cycle.',
      ]}
      featureStrip={[
        { icon: '🚀', label: 'Speed', value: '50 Pieces Per Minute' },
        { icon: '🔍', label: 'Detection', value: 'Automatic Item Size Sensing' },
        { icon: '🏨', label: 'Applications', value: 'Towels, Napkins, Pillowcases' },
        { icon: '🔀', label: 'Programs', value: '6 Programmable Fold Patterns' },
      ]}
      specs={[
        { label: 'Output Speed', value: 'Up to 50 pieces/min' },
        { label: 'Maximum Item Width', value: '800 mm' },
        { label: 'Maximum Item Length', value: '1,500 mm' },
        { label: 'Fold Patterns', value: '6 programmable' },
        { label: 'Item Detection', value: 'Automatic optical sensing' },
        { label: 'Infeed Type', value: 'Single-piece manual or conveyor' },
        { label: 'Drive Power', value: '0.75 kW' },
        { label: 'Compressed Air', value: '6 bar, 20 L/min' },
        { label: 'Dimensions (W×D×H)', value: '980 × 820 × 1,200 mm' },
        { label: 'Net Weight', value: '185 kg' },
      ]}
      features={[
        {
          title: 'Automatic Item Detection',
          desc: 'Optical sensors detect piece dimensions on infeed and automatically select the correct fold program, eliminating operator sorting and manual program selection.',
        },
        {
          title: '50 Pieces Per Minute',
          desc: 'High-speed roller and fold-plate mechanism processes up to 50 items per minute, dramatically reducing the labour hours required for small-piece folding tasks.',
        },
        {
          title: '6 Programmable Fold Patterns',
          desc: 'Pre-loaded patterns for bath towels, hand towels, face cloths, napkins, and pillowcases — all adjustable and storable for one-touch recall.',
        },
        {
          title: 'Universal Item Compatibility',
          desc: 'Handles a wide range of small-piece items from 200 mm to 800 mm wide, accommodating the full range of typical hospitality and healthcare small linen.',
        },
        {
          title: 'Dryer / Ironer Output Ready',
          desc: 'Compact design allows direct positioning at the output of tumble dryers or chest ironers, creating a continuous feed-to-fold workflow with minimal footprint.',
        },
        {
          title: 'Batch Output Counter',
          desc: 'Integrated piece counter tracks output by fold program, providing accurate production data for quality control and laundry management reporting.',
        },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
