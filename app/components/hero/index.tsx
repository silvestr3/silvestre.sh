import { Button } from "@/components/ui/button";
import FlipWords from "@/components/ui/flip-words";
import { LinkRow } from "./components/link-rows";

export function Hero() {
  return (
    <section className="flex flex-col min-h-screen items-left p-4 px-4 md:px-12 lg:px-16 justify-center font-sans bg-background gap-10">
      <div className="flex flex-col gap-2">
        <span className="uppercase text-primary font-semibold">
          fellipe silvestre
        </span>
        <h1 className="text-foreground text-5xl font-bold flex flex-wrap items-center gap-3">
          Desenvolvedor
          <FlipWords
            duration={3000}
            className="text-inherit p-0 m-0"
            words={[
              "Javascript",
              "Typescript",
              "React",
              "React Native",
              "Node",
              " ",
            ]}
          />
        </h1>
        <h2 className="text-muted text-lg">Da interface ao runtime</h2>
      </div>

      <div className="flex items-center gap-2">
        <Button className="mr-6 rounded-lg">Ver projetos</Button>

        <LinkRow />
      </div>
    </section>
  );
}
