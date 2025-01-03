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

const Presentation = ({
  image,
  title = "Welcome!",
  description,
  socialMediaLinks,
}: Props) => {
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
    <section className="flex flex-col-reverse md:flex-row items-center min-h-[50vh] w-full relative overflow-hidden">
      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-3xl font-bold text-yaleblue">
          {currentText}
          <span className="text-darkgoldenrod animate-pulse">_</span>
        </h2>
        <p>{description ?? "I am a software engineer."}</p>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          className="p-4 rounded-md bg-yaleblue text-white hover:bg-darkgoldenrod hover:text-black"
        >
          Contact me
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center m-4 gap-4">
        <div className="relative w-72 h-72 md:w-72 md:h-72 bg-yaleblue rounded-full">
          <Image
            src={image ?? "/images/avatar-jose.png"}
            alt="avatar of the author"
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        {socialMediaLinks && (
          <div className="flex flex-row md:flex-col justify-center items-center space-x-4 md:space-x-0 md:space-y-4 mt-4">
            {socialMediaLinks.github && (
              <SocialIcon url={socialMediaLinks.github} bgColor="#345995" />
            )}
            {socialMediaLinks.linkedin && (
              <SocialIcon url={socialMediaLinks.linkedin} />
            )}
            {socialMediaLinks.twitter && (
              <SocialIcon url={socialMediaLinks.twitter} />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Presentation;
