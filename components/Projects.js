import { useContext, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

import DarkmodeContext from "context/DarkmodeContext"
import { useRouter } from "next/router"

export const Projects = ({ data }) => {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const [image, setImage] = useState(data[0].image)
  const [textHover, setTextHover] = useState("")
  const [hover, setHover] = useState({
    hover: false,
    hoverId: null,
  })

  const { theme } = useContext(DarkmodeContext)

  const handleChange = ({ image, i }) => {
    setImage(image)
    setHover({
      hover: true,
      hoverId: i,
    })
    setTextHover(i)
  }

  return (
    <div>
      <h1 className="text-2xl sm:text-4xl font-mainBold text-black dark:text-white">
        {t("common:project-title")}
      </h1>
      <section className="pt-10 pb-20 flex flex-col-reverse lg:flex-row lg:w-screen">
        <div className="flex flex-col space-y-20 cursor-pointer lg:w-2/4">
          {data.map(({ title, image, slug }, i) => (
            <Link key={i} href={`/${slug}`} locale={locale}>
              <motion.div
                whileHover={{ x: "20px" }}
                transition={{
                  duration: 0.3,
                  delay: hover.hover && 0.2,
                  ease: "easeInOut",
                }}
                className={`${
                  theme === "dark" ? "borderText" : "borderTextDark"
                } ${
                  textHover === i && "text-black dark:text-white"
                } select-none`}
                onMouseEnter={() => handleChange({ image, i })}
                onMouseLeave={() => setHover({ hover: false })}
              >
                <h1 className="font-mainBold text-center lg:text-left font-extrabold text-4xl sm:text-5xl">
                  {title}
                </h1>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex lg:w-2/4 bg-gray-200 dark:bg-black1 xl:bg-transparent lg:h-screen flex items-center justify-center xl:pb-20 py-5 xl:py-0 sticky top-[3.5rem] right-0">
          <div className="overflow-hidden w-3/4 lg:w-screen h-[150px] sm:h-[300px] xl:h-[450px]">
            <motion.img
              animate={hover.hover ? { scale: 1.02 } : { scale: 1 }}
              transition={{ duration: 1 }}
              src={image}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
