import { MetadataRoute } from 'next';

import { getAllBlogs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogs();
  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://dacoda.ro/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://dacoda.ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://dacoda.ro/servicii',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://dacoda.ro/servicii/transport-rutier',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: 'https://dacoda.ro/servicii/transport-adr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://dacoda.ro/servicii/transport-frigorific',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://dacoda.ro/servicii/transport-agabaritic',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://dacoda.ro/servicii/aerian-maritim',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: 'https://dacoda.ro/cerere-oferta',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: 'https://dacoda.ro/rute',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://dacoda.ro/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://dacoda.ro/despre-noi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: 'https://dacoda.ro/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://dacoda.ro/transportatori',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.55,
    },
    {
      url: 'https://dacoda.ro/cariere',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.45,
    },
    ...blogUrls,
  ];
}
