"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { formatDate } from "@/util/date-utils";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

interface PostCardProps {
  title: string;
  feature_image: string;
  published_at: string;
  slug: string;
}

export function PostCard(post: PostCardProps) {
  const navigate = useRouter();

  function handleOpenPost() {
    navigate.push(`/blog/${post.slug}`);
  }

  return (
    <Card
      onClick={handleOpenPost}
      className="min-h-90 max-h-90 shrink group relative w-90 max-w-sm pt-0 cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:border-primary/50 transition-all duration-200"
    >
      <div className="absolute inset-0 z-30 aspect-video " />
      <img
        src={post.feature_image}
        alt={post.title}
        className="relative rounded-t-lg z-20 aspect-video w-full object-cover brightness-80 group-hover:brightness-100 transition-all duration-200"
      />
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>

      <CardFooter className="mt-auto">
        <span className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="text-muted-foreground" size={16} />
          <span className="text-sm">
            {formatDate(new Date(post.published_at))}
          </span>
        </span>
      </CardFooter>
    </Card>
  );
}
