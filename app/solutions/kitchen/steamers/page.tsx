import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function Steamers() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Kitchen Systems', href: '/solutions/kitchen' },
        { label: 'Steamers' },
      ]}
      heroImage="/kitchen-categories/steamers.webp"
      category="Kitchen Systems"
      title="Steamers"
      heroSubtitle="Combi steamers and convection steamers for professional cooking — preserving nutrients, flavour, and consistency at scale."
      introTitle="Steam cooking. Redefined."
      introText="Our steamer range combines steam and convection cooking for maximum versatility. From compact countertop units to full-size combi steamers with self-cleaning — every model delivers precise, repeatable cooking results for professional kitchens."
      benefits={[
        { icon: '♨️', title: 'Nutrient Preservation', desc: 'Steam cooking preserves up to 90% of nutrients compared to boiling, delivering healthier meals.' },
        { icon: '🎯', title: 'Precise Control', desc: 'Digital controls maintain exact temperature and humidity levels for consistent results.' },
        { icon: '🔄', title: 'Multi-Function', desc: 'Steam, convection, and combination modes handle every cooking requirement.' },
      ]}
      products={[
        { model: 'Steam-6', desc: 'Countertop steamer · 6 pans', slug: 'steam6', placeholder: 'Steam-6' },
        { model: 'Steam-10', desc: 'Floor steamer · 10 pans', slug: 'steam10', placeholder: 'Steam-10' },
        { model: 'Steam-20', desc: 'High-volume steamer · 20 pans', slug: 'steam20', placeholder: 'Steam-20' },
        { model: 'Rational iVario', desc: 'Multi-function cooker', slug: 'rationalIVario', placeholder: 'Rational+iVario' },
        { model: 'Unox STEAMAIR', desc: 'Convection steamer', slug: 'unoxSTEAMAIR', placeholder: 'Unox+STEAMAIR' },
        { model: 'Cleveland 24CGA10', desc: 'Gas convection steamer', slug: 'cleveland24CGA10', placeholder: 'Cleveland+24CGA10' },
      ]}
      basePath="/solutions/kitchen/steamers"
    />
  );
}
