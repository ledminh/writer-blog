import { getPostMetadata } from '@/lib/posts';
import Link from 'next/link';

export default async function HomePage() {
  const posts = getPostMetadata();
  return (
    <section>
      <h1 className="text-4xl font-serif font-bold mb-6">Latest Writings</h1>
      <div className="space-y-8">
        {posts.map(({ title, date, excerpt, slug }) => {
          const dateObj = new Date(date);
          const formattedDate = dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          return (
            <article key={slug} className="border-b border-gray-300 pb-4">
              <h2 className="text-2xl font-serif font-bold text-accent hover:underline">
                <Link href={`/blog/${slug}`}>{title}</Link>
              </h2>
              <time className="block text-sm text-gray-500 mb-2">{formattedDate}</time>
              <p className="text-base text-gray-700 dark:text-gray-300">{excerpt}</p>
              <Link href={`/blog/${slug}`} className="text-accent font-sans mt-2 inline-block hover:underline">
                Read more →
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
