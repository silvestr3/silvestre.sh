import { getTranslations } from "next-intl/server";
import Image from "next/image";
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

export async function About() {
  const t = await getTranslations("about");

  const techStack = [
    { category: "Everything", title: "Typescript", Icon: TypescriptIcon },
    { category: "Frontend", title: "Tailwind", Icon: TailwindIcon },
    { category: "Backend", title: "Express", Icon: ExpressIcon },
    { category: "Frontend", title: "React", Icon: ReactIcon },
    { category: "Backend", title: "Bun", Icon: BunIcon },
    { category: "Frontend", title: "CSS", Icon: CSSIcon },
    { category: "Version Control", title: "Git", Icon: GitIcon },
    { category: "Frontend", title: "Next.js", Icon: NextIcon },
    { category: "Backend", title: "NestJS", Icon: NestIcon },
    { category: "Everything", title: "Javascript", Icon: JavascriptIcon },
    { category: "Frontend", title: "Svelte", Icon: SvelteIcon },
    { category: "Backend", title: "Node.js", Icon: NodeIcon },
    { category: "Frontend", title: "Ant Design", Icon: AntdIcon },
    { category: "Backend", title: "Fastify", Icon: FastifyIcon },
    { category: "Mobile", title: "React Native", Icon: ReactIcon },
  ];

  return (
    <SectionWrapper id="about">
      <SectionTitle category={t("category")} title={t("title")} />

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="relative rounded-2xl aspect-square md:aspect-3/4 w-full md:w-64 shrink-0 overflow-hidden">
          <Image
            src="/me2.jpg"
            alt="Fellipe Silvestre"
            className="object-cover"
            fill
          />
        </div>
        <div className="text-muted text-sm lg:text-lg leading-relaxed space-y-4">
          {t("body")
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>
      </div>

      <SectionTitle category={t("stackCategory")} title={t("stackTitle")} />

      <Marquee>
        {techStack.map((tech) => (
          <TechCard key={tech.title} title={tech.title} Icon={tech.Icon} />
        ))}
      </Marquee>
    </SectionWrapper>
  );
}
