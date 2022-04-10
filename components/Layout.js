import Head from "next/head"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

import { Navbar } from "./Navbar"

export const Layout = ({ children, title }) => {
  const router = useRouter()
  
  return (
    <>
      <Head>
        <title>{title}</title>
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
