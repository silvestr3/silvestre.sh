import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  hasNextPage: boolean;
}

export async function Pagination({ page, hasNextPage }: PaginationProps) {
  if (page === 1 && !hasNextPage) return null;

  const t = await getTranslations("blog");

  return (
    <nav className="flex items-center justify-center gap-6 mt-12">
      {page > 1 && (
        <Link
          href={`/blog?page=${page - 1}`}
          className="flex items-center gap-1 text-muted hover:text-primary transition-colors duration-200"
        >
          <ChevronLeft size={16} />
          {t("paginationPrev")}
        </Link>
      )}
      <span className="text-muted text-sm">
        {t("paginationPage", { page })}
      </span>
      {hasNextPage && (
        <Link
          href={`/blog?page=${page + 1}`}
          className="flex items-center gap-1 text-muted hover:text-primary transition-colors duration-200"
        >
          {t("paginationNext")}
          <ChevronRight size={16} />
        </Link>
      )}
    </nav>
  );
}
