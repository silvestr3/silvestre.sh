import { ArrowDown } from "lucide-react";

import { cn } from "@/lib/utils";

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group bg-primary relative w-auto cursor-pointer overflow-hidden rounded-2xl p-2 px-6 text-center font-semibold",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="inline-block text-primary-foreground transition-all duration-500 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-500 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowDown />
      </div>
    </button>
  );
}
