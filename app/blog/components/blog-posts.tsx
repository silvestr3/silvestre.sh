import { use } from "react";
import { PostCard } from "@/app/components/recent-posts/components/post-card";
import { Pagination } from "./pagination";
import { getRecentPosts } from "@/service/blog/get-recent-posts";

export const POSTS_PER_PAGE = 10;

export function BlogPostList({ page }: { page: number }) {
  const allPosts = use(getRecentPosts(POSTS_PER_PAGE + 1));
  const hasNextPage = allPosts.length > POSTS_PER_PAGE;
  const posts = allPosts.slice(0, POSTS_PER_PAGE);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center md:justify-center lg:justify-start">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title!}
            feature_image={post.feature_image!}
            published_at={post.published_at!}
            slug={post.slug}
          />
        ))}
      </div>
      <Pagination page={page} hasNextPage={hasNextPage} />
    </>
  );
}
