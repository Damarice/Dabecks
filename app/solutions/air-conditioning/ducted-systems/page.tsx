import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function DuctedSystems() {
  return (
    <SubpageListingPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Ducted Systems' }]}
      heroImage="/hero-ac.jpg"
      category="Air Conditioning"
      title="Ducted Systems"
      heroSubtitle="Central ducted air conditioning systems for large open-plan spaces, offices, and commercial buildings — invisible installation, even airflow."
      introTitle="Central cooling. Hidden design."
      introText="Ducted systems distribute conditioned air through hidden ductwork for a clean, unobtrusive installation. Ideal for open-plan offices, boardrooms, retail floors, and hotel lobbies where aesthetics and even airflow are priorities."
      benefits={[
        { icon: '👁️', title: 'Invisible Installation', desc: 'All ductwork hidden in ceiling or walls — only discreet grilles visible in the space.' },
        { icon: '🌬️', title: 'Even Airflow', desc: 'Distributed outlets ensure consistent temperature throughout large open spaces.' },
        { icon: '🔇', title: 'Quiet Operation', desc: 'Fan coil units located remotely from the occupied space for minimal noise.' },
      ]}
      products={[
        { model: 'Coming Soon', desc: 'New products incoming', slug: 'coming-soon-1', placeholder: 'Coming+Soon' },
        { model: 'Coming Soon', desc: 'New products incoming', slug: 'coming-soon-2', placeholder: 'Coming+Soon' },
        { model: 'Coming Soon', desc: 'New products incoming', slug: 'coming-soon-3', placeholder: 'Coming+Soon' },
      ]}
      basePath="/solutions/air-conditioning/ducted-systems"
    />
  );
}
