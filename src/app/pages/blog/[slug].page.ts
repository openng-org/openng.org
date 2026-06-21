import { AsyncPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';

import {
  postMetaResolver,
  postTitleResolver,
  type PostAttributes,
} from '../../blog/post-attributes';

export const routeMeta: RouteMeta = {
  title: postTitleResolver,
  meta: postMetaResolver,
};

@Component({
  imports: [AsyncPipe, DatePipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
      <article class="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <header class="mt-6 mb-10 space-y-3">
          <p class="text-sm text-base-content/60">
            {{ post.attributes.publishedAt | date: 'longDate' }}
            @if (post.attributes.author) {
              · {{ post.attributes.author }}
            }
          </p>
          <h1 class="text-4xl font-bold">{{ post.attributes.title }}</h1>
          <p class="text-lg text-base-content/70">
            {{ post.attributes.description }}
          </p>
        </header>

        <analog-markdown
          [content]="post.content"
          classes="blog-content space-y-4 text-base leading-7"
        />
      </article>
    }
  `,
})
export default class BlogPostPage {
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: 'posts',
  });
}
