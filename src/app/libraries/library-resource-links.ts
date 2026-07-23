import { Component, computed, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  originalResourceLinks,
  replacementDisplay,
  type LibraryRow,
  type ResourceKind,
  type ResourceLink,
} from './library-attributes';

const siGithub =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';

const siNpm =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>';

@Component({
  selector: 'app-library-resource-links',
  imports: [NgIcon],
  providers: [provideIcons({ siGithub, siNpm })],
  template: `
    <div class="flex flex-col gap-1.5">
      @if (label(); as text) {
        <code class="text-sm break-all">{{ text }}</code>
      } @else if (note(); as text) {
        <span class="text-muted-foreground text-sm">
          {{ text }}
          @if (noteUrl(); as url) {
            (<a
              class="text-primary underline-offset-4 hover:underline"
              [href]="url"
              target="_blank"
              rel="noopener noreferrer"
              (click)="$event.stopPropagation()"
              (keydown.enter)="$event.stopPropagation()"
              (keydown.space)="$event.stopPropagation()"
              >link</a>)
          }
        </span>
      } @else {
        <span class="text-muted-foreground text-sm">—</span>
      }

      @if (links(); as resourceLinks) {
        <div class="flex items-center gap-2">
          @for (link of resourceLinks; track link.kind) {
            @if (link.available && link.url) {
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                [href]="link.url"
                target="_blank"
                rel="noopener noreferrer"
                [title]="link.tooltip"
                [attr.aria-label]="link.tooltip"
                (click)="$event.stopPropagation()"
                (keydown.enter)="$event.stopPropagation()"
                (keydown.space)="$event.stopPropagation()"
              >
                <ng-icon [name]="iconName(link.kind)" class="size-4" />
              </a>
            } @else {
              <span
                class="text-muted-foreground/40 cursor-not-allowed"
                [title]="link.tooltip"
                [attr.aria-label]="link.tooltip"
                aria-disabled="true"
              >
                <ng-icon [name]="iconName(link.kind)" class="size-4" />
              </span>
            }
          }
        </div>
      }
    </div>
  `,
})
export class LibraryResourceLinksComponent {
  readonly library = input.required<LibraryRow>();
  readonly variant = input.required<'original' | 'replacement'>();

  readonly label = computed<string | null>(() => {
    const lib = this.library();
    if (this.variant() === 'original') {
      return lib.originalPackage;
    }
    const replacement = replacementDisplay(lib);
    return replacement.kind === 'package' ? replacement.label : null;
  });

  readonly links = computed<ResourceLink[] | null>(() => {
    const lib = this.library();
    if (this.variant() === 'original') {
      return originalResourceLinks(lib);
    }
    const replacement = replacementDisplay(lib);
    return replacement.kind === 'package' ? replacement.links : null;
  });

  readonly note = computed<string | null>(() => {
    if (this.variant() === 'original') {
      return null;
    }
    const replacement = replacementDisplay(this.library());
    return replacement.kind === 'guidance' ? replacement.note : null;
  });

  readonly noteUrl = computed<string | null>(() => {
    if (this.variant() === 'original') {
      return null;
    }
    const replacement = replacementDisplay(this.library());
    return replacement.kind === 'guidance' ? replacement.url : null;
  });

  iconName(kind: ResourceKind): string {
    return kind === 'github' ? 'siGithub' : 'siNpm';
  }
}
