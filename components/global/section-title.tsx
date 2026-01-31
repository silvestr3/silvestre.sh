import { TextAnimate } from "../ui/text-animate";

interface SectionTitleProps {
  category: string;
  title: string;
}

export function SectionTitle({ category, title }: SectionTitleProps) {
  return (
    <div className="mt-24 mb-12">
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
    </div>
  );
}
