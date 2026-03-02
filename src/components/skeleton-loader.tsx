"use client";

import { motion } from "framer-motion";

interface SkeletonLoaderProps {
  type: "blog" | "project" | "card";
  count?: number;
}

const SkeletonCard = ({ type }: { type: "blog" | "project" | "card" }) => {
  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (type === "blog") {
    return (
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image skeleton */}
          <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden bg-gray-200 dark:bg-gray-700">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
          </div>
          
          <div className="flex-1 p-6">
            {/* Date and reading time skeleton */}
            <div className="flex items-center gap-4 mb-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  variants={shimmerVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  variants={shimmerVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
            </div>
            
            {/* Title skeleton */}
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                variants={shimmerVariants}
                initial="initial"
                animate="animate"
              />
            </div>
            
            {/* Description skeleton */}
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  variants={shimmerVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  variants={shimmerVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
            </div>
            
            {/* Tags skeleton */}
            <div className="flex gap-2 mb-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    variants={shimmerVariants}
                    initial="initial"
                    animate="animate"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                </div>
              ))}
            </div>
            
            {/* Read more skeleton */}
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                variants={shimmerVariants}
                initial="initial"
                animate="animate"
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (type === "project") {
    return (
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 relative max-w-sm mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image skeleton */}
        <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
          />
        </div>
        
        <div className="p-5">
          {/* Description skeleton */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                variants={shimmerVariants}
                initial="initial"
                animate="animate"
              />
            </div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                variants={shimmerVariants}
                initial="initial"
                animate="animate"
              />
            </div>
          </div>
          
          {/* Tags skeleton */}
          <div className="flex gap-1.5 mb-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-12 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  variants={shimmerVariants}
                  initial="initial"
                  animate="animate"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              </div>
            ))}
          </div>
          
          {/* Buttons skeleton */}
          <div className="flex gap-2">
            <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                variants={shimmerVariants}
                initial="initial"
                animate="animate"
              />
            </div>
            <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                variants={shimmerVariants}
                initial="initial"
                animate="animate"
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return null;
};

export default function SkeletonLoader({ type, count = 3 }: SkeletonLoaderProps) {
  return (
    <div className={`${
      type === "project" 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
        : "flex flex-col gap-8"
    }`}>
      {[...Array(count)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <SkeletonCard type={type} />
        </motion.div>
      ))}
    </div>
  );
}
