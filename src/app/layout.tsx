import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeSwitcher from "@/components/theme-switcher";
import PerformanceMonitor from "@/components/performance-monitor";

const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "José DACOSTA - IT Engineer & Fullstack Developer",
    template: "%s | José DACOSTA"
  },
  description:
    "José DACOSTA is an IT Engineer & Fullstack Developer with 2 years of experience building web and mobile applications. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "web development",
    "mobile development",
    "fullstack developer",
    "software engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "portfolio",
    "José DACOSTA"
  ],
  authors: [{ name: "José DACOSTA", url: process.env.NEXT_PUBLIC_SITE_URL }],
  creator: "José DACOSTA",
  publisher: "José DACOSTA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "José DACOSTA - IT Engineer & Fullstack Developer",
    description: "José DACOSTA is an IT Engineer & Fullstack Developer with 2 years of experience building web and mobile applications.",
    siteName: "José DACOSTA Portfolio",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'José DACOSTA - IT Engineer & Fullstack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "José DACOSTA - IT Engineer & Fullstack Developer",
    description: "José DACOSTA is an IT Engineer & Fullstack Developer with 2 years of experience building web and mobile applications.",
    creator: '@your_twitter_handle',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  applicationName: "Portfolio of José DACOSTA",
  category: 'technology',
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
          <ThemeSwitcher />
          <Menu
            menuItems={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Projects",
                link: "/projects",
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
        <PerformanceMonitor />
      </body>
    </html>
  );
}
