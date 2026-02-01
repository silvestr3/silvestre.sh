const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="w-[min(100%,1300px)] mx-auto py-6 px-4 md:px-12 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} — Todos os direitos reservados
        </p>

        <nav>
          <ul className="flex gap-6">
            {socialLinks.map((link) => (
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
