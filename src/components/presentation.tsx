"use client";

import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Props = {
  image?: string;
  title?: string;
  description?: string;
  availableLabel?: string;
  ctaContact?: string;
  ctaProjects?: string;
  ctaMalt?: string;
  socialMediaLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    malt?: string;
  };
};

export default function Presentation({
  image,
  title = "Développeur Full Stack & Builder",
  description,
  availableLabel = "Disponible pour des missions freelance",
  ctaContact = "Me contacter",
  ctaProjects = "Mes projets",
  ctaMalt = "Profil Malt",
  socialMediaLinks,
}: Props) {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (textIndex < title.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + title[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, title]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] w-full relative overflow-hidden p-8 md:p-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b-4 border-yaleblue"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Text Content */}
      <motion.div
        className="flex flex-col gap-6 items-start max-w-2xl z-10"
        variants={itemVariants}
      >
        {/* Availability badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/40 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {availableLabel}
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-yaleblue leading-tight"
          variants={itemVariants}
        >
          {currentText}
          <motion.span
            className="text-darkgoldenrod"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          {description ?? "Je conçois et déploie des produits web et mobile — de l'API à la mise en production. Spécialisé dans les applications IA et les architectures backend complexes."}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 rounded-lg bg-yaleblue dark:bg-[#063672] text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {ctaContact}
          </motion.button>

          <motion.a
            href="/projects"
            className="px-8 py-4 rounded-lg border-2 border-yaleblue text-yaleblue font-semibold text-lg hover:bg-yaleblue dark:hover:bg-[#063672] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaProjects}
          </motion.a>

          {socialMediaLinks?.malt && (
            <motion.a
              href={socialMediaLinks.malt}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border-2 border-darkgoldenrod text-darkgoldenrod font-semibold text-lg hover:bg-darkgoldenrod hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaMalt}
            </motion.a>
          )}
        </motion.div>
      </motion.div>

      {/* Image and Social Icons */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-8 z-10"
        variants={itemVariants}
      >
        {/* Avatar Image */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-yaleblue to-darkgoldenrod rounded-full p-2 shadow-2xl"
          variants={imageVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <Image
              src={image ?? "/images/avatar-jose.png"}
              alt="avatar of the author"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* Social Icons */}
        {socialMediaLinks && (
          <motion.div
            className="flex flex-row md:flex-col justify-center items-center space-x-4 md:space-x-0 md:space-y-4"
            variants={socialVariants}
          >
            {socialMediaLinks.github && (
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialIcon
                  url={socialMediaLinks.github}
                  bgColor="#063672"
                  className="transition-all duration-300"
                />
              </motion.div>
            )}
            {socialMediaLinks.linkedin && (
              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialIcon
                  url={socialMediaLinks.linkedin}
                  bgColor="#0077B5"
                  className="transition-all duration-300"
                />
              </motion.div>
            )}
            {socialMediaLinks.twitter && (
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialIcon
                  url={socialMediaLinks.twitter}
                  bgColor="#1DA1F2"
                  className="transition-all duration-300"
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-yaleblue" />
      </motion.div>
    </motion.section>
  );
}