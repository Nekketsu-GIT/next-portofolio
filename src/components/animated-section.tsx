"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  id,
  delay = 0 
}: AnimatedSectionProps) {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut" as const,
        staggerChildren: 0.2,
      }
    },
  };

  return (
    <motion.section
      id={id}
      className={`py-12 w-full flex flex-col gap-8 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
}
