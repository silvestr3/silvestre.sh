import { use } from "react";
import { PostCard } from "./post-card";
import { getRecentPosts } from "@/service/blog/get-recent-posts";

export function PostList() {
  const blogPosts = use(getRecentPosts(3));

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
