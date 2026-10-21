import type { Metadata } from 'next';
import SubpageListingPage from '@/app/components/SubpageListingPage';
import { buildMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = buildMetadata({
  title: 'Cassette Air Conditioning Units Kenya | 360° Airflow | Dabecks',
  description:
    'Ceiling cassette AC units for commercial spaces in Kenya. 360-degree airflow, flush ceiling installation for offices, restaurants, and retail spaces.',
  keywords: [
    'cassette AC Kenya',
    'ceiling cassette air conditioner',
    'commercial AC',
    '360 airflow',
    'office AC',
  ],
  path: '/solutions/air-conditioning/cassette-units',
  ogImage: '/hero-ac.jpg',
});

export default function CassetteUnits() {
  return (
    <SubpageListingPage
      breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Air Conditioning', href: '/solutions/air-conditioning' }, { label: 'Cassette Units' }]}
      heroImage="/hero-ac.jpg"
      category="Air Conditioning"
      title="Cassette Units"
      heroSubtitle="Ceiling cassette AC units for even 360° air distribution in open-plan commercial spaces — offices, restaurants, retail, and hotel lobbies."
      introTitle="360° comfort. Clean aesthetics."
      introText="Ceiling cassette units install flush with the ceiling, distributing conditioned air in four directions simultaneously. Ideal for open-plan offices, restaurants, and retail spaces where wall space is limited and even coverage is essential."
      benefits={[
        { icon: '🔄', title: '360° Airflow', desc: 'Four-way air distribution ensures even coverage across the entire floor area.' },
        { icon: '🏢', title: 'Clean Aesthetic', desc: 'Flush ceiling installation with only a slim grille visible — suits any commercial interior.' },
        { icon: '⚡', title: 'Inverter Efficient', desc: 'Inverter compressors reduce energy use significantly versus older fixed-speed systems.' },
      ]}
      products={[
        { model: 'Coming Soon', desc: 'New products incoming', slug: 'coming-soon-1', placeholder: 'Coming+Soon' },
        { model: 'Coming Soon', desc: 'New products incoming', slug: 'coming-soon-2', placeholder: 'Coming+Soon' },
        { model: 'Coming Soon', desc: 'New products incoming', slug: 'coming-soon-3', placeholder: 'Coming+Soon' },
      ]}
      basePath="/solutions/air-conditioning/cassette-units"
    />
  );
}
