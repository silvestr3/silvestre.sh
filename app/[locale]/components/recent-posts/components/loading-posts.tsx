import { Skeleton } from "@/components/ui/skeleton";

export function LoadingPosts() {
  return (
    <div className="flex items-center flex-wrap mx-auto gap-3 justify-between">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="h-90 w-90" />
      ))}
    </div>
  );
}
