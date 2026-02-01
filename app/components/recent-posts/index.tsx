import { SectionTitle } from "@/components/global/section-title";
import { ArrowRight } from "lucide-react";
import { PostCard } from "./components/post-card";
import { SectionWrapper } from "@/components/global/section-wrapper";
import { blogApi } from "@/lib/api";
import { use } from "react";
import { AsyncBoundary } from "@/components/global/async-boundary";
import { LoadingPosts } from "./components/loading-posts";
import { ErrorPosts } from "./components/error-posts";

export function RecentPosts() {
  const blogPosts = use(
    blogApi.posts.browse({
      limit: 3,
      fields: ["title", "feature_image", "published_at", "slug"],
    }),
  );

  return (
    <SectionWrapper>
      <SectionTitle title="Posts recentes" category="blog" />

      <div className="flex items-center flex-wrap mx-auto gap-3 justify-center">
        <AsyncBoundary
          loadingFallback={<LoadingPosts />}
          errorFallback={<ErrorPosts />}
        >
          {blogPosts.map((post, index) => (
            <PostCard
              title={post.title!}
              feature_image={post.feature_image!}
              published_at={post.published_at!}
              slug={post.slug}
              key={index}
            />
          ))}
        </AsyncBoundary>
      </div>

      <a
        href="https://medium.com/@fellipe.silvestre"
        target="_blank"
        className="flex items-center gap-2 text-muted hover:text-primary font-medium mx-auto mt-10 w-fit group transition-all duration-200"
      >
        <span>Ver todos os posts no blog</span>
        <ArrowRight className="group-hover:translate-x-1 transition-all duration-200" />
      </a>
    </SectionWrapper>
  );
}
