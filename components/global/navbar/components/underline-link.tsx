import Link from "next/link";

interface UnderlineLinkProps {
  href: string;
  label: string;
}

export function UnderlineLink({ href, label }: UnderlineLinkProps) {
  return (
    <div className="group">
      <Link className="text-muted hover:text-foreground" href={href}>
        {label}
      </Link>
      <div className="group-hover:w-full h-0.5 rounded-full bg-primary w-0 transition-all duration-200" />
    </div>
  );
}
