import Presentation from "@/components/presentation";
import ServiceCard from "@/components/service-card";
import Title from "@/components/title";
import Image from "next/legacy/image";
import BlogCard from "@/components/blog-card";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

import AnimatedSection from "@/components/animated-section";
import SimpleSkills from "@/components/simple-skills";
import ProjectCard from "@/components/project-card";
import ContactForm from "@/components/contact-form";
import StructuredData from "@/components/structured-data";
import Testimonials from "@/components/testimonials";
import ContentLoader from "@/components/content-loader";

// Featured projects for homepage - show only top 3
const featuredProjects = [
  {
    title: "Jaay",
    summary:
      "A fully functional e-commerce website for selling clothing with responsive design and intuitive navigation.",
    tags: ["React", "Next.js"],
    preview: "http://jaay.vercel.app/",
    image: "/images/jaay.webp",
  },
  {
    title: "This awesome portfolio",
    summary:
      "A personal portfolio website showcasing skills, projects, and achievements in an interactive format.",
    tags: ["Node.js", "Express"],
    sourceCode: "https://github.com/Nekketsu-GIT/next-portofolio",
    image: "/images/portfolio.webp",
  },
  {
    title: "Travel agency homepage",
    summary:
      "A visually appealing homepage design for a travel agency with focus on user engagement and conversions.",
    tags: ["UI/UX", "HTML", "CSS"],
    sourceCode: "https://github.com/Nekketsu-GIT/Travel-Agency-Udemy",
    preview: "https://jose-voyage.netlify.app/",
    image: "/images/travel.webp",
  },
];

export default async function Home() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 2); // Show only 2 latest posts on homepage

  const services = [
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
  ];

  const personData = {
    name: "José DACOSTA",
    jobTitle: process.env.NEXT_PUBLIC_JOB_TITLE || "IT Engineer & Fullstack Developer",
    description: process.env.NEXT_PUBLIC_DESCRIPTION || "IT Engineer & Fullstack Developer with expertise in modern web technologies",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    image: process.env.NEXT_PUBLIC_AVATAR,
    socialLinks: [
      process.env.NEXT_PUBLIC_GITHUB,
      process.env.NEXT_PUBLIC_LINKEDIN,
      process.env.NEXT_PUBLIC_TWITTER,
    ].filter(Boolean),
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Web Development"],
  };

  const websiteData = {
    name: "José DACOSTA Portfolio",
    description: "Portfolio website of José DACOSTA, IT Engineer & Fullstack Developer",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    author: {
      name: "José DACOSTA",
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
  };

  return (
    <>
      <StructuredData type="person" data={personData} />
      <StructuredData type="website" data={websiteData} />

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



      <AnimatedSection id="services">
        <Title
          title="What I do"
          icon={
            <Image
              src="/images/services.svg"
              alt="arrow"
              width={24}
              height={24}
              className="animate-pulse"
            />
          }
        />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          I provide various services to my clients. Here are some of them:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Title
          title="My Skills & Expertise"
          icon={
            <Image
              src="/images/services.svg"
              alt="skills icon"
              width={24}
              height={24}
              className="animate-pulse"
            />
          }
        />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          Here are the main technologies I work with to build modern web applications.
        </p>
        <SimpleSkills />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Title
          title="Some of my projects"
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
        <ContentLoader type="project" itemCount={3} loadingDuration={1000}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </ContentLoader>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-yaleblue text-white rounded-lg font-semibold text-lg hover:bg-yaleblue/90 transition-colors duration-200"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <Title
          title="What Clients Say"
          icon={
            <Image
              src="/images/services.svg"
              alt="testimonials icon"
              width={24}
              height={24}
              className="animate-pulse"
            />
          }
        />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl text-center mx-auto">
          Don't just take my word for it. Here's what clients and colleagues have to say about working with me.
        </p>
        <Testimonials />
      </AnimatedSection>



      <AnimatedSection delay={0.5}>
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

        <ContentLoader type="blog" itemCount={2} loadingDuration={800}>
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.title}
                title={post.title}
                description={post.description}
                image={post.image_cover}
                slug={post.url}
              />
            ))}
          </div>
        </ContentLoader>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center px-8 py-4 border-2 border-yaleblue text-yaleblue rounded-lg font-semibold text-lg hover:bg-yaleblue hover:text-white transition-colors duration-200"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.6} id="contact">
        <Title
          title="Let's Work Together"
          icon={
            <Image
              src="/images/services.svg"
              alt="contact icon"
              width={24}
              height={24}
              className="animate-pulse"
            />
          }
        />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl text-center mx-auto">
          Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
        </p>
        <ContactForm />
      </AnimatedSection>
    </>
  );
}
