interface SectionTitleProps {
  category: string;
  title: string;
}

export function SectionTitle({ category, title }: SectionTitleProps) {
  return (
    <div className="mt-24 mb-12">
      <span className="text-primary uppercase font-medium tracking-wide text-sm block">
        {category}
      </span>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}
