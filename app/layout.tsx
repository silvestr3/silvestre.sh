import "./style/globals.css";
import type { Metadata } from "next";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import { Navbar } from "../components/global/navbar";
import { Footer } from "../components/global/footer";
import { env } from "@/env";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "Fellipe Silvestre - Javascript Developer",
    template: "%s | Silvestre",
  },
  description:
    "Portfolio e blog de Fellipe Silvestre sobre o ecossistema Javascript",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Silvestre",
    title: "Fellipe Silvestre - Javascript Developer",
    description: "Portfolio e blog de Fellipe Silvestre",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fellipe Silvestre - Javascript Developer",
    description: "Portfolio e blog de Fellipe Silvestre",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased bg-background text-foreground overflow-x-hidden flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
