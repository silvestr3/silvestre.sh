import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/shared/logo";
import { socialLinks } from "@/util/social-links";

const socialLinksArray = [
  { label: "GitHub", href: socialLinks.github },
  { label: "LinkedIn", href: socialLinks.linkedin },
];

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="w-full border-t border-border">
      <div className="w-[min(100%,1300px)] mx-auto py-6 px-4 md:px-12 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Logo />
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} — {t("rights")}
        </p>

        <nav>
          <ul className="flex gap-6">
            {socialLinksArray.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
