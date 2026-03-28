import { SectionTitle } from "@/components/shared/section-title";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Marquee } from "@/components/ui/marquee";
import { TechCard } from "./components/tech-card";
import { TailwindIcon } from "./icons/tailwind";
import { ReactIcon } from "./icons/react";
import { NextIcon } from "./icons/next";
import { NodeIcon } from "./icons/node";
import { BunIcon } from "./icons/bun";
import { NestIcon } from "./icons/nest";
import { FastifyIcon } from "./icons/fastify";
import { ExpressIcon } from "./icons/express";
import { SvelteIcon } from "./icons/svelte";
import { JavascriptIcon } from "./icons/javascript";
import { TypescriptIcon } from "./icons/typescript";
import { AntdIcon } from "./icons/antd";
import { CSSIcon } from "./icons/css";
import { GitIcon } from "./icons/git";

export function About() {
  const techStack = [
    {
      category: "Everything",
      title: "Typescript",
      Icon: TypescriptIcon,
    },
    {
      category: "Frontend",
      title: "Tailwind",
      Icon: TailwindIcon,
    },
    {
      category: "Backend",
      title: "Express",
      Icon: ExpressIcon,
    },
    {
      category: "Frontend",
      title: "React",
      Icon: ReactIcon,
    },
    {
      category: "Backend",
      title: "Bun",
      Icon: BunIcon,
    },
    {
      category: "Frontend",
      title: "CSS",
      Icon: CSSIcon,
    },
    {
      category: "Version Control",
      title: "Git",
      Icon: GitIcon,
    },
    {
      category: "Frontend",
      title: "Next.js",
      Icon: NextIcon,
    },
    {
      category: "Backend",
      title: "NestJS",
      Icon: NestIcon,
    },
    {
      category: "Everything",
      title: "Javascript",
      Icon: JavascriptIcon,
    },
    {
      category: "Frontend",
      title: "Svelte",
      Icon: SvelteIcon,
    },
    {
      category: "Backend",
      title: "Node.js",
      Icon: NodeIcon,
    },
    {
      category: "Frontend",
      title: "Ant Design",
      Icon: AntdIcon,
    },
    {
      category: "Backend",
      title: "Fastify",
      Icon: FastifyIcon,
    },
    {
      category: "Mobile",
      title: "React Native",
      Icon: ReactIcon,
    },
  ];

  return (
    <SectionWrapper>
      <SectionTitle category="Sobre" title="Quem sou eu" />

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="bg-muted rounded-2xl aspect-3/4 w-full md:w-64 shrink-0" />
        <p className="text-muted text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
          tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        </p>
      </div>

      <SectionTitle category="Stack" title="Tecnologias" />

      <Marquee>
        {techStack.map((tech) => (
          <TechCard
            key={tech.title}
            category={tech.category}
            title={tech.title}
            Icon={tech.Icon}
          />
        ))}
      </Marquee>
    </SectionWrapper>
  );
}
