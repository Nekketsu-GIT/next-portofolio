"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
];

export default function SimpleSkills() {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.05,
            y: -4,
            transition: { duration: 0.2 }
          }}
        >
          <div className="text-2xl mb-2">{skill.icon}</div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
