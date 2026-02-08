import { blogApi } from "@/lib/api";
import { cache } from "react";

export const getRecentPosts = cache(async (limit: number) => {
  try {
    const response = await blogApi.posts.browse({
      limit,
      fields: [
        "title",
        "feature_image",
        "feature_image_alt",
        "published_at",
        "slug",
        "excerpt",
        "custom_excerpt",
        "meta_description",
      ],
    });

    return response;
  } catch (error) {
    throw error;
  }
});
