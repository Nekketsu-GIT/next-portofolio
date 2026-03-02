"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

export default function ProjectCard({
  title,
  summary,
  tags,
  sourceCode,
  preview,
  tutorial,
  image,
}: {
  title: string;
  summary: string;
  tags?: string[];
  sourceCode?: string;
  preview?: string;
  tutorial?: string;
  image?: string;
}) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 relative max-w-sm mx-auto"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-yaleblue/5 via-transparent to-darkgoldenrod/5 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Image Section - Fixed height for consistency */}
      {image && (
        <motion.div
          className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating action buttons */}
          <motion.div
            className="absolute top-3 right-3 flex gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {preview && (
              <motion.a
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/95 backdrop-blur-sm rounded-full text-yaleblue hover:bg-white shadow-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="View Live Demo"
              >
                <ExternalLink size={14} />
              </motion.a>
            )}
            {sourceCode && (
              <motion.a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/95 backdrop-blur-sm rounded-full text-yaleblue hover:bg-white shadow-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="View Source Code"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            )}
          </motion.div>

          {/* Project title overlay on image */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
              {title}
            </h3>
          </motion.div>
        </motion.div>
      )}

      {/* Content Section - Compact layout */}
      <div className="p-5 relative z-10">
        {!image && (
          <motion.h3
            className="text-xl font-bold text-gray-900 dark:text-white mb-3"
            whileHover={{ color: "var(--yaleblue)" }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
        )}

        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {summary}
        </motion.p>

        {/* Tags - Show only first 3 with +more indicator */}
        {tags && tags.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-1.5 mb-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {tags.slice(0, 3).map((tag) => (
              <motion.span
                key={tag}
                className="px-2.5 py-1 bg-yaleblue/10 text-yaleblue text-xs rounded-full font-medium border border-yaleblue/20"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--yaleblue)",
                  color: "white",
                }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
            {tags.length > 3 && (
              <motion.span
                className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                +{tags.length - 3} more
              </motion.span>
            )}
          </motion.div>
        )}

        {/* Action buttons - Compact layout */}
        <motion.div
          className="flex gap-2"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {preview && (
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex-1"
            >
              <Link
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-3 py-2 bg-yaleblue text-white rounded-lg font-medium text-sm transition-all duration-200 hover:bg-yaleblue/90"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                Demo
              </Link>
            </motion.div>
          )}

          {sourceCode && (
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex-1"
            >
              <Link
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-3 py-2 border border-yaleblue text-yaleblue rounded-lg hover:bg-yaleblue hover:text-white transition-all duration-200 font-medium text-sm"
              >
                <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </Link>
            </motion.div>
          )}

          {tutorial && (
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex-1"
            >
              <Link
                href={tutorial}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-3 py-2 bg-darkgoldenrod text-white rounded-lg hover:bg-darkgoldenrod/90 transition-all duration-200 font-medium text-sm"
              >
                <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                Guide
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
