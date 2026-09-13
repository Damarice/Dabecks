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
      heroSubtitle="Heavy-duty washer extractors delivering high-G-force extraction for faster drying and maximum throughput in industrial laundry operations."
      introTitle="Extract more. Dry faster."
      introText="Our washer extractor range combines powerful washing performance with high-G-force extraction — significantly reducing residual moisture and cutting drying time. Built for the most demanding industrial environments."
      benefits={[
        { icon: '💧', title: 'High G-Force', desc: 'High-speed extraction removes maximum moisture, reducing drying time and energy costs significantly.' },
        { icon: '🏭', title: 'Industrial Built', desc: 'Reinforced construction handles the most demanding continuous-use commercial environments.' },
        { icon: '⚙️', title: 'Programmable', desc: 'Multiple programmable wash cycles adapt to different load types and soil levels.' },
      ]}
      products={[
        { model: 'WE-18', desc: 'Washer extractor · 18 kg', slug: 'we18', placeholder: 'WE-18' },
        { model: 'WE-24', desc: 'Washer extractor · 24 kg', slug: 'we24', placeholder: 'WE-24' },
        { model: 'WE-32', desc: 'Washer extractor · 32 kg', slug: 'we32', placeholder: 'WE-32' },
        { model: 'Primus FX180', desc: 'Washer extractor · 180 lbs', slug: 'primusFX180', placeholder: 'Primus+FX180' },
        { model: 'UniMac UW100', desc: 'Washer extractor · 100 lbs', slug: 'unimacUW100', placeholder: 'UniMac+UW100' },
        { model: 'Alliance AWN132', desc: 'Washer extractor · 132 lbs', slug: 'allianceAWN132', placeholder: 'Alliance+AWN132' },
      ]}
      basePath="/solutions/laundry/washer-extractors"
    />
  );
}
