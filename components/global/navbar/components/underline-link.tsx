import Link from "next/link";
import { cn } from "@/lib/utils";

interface UnderlineLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  wrapperClassName?: string;
  linkClassName?: string;
  underlineClassName?: string;
}

export function UnderlineLink({
  href,
  label,
  onClick,
  wrapperClassName,
  linkClassName,
  underlineClassName,
}: UnderlineLinkProps) {
  const isAnchor = href.startsWith("#");
  const linkClasses = cn("text-muted hover:text-foreground", linkClassName);

  return (
    <div className={cn("group", wrapperClassName)}>
      {isAnchor ? (
        <a className={linkClasses} href={href} onClick={onClick}>
          {label}
        </a>
      ) : (
        <Link className={linkClasses} href={href} onClick={onClick}>
          {label}
        </Link>
      )}
      <div
        className={cn(
          "group-hover:w-full h-0.5 rounded-full bg-primary w-0 transition-all duration-200",
          underlineClassName,
        )}
      />
    </div>
  );
}
