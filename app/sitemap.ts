import { MetadataRoute } from "next";
import { blogApi } from "@/lib/api";
import { env } from "@/env";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.NEXT_PUBLIC_SITE_URL;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  try {
    // Fetch all blog posts from Ghost CMS
    const posts = await blogApi.posts.browse({
      limit: "all",
      fields: ["slug", "updated_at", "published_at"],
    });

    // Generate sitemap entries for blog posts
    const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updated_at
        ? new Date(post.updated_at)
        : post.published_at
          ? new Date(post.published_at)
          : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [...staticPages, ...blogPosts];
  } catch (error) {
    // If fetching blog posts fails, return at least the static pages
    console.error("Error generating sitemap:", error);
    return staticPages;
  }
}
