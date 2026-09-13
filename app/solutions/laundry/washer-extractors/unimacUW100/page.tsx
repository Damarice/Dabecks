import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function UnimacUW100Page() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'UniMac UW100' },
      ]}
      category="Washer Extractors"
      model="UniMac UW100"
      subtitle="100 lbs / 45 kg ENERGY STAR® Certified Hard-Mount Washer Extractor"
      image="/products/unimacuw100.jpg"
      placeholder="UniMac UW100"
      keySpecs={[
        { label: 'Capacity', value: '45 kg / 100 lbs' },
        { label: 'Certification', value: 'ENERGY STAR®' },
        { label: 'Mount Type', value: 'Hard-Mount' },
      ]}
      description={[
        'The UniMac UW100 is an ENERGY STAR® certified hard-mount washer extractor delivering outstanding wash quality and energy efficiency for commercial laundry operations. Designed for on-premise laundries in healthcare, hospitality, and institutional settings, it combines robust construction with advanced water and energy conservation features that reduce operating costs without compromising wash performance.',
        'The UW100\'s patented UniLinc™ control system offers unmatched programming flexibility, real-time diagnostics, and network connectivity to fleet management platforms. Its stainless steel drum and tub, combined with precision-balanced extraction, provide consistent results cycle after cycle with minimal maintenance requirements.',
      ]}
      featureStrip={[
        { icon: '🌿', label: 'Efficiency', value: 'ENERGY STAR® Certified' },
        { icon: '💻', label: 'Controls', value: 'UniLinc™ Network Controller' },
        { icon: '💧', label: 'Water Use', value: 'Automatic Water Savings System' },
        { icon: '🔩', label: 'Build', value: 'Full Stainless Steel Construction' },
      ]}
      specs={[
        { label: 'Drum Capacity', value: '45 kg / 100 lbs' },
        { label: 'Drum Volume', value: '450 L' },
        { label: 'Extract G-Force', value: '350 G' },
        { label: 'Spin Speed', value: '870 RPM' },
        { label: 'Motor Power', value: '11 kW' },
        { label: 'Heating Power', value: '24 kW (Electric)' },
        { label: 'Water Connection', value: 'Hot & Cold, 1" BSP' },
        { label: 'Drain Connection', value: 'Ø 63 mm' },
        { label: 'Dimensions (W×D×H)', value: '1,100 × 1,080 × 1,680 mm' },
        { label: 'Net Weight', value: '720 kg' },
      ]}
      features={[
        {
          title: 'ENERGY STAR® Certified',
          desc: 'Meets strict energy and water efficiency guidelines, reducing utility consumption significantly compared to standard commercial washers and lowering total cost of ownership.',
        },
        {
          title: 'UniLinc™ Control System',
          desc: 'Patented networked controller provides comprehensive program management, remote monitoring, usage reporting, and integration with fleet management software.',
        },
        {
          title: 'Automatic Water Savings System',
          desc: 'Load-sensing technology automatically adjusts water fill levels to the actual linen load weight, reducing water consumption by up to 40% per cycle.',
        },
        {
          title: 'Hard-Mount Durability',
          desc: 'Solid hard-mount construction with heavy-gauge steel frame and polymer-coated panels ensures maximum durability in high-cycle institutional environments.',
        },
        {
          title: 'Balanced Extraction System',
          desc: 'Precision-engineered drum bearings and suspension deliver smooth, low-vibration extraction performance, extending machine life and protecting linen integrity.',
        },
        {
          title: 'Hygiene-Ready Programs',
          desc: 'Pre-loaded thermal disinfection programs conform to healthcare hygiene standards, ensuring sluice-grade wash results for medical linens and healthcare textiles.',
        },
      ]}
      backHref="/solutions/laundry/washer-extractors"
      backLabel="All Washer Extractors"
    />
  );
}
