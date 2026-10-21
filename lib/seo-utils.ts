import type { Metadata } from 'next';

export const SITE_NAME = 'Dabecks Laundry & Kitchen Solutions';
export const BASE_URL = 'https://www.dabeckslaundry.com';
export const DEFAULT_OG_IMAGE = '/og-default.jpg';

export interface BuildMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  ogImage?: string;
}

export function buildMetadata(props: BuildMetadataProps): Metadata {
  const { title, description, keywords = [], path, ogImage = DEFAULT_OG_IMAGE } = props;
  const canonicalUrl = `${BASE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_KE',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@dabecks',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dabecks Laundry & Kitchen Solutions Limited',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      'Leading provider of commercial laundry, kitchen, and air conditioning systems across East Africa since 2011.',
    foundingDate: '2011',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lunga Lunga Square, 1st Floor, A7',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+254729212254',
        contactType: 'customer service',
      },
    ],
    areaServed: 'East Africa',
  };
}

export function buildBreadcrumbSchema(items: { label: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function buildProductSchema(props: {
  name: string;
  description: string;
  image: string;
  brand: string;
  url: string;
  price?: string;
  currency?: string;
}) {
  const { name, description, image, brand, url, price, currency = 'KES' } = props;

  const product: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: image.startsWith('http') ? image : `${BASE_URL}${image}`,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
  };

  if (price) {
    product.offers = {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      url: product.url,
    };
  }

  return product;
}
