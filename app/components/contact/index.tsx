import { SectionTitle } from "@/components/shared/section-title";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { socialLinks } from "@/util/social-links";
import { Linkedin, Mail } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      Icon: Mail,
      link: socialLinks.email,
    },
    {
      Icon: Linkedin,
      link: socialLinks.linkedin,
    },
  ];

  return (
    <SectionWrapper>
      <SectionTitle
        category="Contato"
        title="Fale comigo"
        description="Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de colaboração."
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
