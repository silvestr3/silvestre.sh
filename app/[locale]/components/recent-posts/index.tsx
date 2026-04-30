import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/shared/section-title";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AsyncBoundary } from "@/components/shared/async-boundary";
import { LoadingPosts } from "./components/loading-posts";
import { ErrorPosts } from "./components/error-posts";
import { PostList } from "./components/post-list";
import Link from "next/link";

export async function RecentPosts() {
  const t = await getTranslations("recentPosts");

  return (
    <SectionWrapper id="blog">
      <SectionTitle title={t("title")} category="blog" />

      <div className="flex items-center flex-wrap mx-auto gap-3 justify-center">
        <AsyncBoundary
          loadingFallback={<LoadingPosts />}
          errorFallback={<ErrorPosts />}
        >
          <PostList />
        </AsyncBoundary>
      </div>

      <Link
        href={"/blog"}
        className="flex items-center gap-2 text-muted hover:text-primary font-medium mx-auto mt-10 w-fit group transition-all duration-200"
      >
        <span>{t("viewAll")}</span>
        <ArrowRight className="group-hover:translate-x-1 transition-all duration-200" />
      </Link>
    </SectionWrapper>
  );
}
