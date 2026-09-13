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
        { model: 'DS-3T', desc: 'Ducted system · 3 ton / 36,000 BTU', slug: 'ds3t', placeholder: 'DS-3T' },
        { model: 'DS-5T', desc: 'Ducted system · 5 ton / 60,000 BTU', slug: 'ds5t', placeholder: 'DS-5T' },
        { model: 'DS-8T', desc: 'Ducted system · 8 ton / 96,000 BTU', slug: 'ds8t', placeholder: 'DS-8T' },
        { model: 'DS-10T', desc: 'Ducted system · 10 ton / 120,000 BTU', slug: 'ds10t', placeholder: 'DS-10T' },
        { model: 'Daikin FDQ125', desc: 'Ceiling concealed ducted · 5 ton', slug: 'daikinFDQ125', placeholder: 'Daikin+FDQ125' },
        { model: 'Carrier 40GK', desc: 'Fan coil ducted unit · 4 ton', slug: 'carrier40GK', placeholder: 'Carrier+40GK' },
      ]}
      basePath="/solutions/air-conditioning/ducted-systems"
    />
  );
}
