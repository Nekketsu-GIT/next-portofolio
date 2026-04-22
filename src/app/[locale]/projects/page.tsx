import { Metadata } from "next";
import Link from "next/link";
import Title from "@/components/title";
import AnimatedSection from "@/components/animated-section";
import ProjectFilter from "@/components/project-filter";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Projets — José DACOSTA",
  description:
    "Projets réels livrés : LMS multi-tenant IA, générateur d'histoires Stripe, portfolio avocat, agent Notion, app mobile Expo, solution SIEM.",
};

const projects = [
  {
    title: "ContextBound AI — AI Temporal Engine",
    summary:
      "Plateforme analytique immobilière française. Fusionne 6 sources open data (DVF, DPE, Météo, Euribor, Eco2mix, Loyers) dans une gold layer DuckDB, expose une API FastAPI avec Text-to-SQL en langage naturel et un serveur MCP pour agents IA. Pipeline multi-villes automatisé, CI/CD GitHub Actions, déployé en production.",
    tags: ["Python", "DuckDB", "FastAPI", "Next.js", "Anthropic SDK", "MCP", "Docker", "GitHub Actions"],
    preview: "https://contextbound.dokidokidev.com",
    image: "/images/projects/contextbound.svg",
  },
  {
    title: "PAI — Plateforme Académique Intelligente",
    summary:
      "LMS multi-tenant avec génération IA de flashcards, quiz, résumés et Q&A. Architecture rôle-based avec isolation par école, pipeline CI/CD complet (GitHub Actions + Docker). Phase 4c complète, pré-production.",
    tags: ["FastAPI", "Next.js", "Keycloak", "PostgreSQL", "MinIO", "Anthropic API", "Docker", "GitHub Actions"],
    preview: "https://nujang.com",
    image: "/images/projects/pai.svg",
  },
  {
    title: "Talespark — AI Children's Stories",
    summary:
      "Génère des histoires illustrées personnalisées pour enfants. Mode invité, abonnement Stripe, modèle en séries, partage public de stories, multilingue FR/EN. Produit en ligne.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Auth0", "Stripe", "TypeScript"],
    preview: "https://talesspark.dokidokidev.com",
    image: "/images/projects/talespark.svg",
  },
  {
    title: "Cabinet Ténin BAMBA — Portfolio Avocat",
    summary:
      "Portfolio professionnel pour une avocate du Barreau de Paris. Formulaire de contact RGPD-compliant, SEO optimisé par domaine de spécialisation. Mission client livrée.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    preview: "https://www.bamba-avocat.fr/",
    image: "/images/projects/cabinet-bamba.svg",
  },
  {
    title: "Notion Intelligence Layer",
    summary:
      "Agent autonome sur un workspace Notion : RAG + MCP + Claude. Un prompt déclenche un workflow multi-étapes avec recherche sémantique, lecture et écriture dans Notion. Web UI avec streaming SSE, historique des runs et rollback. Déployé en production.",
    tags: ["Python", "FastAPI", "ChromaDB", "Anthropic SDK", "MCP", "Notion API", "Docker"],
    preview: "https://notion-buddy.dokidokidev.com",
    image: "/images/projects/notion-agent.svg",
  },
  {
    title: "Invitee — Event Management App",
    summary:
      "Application mobile de création d'événements et de gestion des RSVP. Aucun compte requis pour les invités. iOS + Android, EAS configuré, descriptions store rédigées.",
    tags: ["Expo", "React Native", "Firebase", "TypeScript"],
    preview: "https://invitee--tsdp3qzjm6.expo.app/",
    image: "/images/projects/invitee.svg",
  },
];

export default async function ProjectsPage() {
  const t = await getTranslations("projects_page");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projets — José DACOSTA",
    description: t("desc"),
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
    author: {
      "@type": "Person",
      name: "José DACOSTA",
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
    numberOfItems: projects.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Title title={t("title")} />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-6">
              {t("desc")}
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yaleblue">{projects.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("stat_projects")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yaleblue">
                  {new Set(projects.flatMap((p) => p.tags)).size}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("stat_tech")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yaleblue">
                  {projects.filter((p) => p.preview).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("stat_live")}</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ProjectFilter projects={projects} />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-20 p-8 bg-gradient-to-r from-yaleblue/10 to-darkgoldenrod/10 rounded-2xl border border-yaleblue/20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t("cta_title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {t("cta_desc")}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-yaleblue dark:bg-[#063672] text-white rounded-lg font-semibold hover:opacity-90 transition-colors duration-200"
            >
              {t("cta_btn")}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
