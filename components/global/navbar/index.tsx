"use client";

import { usePathname } from "next/navigation";
import { UnderlineLink } from "./components/underline-link";
import { Logo } from "@/components/shared/logo";

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

  const blogItems = [
    {
      label: "Início",
      href: "/",
    },
  ];

  const pathname = usePathname();
  const items = pathname.includes("/blog") ? blogItems : navItems;

  return (
    <header className="w-full bg-background fixed top-0 left-0 right-0 z-10">
      <div className="w-[min(100%,1024px)] mx-auto py-6 px-4 flex justify-between items-baseline">
        <Logo />
        <nav>
          <ul className="flex gap-6">
            {items.map((item, index) => (
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
