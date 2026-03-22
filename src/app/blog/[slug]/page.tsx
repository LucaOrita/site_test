import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';

import BlogCard from '@/components/ui/blog-card';
import { getBlogBySlug, getBlogSlugs, getRelatedPosts } from '@/lib/blog';
import { makeArticleSchema } from '@/lib/schema';

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://dacoda.ro/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://dacoda.ro/blog/${slug}`,
      type: 'article' as const,
      publishedTime: post.date,
      images: post.image
        ? [{ url: post.image, alt: post.imageAlt ?? post.title }]
        : [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    authors: [{ name: 'DACODA SRL', url: 'https://dacoda.ro' }],
    twitter: {
      card: 'summary_large_image' as const,
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : ['/og-image.jpg'],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  const related = getRelatedPosts(slug, post.category, 3);

  const { content } = await compileMDX<Record<string, unknown>>({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  const formattedDate = post.date
    ? new Intl.DateTimeFormat('ro-RO', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(post.date))
    : '';

  const articleSchema = makeArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `https://dacoda.ro/blog/${slug}`,
    datePublished: post.date,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article header */}
      <section style={{ backgroundColor: 'var(--dacoda-navy)' }}>
        <div className="container px-4 py-12 lg:px-6 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-sm text-white/60">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                {post.category}
              </span>
              <span>{formattedDate}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-lg text-white/70">{post.excerpt}</p>
            )}
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white">
        <div className="container px-4 py-10 lg:px-6 lg:py-16">
          <article className="prose prose-lg prose-headings:text-[var(--dacoda-navy)] prose-p:text-gray-600 prose-strong:text-gray-900 prose-a:text-[var(--dacoda-orange)] prose-a:underline-offset-2 hover:prose-a:underline prose-table:text-sm prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2 mx-auto max-w-3xl">
            {content}
          </article>
        </div>
      </section>

      {/* CTA box */}
      <section className="bg-dacoda-orange">
        <div className="container px-4 py-12 lg:px-6 lg:py-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Ai nevoie de transport? Suntem aici.
            </h2>
            <p className="mb-6 text-white/80">
              Contactează-ne pentru o ofertă rapidă — răspundem în maxim 2 ore.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/cerere-oferta"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-[var(--dacoda-orange)] transition-colors hover:bg-white/90"
              >
                Cere ofertă
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+40785225446"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                +40 785 225 446
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-gray-50">
          <div className="container px-4 py-12 lg:px-6 lg:py-16">
            <h2 className="text-dacoda-navy mb-8 text-2xl font-bold">
              Citește și:
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  category={p.category}
                  image={p.image}
                  imageAlt={p.imageAlt}
                  date={p.date}
                  readTime={p.readTime}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
