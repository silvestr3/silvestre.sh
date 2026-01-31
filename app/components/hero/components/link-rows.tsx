import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Linkedin } from "lucide-react";

export function LinkRow() {
  const links = [
    {
      href: "https://github.com/silvestr3",
      Icon: Github,
      tooltip: "GitHub",
    },
    {
      href: "https://linkedin.com/in/fellipe-silvestre",
      Icon: Linkedin,
      tooltip: "LinkedIn",
    },
  ];

  return (
    <div className="flex items-center gap-1">
      {links.map(({ href, Icon, tooltip }) => (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              key={href}
              variant="ghost"
              size={"icon-lg"}
              asChild
              className="group"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="group-hover:-translate-y-1 transition-all duration-300 text-muted group-hover:text-secondary-foreground" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{tooltip}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
