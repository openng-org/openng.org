import { injectContentFiles } from '@analogjs/content';
import type { BadgeVariants } from '@spartan-ng/helm/badge';

export type LibraryStatus =
  | 'candidate'
  | 'triaged'
  | 'accepted'
  | 'declined'
  | 'maintained'
  | 'sunset';

export type LibraryMaintenance = 'active' | 'best-effort' | 'none';

export interface LibraryAttributes {
  name: string;
  slug: string;
  description: string;
  originalPackage: string;
  // Replacement shape A - a concrete drop-in replacement (OpenNG or community
  // fork). Has a repository and usually an npm package. Brand icons link here.
  replacementPackage?: string;
  status: LibraryStatus;
  maintenance?: LibraryMaintenance;
  githubRepo?: string;
  githubRepoExists?: boolean;
  originalPackageExists?: boolean;
  replacementPackageExists?: boolean;
  newGithubRepo?: string;
  category?: string;
  triagedAt?: string;
  // Replacement shape B - migration guidance when there is no drop-in package
  // or repo (e.g. "Use Angular standalone components"). Rendered as text/link,
  // never as GitHub/npm brand icons.
  replacementNote?: string;
  replacementUrl?: string;
  license?: string;
  motivation?: string;
  notes?: string;
  draft?: boolean;
}

export type LibraryRow = LibraryAttributes;

export const LIBRARY_STATUSES: LibraryStatus[] = [
  'maintained',
  'accepted',
  'candidate',
  'triaged',
  'sunset',
  'declined',
];

export const STATUS_BADGE_VARIANT: Record<
  LibraryStatus,
  BadgeVariants['variant']
> = {
  candidate: 'outline',
  triaged: 'secondary',
  accepted: 'secondary',
  declined: 'destructive',
  maintained: 'default',
  sunset: 'secondary',
};

export const MAINTENANCE_LABELS: Record<LibraryMaintenance, string> = {
  active: 'Active maintenance',
  'best-effort': 'Best-effort maintenance',
  none: 'No maintenance',
};

export function injectLibraries(): LibraryRow[] {
  return injectContentFiles<LibraryAttributes>((file) =>
    file.filename.includes('content/libraries/'),
  )
    .filter((lib) => !lib.attributes.draft)
    .map((lib) => ({
      ...lib.attributes,
      slug: lib.attributes.slug || lib.slug,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function githubUrl(library: LibraryRow): string | null {
  const repo =
    library.newGithubRepo ??
    (library.githubRepoExists !== false ? library.githubRepo : undefined);
  return repo ? `https://github.com/${repo}` : null;
}

export function originalGithubUrl(library: LibraryRow): string | null {
  return library.githubRepo && library.githubRepoExists !== false
    ? `https://github.com/${library.githubRepo}`
    : null;
}

export function npmPackageUrl(packageName: string): string {
  return `https://www.npmjs.com/package/${encodeURIComponent(packageName)}`;
}

export function formatCategory(category: string): string {
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const LICENSE_URLS: Record<string, string> = {
  MIT: 'https://opensource.org/licenses/MIT',
  'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
  'BSD-2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
  'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
  'GPL-3.0': 'https://opensource.org/licenses/GPL-3.0',
  'LGPL-3.0': 'https://opensource.org/licenses/LGPL-3.0',
  ISC: 'https://opensource.org/licenses/ISC',
};

export function licenseUrl(license: string): string | null {
  const key = license.replace(/ License$/i, '').trim();
  return LICENSE_URLS[key] ?? null;
}

export type ResourceKind = 'github' | 'npm';

export interface ResourceLink {
  kind: ResourceKind;
  url: string | null;
  available: boolean;
  tooltip: string;
}

export function originalResourceLinks(library: LibraryRow): ResourceLink[] {
  const repoAvailable =
    !!library.githubRepo && library.githubRepoExists !== false;
  const npmAvailable =
    !!library.originalPackage && library.originalPackageExists !== false;

  return [
    {
      kind: 'github',
      url: repoAvailable ? `https://github.com/${library.githubRepo}` : null,
      available: repoAvailable,
      tooltip: repoAvailable
        ? `View ${library.githubRepo} on GitHub`
        : library.githubRepo
          ? 'Source repository no longer available'
          : 'No source repository',
    },
    {
      kind: 'npm',
      url: npmAvailable ? npmPackageUrl(library.originalPackage) : null,
      available: npmAvailable,
      tooltip: npmAvailable
        ? `View ${library.originalPackage} on npm`
        : `${library.originalPackage} is not published on npm`,
    },
  ];
}

export function replacementResourceLinks(library: LibraryRow): ResourceLink[] {
  const repo = library.newGithubRepo;
  const repoAvailable = !!repo;
  const pkg = library.replacementPackage;
  const npmAvailable = !!pkg && library.replacementPackageExists !== false;

  return [
    {
      kind: 'github',
      url: repoAvailable ? `https://github.com/${repo}` : null,
      available: repoAvailable,
      tooltip: repoAvailable
        ? `View ${repo} on GitHub`
        : 'No replacement repository yet',
    },
    {
      kind: 'npm',
      url: npmAvailable ? npmPackageUrl(pkg as string) : null,
      available: npmAvailable,
      tooltip: npmAvailable
        ? `View ${pkg} on npm`
        : pkg
          ? `${pkg} is not published on npm yet`
          : 'No replacement package yet',
    },
  ];
}

/**
 * The replacement column has two mutually exclusive shapes:
 * - `package`: a real replacement repo/package -> render GitHub + npm brand icons.
 * - `guidance`: a migration recommendation -> render note text (optionally linked).
 * - `none`: nothing tracked yet.
 */
export type ReplacementDisplay =
  | { kind: 'package'; label: string; links: ResourceLink[] }
  | { kind: 'guidance'; note: string; url: string | null }
  | { kind: 'none' };

export function replacementDisplay(library: LibraryRow): ReplacementDisplay {
  if (library.newGithubRepo || library.replacementPackage) {
    return {
      kind: 'package',
      label: (library.replacementPackage ?? library.newGithubRepo) as string,
      links: replacementResourceLinks(library),
    };
  }

  if (library.replacementNote) {
    return {
      kind: 'guidance',
      note: library.replacementNote,
      url: library.replacementUrl ?? null,
    };
  }

  return { kind: 'none' };
}
