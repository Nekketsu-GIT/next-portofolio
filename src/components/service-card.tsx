"use client";

import { motion } from "framer-motion";

export default function ServiceCard(service: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="relative flex flex-col gap-3 p-6 rounded-xl overflow-hidden cursor-pointer
        bg-white border border-gray-100 shadow-sm
        dark:bg-gradient-to-br dark:from-yaleblue dark:via-blue-700 dark:to-darkgoldenrod dark:border-transparent dark:shadow-lg"
      style={{ minHeight: "160px" }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Left accent bar — light mode only */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-yaleblue rounded-l-xl dark:hidden" />

      {/* Hover shimmer — dark mode only */}
      <motion.div
        className="absolute inset-0 hidden dark:block bg-black/0"
        whileHover={{ backgroundColor: "rgba(0,0,0,0.15)" }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <h3 className="text-base font-bold text-yaleblue dark:text-white mb-2 leading-snug">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-blue-50">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
