import Presentation from "@/components/presentation";
import ServiceCard from "@/components/service-card";
import Title from "@/components/title";
import Image from "next/legacy/image";
import BlogCard from "@/components/blog-card";
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import ProjectCard from "@/components/project-card";
import KPI from "@/components/kpi";

const projects = [
  {
    title: "Jaay",
    summary: "This project showcases a fully functional e-commerce website designed for selling clothing. Built with a focus on user experience and responsiveness, the platform features an intuitive interface that ensures seamless navigation across devices. Key functionalities include:",
    tags: ["React", "Next.js"],
    preview: "http://jaay.vercel.app/",
    image: "/images/jaay.webp",
  },
  {
    title: "This awesome portofolio",
    summary: "This project is a personal portfolio website designed to showcase skills, projects, and achievements in a visually appealing and interactive format. The website serves as a digital resume, providing potential clients, employers, and collaborators with easy access to information about my work, expertise, and professional background. The layout is crafted to highlight key projects and skills, while also offering a personal touch that reflects my unique style and approach.",
    tags: ["Node.js", "Express"],
    sourceCode: "https://github.com/Nekketsu-GIT/next-portofolio",
    image: "/images/portfolio.webp",
  }, {
    title: "Travel agency homepage design",
    summary: "This project features a visually appealing and user-friendly homepage design for a travel agency website. The design focuses on delivering an engaging experience to potential customers, highlighting key services such as travel packages, flight bookings, and customer support. The layout prioritizes intuitive navigation and encourages user interaction, leading to increased conversions and customer engagement.",
    tags: ["UI/UX", "HTML", "CSS"],
    sourceCode: "https://github.com/Nekketsu-GIT/Travel-Agency-Udemy",
    preview: "https://jose-voyage.netlify.app/",
    image: "/images/travel.webp",
  }, {
    title: "Sentiment analysis with Python",
    summary: "This project is a Python-based sentiment analysis tool designed to determine the emotional tone behind text data. It leverages Natural Language Processing (NLP) techniques to classify sentiments as positive, negative, or neutral. The application can be used for various tasks such as analyzing customer feedback, social media posts, or reviews.",
    tags: ["Python", "NLP"],
    sourceCode: "https://github.com/Nekketsu-GIT/django_sentiment_analysis",
    image: "/images/sentiments.webp",
  },
];

export default async function Home() {

  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

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

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full bg-yaleblue text-white py-8 rounded-lg">
        {Number(process.env.NEXT_PUBLIC_YEARS_OF_EXPERIENCE) && (
          <KPI text="Years of experience" value={Number(process.env.NEXT_PUBLIC_YEARS_OF_EXPERIENCE)} />
        )}
        {Number(process.env.NEXT_PUBLIC_PROJECTS_COMPLETED) && (
          <KPI text="Projects completed" value={Number(process.env.NEXT_PUBLIC_PROJECTS_COMPLETED)} />
        )}
        {Number(process.env.NEXT_PUBLIC_CLIENTS) && <KPI text="Clients" value={Number(process.env.NEXT_PUBLIC_CLIENTS)} />}
        {Number(process.env.NEXT_PUBLIC_REVIEWS) && <KPI text="Reviews" value={Number(process.env.NEXT_PUBLIC_REVIEWS)} />}
      </section>


      <section className="py-8 w-full flex flex-col gap-8">
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
        <p>I provide various services to my clients. Here are some of them:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="py-8 w-full flex flex-col gap-8">
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
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
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
      </section>
    </>
  );
}
