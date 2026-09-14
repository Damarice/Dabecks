import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function WasherExtractors() {
  return (
    <SubpageListingPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors' },
      ]}
      heroImage="/hero-laundry.jpg"
      category="Laundry Equipment"
      title="Washer Extractors"
      heroSubtitle="Heavy-duty barrier washers delivering hygienic separation between clean and dirty laundry — essential for hospitals, care homes, and large institutions."
      introTitle="Hygiene by design."
      introText="Our barrier washer range provides complete separation between the soiled and clean sides of your laundry operation — a critical requirement for healthcare and institutional environments. Every WB6 model is built for continuous high-volume use with programmable hygiene cycles."
      benefits={[
        { icon: '💧', title: 'High G-Force', desc: 'High-speed extraction removes maximum moisture, reducing drying time and energy costs significantly.' },
        { icon: '🏭', title: 'Industrial Built', desc: 'Reinforced construction handles the most demanding continuous-use commercial environments.' },
        { icon: '⚙️', title: 'Programmable', desc: 'Multiple programmable wash cycles adapt to different load types and soil levels.' },
      ]}
      products={[
        { model: 'WB6-20', desc: 'Barrier washer · 20 kg', slug: 'wb6-20', placeholder: 'WB6-20', image: '/products/washer-extractors/wb6-20.jpg' },
        { model: 'WB6-27', desc: 'Barrier washer · 27 kg', slug: 'wb6-27', placeholder: 'WB6-27', image: '/products/washer-extractors/wb6-27.jpg' },
        { model: 'WB6-35', desc: 'Barrier washer · 35 kg', slug: 'wb6-35', placeholder: 'WB6-35', image: '/products/washer-extractors/wb6-35.jpg' },
        { model: 'WB6-70', desc: 'Pullman barrier washer · 70 kg', slug: 'wb6-70', placeholder: 'WB6-70', image: '/products/washer-extractors/wb6-70.jpg' },
        { model: 'WB6-90', desc: 'Pullman barrier washer · 90 kg', slug: 'wb6-90', placeholder: 'WB6-90', image: '/products/washer-extractors/wb6-90.jpg' },
        { model: 'WB6-110', desc: 'Pullman barrier washer · 110 kg', slug: 'wb6-110', placeholder: 'WB6-110', image: '/products/washer-extractors/wb6-110.jpg' },
      ]}
      basePath="/solutions/laundry/washer-extractors"
    />
  );
}
