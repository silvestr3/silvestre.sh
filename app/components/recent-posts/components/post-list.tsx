import { use, cache } from "react";

import { blogApi } from "@/lib/api";
import { PostCard } from "./post-card";

export function PostList() {
  const blogPosts = use(
    blogApi.posts.browse({
      limit: 3,
      fields: ["title", "feature_image", "published_at", "slug"],
    }),
  );

  return blogPosts.map((post, index) => (
    <PostCard
      title={post.title!}
      feature_image={post.feature_image!}
      published_at={post.published_at!}
      slug={post.slug}
      key={index}
    />
  ));
}
