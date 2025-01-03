import Presentation from "@/components/presentation";
import Kpis from "@/components/kpis";
import Services from "@/components/services";
import Title from "@/components/title";
import Image from "next/legacy/image";
import ProjectCard from "@/components/project-card";
import BlogCard from "@/components/blog-card";
import { urlFor } from "@/sanity/lib/image";
import { getLastArticles, getLastProjects } from "@/lib/api";

export default async function Home() {
  const lastArticles = await getLastArticles();
  const lastProjects = await getLastProjects();

  return (
    <>
      <Presentation
        image={process.env.NEXT_PUBLIC_AVATAR}
        title={process.env.NEXT_PUBLIC_JOB_TITLE}
        description={process.env.NEXT_PUBLIC_DESCRIPTION}
        socialMediaLinks={{
          github: process.env.NEXT_PUBLIC_GITHUB,
          linkedin: process.env.NEXT_PUBLIC_LINKEDIN,
          twitter: process.env.NEXT_PUBLIC_TWITTER,
        }}
      />

      <Kpis
        years_of_experience={process.env.NEXT_PUBLIC_YEARS_OF_EXPERIENCE ?? "2"}
        projects_completed={process.env.NEXT_PUBLIC_PROJECTS_COMPLETED ?? "10"}
        clients={process.env.NEXT_PUBLIC_CLIENTS ?? "5"}
        reviews={process.env.NEXT_PUBLIC_REVIEWS ?? "5"}
      />

      <Services
        services={[
          {
            title: "Web Development",
            description: "I build web applications using modern technologies.",
            image: "/images/avatar-jose.png",
          },
          {
            title: "Mobile Development",
            description: "I build mobile applications using React Native.",
            image: "/images/avatar-jose.png",
          },
          {
            title: "UI/UX Design",
            description: "I design user interfaces and user experiences.",
            image: "/images/avatar-jose.png",
          },
        ]}
      />

      <section className="py-8 w-full flex flex-col gap-8">
        <Title
          title="Let's have a look at some of my projects"
          icon={
            <Image
              src="/images/bag.svg"
              alt="arrow"
              width={24}
              height={24}
              className="animate-pulse"
            />
          }
          link="/projects"
        />

        <div className="flex flex-col gap-8">
          {lastProjects.map((project) => (
            <ProjectCard
              key={project.slug.current}
              title={project.title}
              tags={project.tags}
              image={urlFor(project.image)?.url()}
              summary={project.summary}
              sourceCode={project.sourceUrl}
              preview={project.previewUrl}
            />
          ))}
        </div>
      </section>

      <section className="py-8 w-full flex flex-col gap-8">
        <Title
          title="Let's have a look at some of my articles"
          icon={
            <Image
              src="/images/bag.svg"
              alt="arrow"
              width={24}
              height={24}
              className="animate-pulse"
            />
          }
          link="/blog"
        />

        <div className="flex flex-col gap-8">
          {lastArticles.map((article) => (
            <BlogCard
              key={article.slug.current}
              title={article.title}
              description={article.description}
              image={urlFor(article.mainImage)?.url()}
              slug={article.slug.current}
            />
          ))}
        </div>
      </section>
    </>
  );
}
