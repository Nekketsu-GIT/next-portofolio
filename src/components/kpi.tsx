"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function KPI({ text, value }: { text: string; value?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value || "0");

  useEffect(() => {
    if (numericValue > 0) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(numericValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [numericValue]);

  return (
    value && (
      <motion.div
        className="flex flex-col items-center justify-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
        }}
      >
        <motion.span
          className="text-4xl md:text-5xl font-bold text-darkgoldenrod mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isNaN(numericValue) ? value : `${displayValue}+`}
        </motion.span>
        <motion.p
          className="text-white text-center font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {text}
        </motion.p>
      </motion.div>
    )
  );
}
