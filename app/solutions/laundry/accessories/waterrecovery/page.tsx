import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function WaterRecoveryPage() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'Water Recovery System' },
      ]}
      category="Laundry Accessories"
      model="Water Recovery System"
      subtitle="Laundry Water Heat Recovery Unit — Reduce Energy & Water Costs"
      image="/products/waterrecovery.jpg"
      placeholder="Water Recovery System"
      keySpecs={[
        { label: 'Heat Recovery', value: 'Up to 70%' },
        { label: 'Water Savings', value: 'Up to 50%' },
        { label: 'Compatibility', value: 'All Washer Types' },
      ]}
      description={[
        'The Water Recovery System is a high-efficiency heat and water recovery unit designed to capture thermal energy from warm laundry wastewater and transfer it to incoming cold mains water, dramatically reducing the energy required to heat wash water. In high-throughput commercial laundries, this translates to heating cost reductions of up to 70%, delivering payback periods typically under 24 months.',
        'The system also incorporates a wastewater filtration and recirculation circuit that recovers and reuses clean rinse water from final wash cycles, reducing total facility water consumption by up to 50%. Compatible with all commercial washer-extractor types and heating energy sources, it is an essential sustainability upgrade for laundries seeking to reduce operating costs and environmental footprint.',
      ]}
      featureStrip={[
        { icon: '♻️', label: 'Heat Recovery', value: 'Up to 70% Thermal Recovery' },
        { icon: '💧', label: 'Water Savings', value: 'Up to 50% Water Reuse' },
        { icon: '⚡', label: 'Energy Cost', value: 'Payback Under 24 Months' },
        { icon: '🔌', label: 'Compatibility', value: 'Universal Washer Interface' },
      ]}
      specs={[
        { label: 'Heat Recovery Efficiency', value: 'Up to 70%' },
        { label: 'Water Recovery Rate', value: 'Up to 50%' },
        { label: 'Heat Exchanger Type', value: 'Plate heat exchanger, stainless steel' },
        { label: 'Storage Tank Volume', value: '500 L (insulated)' },
        { label: 'Max Inlet Water Temp', value: '60°C' },
        { label: 'Flow Rate', value: 'Up to 1,200 L/hr' },
        { label: 'Filter Type', value: 'Self-cleaning 100 µm screen filter' },
        { label: 'Power Supply', value: '230V AC, 50 Hz (controls only)' },
        { label: 'Dimensions (W×D×H)', value: '900 × 600 × 1,800 mm' },
        { label: 'Net Weight (empty)', value: '145 kg' },
      ]}
      features={[
        {
          title: 'Up to 70% Heat Recovery',
          desc: 'Stainless steel plate heat exchanger captures thermal energy from warm outgoing wastewater and pre-heats incoming cold mains water, cutting water heating energy costs by up to 70%.',
        },
        {
          title: 'Up to 50% Water Reuse',
          desc: 'Final rinse water — which is largely clean — is filtered, stored, and recirculated as pre-fill water for subsequent wash cycles, halving total facility water consumption.',
        },
        {
          title: 'Self-Cleaning Screen Filter',
          desc: 'Automated 100-micron self-cleaning screen filter removes lint, fibres, and sediment from recovered water before recirculation, protecting downstream plumbing and machines.',
        },
        {
          title: 'Insulated Storage Tank',
          desc: '500-litre thermally insulated stainless steel storage tank retains recovered hot water between wash cycles, maintaining temperature for immediate use without reheating.',
        },
        {
          title: 'Universal Machine Compatibility',
          desc: 'Standard plumbing connections interface with any commercial washer-extractor brand or model, and the system can serve multiple machines simultaneously in larger laundries.',
        },
        {
          title: 'Sub-24-Month Payback',
          desc: 'Combined water and energy savings in a typical commercial laundry operation deliver full capital cost payback within 18–24 months, with ongoing cost reductions thereafter.',
        },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Laundry Accessories"
    />
  );
}
