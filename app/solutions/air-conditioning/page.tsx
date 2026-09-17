import CategoryLandingPage from '@/app/components/CategoryLandingPage';

export default function AirConditioningPage() {
  return (
    <CategoryLandingPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning' }]}
      heroImage="/hero-ac.jpg"
      heroTitle="Air Conditioning"
      heroSubtitle="Complete HVAC solutions for commercial and industrial buildings — from wall-mounted split units to large-scale VRF/VRV systems across East Africa."
      introTitle="Climate control. Done right."
      introText="Our air conditioning range covers the full spectrum of commercial HVAC needs — from single-room split units to multi-zone VRF systems for large office buildings, hotels, and shopping centres. Supply, installation, and comprehensive maintenance, all from one partner."
      featured={[
        { title: 'Split Units', desc: 'Wall-mounted and ceiling split AC units for individual rooms and offices — efficient and quiet.', image: '/hero-ac.jpg', href: '/solutions/air-conditioning/split-units' },
        { title: 'VRF/VRV Systems', desc: 'Variable refrigerant flow systems for large multi-zone buildings — maximum efficiency at scale.', image: '/hero-ac.jpg', href: '/solutions/air-conditioning/vrf-vrv-systems' },
        { title: 'Installation Services', desc: 'Professional installation, commissioning, and handover by our certified HVAC engineers.', image: '/hero-ac.jpg', href: '/solutions/air-conditioning/installation-services' },
      ]}
      categories={[
        { label: 'Split Units', href: '/solutions/air-conditioning/split-units', image: '/hero-ac.jpg' },
        { label: 'VRF/VRV Systems', href: '/solutions/air-conditioning/vrf-vrv-systems', image: '/hero-ac.jpg' },
        { label: 'Ducted Systems', href: '/solutions/air-conditioning/ducted-systems', image: '/hero-ac.jpg' },
        { label: 'Cassette Units', href: '/solutions/air-conditioning/cassette-units', image: '/hero-ac.jpg' },
        { label: 'Installation', href: '/solutions/air-conditioning/installation-services', image: '/hero-ac.jpg' },
        { label: 'Maintenance', href: '/solutions/air-conditioning/maintenance-repair', image: '/hero-ac.jpg' },
      ]}
      standards={[
        { icon: '❄️', title: 'Energy Efficiency', desc: 'Inverter technology reduces energy consumption by up to 60% compared to fixed-speed systems.' },
        { icon: '🔇', title: 'Quiet Operation', desc: 'Low-noise indoor units for offices, hotels, and healthcare environments.' },
        { icon: '🌿', title: 'Eco-Friendly Refrigerants', desc: 'R32 and R410A refrigerants with low global warming potential.' },
        { icon: '🛠️', title: 'Certified Engineers', desc: 'All installations and maintenance carried out by fully certified HVAC engineers.' },
      ]}
      customers={[
        { name: 'Westgate Shopping Mall', type: 'Retail', quote: 'Dabecks designed and installed our complete HVAC system. The VRF system has been running flawlessly for two years with excellent energy performance.', image: '/hero-clients.jpg' },
        { name: 'Radisson Blu Nairobi', type: 'Hospitality', quote: 'All 250 rooms fitted with Dabecks split units. Quiet, reliable, and perfectly maintained by their service team.', image: '/about-team.jpg' },
        { name: 'Strathmore University', type: 'Education', quote: 'The ducted system in our new faculty building is excellent. Dabecks handled design, installation, and staff training seamlessly.', image: '/about-journey.jpg' },
      ]}
      news={[
        { date: 'May 2026', title: 'New R32 Inverter Split Units — Now in Stock', desc: 'Dabecks introduces the latest generation R32 inverter split ACs — up to 60% more efficient than conventional units.', image: '/hero-ac.jpg' },
        { date: 'March 2026', title: 'VRF System Installation: Nairobi Office Tower', desc: 'A 12-storey commercial office building fitted with a full multi-zone VRF system by our certified team.', image: '/hero-clients.jpg' },
        { date: 'January 2026', title: 'AC Maintenance Guide for Commercial Buildings', desc: 'Our engineers share the top maintenance practices for extending AC system life and maintaining efficiency.', image: '/about-journey.jpg' },
      ]}
    />
  );
}
