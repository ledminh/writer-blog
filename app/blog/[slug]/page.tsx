import { getPostContent, getPostMetadata } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface Params {
  slug: string;
}

export function generateStaticParams() {
  const posts = getPostMetadata();
  return posts.map(({ slug }) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Params }) {
  const { metadata, content } = await getPostContent(params.slug);
  const dateObj = new Date(metadata.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <Link href="/" className="text-sm text-accent hover:underline">← Back to all posts</Link>
      <h1 className="mt-2">{metadata.title}</h1>
      <time className="block text-sm text-gray-500 mb-4">{formattedDate}</time>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}
