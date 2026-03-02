"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogCard({
  title,
  description,
  image,
  slug,
  date,
  readingTime,
  tags,
}: {
  title: string;
  description: string;
  image?: string;
  slug: string;
  date?: string;
  readingTime?: number;
  tags?: string[];
}) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.article
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
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

      <div className="flex flex-col md:flex-row relative z-10">
        {image && (
          <motion.div
            className="md:w-1/3 h-48 md:h-auto relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}

        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <motion.div
              className="flex items-center gap-4 text-sm text-gray-500 mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time>{new Date(date).toLocaleDateString()}</time>
                </div>
              )}
              {readingTime && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{readingTime} min read</span>
                  </div>
                </>
              )}
            </motion.div>

            <motion.h3
              className="text-xl font-bold text-gray-900 dark:text-white mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ color: "var(--yaleblue)" }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {description}
            </motion.p>

            {tags && tags.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 bg-yaleblue/10 text-yaleblue text-xs rounded-full font-medium border border-yaleblue/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "var(--yaleblue)",
                      color: "white",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href={`/blog/${slug}`}
              className="inline-flex items-center text-yaleblue font-medium hover:text-darkgoldenrod transition-colors group"
            >
              Read more
              <motion.div
                className="ml-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
