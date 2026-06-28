import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { HlmCardImports } from '@spartan-ng/helm/card';

export interface PageTimelineItem {
  date?: string;
  title: string;
  description: string;
  link?: {
    label: string;
    routerLink?: string;
    href?: string;
  };
}

@Component({
  selector: 'app-page-timeline',
  imports: [RouterLink, NgIcon, HlmCardImports],
  providers: [provideIcons({ lucideCircleCheck })],
  template: `
    <ol class="relative flex flex-col gap-8 border-l border-border pl-8">
      @for (item of items(); track item.title) {
        <li class="relative">
          <div
            class="absolute -left-[calc(2rem+0.3125rem)] top-1.5 flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <ng-icon name="lucideCircleCheck" class="size-4" />
          </div>

          @if (item.date) {
            <p class="mb-2 text-sm text-muted-foreground">{{ item.date }}</p>
          }

          <section hlmCard>
            <div hlmCardHeader>
              <h3 hlmCardTitle>{{ item.title }}</h3>
            </div>
            <div hlmCardContent>
              <p class="text-muted-foreground leading-7">{{ item.description }}</p>
              @if (item.link) {
                @if (item.link.routerLink) {
                  <a
                    class="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                    [routerLink]="item.link.routerLink"
                  >
                    {{ item.link.label }}
                  </a>
                } @else if (item.link.href) {
                  <a
                    class="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                    [href]="item.link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ item.link.label }}
                  </a>
                }
              }
            </div>
          </section>
        </li>
      }
    </ol>
  `,
})
export class PageTimelineComponent {
  readonly items = input.required<PageTimelineItem[]>();
}
