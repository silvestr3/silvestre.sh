import { blogApi } from "@/lib/api";
import { cache } from "react";

export const getRecentPosts = cache(async (limit: number) => {
  try {
    const response = await blogApi.posts.browse({
      limit,
      fields: ["title", "feature_image", "published_at", "slug"],
    });

    return response;
  } catch (error) {
    throw error;
  }
});
