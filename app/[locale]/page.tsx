import { Hero } from "@/app/[locale]/components/hero";
import { Separator } from "@/components/ui/separator";
import { RecentPosts } from "@/app/[locale]/components/recent-posts";
import { Contact } from "@/app/[locale]/components/contact";
import { About } from "@/app/[locale]/components/about";

export default function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <RecentPosts />
      <Separator />
      <About />
      <Separator />
      <Contact />
    </>
  );
}
