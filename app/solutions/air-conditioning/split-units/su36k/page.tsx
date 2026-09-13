import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function SU36K() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Split Units', href: '/solutions/air-conditioning/split-units' }, { label: 'SU-36K' }]}
      category="Split Units" model="SU-36K" subtitle="Wall-mounted inverter split · 36,000 BTU / 3 ton"
      image="/products/ac/su36k.jpg" placeholder="SU-36K"
      keySpecs={[{ label: 'Capacity', value: '36,000 BTU' }, { label: 'Coverage', value: 'Up to 100 m²' }, { label: 'Heat Pump', value: 'Yes' }]}
      description={['The SU-36K is the largest split unit in our range — a 3-ton heat pump model covering spaces up to 100 m². Suitable for large retail spaces, open-plan offices, and hotel lobbies where wall-mount installation is preferred over cassette or ducted.', 'Its heat pump function provides both cooling and heating, making it a year-round climate control solution.']}
      featureStrip={[{ icon: '❄️', label: 'Capacity', value: '36,000 BTU / 3 ton' }, { icon: '🔥', label: 'Heat Pump', value: 'Heating + cooling' }, { icon: '📏', label: 'Coverage', value: 'Up to 100 m²' }, { icon: '⚡', label: 'Inverter', value: 'A+ efficiency' }]}
      specs={[{ label: 'Model', value: 'SU-36K' }, { label: 'Cooling Capacity', value: '36,000 BTU/hr (10.5 kW)' }, { label: 'Heating Capacity', value: '38,000 BTU/hr (11.2 kW)' }, { label: 'COP (Heating)', value: '4.1' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Coverage Area', value: 'Up to 100 m²' }, { label: 'Indoor Unit (W×H×D)', value: '1200 × 360 × 290 mm' }, { label: 'Indoor Weight', value: '22 kg' }, { label: 'Supply Voltage', value: '220–240 V / 50 Hz' }, { label: 'Certification', value: 'CE, Energy Class A+' }]}
      features={[{ title: 'Heat Pump', desc: 'Provides both cooling in summer and efficient heating in cooler months.' }, { title: 'Largest Coverage', desc: 'Handles spaces up to 100 m² with a single wall-mount unit.' }, { title: 'High COP', desc: '4.1 COP heating efficiency — significantly lower running costs than electric heaters.' }, { title: 'Auto Changeover', desc: 'Automatically switches between heating and cooling as needed.' }, { title: 'Strong Airflow', desc: 'Powerful fan motor ensures air reaches the entire room.' }, { title: 'Programmable Timer', desc: '7-day weekly timer for automated, energy-efficient scheduling.' }]}
      backHref="/solutions/air-conditioning/split-units" backLabel="All Split Units"
    />
  );
}
