import { Metadata } from "next";
import Link from "next/link";
import Title from "@/components/title";
import Image from "next/legacy/image";
import AnimatedSection from "@/components/animated-section";
import ProjectFilter from "@/components/project-filter";

export const metadata: Metadata = {
  title: "Projects - José DACOSTA",
  description: "Explore my portfolio of web development projects, including React applications, Next.js websites, and full-stack solutions.",
  keywords: ["projects", "portfolio", "web development", "React", "Next.js", "full-stack"],
  openGraph: {
    title: "Projects - José DACOSTA",
    description: "Explore my portfolio of web development projects, including React applications, Next.js websites, and full-stack solutions.",
    type: "website",
  },
};

// Extended projects data with more detailed information
const projects = [
  {
    title: "E-commerce Platform",
    summary: "A full-featured e-commerce platform built with Next.js, featuring user authentication, payment processing, inventory management, and admin dashboard. Includes real-time notifications and responsive design.",
    tags: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    sourceCode: "https://github.com/example/ecommerce-platform",
    preview: "https://ecommerce-demo.vercel.app",
    tutorial: "https://blog.example.com/building-ecommerce-platform",
    image: "/images/projects/ecommerce.jpg",
  },
  {
    title: "Task Management App",
    summary: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and advanced filtering. Built with modern React patterns and state management.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
    sourceCode: "https://github.com/example/task-manager",
    preview: "https://taskmanager-demo.vercel.app",
    image: "/images/projects/taskmanager.jpg",
  },
  {
    title: "Weather Dashboard",
    summary: "An interactive weather dashboard with location-based forecasts, historical data visualization, weather maps, and personalized alerts. Features beautiful animations and responsive design.",
    tags: ["React", "D3.js", "OpenWeather API", "Chart.js", "CSS3"],
    sourceCode: "https://github.com/example/weather-dashboard",
    preview: "https://weather-dashboard-demo.vercel.app",
    image: "/images/projects/weather.jpg",
  },
  {
    title: "Social Media Analytics",
    summary: "A comprehensive social media analytics platform that tracks engagement metrics, audience insights, and content performance across multiple platforms. Includes automated reporting and data visualization.",
    tags: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis", "Chart.js"],
    sourceCode: "https://github.com/example/social-analytics",
    preview: "https://social-analytics-demo.vercel.app",
    image: "/images/projects/analytics.jpg",
  },
  {
    title: "Learning Management System",
    summary: "A modern LMS with course creation tools, student progress tracking, interactive quizzes, video streaming, and certification management. Built for scalability and user experience.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe", "Tailwind CSS"],
    sourceCode: "https://github.com/example/lms-platform",
    preview: "https://lms-demo.vercel.app",
    tutorial: "https://blog.example.com/building-lms",
    image: "/images/projects/lms.jpg",
  },
  {
    title: "Real Estate Platform",
    summary: "A comprehensive real estate platform with property listings, advanced search filters, virtual tours, mortgage calculator, and agent management system. Features map integration and mobile-first design.",
    tags: ["React", "Node.js", "MongoDB", "Mapbox", "Cloudinary", "Express"],
    sourceCode: "https://github.com/example/real-estate",
    preview: "https://realestate-demo.vercel.app",
    image: "/images/projects/realestate.jpg",
  },
  {
    title: "Fitness Tracking App",
    summary: "A mobile-first fitness application with workout planning, progress tracking, nutrition logging, and social features. Includes wearable device integration and personalized recommendations.",
    tags: ["React Native", "Firebase", "Node.js", "MongoDB", "Express"],
    sourceCode: "https://github.com/example/fitness-tracker",
    preview: "https://fitness-demo.vercel.app",
    image: "/images/projects/fitness.jpg",
  },
  {
    title: "Cryptocurrency Dashboard",
    summary: "A real-time cryptocurrency tracking dashboard with portfolio management, price alerts, market analysis, and trading insights. Features advanced charting and news integration.",
    tags: ["React", "TypeScript", "WebSocket", "CoinGecko API", "Chart.js"],
    sourceCode: "https://github.com/example/crypto-dashboard",
    preview: "https://crypto-dashboard-demo.vercel.app",
    image: "/images/projects/crypto.jpg",
  },
];

export default function ProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projects Portfolio - José DACOSTA",
    "description": "A collection of web development projects showcasing modern technologies and best practices",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
    "author": {
      "@type": "Person",
      "name": "José DACOSTA",
      "url": process.env.NEXT_PUBLIC_SITE_URL,
    },
    "numberOfItems": projects.length,
    "about": {
      "@type": "Thing",
      "name": "Web Development Projects"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <Title
              title="My Projects"
              icon={
                <Image
                  src="/images/bag.svg"
                  alt="projects icon"
                  width={32}
                  height={32}
                  className="animate-pulse"
                />
              }
            />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-6">
              Explore my portfolio of web development projects, showcasing modern technologies, 
              best practices, and innovative solutions. Each project represents a unique challenge 
              and learning experience.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yaleblue">{projects.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yaleblue">
                  {new Set(projects.flatMap(p => p.tags)).size}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yaleblue">
                  {projects.filter(p => p.preview).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Live Demos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yaleblue">
                  {projects.filter(p => p.sourceCode).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Open Source</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Filter and Grid */}
        <AnimatedSection delay={0.2}>
          <ProjectFilter projects={projects} />
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-20 p-8 bg-gradient-to-r from-yaleblue/10 to-darkgoldenrod/10 rounded-2xl border border-yaleblue/20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and create amazing digital experiences.
              Let&apos;s discuss your next project!
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-yaleblue text-white rounded-lg font-semibold hover:bg-yaleblue/90 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
