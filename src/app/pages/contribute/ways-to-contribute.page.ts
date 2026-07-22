import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { NgClass } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideSearch,
  lucideWrench,
  lucideBookOpen,
  lucideArrowRight,
} from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { PageHeroComponent } from '../../components/page-hero';

export const routeMeta: RouteMeta = {
  title: 'Ways to Contribute',
  meta: [
    {
      name: 'description',
      content:
        'Discover the different ways you can contribute to OpenNG, from code and documentation to community support.',
    },
  ],
};

type PersonaId = 'investigator' | 'architect' | 'educator';

@Component({
  imports: [
    RouterLink,
    NgClass,
    NgIcon,
    HlmButtonImports,
    HlmCardImports,
    PageHeroComponent,
  ],
  providers: [
    provideIcons({
      lucideSearch,
      lucideWrench,
      lucideBookOpen,
      lucideArrowRight,
    }),
  ],
  template: `
    <app-page-hero
      title="Choose Your Path"
      description="Find the contribution style that fits your skills and interests."
    />

    <section class="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 lg:px-8">
      <!-- Global Roadmap -->
      <div class="flex flex-col gap-8">
        <div class="text-center sm:text-left">
          <h2 class="text-2xl font-bold tracking-tight">Global Roadmap</h2>
          <p class="text-muted-foreground mt-2">
            The immediate three-step progression for every project we track:
          </p>
        </div>

        <div class="relative grid gap-6 md:grid-cols-3">
          <!-- Connecting Line -->
          <div
            class="absolute z-0 left-6 top-6 bottom-6 w-0.5 bg-border md:left-0 md:top-6 md:h-0.5 md:w-full md:-translate-y-1/2"
          ></div>

          <!-- Step 1 -->
          <div
            class="relative z-10 flex items-start gap-4 md:flex-col md:items-center"
          >
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-md transition-transform hover:scale-110"
            >
              <span class="font-bold">1</span>
            </div>
            <div
              class="flex flex-col pt-1 md:items-center md:text-center md:pt-0"
            >
              <h4 class="font-bold text-foreground">Migration</h4>
              <p class="mt-1 text-sm text-muted-foreground">
                Release a first version with the
                <code
                  class="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground"
                  >&#64;openng</code
                >
                namespace.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div
            class="relative z-10 flex items-start gap-4 md:flex-col md:items-center"
          >
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-background bg-secondary text-secondary-foreground shadow-sm transition-transform hover:scale-110"
            >
              <span class="font-bold">2</span>
            </div>
            <div
              class="flex flex-col pt-1 md:items-center md:text-center md:pt-0"
            >
              <h4 class="font-bold text-foreground">Stabilization</h4>
              <p class="mt-1 text-sm text-muted-foreground">
                Fix bugs and resolve critical issues.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div
            class="relative z-10 flex items-start gap-4 md:flex-col md:items-center"
          >
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-background bg-secondary text-secondary-foreground shadow-sm transition-transform hover:scale-110"
            >
              <span class="font-bold">3</span>
            </div>
            <div
              class="flex flex-col pt-1 md:items-center md:text-center md:pt-0"
            >
              <h4 class="font-bold text-foreground">Evolution</h4>
              <p class="mt-1 text-sm text-muted-foreground">
                Review feature requests and plan next steps.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr class="border-border my-4" />

      <!-- Persona Selector -->
      <div class="grid gap-4 md:grid-cols-3">
        <!-- Investigator -->
        <button
          (click)="setPersona('investigator')"
          class="group relative flex flex-col items-center gap-4 rounded-xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          [ngClass]="
            activePersona() === 'investigator'
              ? 'border-primary bg-primary/5 shadow-primary/10 shadow-lg scale-[1.02]'
              : 'border-border bg-card hover:border-primary/50'
          "
        >
          <div
            class="flex h-20 w-20 items-center justify-center transition-transform group-hover:scale-110"
          >
            <img
              src="/images/angular-mascot/mascot-searching.svg"
              alt="Investigator Mascot"
              class="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 class="text-xl font-bold">The Investigator</h3>
            <p class="mt-2 text-sm text-muted-foreground">
              You love solving mysteries and squashing bugs.
            </p>
          </div>
        </button>

        <!-- Architect -->
        <button
          (click)="setPersona('architect')"
          class="group relative flex flex-col items-center gap-4 rounded-xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          [ngClass]="
            activePersona() === 'architect'
              ? 'border-primary bg-primary/5 shadow-primary/10 shadow-lg scale-[1.02]'
              : 'border-border bg-card hover:border-primary/50'
          "
        >
          <div
            class="flex h-20 w-20 items-center justify-center transition-transform group-hover:scale-110"
          >
            <img
              src="/images/angular-mascot/mascot-idea.svg"
              alt="Architect Mascot"
              class="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 class="text-xl font-bold">The Architect</h3>
            <p class="mt-2 text-sm text-muted-foreground">
              You love building features and designing APIs.
            </p>
          </div>
        </button>

        <!-- Educator -->
        <button
          (click)="setPersona('educator')"
          class="group relative flex flex-col items-center gap-4 rounded-xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          [ngClass]="
            activePersona() === 'educator'
              ? 'border-primary bg-primary/5 shadow-primary/10 shadow-lg scale-[1.02]'
              : 'border-border bg-card hover:border-primary/50'
          "
        >
          <div
            class="flex h-20 w-20 items-center justify-center transition-transform group-hover:scale-110"
          >
            <img
              src="/images/angular-mascot/mascot-teaching.svg"
              alt="Educator Mascot"
              class="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 class="text-xl font-bold">The Educator</h3>
            <p class="mt-2 text-sm text-muted-foreground">
              You love sharing knowledge and helping others.
            </p>
          </div>
        </button>
      </div>

      <!-- Dynamic Content Area -->
      <div class="mt-8 transition-all duration-500">
        @if (activePersona() === 'investigator') {
          <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div class="grid gap-6 md:grid-cols-2">
              <section hlmCard class="flex flex-col border-border bg-muted/20">
                <div
                  hlmCardHeader
                  class="flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <h3 hlmCardTitle>Issue Triage</h3>
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground border border-border"
                  >
                    <span class="flex gap-0.5">
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-muted-foreground/30"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-muted-foreground/30"
                      ></span>
                    </span>
                    Beginner
                  </span>
                </div>
                <div hlmCardContent class="flex-1">
                  <p class="text-muted-foreground mb-3">
                    Help maintainers by reproducing bugs, labeling issues, and
                    answering questions in the GitHub issue tracker. This
                    significantly speeds up the development process.
                  </p>
                  <p class="text-muted-foreground">
                    You can also assist by testing edge cases, providing minimal
                    reproducible examples (like StackBlitz links) for complex
                    issues, and helping to close out stale or resolved tickets.
                  </p>
                  <div class="mt-4 border-t border-border pt-4">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          You gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Debugging skills</li>
                          <li>Community visibility</li>
                          <li>System insight</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          We gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Faster resolution</li>
                          <li>Cleaner backlog</li>
                          <li>Clearer reports</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section hlmCard class="flex flex-col border-border bg-muted/20">
                <div
                  hlmCardHeader
                  class="flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <h3 hlmCardTitle>Fix Bugs</h3>
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground border border-border"
                  >
                    <span class="flex gap-0.5">
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-muted-foreground/30"
                      ></span>
                    </span>
                    Intermediate
                  </span>
                </div>
                <div hlmCardContent class="flex-1">
                  <p class="text-muted-foreground mb-3">
                    Help us squash bugs across our supported projects. Check out
                    our issue trackers for "good first issue" tags.
                  </p>
                  <p class="text-muted-foreground">
                    We highly value bug fixes that include comprehensive unit
                    tests to prevent regressions. Collaborating directly with
                    maintainers on complex bugs is a great way to deeply
                    understand the architecture.
                  </p>
                  <div class="mt-4 border-t border-border pt-4">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          You gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Codebase familiarity</li>
                          <li>Problem-solving XP</li>
                          <li>Green squares</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          We gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Stable platform</li>
                          <li>Reduced tech debt</li>
                          <li>Happier users</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        }

        @if (activePersona() === 'architect') {
          <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div
              class="mb-6 w-full rounded-md border border-blue-500/50 bg-blue-500/10 p-4 shadow-sm"
            >
              <h4 class="font-semibold text-blue-700 dark:text-blue-400">
                Current Priority Notice
              </h4>
              <p
                class="text-sm font-medium text-blue-700/80 dark:text-blue-400/80 mt-1"
              >
                Our current focus is to release a first version for each project
                and to fix bugs. Refactor or feature requests are welcomed but
                their review will be delayed.
              </p>
            </div>
            <div class="grid gap-6 md:grid-cols-2">
              <section hlmCard class="flex flex-col border-border bg-muted/20">
                <div
                  hlmCardHeader
                  class="flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <h3 hlmCardTitle>Refactor</h3>
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground border border-border"
                  >
                    <span class="flex gap-0.5">
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                    </span>
                    Advanced
                  </span>
                </div>
                <div hlmCardContent class="flex-1">
                  <p class="text-muted-foreground mb-3">
                    Improve the ecosystem by refactoring legacy code.
                  </p>
                  <p class="text-muted-foreground">
                    Help us reduce technical debt, improve runtime performance,
                    and modernize older patterns. Refactoring contributions must
                    ensure that existing functionality and test coverage remain
                    fully intact.
                  </p>
                  <div class="mt-4 border-t border-border pt-4">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          You gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Architecture XP</li>
                          <li>Clean code habits</li>
                          <li>Deep knowledge</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          We gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Maintainability</li>
                          <li>Performance boosts</li>
                          <li>Future-proofing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section hlmCard class="flex flex-col border-border bg-muted/20">
                <div
                  hlmCardHeader
                  class="flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <h3 hlmCardTitle>New Features</h3>
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground border border-border"
                  >
                    <span class="flex gap-0.5">
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                    </span>
                    Advanced
                  </span>
                </div>
                <div hlmCardContent class="flex-1">
                  <p class="text-muted-foreground mb-3">
                    Design and implement new features for our supported
                    projects.
                  </p>
                  <p class="text-muted-foreground">
                    We encourage you to pitch feature ideas through GitHub
                    issues first. When building features, consider API design
                    robustness, performance implications, and backward
                    compatibility for the broader Angular ecosystem.
                  </p>
                  <div class="mt-4 border-t border-border pt-4">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          You gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Portfolio projects</li>
                          <li>API design skills</li>
                          <li>Massive impact</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          We gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Ecosystem growth</li>
                          <li>Innovation</li>
                          <li>Meeting demands</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div
              class="mt-6 w-full rounded-md border border-amber-500/50 bg-amber-500/10 p-4 shadow-sm"
            >
              <div class="flex items-start gap-3">
                <ng-icon
                  name="lucideWrench"
                  class="mt-0.5 text-amber-500"
                  size="20"
                ></ng-icon>
                <div>
                  <h4 class="font-semibold text-amber-700 dark:text-amber-400">
                    Important Policy Notice
                  </h4>
                  <p
                    class="text-sm font-medium text-amber-700/80 dark:text-amber-400/80 mt-1"
                  >
                    Please review our
                    <a
                      routerLink="/contribute/ai-policy"
                      class="underline hover:text-amber-500"
                      >AI Contribution Policy</a
                    >
                    before submitting major changes or refactors. AI-generated
                    logic is heavily restricted for new contributors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }

        @if (activePersona() === 'educator') {
          <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div class="grid gap-6 md:grid-cols-2">
              <section hlmCard class="flex flex-col border-border bg-muted/20">
                <div
                  hlmCardHeader
                  class="flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <h3 hlmCardTitle>Documentation</h3>
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground border border-border"
                  >
                    <span class="flex gap-0.5">
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-muted-foreground/30"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-muted-foreground/30"
                      ></span>
                    </span>
                    Beginner
                  </span>
                </div>
                <div hlmCardContent class="flex-1">
                  <p class="text-muted-foreground mb-3">
                    Clear, concise documentation is the backbone of any good
                    tool. Help us improve guides, fix typos, or write new
                    tutorials.
                  </p>
                  <p class="text-muted-foreground">
                    Beyond fixing typos, we need help writing practical code
                    examples, improving API references, translating content into
                    other languages, and ensuring the onboarding experience is
                    smooth for absolute beginners.
                  </p>
                  <div class="mt-4 border-t border-border pt-4">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          You gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Tech writing skills</li>
                          <li>Conceptual clarity</li>
                          <li>Beginner gratitude</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          We gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Lower entry barrier</li>
                          <li>Fewer support calls</li>
                          <li>Polished image</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section hlmCard class="flex flex-col border-border bg-muted/20">
                <div
                  hlmCardHeader
                  class="flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <h3 hlmCardTitle>Community Support</h3>
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground border border-border"
                  >
                    <span class="flex gap-0.5">
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-muted-foreground/30"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-muted-foreground/30"
                      ></span>
                    </span>
                    Beginner
                  </span>
                </div>
                <div hlmCardContent class="flex-1">
                  <p class="text-muted-foreground mb-3">
                    Answer questions, share knowledge, and help newcomers in our
                    official channels. You can find us on GitHub Discussions and
                    Discord.
                  </p>
                  <p class="text-muted-foreground">
                    You can also contribute by writing blog posts, recording
                    video tutorials, speaking at meetups or conferences, and
                    actively fostering a welcoming, inclusive environment for
                    all developers.
                  </p>
                  <div class="mt-4 border-t border-border pt-4">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          You gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Networking</li>
                          <li>Leadership skills</li>
                          <li>Expert reputation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          We gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Welcoming vibe</li>
                          <li>Scalable support</li>
                          <li>Retained users</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                hlmCard
                class="flex flex-col border-border bg-muted/20 md:col-span-2"
              >
                <div
                  hlmCardHeader
                  class="flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <h3 hlmCardTitle>Spread the Word</h3>
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground border border-border"
                  >
                    <span class="flex gap-0.5">
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-foreground"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-muted-foreground/30"
                      ></span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-muted-foreground/30"
                      ></span>
                    </span>
                    Beginner
                  </span>
                </div>
                <div hlmCardContent class="flex-1">
                  <p class="text-muted-foreground mb-3">
                    Help us grow the OpenNG community by sharing what we do with
                    the broader developer ecosystem.
                  </p>
                  <p class="text-muted-foreground">
                    You can contribute massively just by talking about OpenNG on
                    social media, writing articles about our projects, starring
                    our repositories, or presenting OpenNG at your local tech
                    meetups! Awareness is just as important as code.
                  </p>
                  <div class="mt-4 border-t border-border pt-4">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          You gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>Personal brand</li>
                          <li>Communication XP</li>
                          <li>Expanded network</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-semibold mb-1 text-foreground">
                          We gain:
                        </h4>
                        <ul
                          class="list-disc pl-4 text-muted-foreground space-y-1"
                        >
                          <li>More adoption</li>
                          <li>New contributors</li>
                          <li>Industry buzz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        }

        <div class="mt-8 flex justify-center border-t border-border pt-8">
          <a
            hlmBtn
            size="lg"
            routerLink="/projects"
            [queryParams]="{ status: 'maintained' }"
            class="group gap-2"
          >
            View Active Projects
            <ng-icon
              name="lucideArrowRight"
              class="transition-transform group-hover:translate-x-1"
            ></ng-icon>
          </a>
        </div>
      </div>
    </section>
  `,
})
export default class WaysToContributePage {
  activePersona = signal<PersonaId>('investigator');

  setPersona(persona: PersonaId) {
    this.activePersona.set(persona);
  }
}
