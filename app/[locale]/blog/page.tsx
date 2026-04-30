import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/shared/section-title";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AsyncBoundary } from "@/components/shared/async-boundary";
import { BlogPostList, POSTS_PER_PAGE } from "./components/blog-posts";
import { LoadingPosts } from "./components/loading-posts";
import { ErrorPosts } from "./components/error-posts";

export { POSTS_PER_PAGE };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("blogTitle"),
    description: t("blogDescription"),
    alternates: {
      canonical: "/blog",
    },
    openGraph: {
      title: t("blogTitle"),
      description: t("blogDescription"),
      url: "/blog",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: t("blogTitle"),
      description: t("blogDescription"),
    },
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);
  const t = await getTranslations("blog");

  return (
    <SectionWrapper>
      <SectionTitle
        category={t("category")}
        title={t("title")}
        description={t("description")}
      />
      <AsyncBoundary
        loadingFallback={<LoadingPosts />}
        errorFallback={<ErrorPosts />}
      >
        <BlogPostList page={page} />
      </AsyncBoundary>
    </SectionWrapper>
  );
}
