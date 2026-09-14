import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function CabinetHardmount() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'Cabinet Hardmount' },
      ]}
      category="Alliance Laundry"
      model="Cabinet Hardmount"
      subtitle="Cabinet hardmount washer-extractor · Industrial OPL"
      image="/products/washers/cabinet-hardmount.jpg"
      placeholder="Cabinet Hardmount"
      keySpecs={[
        { label: 'Type', value: 'Hardmount washer-extractor' },
        { label: 'Mount', value: 'Floor-mounted' },
        { label: 'Extraction', value: 'High G-force' },
        { label: 'Brand', value: 'Alliance Laundry Systems' },
      ]}
      description={[
        'The Alliance Laundry Cabinet Hardmount Washer-Extractor is a heavy-duty industrial machine designed for on-premise laundry operations in hospitals, hotels, and large institutions.',
        'Floor-mounted for stability, it delivers high-extraction speeds that significantly reduce drying time and energy costs — critical in high-volume laundry environments.',
      ]}
      featureStrip={[
        { icon: '🏭', label: 'Application', value: 'Industrial OPL' },
        { icon: '⚡', label: 'Extraction', value: 'High G-force spin' },
        { icon: '🔒', label: 'Mount', value: 'Floor / Hardmount' },
        { icon: '💧', label: 'Water Use', value: 'Optimised per cycle' },
      ]}
      specs={[
        { label: 'Type', value: 'Cabinet hardmount washer-extractor' },
        { label: 'Mount', value: 'Floor-mounted (hardmount)' },
        { label: 'Extraction Speed', value: 'High G-force' },
        { label: 'Loading Type', value: 'Front-load' },
        { label: 'Application', value: 'On-premise laundry (OPL)' },
        { label: 'Brand', value: 'Alliance Laundry Systems' },
      ]}
      features={[
        { title: 'High-Speed Extraction', desc: 'High G-force spin speed removes maximum moisture before drying, cutting dryer time and energy consumption.' },
        { title: 'Industrial Durability', desc: 'Heavy-gauge stainless steel and commercial-grade components ensure long service life under continuous operation.' },
        { title: 'OPL Optimised', desc: 'Designed for on-premise laundry environments, delivering consistent results across large linen volumes every day.' },
        { title: 'Floor-Mounted Stability', desc: 'Hardmount cabinet design eliminates vibration transmission, ensuring stable operation on any floor type.' },
      ]}
      backHref="/solutions/laundry/commercial-washers"
      backLabel="All Commercial Washers"
    />
  );
}
