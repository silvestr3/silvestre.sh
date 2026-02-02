import { SectionTitle } from "@/components/shared/section-title";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { blogApi } from "@/lib/api";
import { AsyncBoundary } from "@/components/shared/async-boundary";
import { LoadingPosts } from "./components/loading-posts";
import { ErrorPosts } from "./components/error-posts";
import { PostList } from "./components/post-list";
import Link from "next/link";

export function RecentPosts() {
  return (
    <SectionWrapper>
      <SectionTitle title="Posts recentes" category="blog" />

      <div className="flex items-center flex-wrap mx-auto gap-3 justify-center">
        <AsyncBoundary
          loadingFallback={<LoadingPosts />}
          errorFallback={<ErrorPosts />}
        >
          <PostList
            postsPromise={blogApi.posts.browse({
              limit: 3,
              fields: ["title", "feature_image", "published_at", "slug"],
            })}
          />
        </AsyncBoundary>
      </div>

      <Link
        href={"/blog"}
        className="flex items-center gap-2 text-muted hover:text-primary font-medium mx-auto mt-10 w-fit group transition-all duration-200"
      >
        <span>Ver todos os posts no blog</span>
        <ArrowRight className="group-hover:translate-x-1 transition-all duration-200" />
      </Link>
    </SectionWrapper>
  );
}
