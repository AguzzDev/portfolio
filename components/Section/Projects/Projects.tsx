import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { ProjectsProps } from "types";
import { Project } from "./Project";
import { useMediaQuery } from "hooks/useMediaQuery";

export const Projects = ({ projects }: ProjectsProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaQuery = useMediaQuery();
  const projectList = projects.map((props, i) => (
    <div key={i} className="lg:snap-start lg:h-screen pt-10">
      <Project key={i} {...props} i={i} currentIndex={currentIndex} projects={projects.length} />
    </div>
  ));

  useEffect(() => {
    let scrollTrigger: ScrollTrigger = null;

    (async () => {
      if (mediaQuery != "desktop") return;

      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const container = listRef.current;
      const items = Array.from(container?.children || []);
      if (!container || items.length === 0) return;

      scrollTrigger = ScrollTrigger.create({
        trigger: listRef.current,
        start: "top top",
        end: "bottom bottom",
        snap: {
          snapTo: 1 / (items.length - 1),
          duration: 0.3,
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          const itemsCount = 20;
          const scrollProgress = self.progress;

          const currentIndex = Math.round(scrollProgress * (itemsCount - 1));
          setCurrentIndex(currentIndex);
        },
      });
    })();

    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, [mediaQuery]);

  return (
    <section>
      <h2 className="textGradient">{t("common:project-title")}</h2>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0 }} className="mt-5 flex lg:w-screen">
        <div ref={listRef} className="scroll-snap-y scroll-snap-mandatory flex flex-col w-full lg:w-3/4 xl:mb-52 mb-10">
          {projectList}
        </div>

        <div className="hidden lg:flex flex-col justify-center lg:w-[70vw] h-screen sticky top-0 right-0">
          <div className="relative w-full h-2/4">
            <Image src={projects[currentIndex]?.image[1]} layout="fill" objectFit="cover" alt="project_img" className="z-50"/>
          
          <div className="absolute top-2 right-2 bg-blue-300 w-full h-full gradientBg1"></div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};
