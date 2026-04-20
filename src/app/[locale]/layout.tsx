import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import "../globals.css";
import Menu from "@/components/menu";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PerformanceMonitor from "@/components/performance-monitor";
import Link from "next/link";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "José DACOSTA — Développeur Full Stack & Builder",
    template: "%s | José DACOSTA",
  },
  description:
    "Développeur Full Stack & Builder. Je conçois et déploie des produits web et mobile — de l'API à la mise en production. Spécialisé dans les applications IA et les architectures backend complexes.",
  keywords: [
    "développeur full stack",
    "freelance développeur",
    "Next.js",
    "FastAPI",
    "applications IA",
    "React",
    "TypeScript",
    "Keycloak",
    "Docker",
    "José DACOSTA",
  ],
  authors: [{ name: "José DACOSTA", url: process.env.NEXT_PUBLIC_SITE_URL }],
  creator: "José DACOSTA",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://jose-pascal.vercel.app"
  ),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "José DACOSTA — Développeur Full Stack & Builder",
    description:
      "Je conçois et déploie des produits web et mobile — de l'API à la mise en production.",
    siteName: "José DACOSTA",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  const messages = await getMessages();
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");

  const menuItems = [
    { name: tNav("home"), link: "/" },
    { name: tNav("projects"), link: "/projects" },
    { name: tNav("blog"), link: "/blog" },
  ];

  const footerNav = [
    { label: tNav("home"), href: "/" },
    { label: tNav("projects"), href: "/projects" },
    { label: tNav("blog"), href: "/blog" },
    { label: tNav("contact"), href: "/#contact" },
  ];

  return (
    <html lang={locale}>
      <body className={`${quantico.variable} antialiased container mx-auto px-4`}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen font-[family-name:var(--font-quantico)] flex flex-col gap-8">
            <Menu menuItems={menuItems} contactLabel={tNav("contact")} />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start flex-1">
              {children}
            </main>

            <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
              <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                  <div className="flex flex-col gap-3">
                    <Link href="/" className="text-xl font-bold">
                      J<span className="text-darkgoldenrod">&lt;/&gt;</span>sé{" "}
                      <span className="text-yaleblue">Dacosta</span>
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {tFooter("tagline")}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-green-700 dark:text-green-400 font-medium">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      {tFooter("available")}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      {tFooter("nav_label")}
                    </h3>
                    <nav className="flex flex-col gap-2">
                      {footerNav.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-yaleblue dark:hover:text-blue-400 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      {tFooter("find_me")}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {process.env.NEXT_PUBLIC_GITHUB && (
                        <a
                          href={process.env.NEXT_PUBLIC_GITHUB}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-yaleblue dark:hover:text-blue-400 transition-colors"
                        >
                          GitHub
                        </a>
                      )}
                      {process.env.NEXT_PUBLIC_LINKEDIN && (
                        <a
                          href={process.env.NEXT_PUBLIC_LINKEDIN}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-yaleblue dark:hover:text-blue-400 transition-colors"
                        >
                          LinkedIn
                        </a>
                      )}
                      {process.env.NEXT_PUBLIC_MALT && (
                        <a
                          href={process.env.NEXT_PUBLIC_MALT}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-darkgoldenrod hover:text-darkgoldenrod/80 transition-colors font-medium"
                        >
                          Malt
                        </a>
                      )}
                      <a
                        href="mailto:josedacosta339@gmail.com"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-yaleblue dark:hover:text-blue-400 transition-colors"
                      >
                        josedacosta339@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                  <span>
                    © {new Date().getFullYear()} José DACOSTA —{" "}
                    {tFooter("copyright")}
                  </span>
                  <span>{tFooter("built_with")}</span>
                </div>
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
        <SpeedInsights />
        <PerformanceMonitor />
      </body>
    </html>
  );
}
