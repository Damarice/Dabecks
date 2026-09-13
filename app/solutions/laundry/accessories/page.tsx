import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function LaundryAccessories() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories' },
      ]}
      heroImage="/hero-laundry.jpg"
      category="Laundry Equipment"
      title="Laundry Accessories"
      heroSubtitle="Complete your laundry system with professional carts, dosing units, sorting stations, and water recovery systems."
      introTitle="Complete your laundry system."
      introText="A well-equipped laundry facility needs more than just washers and dryers. Our accessories range covers everything from transport carts and sorting stations to chemical dosing systems and water recovery units — ensuring your operation runs efficiently from start to finish."
      benefits={[
        { icon: '🔧', title: 'System Completeness', desc: 'Every accessory is designed to work seamlessly with our washer and dryer range.' },
        { icon: '💧', title: 'Water & Chemical Saving', desc: 'Dosing units and water recovery systems reduce chemical and water costs significantly.' },
        { icon: '📦', title: 'Operational Efficiency', desc: 'Well-designed carts and sorting stations streamline linen handling and reduce manual labour.' },
      ]}
      products={[
        { model: 'Cart-100', desc: 'Laundry transport cart · 100 L', slug: 'cart100', placeholder: 'Cart-100' },
        { model: 'Cart-200', desc: 'Laundry transport cart · 200 L', slug: 'cart200', placeholder: 'Cart-200' },
        { model: 'Dosing Unit Pro', desc: 'Automatic chemical dosing system', slug: 'dosingunit', placeholder: 'Dosing+Unit' },
        { model: 'Sorting Station', desc: '4-bay linen sorting station', slug: 'sortingstation', placeholder: 'Sorting+Station' },
        { model: 'Water Recovery System', desc: 'Heat & water recovery unit', slug: 'waterrecovery', placeholder: 'Water+Recovery' },
        { model: 'Shelf Rack Pro', desc: 'Heavy-duty linen storage rack', slug: 'shelf rack', placeholder: 'Shelf+Rack' },
      ]}
      basePath="/solutions/laundry/accessories"
    />
  );
}
