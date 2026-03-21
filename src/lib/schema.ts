// src/lib/schema.ts
// Funcții helper pentru generarea schema.org pe paginile de servicii

export function makeServiceSchema({
  name,
  description,
  url,
  areaServed,
  keywords,
}: {
  name: string;
  description: string;
  url: string;
  areaServed: string[];
  keywords: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'DACODA SRL',
      url: 'https://dacoda.ro',
      telephone: '+40785225446',
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    keywords: keywords.join(', '),
    serviceType: 'Freight Transport',
  };
}

export function makeFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };
}

export function makeBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, url }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: url,
    })),
  };
}

export function makeArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: image ?? 'https://dacoda.ro/og-image.jpg',
    author: {
      '@type': 'Organization',
      name: 'DACODA SRL',
      url: 'https://dacoda.ro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DACODA SRL',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dacoda.ro/favicon/favicon.svg',
      },
    },
  };
}
