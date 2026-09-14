import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function IB5725() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'IB5725' },
      ]}
      category="Ironers & Presses"
      model="IB5725"
      subtitle="Flatwork ironer · Rear delivery · No automation"
      image="/products/ironers/ib5725.jpg"
      placeholder="IB5725"
      keySpecs={[
        { label: 'Type', value: 'Flatwork ironer' },
        { label: 'Delivery', value: 'Rear delivery' },
        { label: 'Automation', value: 'No automation' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional IB5725 is a heavy-duty flatwork ironer with rear delivery, designed for high-volume hotel and institutional laundry operations.',
        'Its robust construction and reliable heating system deliver consistent, high-quality ironing results on sheets, tablecloths, and flat linen at production speed.',
      ]}
      featureStrip={[
        { icon: '🏨', label: 'Use', value: 'Hotel & institutional' },
        { icon: '🔄', label: 'Delivery', value: 'Rear' },
        { icon: '⚡', label: 'Heating', value: 'Electric / Gas / Steam' },
        { icon: '🔒', label: 'Build', value: 'Industrial grade' },
      ]}
      specs={[
        { label: 'Type', value: 'Flatwork ironer' },
        { label: 'Delivery', value: 'Rear delivery' },
        { label: 'Automation', value: 'No automation' },
        { label: 'Heating Options', value: 'Electric, Gas, Steam' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Rear Delivery', desc: 'Linen exits from the rear of the machine, ideal for laundry room layouts where operators work in line.' },
        { title: 'Industrial Build', desc: 'Heavy-duty frame and heated roller designed for continuous high-volume production without compromise.' },
        { title: 'Multiple Heating Options', desc: 'Available in electric, gas, and steam-heated versions to suit your facility infrastructure.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers & Presses"
    />
  );
}
