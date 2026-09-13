import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function PrimusFX180Page() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Washer Extractors', href: '/solutions/laundry/washer-extractors' },
        { label: 'Primus FX180' },
      ]}
      category="Washer Extractors"
      model="Primus FX180"
      subtitle="180 lbs / 82 kg Soft-Mount Industrial Washer Extractor — 450G"
      image="/products/primusfx180.jpg"
      placeholder="Primus FX180"
      keySpecs={[
        { label: 'Capacity', value: '82 kg / 180 lbs' },
        { label: 'Extract G-Force', value: '450 G' },
        { label: 'Mount Type', value: 'Soft-Mount' },
      ]}
      description={[
        'The Primus FX180 is a large-capacity soft-mount washer extractor designed for high-throughput on-premise laundries and industrial processing facilities. Its innovative spring-and-damper soft-mount system eliminates the need for floor bolting or concrete reinforcement, dramatically simplifying installation and enabling flexible floor layouts.',
        'Delivering 450G extraction force across an 82 kg drum, the FX180 ensures exceptionally low residual moisture levels that reduce drying energy costs by up to 30%. The machine features Primus\'s intuitive M+ touch-screen controller, providing precise program management, remote diagnostics capability, and full traceability for compliance-sensitive laundry operations.',
      ]}
      featureStrip={[
        { icon: '🏗️', label: 'Installation', value: 'Soft-Mount — No Floor Anchoring' },
        { icon: '⚡', label: 'Extract Force', value: '450 G High Extraction' },
        { icon: '📱', label: 'Controller', value: 'M+ Touch-Screen Interface' },
        { icon: '🌍', label: 'Connectivity', value: 'Remote Diagnostics Ready' },
      ]}
      specs={[
        { label: 'Drum Capacity', value: '82 kg / 180 lbs' },
        { label: 'Drum Volume', value: '820 L' },
        { label: 'Extract G-Force', value: '450 G' },
        { label: 'Spin Speed', value: '1,050 RPM' },
        { label: 'Motor Power', value: '22 kW' },
        { label: 'Heating Options', value: 'Steam / Electric / Gas' },
        { label: 'Water Connection', value: 'Hot & Cold, 1" BSP' },
        { label: 'Drain Connection', value: 'Ø 75 mm' },
        { label: 'Dimensions (W×D×H)', value: '1,480 × 1,380 × 1,980 mm' },
        { label: 'Net Weight', value: '1,250 kg' },
      ]}
      features={[
        {
          title: 'Soft-Mount Technology',
          desc: 'Advanced spring-damper isolation system absorbs vibration during high-speed extraction, removing the need for foundation bolts or reinforced concrete slabs.',
        },
        {
          title: 'M+ Touch-Screen Controller',
          desc: 'Large colour touch-screen provides intuitive program creation, real-time cycle monitoring, fault diagnostics, and multi-language support.',
        },
        {
          title: 'Multi-Energy Heating',
          desc: 'Available with steam, electric, or gas heating configurations to suit your facility\'s energy infrastructure and cost profile.',
        },
        {
          title: 'Auto-Imbalance Redistribution',
          desc: 'Smart load balancing during ramp-up to extraction speed prevents excessive vibration, protecting both the machine and building structure.',
        },
        {
          title: 'Remote Diagnostics',
          desc: 'Built-in connectivity module allows service engineers to access machine data remotely, enabling faster fault resolution and minimising downtime.',
        },
        {
          title: 'High-Throughput Drum Design',
          desc: 'The large 820 L drum with optimised lifter geometry ensures thorough mechanical wash action even at full 82 kg rated load.',
        },
      ]}
      backHref="/solutions/laundry/washer-extractors"
      backLabel="All Washer Extractors"
    />
  );
}
