import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function FIT6A() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment', href: '/solutions/laundry/folding-equipment' },
        { label: 'FIT6A' },
      ]}
      category="Folding Equipment"
      model="FIT6A"
      subtitle="Vacuum/blowing ironing table"
      image="/products/folding-equipment/fit6a.jpg"
      placeholder="FIT6A"
      keySpecs={[
        { label: 'Type', value: 'Vacuum/blowing ironing table' },
        { label: 'Functions', value: 'Vacuum & blow' },
        { label: 'Use', value: 'All garment types' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional FIT6A is a professional ironing table combining vacuum suction and blowing functions for versatile, high-quality garment finishing.',
        'The blow function lifts and cools garments after ironing, setting the finish and preventing heat damage — making it suitable for a wider range of fabrics than vacuum-only tables.',
      ]}
      featureStrip={[
        { icon: '💨', label: 'Functions', value: 'Vacuum + Blow' },
        { icon: '❄️', label: 'Cooling', value: 'Blow cooling after iron' },
        { icon: '✨', label: 'Finish', value: 'Set & crisp result' },
        { icon: '👕', label: 'Fabrics', value: 'All types' },
      ]}
      specs={[
        { label: 'Type', value: 'Vacuum/blowing ironing table' },
        { label: 'Functions', value: 'Vacuum suction + Blowing' },
        { label: 'Application', value: 'All garment types' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Vacuum + Blow Functions', desc: 'Vacuum holds garments during ironing; the blow function cools and sets the finish immediately after.' },
        { title: 'Better Finish Quality', desc: 'Blow-cooling locks in the pressed finish, preventing moisture re-absorption and keeping garments crisp longer.' },
        { title: 'Wider Fabric Compatibility', desc: 'Combined functions make it suitable for delicate, synthetic, and heavy fabrics alike.' },
      ]}
      backHref="/solutions/laundry/folding-equipment"
      backLabel="All Folding Equipment"
    />
  );
}
