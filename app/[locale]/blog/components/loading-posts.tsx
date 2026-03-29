import { Skeleton } from "@/components/ui/skeleton";

export function LoadingPosts() {
  return (
    <div className="flex flex-wrap gap-4 justify-start">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="h-90 w-90 max-w-sm" />
      ))}
    </div>
  );
}
