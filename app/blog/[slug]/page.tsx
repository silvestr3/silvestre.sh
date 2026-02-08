import { use } from "react";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AsyncBoundary } from "@/components/shared/async-boundary";
import { BlogPost } from "./components/blog-post";
import { PostLoading } from "./components/post-loading";
import { PostNotFound } from "./components/post-not-found";
import { readPost } from "@/service/blog/read-post";
import { buildPostMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await readPost(slug);
    return buildPostMetadata(post);
  } catch {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }
}

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
        <BlogPost slug={slug} />
      </AsyncBoundary>
    </SectionWrapper>
  );
}
