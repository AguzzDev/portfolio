import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { HeaderComponentProps, LetterHeaderProps } from "types";

const letter = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.8,
    },
  },
};
const letterAnimate = {
  initial: {
    y: -400,
  },
  animate: {
    y: 0,
    transition: { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] },
  },
};

const letterHeader = ({ text1, text2, style }: LetterHeaderProps) => {
  return (
    <motion.h1
      variants={letterAnimate}
      className={`text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-mainBold ${style}`}
    >
      {text1}
      {text2}
    </motion.h1>
  );
};

export const HeaderComponent = ({ img, alt, title }: HeaderComponentProps) => {
  const titleSplit = title.split(" ");

  return (
    <section className="flex flex-col">
      <div className="flex justify-center items-center h-[40vh] sm:h-[60vh]">
        <div className="flex justify-between">
          <motion.div
            className="flex"
            variants={letter}
            initial="initial"
            animate="animate"
          >
            <h1>
              {letterHeader({
                text1: titleSplit[0],
                style: "pt-5 md:pt-0 gradient1 dark:gradient1",
              })}
            </h1>
            <div className="mt-12 lg:mt-16 w-12 sm:w-20 md:w-32 lg:w-40 h-1 bg-black dark:bg-white transform rotate-[120deg] rounded-md"></div>

            <h1>{letterHeader({ text1: titleSplit[1], style: "pt-10" })}</h1>
          </motion.div>
        </div>
      </div>

      <div className="relative h-[30vh] sm:h-screen mt-5">
        <Image
          src={img}
          layout="fill"
          alt={alt}
          objectFit="cover"
          className="h-full w-full"
        />
      </div>
    </section>
  );
};
