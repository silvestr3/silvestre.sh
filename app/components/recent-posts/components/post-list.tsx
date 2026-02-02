import { use } from "react";

import { blogApi } from "@/lib/api";
import { PostCard } from "./post-card";

type Posts = Awaited<ReturnType<typeof blogApi.posts.browse>>;

export function PostList({ postsPromise }: { postsPromise: Promise<Posts> }) {
  const blogPosts = use(postsPromise);

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
