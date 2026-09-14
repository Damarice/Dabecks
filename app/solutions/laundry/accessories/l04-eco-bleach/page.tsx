import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function L04EcoBleach() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'L04 – Laundry Eco Bleach' },
      ]}
      category="Laundry Accessories"
      model="L04 – Laundry Eco Bleach"
      subtitle="Eco-certified bleach · Whitening & disinfection"
      image="/products/accessories/l04-eco-bleach.webp"
      placeholder="L04 Eco Bleach"
      keySpecs={[
        { label: 'Type', value: 'Bleach / Whitener' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Action', value: 'Whitening & disinfection' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'L04 Laundry Eco Bleach is a professional eco-certified bleaching agent for whitening and disinfecting linen in hotels, hospitals, and commercial laundry facilities.',
        'Its controlled bleaching formula restores whiteness to yellowed linen and provides hygiene-level disinfection, while remaining eco-certified and safe for commercial use.',
      ]}
      featureStrip={[
        { icon: '🌿', label: 'Certified', value: 'Eco certified' },
        { icon: '⬜', label: 'Action', value: 'Whitening' },
        { icon: '🧼', label: 'Hygiene', value: 'Disinfection grade' },
        { icon: '♻️', label: 'Formula', value: 'Eco safe' },
      ]}
      specs={[
        { label: 'Product Code', value: 'L04' },
        { label: 'Type', value: 'Bleach / Whitener' },
        { label: 'Certification', value: 'Eco certified' },
        { label: 'Action', value: 'Whitening and disinfection' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Whitening Power', desc: 'Restores brightness and whiteness to yellowed or greyed linen, maintaining a premium presentation standard.' },
        { title: 'Disinfection Grade', desc: 'Provides effective hygiene-level disinfection, suitable for healthcare and hospitality environments.' },
        { title: 'Eco Certified', desc: 'Effective bleaching performance within an environmentally responsible, eco-certified formula.' },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Accessories"
    />
  );
}
