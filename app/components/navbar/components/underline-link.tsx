interface UnderlineLinkProps {
  href: string;
  label: string;
}

export function UnderlineLink({ href, label }: UnderlineLinkProps) {
  return (
    <div className="group">
      <a className="text-muted hover:text-foreground" href={href}>
        {label}
      </a>
      <div className="group-hover:w-full h-0.5 rounded-full bg-primary w-0 transition-all duration-200" />
    </div>
  );
}
