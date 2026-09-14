import ProductDetailPage from '@/app/components/ProductDetailPage';

export default function Line6000FFS() {
  return (
    <ProductDetailPage
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Laundry Equipment', href: '/solutions/laundry' },
        { label: 'Ironers & Presses', href: '/solutions/laundry/ironers-presses' },
        { label: 'Line 6000 FFS' },
      ]}
      category="Ironers & Presses"
      model="Line 6000 FFS"
      subtitle="Cylinder ironer · Feeding, folding & stacking"
      image="/products/ironers/ironer-ffs.jpg"
      placeholder="Line 6000 FFS"
      keySpecs={[
        { label: 'Series', value: 'Line 6000' },
        { label: 'Automation', value: 'Feeding, folding & stacking' },
        { label: 'Delivery', value: 'Front delivery' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      description={[
        'The Electrolux Professional Line 6000 FFS (Feeding, Folding & Stacking) is the most automated ironer in the range, combining feeding, ironing, folding, and stacking in one continuous workflow.',
        'Designed for the highest-volume laundry operations — large hotels, hospital linen services, and industrial laundries — where maximum automation and minimal labour are essential.',
      ]}
      featureStrip={[
        { icon: '🤖', label: 'Feeding', value: 'Automatic' },
        { icon: '📐', label: 'Folding', value: 'Automatic' },
        { icon: '📦', label: 'Stacking', value: 'Automatic' },
        { icon: '🏆', label: 'Automation', value: 'Maximum — FFS' },
      ]}
      specs={[
        { label: 'Series', value: 'Line 6000' },
        { label: 'Automation', value: 'Feeding, Folding & Stacking (FFS)' },
        { label: 'Delivery', value: 'Front delivery' },
        { label: 'Heating Options', value: 'Electric, Gas, Steam' },
        { label: 'Brand', value: 'Electrolux Professional' },
      ]}
      features={[
        { title: 'Full FFS Automation', desc: 'Linen is automatically fed, ironed, folded, and stacked — requiring minimal operator involvement from start to finish.' },
        { title: 'Maximum Productivity', desc: 'The highest throughput in the Electrolux Professional ironer range, designed for the most demanding laundry volumes.' },
        { title: 'DIAMMS Technology', desc: 'Patented Direct Ironer Advanced Moisture Management System ensures optimal ironing quality and fabric care.' },
        { title: 'CMIS Compatible', desc: 'Compatible with the Certus Management Information System for production monitoring and energy tracking.' },
      ]}
      backHref="/solutions/laundry/ironers-presses"
      backLabel="All Ironers & Presses"
    />
  );
}
