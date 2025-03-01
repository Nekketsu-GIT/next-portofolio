import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";
import { SpeedInsights } from "@vercel/speed-insights/next";

const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "José DACOSTA - IT Engineer & Fullstack Developer",
  description:
    "José DACOSTA is an IT Engineer & Fullstack Developer with 2 years of experience building web and mobile applications.",
  keywords: "web development, mobile development, fullstack, software engineer",
  manifest: "/manifest.json",
  applicationName: "Portfolio of José DACOSTA",
  authors: [{ name: "José DACOSTA" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quantico.variable} antialiased container mx-auto px-4`}
      >
        <div className="min-h-screen font-[family-name:var(--font-quantico)] flex flex-col gap-8">
          <Menu
            menuItems={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Blog",
                link: "/blog",
              },
            ]}
          />
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start flex-1">
            {children}
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-4 w-full bg-yaleblue text-white">
            Made with ❤️ by José
          </footer>
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
