import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TechCardProps {
  category: string;
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export function TechCard({ category, title, Icon }: TechCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:scale-105">
      <CardContent className="flex flex-col items-center justify-center gap-4 px-6 min-h-30">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="w-8 h-8 text-primary" />
        </div>

        <h3 className="text-center text-base font-semibold leading-tight">
          {title}
        </h3>

        <Badge variant="secondary" className="text-xs font-medium">
          {category}
        </Badge>
      </CardContent>
    </Card>
  );
}
