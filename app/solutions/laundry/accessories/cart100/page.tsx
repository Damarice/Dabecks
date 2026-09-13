import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function Cart100Page() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'Cart-100' },
      ]}
      category="Laundry Accessories"
      model="Cart-100"
      subtitle="100-Litre Heavy-Duty Laundry Transport Cart — Stainless Steel Frame"
      image="/products/cart100.jpg"
      placeholder="Cart-100"
      keySpecs={[
        { label: 'Capacity', value: '100 Litres' },
        { label: 'Frame', value: 'Stainless Steel' },
        { label: 'Load Rating', value: '80 kg' },
      ]}
      description={[
        'The Cart-100 is a robust 100-litre laundry transport cart constructed from heavy-gauge stainless steel, designed for the safe and efficient movement of soiled and clean linen in commercial laundry facilities, hotels, hospitals, and care homes. Its compact footprint navigates easily through standard doorways and service corridors while carrying a full load of up to 80 kg.',
        'The cart\'s deep-weld stainless steel frame and high-density polyethylene bag liner ensure resistance to chemical splashes, moisture, and biological contamination. Fitted with four heavy-duty swivel castors — two with directional locks — the Cart-100 provides precise manoeuvrability and secure parking on any smooth floor surface.',
      ]}
      featureStrip={[
        { icon: '🧺', label: 'Capacity', value: '100 Litre Volume' },
        { icon: '🔩', label: 'Frame', value: 'Heavy-Gauge Stainless Steel' },
        { icon: '🔄', label: 'Mobility', value: '4 Heavy-Duty Swivel Castors' },
        { icon: '🧴', label: 'Hygiene', value: 'HDPE Removable Bag Liner' },
      ]}
      specs={[
        { label: 'Volume Capacity', value: '100 Litres' },
        { label: 'Maximum Load', value: '80 kg' },
        { label: 'Frame Material', value: '304 Stainless Steel' },
        { label: 'Bag Liner Material', value: 'High-Density Polyethylene (HDPE)' },
        { label: 'Castor Type', value: '4× Swivel, 2× with lock' },
        { label: 'Castor Diameter', value: '125 mm' },
        { label: 'Handle Height', value: '950 mm' },
        { label: 'Interior Dimensions (L×W×H)', value: '600 × 420 × 500 mm' },
        { label: 'Overall Dimensions (L×W×H)', value: '680 × 500 × 1,000 mm' },
        { label: 'Net Weight', value: '14 kg' },
      ]}
      features={[
        {
          title: 'Stainless Steel Construction',
          desc: '304-grade stainless steel frame with continuous welds resists corrosion, chemical exposure, and physical damage in demanding commercial laundry environments.',
        },
        {
          title: 'Removable HDPE Bag Liner',
          desc: 'High-density polyethylene bag liner lifts out for easy cleaning and replacement, maintaining hygiene separation between soiled and clean linen loads.',
        },
        {
          title: 'Heavy-Duty Swivel Castors',
          desc: 'Four 125 mm rubber-tyred swivel castors with two directional locks provide smooth, precise manoeuvring and secure stationary positioning during loading.',
        },
        {
          title: 'Ergonomic Push Handle',
          desc: 'Welded tubular stainless steel push handle at 950 mm height provides comfortable, fatigue-reducing control when moving loaded carts across facility floors.',
        },
        {
          title: 'Hygienic Cross-Contamination Control',
          desc: 'Colour-coded bag liner system (optional) enables strict soiled/clean linen separation protocols, supporting infection control procedures in healthcare settings.',
        },
        {
          title: 'Stackable Design',
          desc: 'When empty, carts nest together for compact storage, freeing valuable floor space in linen rooms and laundry staging areas.',
        },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Laundry Accessories"
    />
  );
}
