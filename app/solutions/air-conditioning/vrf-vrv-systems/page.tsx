import SubpageListingPage from '@/app/components/SubpageListingPage';

export default function VRFVRVSystems() {
  return (
    <SubpageListingPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'VRF/VRV Systems' }]}
      heroImage="/hero-ac.jpg"
      category="Air Conditioning"
      title="VRF/VRV Systems"
      heroSubtitle="Variable refrigerant flow systems for large multi-zone commercial buildings — maximum efficiency, precise zone control, and flexible design."
      introTitle="One system. Total control."
      introText="VRF/VRV systems connect a single outdoor unit to multiple indoor units across a building — delivering independent temperature control in every zone while consuming significantly less energy than traditional systems. Ideal for hotels, offices, hospitals, and shopping centres."
      benefits={[
        { icon: '🏢', title: 'Multi-Zone Control', desc: 'Up to 64 indoor units on a single outdoor system, each independently controlled.' },
        { icon: '⚡', title: 'Energy Efficient', desc: 'Inverter-driven compressors and heat recovery reduce energy costs by up to 30%.' },
        { icon: '🔧', title: 'Flexible Design', desc: 'Wide range of indoor unit types — wall, ceiling, cassette, ducted — for any space.' },
      ]}
      products={[
        { model: 'VRF-8HP', desc: 'VRF outdoor unit · 8 HP', slug: 'vrf8hp', placeholder: 'VRF-8HP' },
        { model: 'VRF-12HP', desc: 'VRF outdoor unit · 12 HP', slug: 'vrf12hp', placeholder: 'VRF-12HP' },
        { model: 'VRF-16HP', desc: 'VRF outdoor unit · 16 HP', slug: 'vrf16hp', placeholder: 'VRF-16HP' },
        { model: 'VRF-20HP', desc: 'VRF outdoor unit · 20 HP', slug: 'vrf20hp', placeholder: 'VRF-20HP' },
        { model: 'Daikin VRV IV', desc: 'VRV system · up to 64 zones', slug: 'daikinVRV4', placeholder: 'Daikin+VRV+IV' },
        { model: 'Mitsubishi City Multi', desc: 'VRF system · R2 series', slug: 'mitsubishiCityMulti', placeholder: 'Mitsubishi+City+Multi' },
      ]}
      basePath="/solutions/air-conditioning/vrf-vrv-systems"
    />
  );
}
