import useTranslation from "next-translate/useTranslation"
import { useState, useEffect, useContext } from "react"
import { motion } from "framer-motion"

import { Layout } from "components/Layout"
import { Projects } from "components/Projects"
import DarkmodeContext from "context/DarkmodeContext"
import { Footer } from "components/Footer"
import { getAllFilesMetadata } from "lib/mdx"
import { AboutMe } from "components/AboutMe"

const Home = ({ projects }) => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [numbers, setNumbers] = useState(1)

  const { theme } = useContext(DarkmodeContext)

  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((prev) => prev + 1)
    }, 50)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])
  return (
    <>
      {loading ? (
        <motion.div
          initial={{
            width: "60%",
            background: theme !== "dark" && "#e0e2e5",
          }}
          animate={{
            width: "100%",
            background: theme === "dark" && "#121212",
          }}
          transition={{ duration: 1.7, ease: "easeIn" }}
          className="relative grid place-content-center min-h-screen"
        >
          <div className="absolute top-0 z-50">
            <div className="grid place-content-center min-h-screen w-screen">
              <h1 className="text-3xl text-black dark:text-white">
                {t("common:loading")}
              </h1>
            </div>
          </div>
        </motion.div>
      ) : (
        <Layout title="Portafolio">
          <AboutMe t={t} />
          <Projects t={t} data={projects} />
          <Footer t={t} />
        </Layout>
      )}
    </>
  )
}

export const getStaticProps = async () => {
  const projects = await getAllFilesMetadata()

  return {
    props: {
      projects,
    },
  }
}

export default Home
