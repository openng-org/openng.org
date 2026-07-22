---
title: State of OpenNG, PrimeNG and ngneat projects
slug: state-of-openng-primeng-ngneat
description: An update on the future of OpenNG, PrimeNG and the ngneat ecosystem, including our funding model, versioning policy, and current priorities.
publishedAt: 2026-07-06
author: OpenNG
---

As people have questions about the future of projects such as Spectator or PrimeNG, here is the current state of our actions.

## OpenNG

We just renamed the initiative from OpenNG Foundation to OpenNG to avoid confusion and to respect the OpenJS Foundation trademark policy.

### Funding

We are working on a funding model to support the maintenance of the projects and give back to contributors. We submitted the initiative to Open Collective and contacted HeroDevs for partnership.

### Versioning Policy

We'll start over with v1.0.0 for all the packages. Each project will include a matrix compatibility table with the supported major Angular versions (including the previous package). Some packages were already not following the Angular versioning policy, and this will allow us to author a major version for breaking changes anytime.

## PrimeNG

PrimeNG went closed-source, and the GitHub repository was archived on June 28th, 2026. Discover the announcement here.

We created a copy of the project and regenerated the open issues/PRs. Out of 968 open issues, 58 have already been closed, and 23 triaged as still relevant and accepting contributions to resolve them. Triaging was made possible thanks to the contribution of the community.

Our goal this week is to release a beta version supporting Angular 22, as people were already delaying updating their projects.

It'll include:

- a set of unreleased changes from the original repository (modernize existing components, add a few new ones)
- `ng add` support for new projects
- `ng update` support as unreleased changes include a few breaking changes (camelcase selectors removed, deprecated APIs removed)

Our current blocker for this release is to find a proper name for the project. Currently named open-prime, it's too close to PrimeNG as PrimeTek plans to put trademarks on it. We asked the community for suggestions here.

We're evaluating proposals, with the main restriction being to avoid confusion with another project (many UI frameworks are matching the proposals).

## ngneat projects

Out of the 34 original repositories, we decided to start working on the following ones:

- cashew
- query
- elf
- spectator

We have a volunteer working on cashew, currently preparing the first release.
Spectator is our priority within the ngneat ecosystem, planning a release this week. We also have a contribution to expose the jasmine package as a standalone (like jest/vitest ones, planned to land in 1.1.0.

We still need to triage the remaining repositories to understand if we should keep them or not. 13 of them might not be maintained anymore due to low activity or having a better alternative nowadays.
