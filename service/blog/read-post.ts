import { blogApi } from "@/lib/api";
import { cache } from "react";

export const readPost = cache(async (slug: string) => {
  try {
    return await blogApi.posts.read({ slug });
  } catch (error) {
    throw error;
  }
});
