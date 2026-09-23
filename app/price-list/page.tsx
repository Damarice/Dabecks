'use client';

import PageHero from '@/app/components/PageHero';
import { useEffect, useState } from 'react';

export default function PriceListPage() {
  const [viewerUrl, setViewerUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Use direct public URL for Office Online Viewer
      const fileUrl = `${window.location.origin}/api/price-list`;
      const encodedUrl = encodeURIComponent(fileUrl);
      setViewerUrl(`https://view.officeapps.live.com/op/embed.aspx?src=${encodedUrl}`);
    }
  }, []);

  return (
    <div>
      <PageHero
        image="/hero-laundry.jpg"
        eyebrow="Pricing"
        heading="Electrolux Professional Laundry Price List"
        subtext="View the complete pricing and specifications for our commercial laundry equipment lineup."
        breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: 'Laundry', href: '/solutions/laundry' }, { label: 'Price List' }]}
      />

      <section style={{ background: '#ffffff', paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div className="ds-container" style={{ maxWidth: '100%' }}>
          {viewerUrl && (
            <iframe
              src={viewerUrl}
              style={{ width: '100%', height: '90vh', border: 'none' }}
              title="Electrolux Professional Price List"
              allowFullScreen
            />
          )}
        </div>
      </section>
    </div>
  );
}
