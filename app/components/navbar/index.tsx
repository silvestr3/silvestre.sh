import { UnderlineLink } from "./components/underline-link";

export function Navbar() {
  const navItems = [
    {
      label: "Sobre",
      href: "#about",
    },
    {
      label: "Projetos",
      href: "#projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contato",
      href: "#contact",
    },
  ];

  return (
    <header className="w-full bg-background fixed top-0 left-0 right-0 z-10">
      <div className="w-[min(100%,1024px)] mx-auto py-6 px-4 flex justify-between items-baseline">
        <div className="flex items-baseline gap-1">
          <span className="font-bold text-2xl tracking-tight">fs</span>
          <div className="rounded-full w-1 h-1 bg-primary" />
        </div>
        <nav>
          <ul className="flex gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <UnderlineLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
