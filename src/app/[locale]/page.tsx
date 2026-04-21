import Link from "next/link";
import Presentation from "@/components/presentation";
import ServiceCard from "@/components/service-card";
import Title from "@/components/title";
import AnimatedSection from "@/components/animated-section";
import SimpleSkills from "@/components/simple-skills";
import ProjectCard from "@/components/project-card";
import ContactForm from "@/components/contact-form";
import StructuredData from "@/components/structured-data";
import { getTranslations } from "next-intl/server";

const featuredProjects = [
  {
    title: "ContextBound AI — AI Temporal Engine",
    summary:
      "Plateforme analytique immobilière : 6 sources open data fusionnées dans une gold layer DuckDB, API FastAPI avec Text-to-SQL en langage naturel, serveur MCP pour agents IA. Pipeline multi-villes automatisé, déployé en production.",
    tags: ["Python", "DuckDB", "FastAPI", "Next.js", "Anthropic SDK", "MCP", "Docker"],
    preview: "https://contextbound.dokidokidev.com",
    image: "/images/projects/contextbound.svg",
  },
  {
    title: "PAI — Plateforme Académique Intelligente",
    summary:
      "LMS multi-tenant avec flashcards, quiz et résumés générés par IA. Architecture rôle-based, isolation par école, pipeline CI/CD complet.",
    tags: ["FastAPI", "Next.js", "Keycloak", "PostgreSQL", "Anthropic API", "Docker"],
    preview: "https://nujang.com",
    image: "/images/projects/pai.svg",
  },
  {
    title: "Talespark — AI Children's Stories",
    summary:
      "Génération d'histoires illustrées personnalisées. Mode invité, abonnement Stripe, partage public, multilingue FR/EN. Produit en ligne.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Auth0", "Stripe"],
    preview: "https://talesspark.dokidokidev.com",
    image: "/images/projects/talespark.svg",
  },
];

