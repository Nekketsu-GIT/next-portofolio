"use client";

import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

type Props = {
  image?: string;
  title?: string;
  description?: string;
  socialMediaLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};

export default function Presentation({
  image,
  title = "Welcome!",
  description,
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

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[70vh] w-full relative overflow-hidden p-8 md:p-12 bg-[url('/images/10.jpg')] dark:bg-none  border-b-4 border-yaleblue bg-cover bg-center bg-no-repeat">
      {/* Text Content */}
      <div className="flex flex-col gap-6 items-start max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-yaleblue">
          {currentText}
          <span className="text-darkgoldenrod animate-pulse">_</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {description ?? "I am a software engineer."}
        </p>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          className="px-6 py-3 rounded-md bg-yaleblue text-white hover:bg-darkgoldenrod hover:text-black transition-colors duration-300 text-lg"
        >
          Contact me
        </a>
      </div>

      {/* Image and Social Icons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Avatar Image */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-yaleblue rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <Image
            src={image ?? "/images/avatar-jose.png"}
            alt="avatar of the author"
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>

        {/* Social Icons */}
        {socialMediaLinks && (
          <div className="flex flex-row md:flex-col justify-center items-center space-x-4 md:space-x-0 md:space-y-4">
            {socialMediaLinks.github && (
              <SocialIcon
                url={socialMediaLinks.github}
                bgColor="#063672"
                className="hover:opacity-80 transition-opacity duration-300"
              />
            )}
            {socialMediaLinks.linkedin && (
              <SocialIcon
                url={socialMediaLinks.linkedin}
                bgColor="#0077B5"
                className="hover:opacity-80 transition-opacity duration-300"
              />
            )}
            {socialMediaLinks.twitter && (
              <SocialIcon
                url={socialMediaLinks.twitter}
                bgColor="#1DA1F2"
                className="hover:opacity-80 transition-opacity duration-300"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}