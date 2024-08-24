import { useState } from "react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

import Image from "next/image";

import { ProjectsProps } from "types";
import { Project } from "./Project";

export const Projects = ({ projects }: ProjectsProps) => {
  const { t } = useTranslation();
  const [hover, setHover] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="mt-10">
      <h2 className="textGradient">{t("common:project-title")}</h2>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0 }}
        className="lg:-translate-y-28 flex w-full lg:w-screen"
      >
        <div className="flex flex-col w-full lg:w-2/4 xl:mb-52 mb-10">
          {projects.map((props, i) => (
            <Project
              {...props}
              i={i}
              setHover={setHover}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              projects={projects.length}
            />
          ))}
        </div>

        <div className="hidden lg:flex flex-col lg:w-2/4 h-screen sticky top-0 translate-y-20">
          <motion.div
            animate={{
              scale: hover ? 1.02 : 1,
            }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
          >
            <Image
              src={projects[hoveredIndex]?.image[1]}
              layout="fill"
              objectFit="contain"
              alt="project_img"
            />
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
};
