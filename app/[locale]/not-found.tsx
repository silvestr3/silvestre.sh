import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="bg-background w-full min-h-screen flex items-center justify-center flex-col gap-6">
      <h1 className="font-extrabold tracking-wide text-6xl text-primary">
        {t("title")}
      </h1>

      <Link
        className="text-foreground underline hover:text-primary transition-all duration-200"
        href="/"
      >
        {t("backLink")}
      </Link>
    </div>
  );
}
