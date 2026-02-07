import { cn } from "@/lib/utils";
import { TextAnimate } from "../ui/text-animate";

interface SectionTitleProps {
  isCentered?: boolean;
  category: string;
  title: string;
  description?: string;
}

export function SectionTitle({
  category,
  title,
  description,
  isCentered = false,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        description ? "lg:mt-16 mt-8" : "lg:mt-24 mt-16",
        isCentered && "text-center",
      )}
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
        className={cn(
          "text-3xl font-bold tracking-tight",
          isCentered && "text-5xl",
        )}
      >
        {title}
      </TextAnimate>
      {description && (
        <span className="text-muted text-lg block mt-4">{description}</span>
      )}
    </div>
  );
}
