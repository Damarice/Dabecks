import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function DaikinVRV4() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'VRF/VRV Systems', href: '/solutions/air-conditioning/vrf-vrv-systems' }, { label: 'Daikin VRV IV' }]}
      category="VRF/VRV Systems" model="Daikin VRV IV" subtitle="Premium VRV system · up to 64 zones"
      image="/products/ac/daikin-vrv4.jpg" placeholder="Daikin+VRV+IV"
      keySpecs={[{ label: 'Zones', value: 'Up to 64' }, { label: 'COP', value: '4.52' }, { label: 'Brand', value: 'Daikin' }]}
      description={['The Daikin VRV IV is the industry benchmark for large-scale VRF/VRV installations. Supporting up to 64 indoor units on a single system with a COP of 4.52, it sets the standard for energy efficiency in commercial HVAC.', 'Daikin\'s Demand Side Management and advanced inverter technology make the VRV IV the preferred choice for architects, consultants, and building owners worldwide.']}
      featureStrip={[{ icon: '⭐', label: 'Brand', value: 'Daikin — world #1' }, { icon: '🏢', label: 'Zones', value: 'Up to 64' }, { icon: '⚡', label: 'COP', value: '4.52 — class leading' }, { icon: '📡', label: 'Smart', value: 'Daikin Online Controller' }]}
      specs={[{ label: 'Model', value: 'Daikin VRV IV' }, { label: 'Max Indoor Units', value: '64 per system' }, { label: 'COP (Heating)', value: '4.52' }, { label: 'EER (Cooling)', value: '3.95' }, { label: 'Refrigerant', value: 'R410A' }, { label: 'Capacity Range', value: '8–54 HP' }, { label: 'Max Piping', value: '1000 m equivalent' }, { label: 'Height Difference', value: 'Up to 90 m' }, { label: 'Supply Voltage', value: '380–415 V / 3-phase / 50 Hz' }, { label: 'Connectivity', value: 'Daikin Online Controller' }]}
      features={[{ title: 'World-Leading Performance', desc: 'COP 4.52 — the highest efficiency VRV system available from Daikin.' }, { title: '64-Zone Coverage', desc: 'Single system covers entire large commercial buildings.' }, { title: 'Intelligent DSM', desc: 'Demand Side Management reduces peak energy consumption automatically.' }, { title: 'Online Controller', desc: 'Full building monitoring and control via Daikin\'s cloud platform.' }, { title: 'Heat Recovery', desc: 'Simultaneous heating and cooling in different zones from one system.' }, { title: 'Global Service', desc: 'Backed by Daikin\'s worldwide parts and engineer network.' }]}
      backHref="/solutions/air-conditioning/vrf-vrv-systems" backLabel="All VRF/VRV Systems"
    />
  );
}
