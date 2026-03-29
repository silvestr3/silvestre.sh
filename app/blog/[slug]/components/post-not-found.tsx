import { getTranslations } from "next-intl/server";

export async function PostNotFound() {
  const t = await getTranslations("blog");

  return (
    <p className="text-3xl font-bold text-red-400 text-center max-w-3xl mx-auto">
      {t("postNotFound")}
    </p>
  );
}
