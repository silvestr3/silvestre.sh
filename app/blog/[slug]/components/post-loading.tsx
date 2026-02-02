import { Skeleton } from "@/components/ui/skeleton";

export function PostLoading() {
  return (
    <>
      <Skeleton className="aspect-video w-56 mx-auto mb-4" />
      <Skeleton className="h-4 w-2/3 mx-auto mb-2" />
      <Skeleton className="h-4 w-1/2 mx-auto" />
    </>
  );
}
