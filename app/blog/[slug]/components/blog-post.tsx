import { use } from "react";
import { Calendar } from "lucide-react";
import { readPost } from "@/service/blog/read-post";

function formatDate(date: Date) {
  return Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function BlogPost({ slug }: { slug: string }) {
  const post = use(readPost(slug));

  return (
    <article className="max-w-3xl mx-auto">
      {post.feature_image && (
        <img
          src={post.feature_image}
          alt={post.title!}
          className="w-full rounded-xl aspect-video object-cover mb-8"
        />
      )}

      <h1 className="text-4xl font-bold tracking-tight mb-3">{post.title}</h1>

      <span className="flex items-center gap-2 text-muted text-sm mb-12">
        <Calendar size={16} />
        {formatDate(new Date(post.published_at!))}
      </span>

      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html! }} />
    </article>
  );
}
