import { use } from "react";
import { Calendar } from "lucide-react";
import { readPost } from "@/service/blog/read-post";
import { formatDate } from "@/util/date-utils";
import { StructuredData } from "@/components/seo/structured-data";
import { generatePostStructuredData } from "@/lib/seo";

export function BlogPost({ slug }: { slug: string }) {
  const post = use(readPost(slug));
  const structuredData = generatePostStructuredData(post);

  return (
    <>
      <StructuredData data={structuredData} />
      <article className="max-w-3xl mx-auto">
        {post.feature_image && (
          <img
            src={post.feature_image}
            alt={post.feature_image_alt || post.title || "Blog post image"}
            className="w-full rounded-xl aspect-video object-cover mb-8"
          />
        )}

        <h1 className="text-4xl font-bold tracking-tight mb-3">
          {post.title}
        </h1>

        <span className="flex items-center gap-2 text-muted text-sm mb-12">
          <Calendar size={16} />
          {formatDate(new Date(post.published_at!))}
          {post.reading_time && (
            <>
              <span>•</span>
              <span>{post.reading_time} min de leitura</span>
            </>
          )}
        </span>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.html! }}
        />
      </article>
    </>
  );
}
