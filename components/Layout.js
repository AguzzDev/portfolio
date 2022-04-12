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
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="description"
          content={`${t("common:metadata")} Agustin Ribotta`}
        ></meta>
        <meta
          property="og:url"
          content="https://www.agustin-ribotta.xyz"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Portafolio"></meta>
        <meta
          property="og:description"
          content={`${t("common:metadata")} Agustin Ribotta`}
        ></meta>
        <meta property="og:image" content="/logo.png"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:domain" content="agustin-ribotta.xyz"></meta>
        <meta
          property="twitter:url"
          content="https://www.agustin-ribotta.xyz"
        ></meta>
        <meta name="twitter:title" content="Portafolio"></meta>
        <meta
          name="twitter:description"
          content={`${t("common:metadata")} Agustin Ribotta`}
        ></meta>
        <meta name="twitter:image" content="/logo.png"></meta>
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
