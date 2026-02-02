import { blogApi } from "@/lib/api";
import { SectionTitle } from "@/components/shared/section-title";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AsyncBoundary } from "@/components/shared/async-boundary";
import { BlogPostList, POSTS_PER_PAGE } from "./components/blog-posts";
import { LoadingPosts } from "./components/loading-posts";
import { ErrorPosts } from "./components/error-posts";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);

  const postsPromise = blogApi.posts.browse({
    limit: POSTS_PER_PAGE + 1,
    page,
    fields: ["title", "feature_image", "published_at", "slug"],
  });

  return (
    <SectionWrapper>
      <SectionTitle
        category="blog"
        title="Javascript Compilado"
        description="Compartilhando conhecimentos variados sobre o ecossistema Javascript baseado em vivências reais por aí"
      />
      <AsyncBoundary
        loadingFallback={<LoadingPosts />}
        errorFallback={<ErrorPosts />}
      >
        <BlogPostList postsPromise={postsPromise} page={page} />
      </AsyncBoundary>
    </SectionWrapper>
  );
}
