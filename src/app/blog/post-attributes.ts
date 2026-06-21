import { injectContentFiles } from '@analogjs/content';
import type { MetaTag } from '@analogjs/router';
import type { ResolveFn } from '@angular/router';

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  author?: string;
  draft?: boolean;
}

export function injectBlogPosts() {
  return injectContentFiles<PostAttributes>((file) =>
    file.filename.includes('content/posts/'),
  )
    .filter((post) => !post.attributes.draft)
    .sort(
      (a, b) =>
        Date.parse(b.attributes.publishedAt) -
        Date.parse(a.attributes.publishedAt),
    );
}

export function findBlogPost(slug: string) {
  return injectBlogPosts().find(
    (post) => post.slug === slug || post.attributes.slug === slug,
  );
}

export const postTitleResolver: ResolveFn<string> = (route) =>
  findBlogPost(route.paramMap.get('slug') ?? '')?.attributes.title ??
  'Blog Post';

export const postMetaResolver: ResolveFn<MetaTag[]> = (route) => {
  const post = findBlogPost(route.paramMap.get('slug') ?? '');

  if (!post) {
    return [];
  }

  return [
    { name: 'description', content: post.attributes.description },
    { property: 'og:title', content: post.attributes.title },
    { property: 'og:description', content: post.attributes.description },
    { name: 'author', content: post.attributes.author ?? 'OpenNG Foundation' },
  ];
};
