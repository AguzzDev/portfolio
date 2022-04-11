import Head from "next/head"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

import { Navbar } from "./Navbar"
import useTranslation from "next-translate/useTranslation"

export const Layout = ({ children, title }) => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={`${title} - Portafolio}`} />
        <meta
          name="description"
          content={`${t("common:metadata")} Agustin Ribotta}`}
        />
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="google-site-verification"
          content="dttk3MTRPjmgYRG8B_zkarma7RRwJ8dWyjHHIXxY2ck"
        />
      </Head>

      <Navbar />
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: router.pathname === "/404" ? 100 : 15, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 1 }}
        className={`${
          router.pathname === "/[slug]" ? "w-full" : "max-w-6xl"
        } px-5 xl:px-0 flex flex-col relative mx-auto`}
      >
        {children}
      </motion.section>
    </>
  )
}
