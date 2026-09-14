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
        { model: 'Quickdry Condense', desc: 'Electrolux Professional · Quick condenser dryer', slug: 'quickdry-condense', placeholder: 'Quickdry Condense', image: '/products/dryers/quickdry-condense.jpg' },
        { model: 'PD9C', desc: 'Electrolux Professional · Compact vented dryer', slug: 'pd9c', placeholder: 'PD9C', image: '/products/dryers/pd9c.jpg' },
        { model: 'TD6-14LAC', desc: 'Electrolux Professional · Tumble dryer · 14 kg', slug: 'td6-14lac', placeholder: 'TD6-14LAC', image: '/products/dryers/td6-14lac.jpg' },
        { model: 'TD6-20LAC', desc: 'Electrolux Professional · Tumble dryer · 20 kg', slug: 'td6-20lac', placeholder: 'TD6-20LAC', image: '/products/dryers/td6-20lac.jpg' },
        { model: 'TD6-7', desc: 'Electrolux Professional · Tumble dryer · 7 kg', slug: 'td6-7', placeholder: 'TD6-7', image: '/products/dryers/td6-7.jpg' },
        { model: 'TD6-7LAC', desc: 'Electrolux Professional · Tumble dryer · 7 kg · Left-hand door', slug: 'td6-7lac', placeholder: 'TD6-7LAC', image: '/products/dryers/td6-7lac.jpg' },
      ]}
      basePath="/solutions/laundry/industrial-dryers"
    />
  );
}
