import type { Metadata } from "next";
import type { PostOrPage } from "@tryghost/content-api";
import { env } from "@/env";

/**
 * Convert a relative path to an absolute URL
 */
export function getAbsoluteUrl(path: string): string {
  const baseUrl = env.NEXT_PUBLIC_SITE_URL;
  // Remove trailing slash from baseUrl and leading slash from path if present
  const cleanBase = baseUrl.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

/**
 * Build metadata for a blog post from Ghost CMS data
 * Maps Ghost SEO fields to Next.js Metadata API with fallback chain
 */
export function buildPostMetadata(post: PostOrPage): Metadata {
  const postUrl = getAbsoluteUrl(`/blog/${post.slug}`);

  // Title with fallback chain
  const title = post.meta_title || post.title || "Untitled Post";

  // Description with fallback chain
  const description =
    post.meta_description ||
    post.excerpt ||
    post.custom_excerpt ||
    "Read this blog post";

  // Open Graph image with fallback
  const ogImage = post.og_image || post.feature_image;

  // Twitter image with fallback chain
  const twitterImage =
    post.twitter_image || post.og_image || post.feature_image;

  return {
    title,
    description,
    alternates: {
      canonical: post.canonical_url || postUrl,
    },
    openGraph: {
      type: "article",
      title: post.og_title || title,
      description: post.og_description || description,
      url: postUrl,
      siteName: "Silvestre",
      locale: "pt_BR",
      images: ogImage
        ? [
            {
              url: ogImage,
              alt: post.feature_image_alt || post.title || "Blog post image",
            },
          ]
        : [],
      publishedTime: post.published_at || undefined,
      modifiedTime: post.updated_at || undefined,
      authors: post.authors?.map((a) => a.name).filter(Boolean) as
        | string[]
        | undefined,
      tags: post.tags?.map((t) => t.name).filter(Boolean) as
        | string[]
        | undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.twitter_title || post.og_title || title,
      description:
        post.twitter_description || post.og_description || description,
      images: twitterImage ? [twitterImage] : [],
    },
  };
}

/**
 * Build default site metadata for non-blog pages
 */
export function buildSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
    title: {
      default: "Fellipe Silvestre - Javascript Developer",
      template: "%s | Silvestre",
    },
    description:
      "Portfolio e blog de Fellipe Silvestre sobre o ecossistema Javascript",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Silvestre",
      title: "Fellipe Silvestre - Javascript Developer",
      description: "Portfolio e blog de Fellipe Silvestre",
      url: "/",
    },
    twitter: {
      card: "summary_large_image",
      title: "Fellipe Silvestre - Javascript Developer",
      description: "Portfolio e blog de Fellipe Silvestre",
    },
  };
}

/**
 * Generate structured data (JSON-LD) for a blog post
 * Creates schema.org BlogPosting markup for rich search results
 */
export function generatePostStructuredData(post: PostOrPage) {
  const postUrl = getAbsoluteUrl(`/blog/${post.slug}`);
  const siteUrl = env.NEXT_PUBLIC_SITE_URL;

  // Get the primary author or first author
  const author = post.primary_author || post.authors?.[0];

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title || "Untitled Post",
    description:
      post.meta_description || post.excerpt || post.custom_excerpt || "",
    image: post.feature_image || undefined,
    datePublished: post.published_at || undefined,
    dateModified: post.updated_at || post.published_at || undefined,
    author: author
      ? {
          "@type": "Person",
          name: author.name || "Unknown Author",
          url: author.url ? getAbsoluteUrl(author.url) : undefined,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Silvestre",
      logo: {
        "@type": "ImageObject",
        url: getAbsoluteUrl("/logo.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags?.map((t) => t.name).filter(Boolean) || [],
    url: postUrl,
    inLanguage: "pt-BR",
  };
}
