import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const BLOGS_PATH = path.join(process.cwd(), 'src/blog');

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  imageAlt?: string;
  content: string;
};

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOGS_PATH)
    .filter((fileName) => fileName.endsWith('.mdx'));
}

export function getBlogBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(BLOGS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || '',
    excerpt: data.excerpt || data.description || '',
    category: data.category || 'General',
    date: data.date || '',
    readTime: data.readTime || '',
    image: data.image || '',
    imageAlt: data.imageAlt || '',
    content: content,
  };
}

export function getAllBlogs(limit?: number): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogBySlug(slug))
    .sort((post1, post2) => {
      const dateA = new Date(post1.date);
      const dateB = new Date(post2.date);
      return dateB.getTime() - dateA.getTime();
    });
  return limit ? posts.slice(0, limit) : posts;
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3,
): BlogPost[] {
  const all = getAllBlogs();
  const sameCategory = all.filter(
    (p) => p.slug !== currentSlug && p.category === category,
  );
  const others = all.filter(
    (p) => p.slug !== currentSlug && p.category !== category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
