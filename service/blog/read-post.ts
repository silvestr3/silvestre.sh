import { blogApi } from "@/lib/api";
import { cache } from "react";

export const readPost = cache(async (slug: string) => {
  try {
    return await blogApi.posts.read(
      { slug },
      {
        include: ["authors", "tags"],
        fields: [
          // Core content
          "title",
          "html",
          "slug",
          "url",
          "feature_image",
          "feature_image_alt",
          "published_at",
          "updated_at",
          "reading_time",
          // SEO Meta
          "meta_title",
          "meta_description",
          "canonical_url",
          "excerpt",
          "custom_excerpt",
          // Social Meta - Open Graph
          "og_image",
          "og_title",
          "og_description",
          // Social Meta - Twitter
          "twitter_image",
          "twitter_title",
          "twitter_description",
        ],
      }
    );
  } catch (error) {
    throw error;
  }
});
