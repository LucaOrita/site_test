import type { Metadata } from 'next';

import DacodaBlogFilter from '@/components/sections/dacoda-blog-filter';
import { getAllBlogs } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Informații utile despre transport | DACODA SRL',
  description:
    'Ghiduri practice, informații despre rute și legislație transport rutier internațional. Expertiză DACODA SRL din 1993.',
};

export default function BlogPage() {
  const allPosts = getAllBlogs();

  const posts = allPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    readTime: p.readTime,
    image: p.image,
    imageAlt: p.imageAlt,
  }));

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--dacoda-navy)' }}>
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Informații utile despre transport
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            Ghiduri practice, rute și legislație — din experiența a 32 de ani în
            transporturi.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <DacodaBlogFilter posts={posts} />
    </>
  );
}
