import { cn } from "@/lib/utils";
import { TextAnimate } from "../ui/text-animate";

interface SectionTitleProps {
  category: string;
  title: string;
  description?: string;
}

export function SectionTitle({
  category,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div
      className={cn("mb-12", description ? "lg:mt-16 mt-8" : "lg:mt-24 mt-16")}
    >
      <TextAnimate
        className="text-primary uppercase font-medium tracking-wide text-sm block"
        as={"span"}
        animation="fadeIn"
        once
      >
        {category}
      </TextAnimate>
      <TextAnimate
        as={"h2"}
        animation="fadeIn"
        once
        delay={0.2}
        className="text-3xl font-bold tracking-tight"
      >
        {title}
      </TextAnimate>
      {description && <span className="text-muted text-lg">{description}</span>}
    </div>
  );
}
