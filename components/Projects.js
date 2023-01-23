import { useContext, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

import DarkmodeContext from "context/DarkmodeContext"
import { useRouter } from "next/router"
import Image from "next/image"

export const Projects = ({ data }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const [image, setImage] = useState(data[0].image[0])
  const [hover, setHover] = useState(null)

  const { theme } = useContext(DarkmodeContext)

  const handleChange = (image, i) => {
    setImage(image)
    setHover(i)
  }

  const ProjectComponent = ({ i, title, image }) => (
    <>
      <div className="flex items-center text-gray2 dark:text-gray4 font-bold lg:pb-2">
        <span className="text-2xl">{i + 1 <= 9 ? `0${i + 1}` : `${i + 1}`}</span>
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
          <div className="w-full sm:w-2/4 lg:hidden h-full relative">
            <Image
              src={image[0]}
              layout="fill"
              objectFit="contain"
              alt="project_img"
            />
          </div>
          <div className="hidden sm:flex sm:w-2/4 lg:hidden h-full relative">
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
  )

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h5 className="font-main text-2xl sm:text-4xl lg:text-6xl gradient1">
          {t("common:project-title")}
        </h5>
      </div>

      <section className="flex flex-col-reverse lg:flex-row lg:w-screen">
        <div className="flex flex-col lg:w-2/4">
          {data.map(({ title, image: imageD, slug }, i) => (
            <Link passHref key={i} href={`/${slug}`} locale={router.locale}>
              <a
                className={`group overflow-hidden select-none py-3 cursor-pointer border-b border-gray4 dark:border-gray1`}
              >
                <motion.div
                  whileHover={{ x: 20 }}
                  transition={{
                    duration: 0.4,
                    delay: hover === i ? 0.2 : 0,
                    ease: "easeIn",
                  }}
                  onMouseEnter={() => handleChange(imageD[0], i)}
                  onMouseLeave={() => setHover(null)}
                  className="hidden lg:flex flex-col w-full pl-1"
                >
                  <ProjectComponent i={i} title={title} />
                </motion.div>

                <div className="flex flex-col lg:hidden">
                  <ProjectComponent i={i} title={title} image={imageD} />
                </div>
              </a>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:w-2/4 h-screen items-center justify-center xl:pb-20 sticky top-[8vh] right-0">
          <motion.div
            animate={hover != null ? { scale: 1.02 } : { scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
          >
            <Image
              src={image}
              layout="fill"
              objectFit="contain"
              alt="project_img"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
