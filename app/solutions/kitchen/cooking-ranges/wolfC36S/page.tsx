import ProductDetailPage from '@/app/components/ProductDetailPage';
export default function WolfC36S() {
  return (
    <ProductDetailPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Kitchen Systems', href: '/solutions/kitchen' }, { label: 'Cooking Ranges', href: '/solutions/kitchen/cooking-ranges' }, { label: 'Wolf C36S' }]}
      category="Cooking Ranges" model="Wolf C36S" subtitle="Pro series commercial range · 36 inch"
      image="/products/ranges/wolf-c36s.jpg" placeholder="Wolf+C36S"
      keySpecs={[{ label: 'Burners', value: '6' }, { label: 'BTU/burner', value: '30,000' }, { label: 'Series', value: 'Pro Series' }]}
      description={['The Wolf C36S Pro Series range represents the pinnacle of commercial cooking equipment. Its dual-stacked burners deliver precise control from a delicate simmer to an intense sear — preferred by top professional chefs.', 'Built with Wolf\'s signature heavy-duty construction and iconic red knobs, it combines performance with a premium kitchen aesthetic.']}
      featureStrip={[{ icon: '👨‍🍳', label: 'Series', value: 'Pro Series' }, { icon: '🔥', label: 'Burners', value: 'Dual-stacked' }, { icon: '🎯', label: 'Control', value: 'Simmer to sear' }, { icon: '⭐', label: 'Build', value: 'Premium quality' }]}
      specs={[{ label: 'Model', value: 'Wolf C36S' }, { label: 'Burners', value: '6 dual-stacked' }, { label: 'BTU per Burner (high)', value: '30,000' }, { label: 'BTU per Burner (low)', value: '300 (simmer)' }, { label: 'Oven Type', value: 'Convection oven base' }, { label: 'Grate Material', value: 'Porcelain cast iron' }, { label: 'Width × Height × Depth', value: '914 × 1067 × 813 mm' }, { label: 'Net Weight', value: '210 kg' }, { label: 'Gas Connection', value: '3/4 inch NPT' }, { label: 'Certification', value: 'NSF, CE, CSA' }]}
      features={[{ title: 'Dual-Stacked Burners', desc: 'Two-tier burner system delivers precise control from simmer to full sear.' }, { title: 'Convection Oven', desc: 'Fan-assisted oven base for even baking and roasting results.' }, { title: 'Porcelain Cast-Iron Grates', desc: 'Smooth, durable grates protect pans while retaining heat.' }, { title: 'Professional Grade', desc: 'Preferred by professional chefs in top restaurants worldwide.' }, { title: 'Premium Aesthetics', desc: 'Iconic Wolf design with stainless steel and red knob detail.' }, { title: 'Precise Control', desc: 'Each burner individually adjustable across its full range.' }]}
      backHref="/solutions/kitchen/cooking-ranges" backLabel="All Ranges"
    />
  );
}
