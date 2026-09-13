import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function Cart200Page() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'Cart-200' },
      ]}
      category="Laundry Accessories"
      model="Cart-200"
      subtitle="200-Litre Large-Capacity Laundry Transport Cart — Industrial Grade"
      image="/products/cart200.jpg"
      placeholder="Cart-200"
      keySpecs={[
        { label: 'Capacity', value: '200 Litres' },
        { label: 'Frame', value: 'Stainless Steel' },
        { label: 'Load Rating', value: '150 kg' },
      ]}
      description={[
        'The Cart-200 is a large-capacity 200-litre industrial laundry transport cart designed for high-volume operations in commercial laundries, large hotels, hospitals, and linen rental services. Its generous capacity significantly reduces the number of trips between collection points and the laundry, improving workflow efficiency across large facilities.',
        'Constructed from heavy-gauge 304 stainless steel with reinforced corner joints, the Cart-200 carries loads of up to 150 kg with stability. Wide-diameter 150 mm castors provide easy rolling even on uneven floor surfaces, and the integrated push-pull handle bar enables two-person operation on heavy loads, making it one of the most practical large-format laundry carts in our range.',
      ]}
      featureStrip={[
        { icon: '🧺', label: 'Capacity', value: '200 Litre High Volume' },
        { icon: '🔩', label: 'Frame', value: 'Reinforced Stainless Steel' },
        { icon: '🔄', label: 'Mobility', value: '150 mm Wide-Diameter Castors' },
        { icon: '👥', label: 'Operation', value: 'Two-Person Push-Pull Handle' },
      ]}
      specs={[
        { label: 'Volume Capacity', value: '200 Litres' },
        { label: 'Maximum Load', value: '150 kg' },
        { label: 'Frame Material', value: '304 Stainless Steel' },
        { label: 'Bag Liner Material', value: 'High-Density Polyethylene (HDPE)' },
        { label: 'Castor Type', value: '4× Swivel, 2× with lock' },
        { label: 'Castor Diameter', value: '150 mm' },
        { label: 'Handle Configuration', value: 'Dual push-pull handlebar' },
        { label: 'Interior Dimensions (L×W×H)', value: '800 × 560 × 650 mm' },
        { label: 'Overall Dimensions (L×W×H)', value: '880 × 640 × 1,050 mm' },
        { label: 'Net Weight', value: '22 kg' },
      ]}
      features={[
        {
          title: 'Double-Capacity Volume',
          desc: '200-litre drum capacity handles full laundry loads from large guest rooms, wards, or processing bays in a single trip, halving transit time compared to smaller carts.',
        },
        {
          title: 'Reinforced Corner Joints',
          desc: 'Fully welded and gusseted corner joints on the stainless steel frame prevent racking and deformation under maximum 150 kg loading conditions.',
        },
        {
          title: 'Wide 150 mm Castors',
          desc: 'Large-diameter rubber-tyred castors roll smoothly over doorway thresholds, floor channels, and uneven surfaces without tipping the loaded cart.',
        },
        {
          title: 'Dual Push-Pull Handle',
          desc: 'Full-width handlebar at both ends allows two-person operation on heavy loads and makes reversing in tight spaces significantly easier.',
        },
        {
          title: 'Removable HDPE Liner',
          desc: 'Easy-lift HDPE bag liner maintains hygiene separation and simplifies cleaning — available in multiple colours for soiled/clean linen coding.',
        },
        {
          title: 'Heavy-Duty Floor Protection',
          desc: 'Non-marking rubber castor tyres protect polished and tiled facility floors from scratching and streaking during frequent daily transport cycles.',
        },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Laundry Accessories"
    />
  );
}
