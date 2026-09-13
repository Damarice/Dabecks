import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SU18K() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: 'SU-18K' }]}
      category="Split Units" model="SU-18K" subtitle="Wall-mounted inverter split · 18,000 BTU / 1.5 ton"
      image="/products/ac/su18k.jpg" placeholder="SU-18K"
      keySpecs={[{ label: 'Capacity', value: '18,000 BTU' }, { label: 'EER', value: '3.7' }, { label: 'Coverage', value: 'Up to 50 m²' }]}
      description={['The SU-18K covers spaces up to 50 m² — ideal for larger offices, meeting rooms, and hotel suites. Its 1.5 ton inverter compressor efficiently maintains set temperatures even during peak daytime heat.', 'Dual filtration system removes dust, bacteria, and allergens for improved indoor air quality in commercial spaces.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '18,000 BTU / 1.5 ton' }, { icon: '📏', label: 'Coverage', value: 'Up to 50 m²' }, { icon: '🌬️', label: 'Airflow', value: '4-way swing' }, { icon: '🧹', label: 'Filter', value: 'Dual filtration' }]}
      specs={[{ label: 'Model', value: 'SU-18K' }, { label: 'Cooling Capacity', value: '18,000 BTU/hr (5.3 kW)' }, { label: 'EER', value: '3.7' }, { label: 'Indoor Noise', value: '26 dB(A)' }, { label: 'Refrigerant', value: 'R32' }, { label: 'Coverage Area', value: 'Up to 50 m²' }, { label: 'Indoor Unit (W×H×D)', value: '980 × 310 × 220 mm' }, { label: 'Indoor Weight', value: '13 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A+' }]}
      features={[{ title: 'Large Room Coverage', desc: 'Handles spaces up to 50 m² for larger offices and suites.' }, { title: 'Dual Filtration', desc: 'Removes dust, bacteria, and allergens for healthy indoor air.' }, { title: '4-Way Louvre', desc: 'Horizontal and vertical swing for full room air distribution.' }, { title: 'Dehumidification Mode', desc: 'Dedicated dry mode reduces humidity without overcooling.' }, { title: 'Weekly Timer', desc: 'Programmable 7-day schedule for energy-efficient operation.' }, { title: 'Auto Clean', desc: 'Built-in coil drying prevents mould growth in indoor unit.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
