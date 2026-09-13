import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function FoldingEquipment() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Folding Equipment' },
      ]}
      heroImage="/hero-laundry.jpg"
      category="Laundry Equipment"
      title="Folding Equipment"
      heroSubtitle="Automated folding machines for flatwork, garments, and small pieces — reducing labour and delivering consistent, professional results."
      introTitle="Fold smarter. Save time."
      introText="Manual folding is time-consuming and inconsistent. Our automated folding equipment range handles flatwork, shirts, and small pieces at high speed — reducing labour costs and ensuring uniform presentation every time."
      benefits={[
        { icon: '⚡', title: 'High Speed', desc: 'Process hundreds of pieces per hour, dramatically reducing labour time and operational costs.' },
        { icon: '✨', title: 'Consistent Results', desc: 'Automated folding delivers perfectly uniform folds every time, improving linen presentation.' },
        { icon: '🔗', title: 'System Integration', desc: 'Integrates seamlessly with ironers and conveyors for a complete finishing line.' },
      ]}
      products={[
        { model: 'FF-120', desc: 'Flatwork folder · 1200 mm', slug: 'ff120', placeholder: 'FF-120' },
        { model: 'FF-160', desc: 'Flatwork folder · 1600 mm', slug: 'ff160', placeholder: 'FF-160' },
        { model: 'SF-50', desc: 'Small-piece folder · 50 pcs/min', slug: 'sf50', placeholder: 'SF-50' },
        { model: 'Primus SF32', desc: 'Shirt folder · 32 shirts/min', slug: 'primusSF32', placeholder: 'Primus+SF32' },
        { model: 'UniMac UFF', desc: 'Universal flatwork folder', slug: 'unimacUFF', placeholder: 'UniMac+UFF' },
        { model: 'Alliance PF', desc: 'Automatic piece folder', slug: 'alliancePF', placeholder: 'Alliance+PF' },
      ]}
      basePath="/solutions/laundry/folding-equipment"
    />
  );
}
