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
            title: "Full-Stack Web Development",
            description:
              "I specialize in creating scalable, responsive, and high-performance web applications using modern technologies like React, Node.js, and more. From front-end design to back-end architecture, I handle the entire development lifecycle.",
          },
          {
            title: "Mobile Application Development",
            description:
              "I develop cross-platform mobile applications using React Native, delivering seamless performance and a consistent user experience across iOS and Android devices.",
          },
          {
            title: "UI/UX Design & Prototyping",
            description:
              "I craft intuitive user interfaces and user experiences that enhance usability and engagement. By focusing on design principles and user-centered strategies, I ensure your digital products resonate with users.",
          },
          {
            title: "Technical Consulting & Training",
            description:
              "I offer tailored consulting and training services to help teams master modern web development practices. Whether it's improving workflows or adopting the latest technologies, I guide teams toward success.",
          },
          {
            title: "SEO Optimization & Digital Marketing",
            description:
              "With expertise in SEO and marketing strategies, I help businesses improve search rankings, drive traffic, and boost conversions. My approach combines technical SEO with content optimization to maximize visibility.",
          },
          {
            title: "DevOps, Cloud Deployment & CI/CD",
            description:
              "I streamline application deployment on cloud platforms like AWS and Azure, ensuring reliability and scalability. I also set up CI/CD pipelines and testing workflows to accelerate development cycles and maintain code quality.",
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
