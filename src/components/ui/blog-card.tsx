import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  imageAlt?: string;
  imagePlaceholderColor?: string;
}

const categoryColors: Record<string, string> = {
  'Ghiduri practice': 'bg-dacoda-orange/10 text-dacoda-orange',
  Rute: 'bg-blue-50 text-blue-700',
  Legislație: 'bg-emerald-50 text-emerald-700',
  'Transport special': 'bg-purple-50 text-purple-700',
};

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  imageAlt,
  imagePlaceholderColor = '#E8931A',
}: BlogCardProps) {
  const colorClass = categoryColors[category] || 'bg-gray-100 text-gray-600';

  const formattedDate = date
    ? new Intl.DateTimeFormat('ro-RO', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(date))
    : '';

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white transition-shadow hover:shadow-md"
    >
      {/* Article image */}
      {image ? (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div
          className="flex aspect-video items-center justify-center"
          style={{ backgroundColor: `${imagePlaceholderColor}15` }}
        >
          <span className="text-sm text-gray-400">Imagine articol</span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <span
          className={`mb-2 inline-block w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}
        >
          {category}
        </span>

        <h3 className="text-dacoda-navy mb-2 text-base leading-snug font-bold">
          {title}
        </h3>

        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-500">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {formattedDate} · {readTime}
          </span>
          <span className="text-dacoda-orange inline-flex items-center gap-1 text-sm font-medium">
            Citește
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
