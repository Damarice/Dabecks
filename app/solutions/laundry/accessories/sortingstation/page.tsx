import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function SortingStationPage() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Laundry Accessories', href: '/solutions/laundry/accessories' },
        { label: 'Sorting Station' },
      ]}
      category="Laundry Accessories"
      model="Sorting Station"
      subtitle="4-Bay Commercial Linen Sorting Station — Ergonomic Pre-Wash Categorisation"
      image="/products/sortingstation.jpg"
      placeholder="Sorting Station"
      keySpecs={[
        { label: 'Sorting Bays', value: '4 Independent Bays' },
        { label: 'Bay Volume', value: '100 L per Bay' },
        { label: 'Frame', value: 'Stainless Steel' },
      ]}
      description={[
        'The Sorting Station is a purpose-built 4-bay linen sorting unit designed to streamline the pre-wash sorting process in commercial laundries. Each of the four independent bays accommodates a separate linen category — such as whites, colours, soiled items, and delicates — enabling operatives to classify and stage incoming linen directly into the correct wash batch without secondary handling.',
        'Constructed from tubular 304 stainless steel with individual HDPE bag liners per bay, the Sorting Station maintains clear hygienic separation between linen categories. The ergonomic working height reduces operative fatigue during high-volume sorting shifts, while the fixed castors allow the entire station to be repositioned as required within the facility layout.',
      ]}
      featureStrip={[
        { icon: '🗂️', label: 'Bays', value: '4 Independent Sorting Bays' },
        { icon: '🧺', label: 'Bay Volume', value: '100 Litres per Bay' },
        { icon: '🔩', label: 'Frame', value: '304 Stainless Steel Construction' },
        { icon: '🏥', label: 'Hygiene', value: 'Individual HDPE Bay Liners' },
      ]}
      specs={[
        { label: 'Number of Bays', value: '4' },
        { label: 'Volume per Bay', value: '100 Litres' },
        { label: 'Total Volume', value: '400 Litres' },
        { label: 'Frame Material', value: '304 Stainless Steel' },
        { label: 'Bay Liner Material', value: 'HDPE (colour-coded, removable)' },
        { label: 'Working Height', value: '900 mm' },
        { label: 'Castor Type', value: '4× fixed swivel, 2× with brake' },
        { label: 'Overall Dimensions (L×W×H)', value: '1,600 × 600 × 1,100 mm' },
        { label: 'Bay Opening Width', value: '360 mm per bay' },
        { label: 'Net Weight', value: '38 kg' },
      ]}
      features={[
        {
          title: '4 Independent Sorting Bays',
          desc: 'Four discrete compartments allow simultaneous sorting into four different linen categories — whites, colours, heavily soiled, and delicates — without cross-contamination.',
        },
        {
          title: 'Colour-Coded Bay Liners',
          desc: 'HDPE bag liners are available in four distinct colours per station, enforcing strict visual separation protocols that are essential in healthcare infection control environments.',
        },
        {
          title: 'Ergonomic Working Height',
          desc: '900 mm working surface height minimises bending and reaching during sorting operations, reducing operative musculoskeletal strain during extended sorting shifts.',
        },
        {
          title: 'Removable Bay Liners',
          desc: 'Individual HDPE liners lift out of each bay for direct transfer to the washing machine or separate hygienic cleaning, streamlining the linen intake workflow.',
        },
        {
          title: 'Robust Stainless Frame',
          desc: '304 stainless steel tubular frame with gusset-welded joints withstands the demands of continuous commercial laundry use and is fully resistant to cleaning chemical splashes.',
        },
        {
          title: 'Repositionable on Castors',
          desc: 'Fixed swivel castors with two braking wheels allow the sorting station to be easily moved to the optimal position within the laundry intake area and locked securely.',
        },
      ]}
      backHref="/solutions/laundry/accessories"
      backLabel="All Laundry Accessories"
    />
  );
}
