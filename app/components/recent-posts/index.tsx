import { SectionTitle } from "@/components/global/section-title";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { PostCard } from "./components/post-card";
import { SectionWrapper } from "@/components/global/section-wrapper";

export function RecentPosts() {
  const posts = [
    {
      title:
        "Text Streaming on Frontend: From JavaScript Protocols to Real-Time LLM Chat",
      description:
        "Understanding text streaming protocols and their implementation in frontend applications for real-time interfaces for interacting with large language models.",
      href: "https://medium.com/@fellipe.silvestre/text-streaming-on-frontend-from-javascript-protocols-to-real-time-llm-chat-6f3403af54ad",
      tags: ["Javascript"],
      publicationDate: new Date("01-18-2026"),
    },
    {
      title:
        "Implementing Firebase analytics on a React project using SOLID principles",
      description:
        "A step-by-step guide to integrating Firebase Analytics into a React application while adhering to SOLID design principles for maintainable and scalable code.",
      href: "https://medium.com/@fellipe.silvestre/implementing-firebase-analytics-on-a-react-project-using-solid-principles-42ca76cab649",
      tags: ["React", "Architecture"],
      publicationDate: new Date("11-23-2024"),
    },
    {
      title:
        "Implementing Firebase analytics on a React project using SOLID principles",
      description:
        "A step-by-step guide to integrating Firebase Analytics into a React application while adhering to SOLID design principles for maintainable and scalable code.",
      href: "https://medium.com/@fellipe.silvestre/implementing-firebase-analytics-on-a-react-project-using-solid-principles-42ca76cab649",
      tags: ["React", "Architecture"],
      publicationDate: new Date("11-23-2024"),
    },
  ];

  return (
    <SectionWrapper>
      <SectionTitle title="Posts recentes" category="blog" />

      <div className="flex items-center flex-wrap mx-auto gap-3 justify-center">
        {posts.map((post, index) => (
          <PostCard {...post} key={index} />
        ))}
      </div>

      <a
        href="https://medium.com/@fellipe.silvestre"
        target="_blank"
        className="flex items-center gap-2 text-muted hover:text-primary font-medium mx-auto mt-10 w-fit group transition-all duration-200"
      >
        <span>Ver todos os posts no blog</span>
        <ArrowRight className="group-hover:translate-x-1 transition-all duration-200" />
      </a>
    </SectionWrapper>
  );
}
