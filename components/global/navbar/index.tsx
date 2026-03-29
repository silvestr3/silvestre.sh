"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { UnderlineLink } from "./components/underline-link";
import { LocaleSwitcher } from "./components/locale-switcher";
import { Logo } from "@/components/shared/logo";

export function Navbar() {
  const t = useTranslations("nav");

  const navItems = [
    { label: t("about"), href: "#about" },
    { label: t("projects"), href: "#projects" },
    { label: t("blog"), href: "/blog" },
    { label: t("contact"), href: "#contact" },
  ];

  const blogItems = [{ label: t("home"), href: "/" }];

  const pathname = usePathname();
  const items = pathname.includes("/blog") ? blogItems : navItems;

  return (
    <header className="w-full bg-background fixed top-0 left-0 right-0 z-100">
      <div className="w-[min(100%,1024px)] mx-auto py-6 px-4 flex justify-between items-baseline">
        <Logo />
        <nav className="flex items-baseline gap-6">
          <ul className="flex gap-6">
            {items.map((item, index) => (
              <li key={index}>
                <UnderlineLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
