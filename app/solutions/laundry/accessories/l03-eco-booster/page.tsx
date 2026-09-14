import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function L03EcoBooster() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'L03 – Laundry Eco Booster' },
      ]}
      category="Laundry Accessories"
      model="L03 – Laundry Eco Booster"
      subtitle="Wash performance booster · Stain & odour removal"
      image="/products/accessories/l03-eco-booster.webp"
      placeholder="L03 Eco Booster"
      keySpecs={[
        { label: 'Type', value: 'Wash booster' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Action', value: 'Stain & odour removal' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'L03 Laundry Eco Booster is a wash performance enhancer that works alongside your main detergent to tackle stubborn stains and persistent odours.',
        'Added to the wash cycle, the booster increases cleaning power without requiring a higher detergent dose — delivering better results economically and sustainably.',
      ]}
      featureStrip={[
        { icon: '🌿', label: 'Certified', value: 'Eco certified' },
        { icon: '💪', label: 'Action', value: 'Boosts wash performance' },
        { icon: '🚫', label: 'Odours', value: 'Eliminates persistent odours' },
        { icon: '💰', label: 'Efficiency', value: 'Less detergent needed' },
      ]}
      specs={[
        { label: 'Product Code', value: 'L03' },
        { label: 'Type', value: 'Wash performance booster' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Action', value: 'Stain removal & odour elimination' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Boosts Cleaning Performance', desc: 'Enhances the cleaning power of your main detergent, tackling stains that single-product washes leave behind.' },
        { title: 'Eliminates Persistent Odours', desc: 'Neutralises odours at the source rather than masking them, leaving linen genuinely fresh.' },
        { title: 'Economic Use', desc: 'A small dose per cycle delivers significant performance improvement without increasing overall chemical costs.' },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Accessories"
    />
  );
}
