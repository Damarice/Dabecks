'use client';

import { notFound } from 'next/navigation';
import ProductDetailPage from '@/app/components/ProductDetailPage';

const products: Record<string, React.ComponentProps<typeof ProductDetailPage>> = {
  'wh67': {
    breadcrumbs: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Laundry Equipment', href: '/solutions/laundry' },
      { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
      { label: 'WH6-7' },
    ],
    category: 'Electrolux Professional',
    model: 'WH6-7',
    subtitle: 'Front-load commercial washer · 7 kg',
    image: '/products/washers/wb67.jpg',
    placeholder: 'WH6-7',
    keySpecs: [
      { label: 'Capacity', value: '7 kg' },
      { label: 'Type', value: 'Front-load' },
      { label: 'Brand', value: 'Electrolux Professional' },
      { label: 'Use', value: 'Commercial' },
    ],
    description: [
      'The Electrolux Professional WH6-7 is a high-performance front-load commercial washer designed for hotels, guesthouses, and laundry operations with demanding daily volumes.',
      'Built with energy-saving technology, the WH6-7 reduces water and energy consumption while delivering consistent, hygienic wash results. Its intuitive controls and programmable cycles make it easy to operate for any facility team.',
    ],
    featureStrip: [
      { icon: '⚡', label: 'Energy Class', value: 'A+++' },
      { icon: '💧', label: 'Water Saving', value: 'Up to 40%' },
      { icon: '🔒', label: 'Drum Material', value: 'Stainless Steel' },
      { icon: '⚙️', label: 'Controls', value: 'Programmable' },
    ],
    specs: [
      { label: 'Capacity', value: '7 kg' },
      { label: 'Spin Speed', value: 'Up to 1400 rpm' },
      { label: 'Loading Type', value: 'Front-load' },
      { label: 'Controls', value: 'Electronic programmable' },
      { label: 'Drum Material', value: 'Stainless steel' },
      { label: 'Brand', value: 'Electrolux Professional' },
    ],
    features: [
      { title: 'Energy Efficiency', desc: 'Advanced inverter motor and intelligent water management reduce running costs significantly compared to conventional washers.' },
      { title: 'Hygienic Results', desc: 'Achieves wash temperatures up to 95°C, meeting hygiene standards required by hospitals and hospitality facilities.' },
      { title: 'Low Vibration Design', desc: 'Balanced drum system minimises vibration and noise, suitable for installation in guest-facing areas.' },
    ],
    backHref: '/solutions/laundry/commercial-washers',
    backLabel: 'Commercial Washers',
  },

  'wh68': {
    breadcrumbs: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Laundry Equipment', href: '/solutions/laundry' },
      { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
      { label: 'WH6-8' },
    ],
    category: 'Electrolux Professional',
    model: 'WH6-8',
    subtitle: 'Front-load commercial washer · 8 kg',
    image: '/products/washers/wb68.jpg',
    placeholder: 'WH6-8',
    keySpecs: [
      { label: 'Capacity', value: '8 kg' },
      { label: 'Type', value: 'Front-load' },
      { label: 'Brand', value: 'Electrolux Professional' },
      { label: 'Use', value: 'Commercial' },
    ],
    description: [
      'The Electrolux Professional WH6-8 offers an 8 kg capacity, making it ideal for medium-volume commercial laundry operations such as boutique hotels, spas, and clinics.',
      'It combines robust stainless steel construction with programmable wash cycles and energy-saving technology, delivering reliable performance shift after shift.',
    ],
    featureStrip: [
      { icon: '⚡', label: 'Energy Class', value: 'A+++' },
      { icon: '💧', label: 'Water Saving', value: 'Up to 40%' },
      { icon: '🔒', label: 'Drum Material', value: 'Stainless Steel' },
      { icon: '⚙️', label: 'Controls', value: 'Programmable' },
    ],
    specs: [
      { label: 'Capacity', value: '8 kg' },
      { label: 'Spin Speed', value: 'Up to 1400 rpm' },
      { label: 'Loading Type', value: 'Front-load' },
      { label: 'Controls', value: 'Electronic programmable' },
      { label: 'Drum Material', value: 'Stainless steel' },
      { label: 'Brand', value: 'Electrolux Professional' },
    ],
    features: [
      { title: 'Higher Capacity', desc: 'The 8 kg drum handles larger loads per cycle, improving throughput and reducing total wash cycles per day.' },
      { title: 'Programmable Cycles', desc: 'Multiple pre-set and customisable wash programmes to suit different fabrics — from delicates to heavy linen.' },
      { title: 'Durable Construction', desc: 'Stainless steel drum and heavy-duty cabinet built for the rigours of continuous commercial use.' },
    ],
    backHref: '/solutions/laundry/commercial-washers',
    backLabel: 'Commercial Washers',
  },

  'wh66': {
    breadcrumbs: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Laundry Equipment', href: '/solutions/laundry' },
      { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
      { label: 'WH6-6' },
    ],
    category: 'Electrolux Professional',
    model: 'WH6-6',
    subtitle: 'Front-load commercial washer · 6 kg',
    image: '/products/washers/wb66.jpg',
    placeholder: 'WH6-6',
    keySpecs: [
      { label: 'Capacity', value: '6 kg' },
      { label: 'Type', value: 'Front-load' },
      { label: 'Brand', value: 'Electrolux Professional' },
      { label: 'Use', value: 'Commercial' },
    ],
    description: [
      'The Electrolux Professional WH6-6 is a compact 6 kg front-load washer designed for smaller commercial operations where space and efficiency are priorities.',
      'Despite its compact footprint, the WH6-6 delivers the same professional-grade wash performance as larger models, with full programmability and energy-saving features.',
    ],
    featureStrip: [
      { icon: '⚡', label: 'Energy Class', value: 'A+++' },
      { icon: '💧', label: 'Water Saving', value: 'Up to 40%' },
      { icon: '🔒', label: 'Drum Material', value: 'Stainless Steel' },
      { icon: '⚙️', label: 'Controls', value: 'Programmable' },
    ],
    specs: [
      { label: 'Capacity', value: '6 kg' },
      { label: 'Spin Speed', value: 'Up to 1200 rpm' },
      { label: 'Loading Type', value: 'Front-load' },
      { label: 'Controls', value: 'Electronic programmable' },
      { label: 'Drum Material', value: 'Stainless steel' },
      { label: 'Brand', value: 'Electrolux Professional' },
    ],
    features: [
      { title: 'Compact Footprint', desc: 'Designed for facilities where floor space is limited, without compromising on wash quality or programme flexibility.' },
      { title: 'Fast Cycle Times', desc: 'Optimised wash programmes complete cycles quickly to maintain high throughput even with smaller drum capacity.' },
      { title: 'Easy Maintenance', desc: 'Accessible service points and self-cleaning programmes keep downtime to a minimum.' },
    ],
    backHref: '/solutions/laundry/commercial-washers',
    backLabel: 'Commercial Washers',
  },

  'wh66lac': {
    breadcrumbs: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Laundry Equipment', href: '/solutions/laundry' },
      { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
      { label: 'WH6-6LAC' },
    ],
    category: 'Electrolux Professional',
    model: 'WH6-6LAC',
    subtitle: 'Front-load commercial washer · 6 kg',
    image: '/products/washers/wh6-6lac.jpg',
    placeholder: 'WH6-6LAC',
    keySpecs: [
      { label: 'Capacity', value: '6 kg' },
      { label: 'Type', value: 'Front-load' },
      { label: 'Brand', value: 'Electrolux Professional' },
      { label: 'Use', value: 'Commercial' },
    ],
    description: [
      'The Electrolux Professional WH6-6LAC is a 6 kg front-load washer featuring a left-to-right door opening configuration, designed for specific installation layouts and workflow requirements.',
      'It shares the same advanced wash technology and energy efficiency as the WH6 series, making it ideal for commercial laundry rooms where door swing direction matters.',
    ],
    featureStrip: [
      { icon: '⚡', label: 'Energy Class', value: 'A+++' },
      { icon: '💧', label: 'Water Saving', value: 'Up to 40%' },
      { icon: '🔒', label: 'Drum Material', value: 'Stainless Steel' },
      { icon: '🚪', label: 'Door Hinge', value: 'Left (LAC)' },
    ],
    specs: [
      { label: 'Capacity', value: '6 kg' },
      { label: 'Spin Speed', value: 'Up to 1200 rpm' },
      { label: 'Loading Type', value: 'Front-load' },
      { label: 'Door Configuration', value: 'Left-hand opening (LAC)' },
      { label: 'Controls', value: 'Electronic programmable' },
      { label: 'Brand', value: 'Electrolux Professional' },
    ],
    features: [
      { title: 'Left-Hand Door Opening', desc: 'LAC configuration allows flexible installation in laundry rooms where a standard right-hand door swing is not practical.' },
      { title: 'Full WH6 Performance', desc: 'All the energy efficiency, hygiene performance, and durability of the WH6 series in a configuration-specific model.' },
      { title: 'Space-Optimised', desc: 'Compact 6 kg capacity with flexible installation options for tight laundry room layouts.' },
    ],
    backHref: '/solutions/laundry/commercial-washers',
    backLabel: 'Commercial Washers',
  },

  'sc70': {
    breadcrumbs: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Laundry Equipment', href: '/solutions/laundry' },
      { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
      { label: 'SC70' },
    ],
    category: 'UniMac',
    model: 'SC70',
    subtitle: 'Professional washer · 6–8 kg',
    image: '/products/washers/sc70.png',
    placeholder: 'SC70',
    keySpecs: [
      { label: 'Capacity', value: '6–8 kg' },
      { label: 'Type', value: 'Front-load' },
      { label: 'Brand', value: 'UniMac' },
      { label: 'Use', value: 'Professional / On-Premise' },
    ],
    description: [
      'The UniMac SC70 is a professional-grade washer suited for on-premise laundry installations in apartments, wellness facilities, sports clubs, and marine environments.',
      'Built for stackable configuration, the SC70 maximises floor space while delivering reliable washing performance. Multi-voltage options make it adaptable for a wide range of facility types across East Africa.',
    ],
    featureStrip: [
      { icon: '📐', label: 'Stackable', value: 'Yes' },
      { icon: '⚡', label: 'Energy Use', value: 'Low' },
      { icon: '🔒', label: 'Construction', value: 'Heavy Duty' },
      { icon: '🌍', label: 'Voltage', value: 'Multi-voltage' },
    ],
    specs: [
      { label: 'Capacity', value: '6–8 kg' },
      { label: 'Configuration', value: 'Stackable' },
      { label: 'Loading Type', value: 'Front-load' },
      { label: 'Voltage', value: 'Multi-voltage options' },
      { label: 'Brand', value: 'UniMac' },
    ],
    features: [
      { title: 'Stackable Design', desc: 'Can be stacked with a matching UniMac dryer, ideal for locations where floor space is at a premium.' },
      { title: 'Low Energy Consumption', desc: 'Engineered to reduce water and energy usage while maintaining excellent wash results across all programme types.' },
      { title: 'Versatile Installation', desc: 'Available in multiple voltage configurations, suitable for apartments, gyms, hospitality venues, and more.' },
    ],
    backHref: '/solutions/laundry/commercial-washers',
    backLabel: 'Commercial Washers',
  },

  'cabinet-hardmount': {
    breadcrumbs: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Laundry Equipment', href: '/solutions/laundry' },
      { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
      { label: 'Cabinet Hardmount' },
    ],
    category: 'Alliance Laundry',
    model: 'Cabinet Hardmount',
    subtitle: 'Cabinet hardmount washer-extractor',
    image: '/products/washers/cabinet-hardmount.jpg',
    placeholder: 'Cabinet Hardmount',
    keySpecs: [
      { label: 'Type', value: 'Hardmount washer-extractor' },
      { label: 'Mount', value: 'Cabinet (floor-mounted)' },
      { label: 'Brand', value: 'Alliance Laundry Systems' },
      { label: 'Use', value: 'Industrial / OPL' },
    ],
    description: [
      'The Alliance Laundry Cabinet Hardmount Washer-Extractor is a heavy-duty industrial machine designed for on-premise laundry operations in hospitals, hotels, and large institutions.',
      'Floor-mounted for stability, it delivers high-extraction speeds that significantly reduce drying time and energy costs — critical in high-volume laundry environments.',
    ],
    featureStrip: [
      { icon: '🏭', label: 'Type', value: 'Industrial OPL' },
      { icon: '⚡', label: 'Extraction', value: 'High G-force' },
      { icon: '🔒', label: 'Mount', value: 'Floor / Hardmount' },
      { icon: '💧', label: 'Water Use', value: 'Optimised' },
    ],
    specs: [
      { label: 'Type', value: 'Cabinet hardmount washer-extractor' },
      { label: 'Mount', value: 'Floor-mounted (hardmount)' },
      { label: 'Extraction Speed', value: 'High G-force' },
      { label: 'Loading Type', value: 'Front-load' },
      { label: 'Brand', value: 'Alliance Laundry Systems' },
    ],
    features: [
      { title: 'High-Speed Extraction', desc: 'High G-force spin speed removes maximum moisture from laundry before drying, cutting dryer time and energy consumption.' },
      { title: 'Industrial Durability', desc: 'Heavy-gauge stainless steel construction and commercial-grade components ensure long service life under continuous operation.' },
      { title: 'OPL Optimised', desc: 'Designed for on-premise laundry environments, delivering consistent results across large linen volumes every day.' },
    ],
    backHref: '/solutions/laundry/commercial-washers',
    backLabel: 'Commercial Washers',
  },
};

export default function CommercialWasherDetail({ params }: { params: { slug: string } }) {
  const product = products[params.slug];
  if (!product) notFound();
  return <ProductDetailPage {...product} />;
}
