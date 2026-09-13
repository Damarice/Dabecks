import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function CassetteUnits() {
  return (
    <SubpageListingPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Cassette Units' }]}
      heroImage="/hero-ac.jpg"
      category="Air Conditioning"
      title="Cassette Units"
      heroSubtitle="Ceiling cassette AC units for even 360° air distribution in open-plan commercial spaces — offices, restaurants, retail, and hotel lobbies."
      introTitle="360° comfort. Clean aesthetics."
      introText="Ceiling cassette units install flush with the ceiling, distributing conditioned air in four directions simultaneously. Ideal for open-plan offices, restaurants, and retail spaces where wall space is limited and even coverage is essential."
      benefits={[
        { icon: '🔄', title: '360° Airflow', desc: 'Four-way air distribution ensures even coverage across the entire floor area.' },
        { icon: '🏢', title: 'Clean Aesthetic', desc: 'Flush ceiling installation with only a slim grille visible — suits any commercial interior.' },
        { icon: '⚡', title: 'Inverter Efficient', desc: 'Inverter compressors reduce energy use significantly versus older fixed-speed systems.' },
      ]}
      products={[
        { model: 'CU-12K', desc: 'Cassette unit · 12,000 BTU / 1 ton', slug: 'cu12k', placeholder: 'CU-12K' },
        { model: 'CU-18K', desc: 'Cassette unit · 18,000 BTU / 1.5 ton', slug: 'cu18k', placeholder: 'CU-18K' },
        { model: 'CU-24K', desc: 'Cassette unit · 24,000 BTU / 2 ton', slug: 'cu24k', placeholder: 'CU-24K' },
        { model: 'CU-36K', desc: 'Cassette unit · 36,000 BTU / 3 ton', slug: 'cu36k', placeholder: 'CU-36K' },
        { model: 'Daikin FCAG71', desc: 'Ceiling cassette · 2.5 ton', slug: 'daikinFCAG71', placeholder: 'Daikin+FCAG71' },
        { model: 'Mitsubishi PLA-M', desc: 'Ceiling cassette · 2 ton', slug: 'mitsubishiPLAM', placeholder: 'Mitsubishi+PLA-M' },
      ]}
      basePath="/solutions/air-conditioning/cassette-units"
    />
  );
}
