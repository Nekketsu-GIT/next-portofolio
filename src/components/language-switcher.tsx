"use client";

import { useParams, usePathname } from "next/navigation";
import { useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const locale = (params?.locale as string) ?? "fr";

  const switchLocale = () => {
    const nextLocale = locale === "fr" ? "en" : "fr";
    // Strip current locale prefix from pathname if present
    const path = pathname.replace(/^\/(en|fr)/, "") || "/";
    router.replace(path as "/", { locale: nextLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="px-3 py-1.5 text-sm font-semibold rounded-lg border border-gray-300 dark:border-gray-600 hover:border-yaleblue hover:text-yaleblue dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
      aria-label="Switch language"
    >
      {locale === "fr" ? "EN" : "FR"}
    </button>
  );
}
