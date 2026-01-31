"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface PostCardProps {
  title: string;
  description: string;
  href: string;
  tags: Array<string>;
  publicationDate: Date;
}

export function PostCard(post: PostCardProps) {
  function handleOpenPost(url: string) {
    window.open(url, "_blank");
  }

  function formatDate(date: Date) {
    return Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  return (
    <Card
      className="w-70 cursor-pointer hover:shadow-lg hover:-translate-y-2 transition-all duration-200"
      onClick={() => handleOpenPost(post.href)}
    >
      <CardHeader>
        <div className="flex flex-wrap items-center gap-1">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-primary/10 block w-fit py-1 px-2 rounded-lg text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <CardTitle>{post.title}</CardTitle>
        <CardDescription className="line-clamp-4">
          {post.description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <span className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="text-muted-foreground" size={16} />
          <span className="text-sm">{formatDate(post.publicationDate)}</span>
        </span>
      </CardFooter>
    </Card>
  );
}
