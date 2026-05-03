import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "@/app/style/globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex items-center justify-center flex-col gap-6">
          <h1 className="font-extrabold tracking-wide text-6xl text-primary">
            404
          </h1>
          <Link
            className="text-foreground underline hover:text-primary transition-all duration-200"
            href="/"
          >
            Go back home
          </Link>
        </div>
      </body>
    </html>
  );
}
