import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/shared/section-title";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { socialLinks } from "@/util/social-links";
import { Linkedin, Mail } from "lucide-react";

export async function Contact() {
  const t = await getTranslations("contact");

  const contactMethods = [
    { Icon: Mail, link: socialLinks.email },
    { Icon: Linkedin, link: socialLinks.linkedin },
  ];

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        category={t("category")}
        title={t("title")}
        description={t("description")}
        isCentered
      />

      <div className="flex items-center justify-center">
        {contactMethods.map(({ Icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors mx-4"
          >
            <Icon size={24} />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
