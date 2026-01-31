import { Hero } from "@/app/components/hero";
import { Navbar } from "./components/navbar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Separator />
    </>
  );
}
