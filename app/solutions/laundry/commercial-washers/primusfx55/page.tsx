import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function PrimusFX55() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'Primus FX55' },
      ]}
      category="Commercial Washers"
      model="Primus FX55"
      subtitle="Industrial front-load washer · 55 lbs / 25 kg"
      image="/products/washers/primus-fx55.jpg"
      placeholder="Primus FX55"
      keySpecs={[
        { label: 'Capacity', value: '25 kg' },
        { label: 'Spin Speed', value: '1000 RPM' },
        { label: 'Energy', value: 'A+' },
      ]}
      description={[
        'The Primus FX55 is an industrial-grade front-load washer built for continuous heavy-duty use. With 55 lbs capacity and robust construction, it is the ideal choice for high-demand laundry environments such as large hotels, hospitals, and industrial facilities.',
        'Built for reliability and longevity, the FX55 delivers consistent performance even under the most demanding conditions — with minimal downtime and easy maintenance access.',
      ]}
      featureStrip={[
        { icon: '🏭', label: 'Industrial Grade', value: 'Built for heavy daily use' },
        { icon: '💧', label: 'Water Efficiency', value: 'Optimised per-cycle usage' },
        { icon: '⚙️', label: 'Spin Speed', value: '1000 RPM extraction' },
        { icon: '🔧', label: 'Low Downtime', value: 'Front-access service' },
      ]}
      specs={[
        { label: 'Model', value: 'Primus FX55' },
        { label: 'Load Capacity', value: '55 lbs (25 kg)' },
        { label: 'Drum Volume', value: '230 litres' },
        { label: 'Spin Speed (max)', value: '1000 RPM' },
        { label: 'Water Usage per Cycle', value: '75 litres' },
        { label: 'Energy Class', value: 'A+' },
        { label: 'Heating Element Power', value: '7.5 kW' },
        { label: 'Motor Power', value: '2.0 kW' },
        { label: 'Width × Height × Depth', value: '700 × 950 × 1000 mm' },
        { label: 'Net Weight', value: '130 kg' },
        { label: 'Supply Voltage', value: '380–415 V / 50 Hz' },
        { label: 'Noise Level (wash / spin)', value: '54 / 73 dB(A)' },
      ]}
      features={[
        { title: 'Industrial Build', desc: 'Heavy-duty materials and construction engineered for non-stop commercial operation.' },
        { title: 'Consistent Performance', desc: 'Delivers reliable wash results across all programs and load sizes.' },
        { title: 'Operator Friendly', desc: 'Clear, simple controls designed for all staff skill levels.' },
        { title: 'Robust Construction', desc: 'Reinforced drum and housing withstand years of intense use.' },
        { title: 'Minimal Downtime', desc: 'Front-accessible components make servicing fast and cost-effective.' },
        { title: 'Cost Effective', desc: 'Excellent operational efficiency and low total cost of ownership.' },
      ]}
      backHref="/solutions/laundry/commercial-washers"
      backLabel="All Commercial Washers"
    />
  );
}
