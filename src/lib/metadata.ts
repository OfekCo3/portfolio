import type { Metadata } from "next";
import { siteConfig } from "@/config";

/**
 * Factory Pattern: Metadata Generator
 * Creates consistent metadata objects for different pages
 */
export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const defaultMetadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: siteConfig.seo.openGraph.locale,
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.seo.openGraph.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      ...(siteConfig.seo.twitter.creator !== "@yourusername" && {
        creator: siteConfig.seo.twitter.creator,
      }),
    },
  };

  // Deep merge overrides with defaults
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
    },
  };
}

/**
 * Specialized metadata generators for different page types
 */
export const metadataGenerators = {
  page: (title: string, description?: string, path?: string) => createMetadata({
    title: `${title} | ${siteConfig.name}`,
    description: description || siteConfig.description,
    openGraph: {
      url: path ? `${siteConfig.url}${path}` : siteConfig.url,
      title: `${title} | ${siteConfig.name}`,
      description: description || siteConfig.description,
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description: description || siteConfig.description,
    },
  }),

  project: (projectTitle: string, projectDescription: string, projectPath: string) => createMetadata({
    title: `${projectTitle} - Project | ${siteConfig.name}`,
    description: projectDescription,
    openGraph: {
      url: `${siteConfig.url}/projects${projectPath}`,
      title: `${projectTitle} - Project`,
      description: projectDescription,
      type: "article",
    },
    twitter: {
      title: `${projectTitle} - Project`,
      description: projectDescription,
      card: "summary_large_image",
    },
  }),
};
