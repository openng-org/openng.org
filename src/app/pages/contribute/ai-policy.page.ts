import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { PageHeroComponent } from '../../components/page-hero';

export const routeMeta: RouteMeta = {
  title: 'AI Contribution Policy',
  meta: [
    {
      name: 'description',
      content:
        'The OpenNG Foundation policy regarding the use of AI in open-source contributions.',
    },
  ],
};

@Component({
  imports: [PageHeroComponent],
  template: `
    <app-page-hero
      title="AI Contribution Policy"
      description="Guidelines for utilizing AI tools when contributing to OpenNG."
    />

    <article class="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-12 lg:px-8 prose prose-slate dark:prose-invert">
      <p class="text-muted-foreground leading-7 text-lg">
        As the open-source ecosystem evolves with the introduction of AI-assisted tools, the OpenNG Foundation has established the following policy to ensure code quality, maintainer sanity, and a healthy community culture. This policy is inspired by and aligns with the standards set by the Godot Engine 2026 contribution guidelines.
      </p>

      <h2 class="text-2xl font-semibold mt-6">Our Focus</h2>
      <ul class="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Encouraging new contributors to become future maintainers.</strong> LLMs cannot learn from specific maintainer feedback. We want to mentor humans.</li>
        <li><strong>Ensuring responsibility.</strong> All contributions must be made by humans who can take responsibility for their code and are willing to fix it when issues arise.</li>
        <li><strong>Preventing low-effort submissions.</strong> Reviewing AI-generated pull requests is tedious and demoralizing for our volunteer maintainers.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8">The Policy</h2>

      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-medium">1. No Autonomous AI Agents or Vibe Coding</h3>
          <p class="text-muted-foreground mt-2">
            The use of autonomous AI agents to scrape repositories, automatically open issues, or submit unsupervised pull requests is strictly prohibited and will lead to an immediate ban from our organization.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-medium">2. No AI for Substantial Code Generation</h3>
          <p class="text-muted-foreground mt-2">
            We require all code logic and architecture to be human-authored. AI assistance should be limited to menial tasks, such as:
          </p>
          <ul class="list-disc pl-6 mt-2 text-muted-foreground">
            <li>Code completion (e.g., GitHub Copilot auto-completing a line)</li>
            <li>Writing regex patterns</li>
            <li>Simple find-and-replace or boilerplate generation</li>
          </ul>
          <p class="text-muted-foreground mt-2 font-medium">
            If you use AI in any capacity to author your code, you must disclose it in the PR description.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-medium">3. No AI-Generated Text in Communication</h3>
          <p class="text-muted-foreground mt-2">
            When maintainers volunteer their time to review your issue or pull request, they expect to converse with a human. Do not use AI to generate issue descriptions, PR summaries, or replies to code reviews.
          </p>
          <p class="text-muted-foreground mt-2 text-sm italic">
            Note: The use of machine translation tools (like DeepL or Google Translate) is perfectly acceptable, provided the original thought was authored by you.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-medium">4. Strict Human Review Requirement</h3>
          <p class="text-muted-foreground mt-2">
            All pull requests must be reviewed and approved by a human maintainer before merging. No automated merging of features is permitted.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-medium">5. Restrictions on New Contributors</h3>
          <p class="text-muted-foreground mt-2">
            To ensure that new contributors take the time to learn the codebase and engage with maintainers, <strong>we prohibit new features or significant refactoring from new contributors without explicit prior permission.</strong>
          </p>
          <p class="text-muted-foreground mt-2">
            A "new contributor" is defined as someone with 3 or fewer merged pull requests. We encourage you to build trust by working on bug fixes and documentation first.
          </p>
          <p class="text-muted-foreground mt-2">
            If you have a major proposal, please open an issue first to discuss it with the maintainers. If the proposal is evaluated and accepted, your contribution will be warmly welcomed!
          </p>
        </div>
      </div>
    </article>
  `,
})
export default class AIPolicyPage {}