const featuredProjectsEn = [
  {
    title: "ContextBound AI — AI Temporal Engine",
    summary:
      "French real estate analytics platform: 6 open data sources fused into a DuckDB gold layer, FastAPI with natural language Text-to-SQL, MCP server for AI agents. Automated multi-city pipeline, deployed in production.",
    tags: ["Python", "DuckDB", "FastAPI", "Next.js", "Anthropic SDK", "MCP", "Docker"],
    preview: "https://contextbound.dokidokidev.com",
    image: "/images/projects/contextbound.svg",
  },
  {
    title: "PAI — Academic Intelligence Platform",
    summary:
      "Multi-tenant LMS with AI-generated flashcards, quizzes and summaries. Role-based architecture, school isolation, full CI/CD pipeline.",
    tags: ["FastAPI", "Next.js", "Keycloak", "PostgreSQL", "Anthropic API", "Docker"],
    preview: "https://nujang.com",
    image: "/images/projects/pai.svg",
  },
  {
    title: "Talespark — AI Children's Stories",
    summary:
      "Generate personalized illustrated stories. Guest mode, Stripe subscription, public story sharing, multilingual FR/EN. Live product.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Auth0", "Stripe"],
    preview: "https://talesspark.dokidokidev.com",
    image: "/images/projects/talespark.svg",
  },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFr = locale === "fr";

  const tHero = await getTranslations("hero");
  const tCurrently = await getTranslations("currently");
  const tServices = await getTranslations("services");
  const tSkills = await getTranslations("skills");
  const tProjectsHome = await getTranslations("projects_home");
  const tContact = await getTranslations("contact_section");

  const services = isFr
    ? [
        {
          title: "Full-Stack Web Development",
          description:
            "Applications web scalables et performantes, de la conception à la mise en production. React, Next.js, FastAPI, Node.js — je gère l'ensemble du cycle de développement.",
        },
        {
          title: "Mobile Development",
          description:
            "Applications cross-platform iOS et Android avec Expo / React Native. Performance native, expérience utilisateur cohérente, prêt pour les stores.",
        },
        {
          title: "AI Integration & Agent Development",
          description:
            "Intégration de modèles LLM (Claude, GPT) dans vos produits. RAG, MCP, agents autonomes, workflows multi-étapes. Je construis des systèmes IA qui font vraiment quelque chose.",
        },
        {
          title: "DevOps & CI/CD",
          description:
            "Déploiement Docker, pipelines GitHub Actions, Traefik, VPS. Infrastructure reproductible et processus de livraison automatisés.",
        },
        {
          title: "Auth & Identity",
          description:
            "Keycloak, Auth0, Auth.js — SSO, multi-tenancy, RBAC. J'ai déployé des solutions d'authentification complexes en production.",
        },
        {
          title: "Technical Consulting",
          description:
            "Architecture, choix de stack, revue de code. Je travaille avec des équipes sur Malt pour cadrer et débloquer des sujets techniques complexes.",
        },
      ]
    : [
        {
          title: "Full-Stack Web Development",
          description:
            "Scalable, performant web applications from design to deployment. React, Next.js, FastAPI, Node.js — I handle the entire development lifecycle.",
        },
        {
          title: "Mobile Development",
          description:
            "Cross-platform iOS and Android apps with Expo / React Native. Native performance, consistent UX, store-ready.",
        },
        {
          title: "AI Integration & Agent Development",
          description:
            "Integrate LLM models (Claude, GPT) into your products. RAG, MCP, autonomous agents, multi-step workflows. I build AI systems that actually do something.",
        },
        {
          title: "DevOps & CI/CD",
          description:
            "Docker deployments, GitHub Actions pipelines, Traefik, VPS. Reproducible infrastructure and automated delivery processes.",
        },
        {
          title: "Auth & Identity",
          description:
            "Keycloak, Auth0, Auth.js — SSO, multi-tenancy, RBAC. I've deployed complex authentication solutions in production.",
        },
        {
          title: "Technical Consulting",
          description:
            "Architecture, stack decisions, code review. I work with teams on Malt to scope and unblock complex technical challenges.",
        },
      ];

  const currentlyBuilding = [
    {
      status: tCurrently("live"),
      color: "green",
      label: "ContextBound AI",
      detail: tCurrently("contextbound_detail"),
    },
    {
      status: tCurrently("live"),
      color: "green",
      label: "Talespark",
      detail: tCurrently("talespark_detail"),
    },
    {
      status: tCurrently("pre"),
      color: "blue",
      label: "PAI",
      detail: tCurrently("pai_detail"),
    },
  ];

  const personData = {
    name: "José DACOSTA",
    jobTitle: isFr ? "Développeur Full Stack & Builder" : "Full Stack Developer & Builder",
    description: isFr
      ? "Je conçois et déploie des produits web et mobile — de l'API à la mise en production."
      : "I build and ship web and mobile products — from API to deployment.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    image: process.env.NEXT_PUBLIC_AVATAR,
    socialLinks: [
      process.env.NEXT_PUBLIC_GITHUB,
      process.env.NEXT_PUBLIC_LINKEDIN,
    ].filter(Boolean),
    skills: ["Next.js", "FastAPI", "TypeScript", "Python", "Docker", "Anthropic SDK"],
  };

  const websiteData = {
    name: "José DACOSTA — Portfolio",
    description: personData.description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    author: { name: "José DACOSTA", url: process.env.NEXT_PUBLIC_SITE_URL },
  };

  const projects = isFr ? featuredProjects : featuredProjectsEn;

  return (
    <>
      <StructuredData type="person" data={personData} />
      <StructuredData type="website" data={websiteData} />

      <Presentation
        image={process.env.NEXT_PUBLIC_AVATAR}
        title={
          isFr
            ? "Développeur Full Stack & Builder"
            : "Full Stack Developer & Builder"
        }
        description={
          isFr
            ? "Je conçois et déploie des produits web et mobile — de l'API à la mise en production. Spécialisé dans les applications IA et les architectures backend complexes."
            : "I build and ship web and mobile products — from API to deployment. Specialized in AI-native applications and complex backend systems."
        }
        availableLabel={tHero("available")}
        ctaContact={tHero("cta_contact")}
        ctaProjects={tHero("cta_projects")}
        ctaMalt={tHero("cta_malt")}
        socialMediaLinks={{
          github: process.env.NEXT_PUBLIC_GITHUB,
          linkedin: process.env.NEXT_PUBLIC_LINKEDIN,
          twitter: process.env.NEXT_PUBLIC_TWITTER,
          malt: process.env.NEXT_PUBLIC_MALT,
        }}
      />

      <AnimatedSection>
        <div className="w-full max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-darkgoldenrod mb-4">
            {tCurrently("label")}
          </p>
          <div className="flex flex-col gap-3">
            {currentlyBuilding.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                <span
                  className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.color === "green"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : item.color === "blue"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}
                >
                  {item.status}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="services">
        <Title title={tServices("title")} />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          {tServices("subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Title title={tSkills("title")} />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          {tSkills("subtitle")}
        </p>
        <SimpleSkills />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Title title={tProjectsHome("title")} link="/projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-yaleblue dark:bg-[#063672] text-white hover:!text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-colors duration-200"
          >
            {tProjectsHome("cta")}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4} id="contact">
        <Title title={tContact("title")} />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl text-center mx-auto">
          {tContact("subtitle")}
        </p>
        <ContactForm />
      </AnimatedSection>
    </>
  );
}
