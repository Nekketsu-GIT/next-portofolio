"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: "work" | "education" | "project";
  link?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Fullstack Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    period: "2023 - Present",
    description: [
      "Led development of scalable web applications serving 50,000+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    type: "work"
  },
  {
    id: 2,
    title: "Fullstack Developer",
    company: "StartupXYZ",
    location: "San Francisco, CA",
    period: "2022 - 2023",
    description: [
      "Built MVP from scratch using modern web technologies",
      "Developed RESTful APIs and integrated third-party services",
      "Optimized application performance improving load times by 40%"
    ],
    technologies: ["React", "TypeScript", "Express.js", "MongoDB"],
    type: "work"
  },
  {
    id: 3,
    title: "Computer Science Degree",
    company: "University of Technology",
    location: "New York, NY",
    period: "2018 - 2022",
    description: [
      "Bachelor's degree in Computer Science",
      "Specialized in Software Engineering and Web Development",
      "Graduated Magna Cum Laude with 3.8 GPA"
    ],
    technologies: ["Java", "Python", "C++", "Database Systems"],
    type: "education"
  },
  {
    id: 4,
    title: "E-commerce Platform",
    company: "Personal Project",
    location: "Remote",
    period: "2021",
    description: [
      "Built full-featured e-commerce platform with payment integration",
      "Implemented admin dashboard and inventory management",
      "Deployed on AWS with auto-scaling capabilities"
    ],
    technologies: ["React", "Node.js", "Stripe API", "AWS"],
    type: "project",
    link: "https://github.com/example/ecommerce"
  }
];

export default function ExperienceTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-yaleblue";
      case "education":
        return "bg-green-500";
      case "project":
        return "bg-darkgoldenrod";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return "💼";
      case "education":
        return "🎓";
      case "project":
        return "🚀";
      default:
        return "📍";
    }
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yaleblue via-darkgoldenrod to-yaleblue"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative flex items-start gap-8"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`relative z-10 w-16 h-16 ${getTypeColor(experience.type)} rounded-full flex items-center justify-center text-2xl shadow-lg`}
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
              >
                {getTypeIcon(experience.type)}
              </motion.div>

              {/* Content Card */}
              <motion.div
                className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 text-yaleblue font-medium">
                      {experience.company}
                      {experience.link && (
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center hover:text-darkgoldenrod transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={14} />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin size={14} />
                      {experience.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 + i * 0.1 }}
                    >
                      <span className="text-yaleblue mt-1.5 text-xs">●</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  {experience.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-yaleblue/10 text-yaleblue text-sm rounded-full font-medium border border-yaleblue/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.8 + i * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "var(--yaleblue)",
                        color: "white",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
