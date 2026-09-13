import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function ShelfRackPage() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'Shelf Rack Pro' },
      ]}
      category="Laundry Accessories"
      model="Shelf Rack Pro"
      subtitle="Heavy-Duty Stainless Steel Linen Storage Rack — 5-Tier Adjustable Shelving"
      image="/products/shelfrack.jpg"
      placeholder="Shelf Rack Pro"
      keySpecs={[
        { label: 'Shelf Tiers', value: '5 Adjustable' },
        { label: 'Load per Shelf', value: '150 kg' },
        { label: 'Frame', value: 'Stainless Steel' },
      ]}
      description={[
        'The Shelf Rack Pro is a professional-grade heavy-duty linen storage rack constructed from 304 stainless steel, designed for clean linen rooms, laundry dispatch areas, and linen distribution hubs. Five height-adjustable wire shelves provide 750 kg of total storage capacity, accommodating everything from stacked flat sheets and towels to bulk bags of clean uniform packs.',
        'The open-wire shelf design promotes air circulation around stored linen, preventing moisture build-up and maintaining the freshness of clean items during storage. The rack\'s adjustable levelling feet ensure stability on uneven floors, and optional mobile castor sets allow it to be repositioned within linen rooms or used as a mobile dispatch trolley in larger facilities.',
      ]}
      featureStrip={[
        { icon: '📦', label: 'Capacity', value: '750 kg Total (150 kg per Shelf)' },
        { icon: '🔩', label: 'Frame', value: '304 Stainless Steel' },
        { icon: '💨', label: 'Airflow', value: 'Open-Wire Shelf Design' },
        { icon: '⚙️', label: 'Adjustability', value: '5 Height-Adjustable Tiers' },
      ]}
      specs={[
        { label: 'Number of Shelves', value: '5 tiers, height-adjustable' },
        { label: 'Load Capacity per Shelf', value: '150 kg' },
        { label: 'Total Load Capacity', value: '750 kg' },
        { label: 'Frame Material', value: '304 Stainless Steel' },
        { label: 'Shelf Type', value: 'Open-wire stainless steel grid' },
        { label: 'Shelf Adjustment Pitch', value: '25 mm increments' },
        { label: 'Shelf Dimensions (L×D)', value: '1,200 × 500 mm' },
        { label: 'Overall Dimensions (L×W×H)', value: '1,200 × 500 × 1,800 mm' },
        { label: 'Levelling Feet Adjustment', value: '±20 mm' },
        { label: 'Net Weight', value: '32 kg' },
      ]}
      features={[
        {
          title: 'Heavy-Duty Stainless Construction',
          desc: '304 stainless steel posts and wire shelves resist corrosion from cleaning chemicals and laundry humidity, ensuring a long service life in commercial linen storage environments.',
        },
        {
          title: '5 Fully Adjustable Shelves',
          desc: 'Shelves adjust in 25 mm increments across the full rack height, accommodating stacked sheets, folded towels, bagged uniforms, and bulk linen packs of varying heights.',
        },
        {
          title: '150 kg Per-Shelf Rating',
          desc: 'Each shelf is rated to 150 kg, providing a combined 750 kg capacity — sufficient for the complete clean linen inventory of a medium-sized hotel floor or hospital ward.',
        },
        {
          title: 'Open-Wire Airflow Design',
          desc: 'Wire grid shelf surfaces allow unrestricted air circulation through stored linen stacks, preventing dampness, odour development, and bacterial growth during storage.',
        },
        {
          title: 'Levelling Feet for Stability',
          desc: 'Four adjustable levelling feet with ±20 mm range compensate for uneven floor surfaces, ensuring rack stability and preventing rocking when loading heavy shelves.',
        },
        {
          title: 'Optional Mobile Castor Kit',
          desc: 'Separately available heavy-duty castor conversion kit (2 fixed, 2 swivel with brakes) transforms the rack into a mobile dispatch trolley for flexible linen distribution.',
        },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Laundry Accessories"
    />
  );
}
