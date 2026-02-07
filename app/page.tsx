import { Hero } from "@/app/components/hero";
import { Separator } from "@/components/ui/separator";
import { RecentPosts } from "./components/recent-posts";
import { Contact } from "./components/contact";
import { About } from "./components/about";

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
