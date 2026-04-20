"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["Next.js", "React", "Expo", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["FastAPI", "Node.js", "Elixir / Phoenix"],
  },
  {
    label: "AI & Agents",
    skills: ["Anthropic SDK", "RAG", "MCP", "Claude Code"],
  },
  {
    label: "Auth & Identity",
    skills: ["Keycloak", "Auth0", "Auth.js"],
  },
  {
    label: "Data",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Alembic", "DuckDB"],
  },
  {
    label: "Infra",
    skills: ["Docker", "GitHub Actions", "Traefik", "MinIO"],
  },
];

export default function SimpleSkills() {
  return (
    <motion.div
      className="flex flex-col gap-6 w-full max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {skillGroups.map((group, gi) => (
        <motion.div
          key={group.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: gi * 0.08 }}
          className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4"
        >
          <span className="w-36 shrink-0 text-xs font-bold uppercase tracking-widest text-darkgoldenrod pt-1">
            {group.label}
          </span>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
