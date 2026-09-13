import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function IndustrialDryers() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Industrial Dryers' },
      ]}
      heroImage="/hero-laundry.jpg"
      category="Laundry Equipment"
      title="Industrial Dryers"
      heroSubtitle="High-capacity tumble dryers engineered for fast, energy-efficient drying in hotels, hospitals, and large-scale laundry operations."
      introTitle="Dry faster. Spend less."
      introText="Our industrial dryer range delivers superior moisture extraction and faster cycle times — reducing labour costs and energy consumption without compromising on fabric care. Every model is built for continuous commercial use with minimal downtime."
      benefits={[
        { icon: '⚡', title: 'Energy Efficient', desc: 'Heat pump and gas options available, reducing energy costs by up to 60% compared to conventional electric dryers.' },
        { icon: '⏱️', title: 'Fast Cycles', desc: 'High-capacity drums and optimised airflow cut drying times significantly, increasing throughput.' },
        { icon: '🛠️', title: 'Easy Maintenance', desc: 'Front-accessible lint filters and service panels keep downtime to a minimum.' },
      ]}
      products={[
        { model: 'TD6-8', desc: 'Tumble dryer · 8 kg', slug: 'td68', placeholder: 'TD6-8' },
        { model: 'TD6-11', desc: 'Tumble dryer · 11 kg', slug: 'td611', placeholder: 'TD6-11' },
        { model: 'TD6-14', desc: 'Tumble dryer · 14 kg', slug: 'td614', placeholder: 'TD6-14' },
        { model: 'UniMac UT050', desc: 'Industrial dryer · 50 lbs', slug: 'unimacUT050', placeholder: 'UniMac+UT050' },
        { model: 'Primus T13', desc: 'Industrial dryer · 13 kg', slug: 'primusT13', placeholder: 'Primus+T13' },
        { model: 'Alliance H160', desc: 'High-capacity dryer · 160 lbs', slug: 'allianceH160', placeholder: 'Alliance+H160' },
      ]}
      basePath="/solutions/laundry/industrial-dryers"
    />
  );
}
