import { use } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { blogApi } from "@/lib/api";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AsyncBoundary } from "@/components/shared/async-boundary";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogPost } from "./components/blog-post";
import { PostLoading } from "./components/post-loading";
import { PostNotFound } from "./components/post-not-found";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return (
    <SectionWrapper>
      <Link
        href="/blog"
        className="flex items-center gap-2 text-muted hover:text-primary transition-colors duration-200 mb-8"
      >
        <ArrowLeft size={16} />
        <span>Voltar ao blog</span>
      </Link>

      <AsyncBoundary
        loadingFallback={<PostLoading />}
        errorFallback={<PostNotFound />}
      >
        <BlogPost postPromise={blogApi.posts.read({ slug })} />
      </AsyncBoundary>
    </SectionWrapper>
  );
}
