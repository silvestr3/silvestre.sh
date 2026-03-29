import { Hero } from "@/app/components/hero";
import { Separator } from "@/components/ui/separator";
import { RecentPosts } from "@/app/components/recent-posts";
import { Contact } from "@/app/components/contact";
import { About } from "@/app/components/about";

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
