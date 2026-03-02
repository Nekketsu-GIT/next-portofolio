"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ServiceCard(service: {
  title: string;
  description: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col justify-between p-4 md:p-6 rounded-xl shadow-lg overflow-hidden cursor-pointer bg-gradient-to-br from-yaleblue via-blue-600 to-darkgoldenrod"
      style={{ minHeight: "180px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut" as const,
      }}
    >
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        animate={{
          backgroundColor: isHovered ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.2)",
          backdropFilter: isHovered ? "blur(8px)" : "blur(2px)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content - Mobile-first approach */}
      <div className="relative z-10 w-full">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
          {service.title}
        </h3>

        {/* Always visible on mobile, hover effect on desktop */}
        <div className="md:hidden">
          <p className="text-sm leading-relaxed text-gray-100 opacity-90">
            {service.description}
          </p>
        </div>

        {/* Desktop hover effect */}
        <motion.div
          className="hidden md:block overflow-hidden"
          animate={{
            height: isHovered ? "auto" : "0px",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="text-sm leading-relaxed text-gray-100">
            {service.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
