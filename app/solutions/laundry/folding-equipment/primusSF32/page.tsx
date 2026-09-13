import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function PrimusSF32Page() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'Primus SF32' },
      ]}
      category="Folding Equipment"
      model="Primus SF32"
      subtitle="Automatic Shirt Folder — Precision Folding for Shirts, Uniforms & Garments"
      image="/products/primussf32.jpg"
      placeholder="Primus SF32"
      keySpecs={[
        { label: 'Output Speed', value: 'Up to 32 shirts/min' },
        { label: 'Item Types', value: 'Shirts, Uniforms, Garments' },
        { label: 'Fold Patterns', value: '10 Programmable' },
      ]}
      description={[
        'The Primus SF32 is a specialist automatic shirt folder designed for commercial laundries, uniform hire companies, and garment finishing operations. Capable of processing up to 32 shirts per minute, it delivers consistent, retail-quality folds with each cycle, eliminating the labour-intensive manual folding process and ensuring every garment is presented to the same exacting standard.',
        'The SF32\'s multi-axis folding system handles a broad range of garment types — including button-front shirts, polo shirts, t-shirts, and uniform jackets — with adjustable form-boards and programmable fold dimensions. Primus\'s intuitive controller stores up to 10 custom garment programs, enabling rapid changeover between different customer batches or garment types.',
      ]}
      featureStrip={[
        { icon: '👔', label: 'Speciality', value: 'Shirts, Uniforms & Garments' },
        { icon: '🚀', label: 'Speed', value: 'Up to 32 Shirts Per Minute' },
        { icon: '📐', label: 'Precision', value: 'Retail-Quality Fold Consistency' },
        { icon: '🔀', label: 'Programs', value: '10 Custom Garment Programs' },
      ]}
      specs={[
        { label: 'Output Speed', value: 'Up to 32 shirts/min' },
        { label: 'Garment Width Range', value: '300 – 650 mm (shoulders)' },
        { label: 'Garment Length Range', value: '550 – 850 mm' },
        { label: 'Fold Patterns', value: '10 programmable' },
        { label: 'Form Board Size', value: 'Adjustable, 3 sizes included' },
        { label: 'Infeed Type', value: 'Automatic conveyor infeed' },
        { label: 'Drive Power', value: '1.1 kW' },
        { label: 'Compressed Air', value: '6 bar, 25 L/min' },
        { label: 'Dimensions (W×D×H)', value: '1,100 × 950 × 1,420 mm' },
        { label: 'Net Weight', value: '260 kg' },
      ]}
      features={[
        {
          title: 'Multi-Axis Folding System',
          desc: 'Independent sleeve, side, and body fold mechanisms operate in coordinated sequence, producing crisp, boardroom-quality folds on shirts and uniform jackets.',
        },
        {
          title: 'Adjustable Form Boards',
          desc: 'Three interchangeable form-board sizes (S/M/L) accommodate the full range of shirt and garment sizes with quick tool-free swap, minimising changeover time.',
        },
        {
          title: 'Retail-Quality Presentation',
          desc: 'Consistent fold geometry across every garment ensures uniform, shelf-ready presentation — essential for uniform hire services and hotel shirt laundry operations.',
        },
        {
          title: '10 Custom Garment Programs',
          desc: 'Primus controller stores up to 10 fully customisable garment programs covering fold width, sleeve position, and body tuck dimensions for different garment types.',
        },
        {
          title: 'Automatic Conveyor Infeed',
          desc: 'Motorised infeed conveyor with optical alignment guides ensures correct garment positioning before entering the folding sequence, reducing mis-folds and rejects.',
        },
        {
          title: 'Optional Poly-Bag Interface',
          desc: 'Optional downstream poly-bag applicator interface enables direct bag-and-seal operation immediately after folding for retail or hotel presentation packaging.',
        },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
