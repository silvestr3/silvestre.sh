"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { MenuIcon, XIcon } from "lucide-react";
import { UnderlineLink } from "./components/underline-link";
import { LocaleSwitcher } from "./components/locale-switcher";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  SheetClose,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const t = useTranslations("nav");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("blog"), href: "#blog" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  const blogItems = [{ label: t("home"), href: "/" }];

  const pathname = usePathname();
  const items = pathname.includes("/blog") ? blogItems : navItems;

  return (
    <header className="w-full bg-background fixed top-0 left-0 right-0 z-100">
      <div className="w-[min(100%,1024px)] mx-auto py-6 px-4 flex justify-between items-baseline">
        <Logo />
        <nav className="hidden items-baseline gap-6 md:flex">
          <ul className="flex gap-6">
            {items.map((item, index) => (
              <li key={index}>
                <UnderlineLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
          <LocaleSwitcher />
        </nav>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              aria-label="Open navigation menu"
              className={isMobileMenuOpen ? "hidden" : "md:hidden"}
              size="icon"
              variant="ghost"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            showClose={false}
            className="w-96 gap-8 sm:w-[320px]"
          >
            <SheetHeader className="pr-10">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex items-center justify-between gap-4">
                <Logo />
              </div>
            </SheetHeader>
            <div className="flex flex-col gap-8">
              <div className="flex justify-end">
                <SheetClose asChild>
                  <Button
                    aria-label="Close navigation menu"
                    size="icon"
                    variant="ghost"
                  >
                    <XIcon />
                  </Button>
                </SheetClose>
              </div>
              <div className="w-fit">
                <LocaleSwitcher />
              </div>
              <ul className="flex flex-col gap-6">
                {items.map((item, index) => (
                  <li key={index}>
                    <UnderlineLink
                      href={item.href}
                      label={item.label}
                      onClick={() => setIsMobileMenuOpen(false)}
                      wrapperClassName="w-fit"
                      linkClassName="block text-lg"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
