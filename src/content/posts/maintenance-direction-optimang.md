---
title: Maintenance direction for Optimus UI, the PrimeNG fork
slug: maintenance-direction-optimang
description: Exploring the maintenance direction and philosophy behind Optimus UI, the community fork of PrimeNG. We cover versioning, feature requests, and compatibility with the closed-source PrimeNG.
publishedAt: 2026-07-22
author: OpenNG
---

Following PrimeTek's announcement regarding [the next chapter of its UI libraries](https://primeui.dev/nextchapter) and their transition to a commercial licensing model, the community faced a critical decision. With future major versions of PrimeNG no longer being open source and the original repository archived, we recognized the need for a sustained, community-driven alternative. 

This has led to the creation of **Optimus UI**, a community fork of the last MIT-licensed version of PrimeNG. Our goal is to ensure that teams relying on these components have a reliable, open-source path forward.

In this post, we want to clarify the maintenance direction, our goals, and what you can expect from Optimus UI moving forward.

## Our Intentions for the Fork

Optimus UI is built for the community, by the community. We have established a clear set of goals to guide our maintenance efforts:

### 1. Angular Version Support
Our primary objective is to expose an open-source, MIT-licensed version of the components for each upcoming Angular major version. This includes the highly anticipated Angular v22, ensuring that your projects can stay up-to-date with the Angular ecosystem without being blocked by UI library constraints.

### 2. Addressing Past Bugs
We know that maintaining a large application means dealing with edge cases and bugs. Optimus UI will focus on addressing and resolving lingering bugs from the original repository to improve stability and reliability.

### 3. Pragmatic Feature Requests
We welcome feature requests, but they will be triaged and addressed based on two major rules to ensure the library's long-term health:
- **Consistency and Stability:** The feature must keep the framework consistent and limit the introduction of breaking changes. If a breaking change is absolutely necessary, we are committed to working on introducing schematics to handle it gracefully for developers.
- **Community Contribution:** Once a feature request is accepted, it will only land in the project if someone in the community steps up to make the contribution. We are a community-driven project, and we rely on active participation to build out new capabilities.

## Compatibility with PrimeNG

One of the most common questions we hear is: *Will Optimus UI remain compatible with future versions of the closed-source PrimeNG?*

The honest answer is that **we won't guarantee any compatibility with upcoming versions of PrimeNG.** 

There are several practical reasons for this divergence:

- **Resource Disparity:** The PrimeTek team has dedicated, full-time developers working on PrimeNG. As a volunteer-driven community initiative, we do not plan to—nor can we—compete with their release cadence or internal roadmap.
- **User-Centric Priority:** Feature requests and architectural decisions will be considered solely for OptimaNG users, not PrimeNG users. Our priority is to make the right choices for our community and our users' needs, rather than contorting the library to maintain artificial compatibility with a closed-source product.
- **Diverging Codebases:** Because PrimeNG 22 and beyond are closed-source, we won't have visibility into their implementation details. While PrimeTek is very welcome to adopt features we create with the community, we will not engage in any reverse engineering of their closed-source product. Even if a similar feature happens to land in both projects (organically or through parallel evolution), there is no guarantee they would work the same way under the hood or expose the identical inputs, outputs, and APIs.

Over time, you should expect Optimus UI to evolve into its own distinct library, optimized for its own user base.

## Beyond the Core Components

A UI framework is more than just its components. To ensure a cohesive ecosystem, we also merged the `primeuix` and `primeicons` repositories. We plan to apply the same maintenance philosophy, rules, and impact considerations to these essential supporting libraries.

## Join the Effort

Optimus UI's success depends entirely on the people who use it. If your team relies on these components and you want to ensure their future in the open-source ecosystem, we invite you to contribute. Whether it is triaging issues, fixing bugs, or implementing approved features, your help makes a difference.

We are excited about this next chapter and look forward to building a stable, community-owned UI library together.
