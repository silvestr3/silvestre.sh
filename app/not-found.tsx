import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background w-full min-h-screen flex items-center justify-center flex-col gap-6">
      <h1 className="font-extrabold tracking-wide text-6xl text-primary">
        Esta página não existe
      </h1>

      <Link
        className="text-foreground underline hover:text-primary transition-all duration-200"
        href="/"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
