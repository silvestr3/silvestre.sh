import { getTranslations } from "next-intl/server";

export async function ErrorPosts() {
  const t = await getTranslations("blog");

  return (
    <p className="text-sm w-full text-red-400 text-center">
      {t("errorPosts")}
    </p>
  );
}
