import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    category: 'Ghid practic',
    title: 'Ce este CMR și cum se completează corect',
    summary:
      'Documentul de transport internațional explicat pas cu pas pentru expeditori și transportatori.',
    href: '/blog/ce-este-cmr',
    image:
      'https://images.unsplash.com/photo-1568096889942-6eedde686635?w=800&q=75',
    imageAlt: 'Document CMR transport internațional rutier',
  },
  {
    category: 'Rute',
    title: 'Transport România–Germania: tot ce trebuie să știi în 2025',
    summary:
      'Documente, timpi de tranzit, puncte vamale și sfaturi practice pentru cel mai circulat coridor rutier.',
    href: '/blog/transport-romania-germania',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75',
    imageAlt: 'Autostradă transport România Germania',
  },
  {
    category: 'Transport special',
    title: 'Transport agabaritic: ce presupune și cum îl organizăm',
    summary:
      'De la autorizații și escortă până la alegerea vehiculului potrivit. Tot procesul explicat.',
    href: '/servicii/transport-agabaritic',
    image: '/images/agabaritic/7.jpg',
    imageAlt: 'Transport agabaritic Wirtgen pe lowboy — DACODA SRL',
  },
];

export default function DacodaBlogPreview() {
  return (
    <section className="bg-white">
      <div className="container px-4 py-16 lg:px-6 lg:py-24">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-dacoda-navy text-3xl font-bold md:text-4xl">
            Informații utile despre transport
          </h2>
          <Link
            href="/blog"
            className="text-dacoda-orange hidden items-center gap-1 text-sm font-medium sm:inline-flex"
          >
            Toate articolele
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-100 transition-shadow hover:shadow-md"
            >
              {/* Article image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="text-dacoda-orange mb-2 inline-block w-fit rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium">
                  {article.category}
                </span>
                <h3 className="text-dacoda-navy mb-2 text-base leading-snug font-bold">
                  {article.title}
                </h3>
                <p className="text-dacoda-gray mb-4 flex-1 text-sm leading-relaxed">
                  {article.summary}
                </p>
                <span className="text-dacoda-orange inline-flex items-center gap-1 text-sm font-medium">
                  Citește
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="text-dacoda-orange inline-flex items-center gap-1 text-sm font-medium"
          >
            Toate articolele
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
