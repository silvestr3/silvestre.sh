import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-baseline gap-1">
        <span className="font-bold text-2xl tracking-tight">fs</span>
        <div className="rounded-full w-1 h-1 bg-primary" />
      </div>
    </Link>
  );
}
