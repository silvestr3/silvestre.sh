import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import FlipWords from "@/components/ui/flip-words";
import { LinkRow } from "./components/link-rows";
import { IllustrationProgramming } from "./components/illustration-programming";
import { TextAnimate } from "@/components/ui/text-animate";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="flex-col-reverse flex lg:flex-row items-center justify-center lg:justify-between min-h-screen w-[min(100%,1600px)] mx-auto items-left p-4 px-4 md:px-12 lg:px-16 font-sans bg-background gap-10">
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-2 w-full">
          <TextAnimate
            className="uppercase text-primary font-semibold"
            as="span"
            animation="slideRight"
            once
          >
            fellipe silvestre
          </TextAnimate>
          <h1 className="text-foreground text-5xl font-bold flex flex-col lg:flex-row md:flex-row flex-wrap lg:items-center gap-3">
            {t("role")}
            <FlipWords
              duration={3000}
              className="text-inherit p-0 m-0"
              words={[
                "Front end",
                "Javascript",
                "Typescript",
                "React",
                "React Native",
                "Node",
              ]}
            />
          </h1>
          <h2 className="text-muted text-lg">{t("subtitle")}</h2>
        </div>

        <div className="flex items-center gap-2">
          <Button className="mr-6 rounded-lg">{t("cta")}</Button>

          <LinkRow />
        </div>
      </div>

      <div className="w-352 max-w-full">
        <IllustrationProgramming />
      </div>
    </section>
  );
}
