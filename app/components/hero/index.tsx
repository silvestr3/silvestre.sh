import { Button } from "@/components/ui/button";
import FlipWords from "@/components/ui/flip-words";
import { LinkRow } from "./components/link-rows";
import { Illustration } from "./components/illustration";
import { IllustrationProgramming } from "./components/illustration-programming";

export function Hero() {
  return (
    <section className="flex-col-reverse flex lg:flex-row items-center lg:justify-between min-h-screen w-[min(100%,1600px)] mx-auto items-left p-4 px-4 md:px-12 lg:px-16 font-sans bg-background gap-10">
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-2 w-full">
          <span className="uppercase text-primary font-semibold">
            fellipe silvestre
          </span>
          <h1 className="text-foreground text-5xl font-bold flex flex-col lg:flex-row md:flex-row flex-wrap lg:items-center gap-3">
            Desenvolvedor
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
          <h2 className="text-muted text-lg">Da interface à runtime</h2>
        </div>

        <div className="flex items-center gap-2">
          <Button className="mr-6 rounded-lg">Ver projetos</Button>

          <LinkRow />
        </div>
      </div>

      <div className="w-352 max-w-full">
        <IllustrationProgramming />
      </div>
    </section>
  );
}
