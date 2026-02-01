import { Hero } from "@/app/components/hero";
import { Navbar } from "./components/navbar";
import { Separator } from "@/components/ui/separator";
import { RecentPosts } from "./components/recent-posts";

export default function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <RecentPosts />
    </>
  );
}
