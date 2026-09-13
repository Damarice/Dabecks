import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function Deck3() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Commercial Ovens', href: '/solutions/kitchen/commercial-ovens' }, { label: 'Deck-3' }]}
      category="Commercial Ovens" model="Deck-3" subtitle="Stone deck oven · 3 decks"
      image="/products/ovens/deck3.jpg" placeholder="Deck-3"
      keySpecs={[{ label: 'Decks', value: '3' }, { label: 'Baking Area', value: '1.8 m²' }, { label: 'Temp', value: 'Up to 350 °C' }]}
      description={['The Deck-3 is a professional 3-deck stone oven designed for artisan bread, pizza, and pastry baking. Its refractory stone deck surfaces deliver the authentic bottom heat needed for crispy crusts and perfectly baked breads.', 'Each deck is independently controlled, allowing simultaneous baking of different products at different temperatures.']}
      featureStrip={[{ icon: '🍕', label: 'Stone Deck', value: 'Refractory stone' }, { icon: '🌡️', label: 'Max Temp', value: '350 °C' }, { icon: '💧', label: 'Steam', value: 'Steam injection' }, { icon: '🎯', label: 'Control', value: 'Independent per deck' }]}
      specs={[{ label: 'Model', value: 'Deck-3' }, { label: 'Number of Decks', value: '3' }, { label: 'Baking Area per Deck', value: '0.6 m²' }, { label: 'Max Temperature', value: '350 °C' }, { label: 'Deck Height', value: '180 mm' }, { label: 'Steam Injection', value: 'Per deck' }, { label: 'Width × Height × Depth', value: '1200 × 1600 × 1000 mm' }, { label: 'Net Weight', value: '380 kg' }, { label: 'Supply Voltage', value: '380–415 V / 50 Hz' }, { label: 'Total Power', value: '18 kW' }]}
      features={[{ title: 'Stone Deck Surfaces', desc: 'Refractory stone retains and radiates heat evenly for superior crust development.' }, { title: 'Independent Deck Control', desc: 'Each deck has its own temperature control for simultaneous multi-product baking.' }, { title: 'Steam Injection', desc: 'Per-deck steam injection for artisan bread and pastry finishing.' }, { title: 'High Max Temperature', desc: '350 °C maximum for Neapolitan pizza and high-heat baking.' }, { title: 'Thermal Mass', desc: 'Stone decks maintain stable temperature even when heavily loaded.' }, { title: 'Durable Construction', desc: 'Heavy-gauge steel and refractory materials built for long-term bakery use.' }]}
      backHref="/solutions/kitchen/commercial-ovens" backLabel="All Ovens"
    />
  );
}
