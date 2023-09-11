import { useContext, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import DarkmodeContext from "context/DarkmodeContext";
import { useRouter } from "next/router";
import Image from "next/image";
import { withScrollPosition } from "hoc/withScrollPosition";

const ProjectsComponent = ({ scrollPosition, data }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [hover, setHover] = useState(false);

  const { theme } = useContext(DarkmodeContext);

  const handleChange = (image, i) => {
    setImage(image);
    setHover(i);
  };

  const Title = ({ i, title, image }) => (
    <>
      <div className="flex items-center text-gray2 dark:text-gray4 font-bold lg:pb-2">
        <span className="text-2xl">
          {i + 1 <= 9 ? `0${i + 1}` : `${i + 1}`}
        </span>
        <span className="text-xl px-1">/</span>
        <span className="text-xs pt-2">{data.length}</span>
      </div>

      <h5
        className={`${
          theme === "dark" ? "borderText" : "borderTextDark"
        } group-hover:text-gray2 dark:group-hover:text-gray4 font-mainBold font-extrabold text-3xl lg:text-5xl`}
      >
        {title}
      </h5>

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
    <section>
      <h5 className="font-main text-2xl sm:text-4xl lg:text-5xl gradient1 text-center">
        {t("common:project-title")}
      </h5>

      <section className="flex w-full lg:w-screen">
        <div className="flex flex-col w-full lg:w-2/4">
          {data.map(({ title, image: imageD, slug }, i) => (
            <Link passHref key={i} href={slug} locale={router.locale}>
              <a
                className={`group overflow-hidden select-none pt-10 pb-5 cursor-pointer border-b border-gray4 dark:border-gray1`}
              >
                <motion.div
                  key={i}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  animate={{ x: scrollPosition === i ? 30 : 0 }}
                  transition={{
                    duration: 0.3,
                    delay: hover === i ? 0.2 : 0,
                    ease: "easeIn",
                  }}
                  className="hidden lg:flex flex-col w-full pl-1"
                >
                  <Title i={i} title={title} image={imageD} />
                </motion.div>

                <div className="flex flex-col lg:hidden">
                  <Title i={i} title={title} image={imageD} />
                </div>
              </a>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex flex-col lg:w-2/4 h-screen items-center justify-center xl:pb-20 sticky top-0 right-0 translate-y-20">
          <motion.div
            animate={{
              scale: hover ? 1.02 : 1,
            }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
          >
            <Image
              src={data[scrollPosition]?.image[1]}
              layout="fill"
              objectFit="contain"
              alt="project_img"
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export const Projects = withScrollPosition(ProjectsComponent);
