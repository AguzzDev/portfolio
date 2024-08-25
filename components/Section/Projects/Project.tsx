import { useTheme } from "context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Project = (props) => {
  const {
    title,
    image: imageD,
    slug,
    i,
    setHover,
    hoveredIndex,
    setHoveredIndex,
    projects,
  } = props;
  const router = useRouter();

  const { theme } = useTheme();
  const [ref, inView] = useInView({
    threshold: hoveredIndex === 0 ? 1 : 0.85,
  });

  useEffect(() => {
    setHoveredIndex(i);
  }, [inView, i]);

  const Title = ({
    i,
    title,
    image,
  }: {
    i: number;
    title: string;
    image: string[];
  }) => (
    <>
      <div className="flex items-center text-gray2 dark:text-gray4 font-bold lg:pb-2">
        <span className="text-2xl">
          {i + 1 <= 9 ? `0${i + 1}` : `${i + 1}`}
        </span>
        <span className="text-xl px-1">/</span>
        <span className="text-xs pt-2">{projects}</span>
      </div>

      <h2
        className={`${
          hoveredIndex === i ? "text-gray2 dark:text-[#cccccc]" : null
        }  ${
          theme === "dark" ? "borderText" : "borderTextDark"
        } font-mainBold font-extrabold`}
      >
        {title}
      </h2>

      {image ? (
        <div className="lg:hidden flex space-x-5 pt-2 lg:pt-0 h-52">
          <div className="w-full sm:w-2/4 lg:hidden relative">
            <Image
              src={image[0]}
              layout="fill"
              objectFit="contain"
              alt="project_img"
            />
          </div>
          <div className="hidden sm:flex sm:w-2/4 lg:hidden relative">
            <Image
              src={image[1]}
              layout="fill"
              objectFit="contain"
              alt="project_img"
            />
          </div>
        </div>
      ) : null}
    </>
  );

  return (
    <Link passHref key={i} href={slug} locale={router.locale}>
      <a
        ref={ref}
        className={`py-36 lg:py-60 2xl:py-72 group overflow-hidden select-none cursor-pointer border-b border-gray4 dark:border-gray1`}
      >
        <motion.div
          key={i}
          onMouseEnter={() => {
            setHover(true);
            setHoveredIndex(i);
          }}
          onMouseLeave={() => {
            setHover(false);
            setHoveredIndex(i);
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0 }}
          animate={{ x: hoveredIndex === i ? 30 : 0 }}
          className="hidden lg:flex flex-col w-full pl-1"
        >
          <Title i={i} title={title} image={imageD} />
        </motion.div>

        <div className="flex flex-col lg:hidden">
          <Title i={i} title={title} image={imageD} />
        </div>
      </a>
    </Link>
  );
};
