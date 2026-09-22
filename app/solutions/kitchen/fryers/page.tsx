import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function Fryers() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Kitchen Systems', href: '/solutions/kitchen' },
        { label: 'Fryers' },
      ]}
      heroImage="/kitchen-categories/fryers.webp"
      category="Kitchen Systems"
      title="Fryers"
      heroSubtitle="Commercial deep fryers and pressure fryers for high-volume food production — fast recovery, consistent results, built for continuous use."
      introTitle="Crispy results. Every time."
      introText="From compact single-tank fryers for small operations to high-volume pressure fryers for large food service — our range delivers fast oil recovery, precise temperature control, and reliable performance in the busiest commercial kitchens."
      benefits={[
        { icon: '🔥', title: 'Fast Recovery', desc: 'High-powered heating elements restore oil temperature quickly between batches for maximum throughput.' },
        { icon: '🛡️', title: 'Safety Systems', desc: 'Automatic cut-off, cool-zone design, and oil filtration systems for safe, efficient operation.' },
        { icon: '⚡', title: 'Energy Efficient', desc: 'Insulated tanks and efficient burners minimise energy use without compromising performance.' },
      ]}
      products={[
        { model: '700XP One Well Gas Fryer Top 7L', desc: 'Gas Fryer Tops · COD 371066', slug: 'fryer-700xp-gas-top-7l', placeholder: '700XP+Gas+Fryer+Top', image: '/products/kitchen/fryers/fryer-700xp-gas-top-7l.jpg' },
        { model: '700XP One Well Freestanding Gas Fryer 7L', desc: 'Freestanding Gas Fryers · COD 371068', slug: 'fryer-700xp-gas-freestanding-7l', placeholder: '700XP+Gas+Freestanding+Fryer', image: '/products/kitchen/fryers/fryer-700xp-gas-freestanding-7l.jpg' },
        { model: '700XP Two Wells Electric Fryer Top 5L', desc: 'Electric Fryer Tops · COD 371074', slug: 'fryer-700xp-electric-top-5l', placeholder: '700XP+Electric+Fryer+Top', image: '/products/kitchen/fryers/fryer-700xp-electric-top-5l.jpg' },
        { model: '700XP One Well Freestanding Electric Fryer 7L', desc: 'Freestanding Electric Fryers · COD 371077', slug: 'fryer-700xp-electric-freestanding-7l', placeholder: '700XP+Electric+Freestanding+Fryer', image: '/products/kitchen/fryers/fryer-700xp-electric-freestanding-7l.jpg' },
        { model: '900XP One Well Gas Fryer 15L', desc: 'Gas · COD 391077', slug: 'fryer-900xp-gas-15l', placeholder: '900XP+Gas+Fryer+15L', image: '/products/kitchen/fryers/fryer-900xp-gas-15l.jpg' },
        { model: '900XP One Well Electric Fryer 15L', desc: 'Electric Fryers · COD 391087', slug: 'fryer-900xp-electric-15l', placeholder: '900XP+Electric+Fryer+15L', image: '/products/kitchen/fryers/fryer-900xp-electric-15l.jpg' },
      ]}
      basePath="/solutions/kitchen/fryers"
    />
  );
}
