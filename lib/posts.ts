import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const postsDir = path.join(process.cwd(), 'posts');

export function getPostMetadata(): PostMetadata[] {
  const files = fs.readdirSync(postsDir);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data } = matter(fileContents);
      return {
        title: data.title as string,
        date: data.date as string,
        excerpt: (data.excerpt || '') as string,
        slug,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostContent(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    metadata: {
      title: data.title as string,
      date: data.date as string,
      excerpt: (data.excerpt || '') as string,
    },
    content,
  };
}
