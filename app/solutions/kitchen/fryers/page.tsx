import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function Fryers() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Kitchen Systems', href: '/solutions/kitchen' },
        { label: 'Fryers' },
      ]}
      heroImage="/hero-kitchen.jpg"
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
        { model: 'FT-8L', desc: 'Single tank fryer · 8 L', slug: 'ft8l', placeholder: 'FT-8L' },
        { model: 'FT-15L', desc: 'Twin tank fryer · 2×8 L', slug: 'ft15l', placeholder: 'FT-15L' },
        { model: 'FT-25L', desc: 'High-volume fryer · 25 L', slug: 'ft25l', placeholder: 'FT-25L' },
        { model: 'Pitco SG14', desc: 'Gas fryer · 14 L tank', slug: 'pitcoSG14', placeholder: 'Pitco+SG14' },
        { model: 'Henny Penny F5', desc: 'Pressure fryer · 5 heads', slug: 'hennyF5', placeholder: 'Henny+Penny+F5' },
        { model: 'Vulcan 1ER50DF', desc: 'Electric fryer · 50 lb oil capacity', slug: 'vulcan1ER50DF', placeholder: 'Vulcan+1ER50DF' },
      ]}
      basePath="/solutions/kitchen/fryers"
    />
  );
}
