import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialLinks } from "@/util/social-links";
import { Github, Linkedin } from "lucide-react";

export function LinkRow() {
  const links = [
    {
      href: socialLinks.github,
      Icon: Github,
      tooltip: "GitHub",
    },
    {
      href: socialLinks.linkedin,
      Icon: Linkedin,
      tooltip: "LinkedIn",
    },
  ];

  return (
    <div className="flex items-center gap-1">
      {links.map(({ href, Icon, tooltip }) => (
        <Tooltip key={href}>
          <TooltipTrigger asChild>
            <Button variant="ghost" size={"icon-lg"} asChild className="group">
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
