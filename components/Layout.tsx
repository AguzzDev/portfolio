import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { Navbar } from "./Navbar";
import { LayoutProps } from "types";
import { isSlugPath } from "utils/isSlugPath";

export const Layout = ({ children, title }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Navbar />
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: router.pathname === "/404" ? 100 : 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 1 }}
          className={`${
            isSlugPath(router.pathname) ? "w-full" : "max-w-7xl"
          } px-5 xl:px-0 flex flex-col xl:mx-auto`}
        >
          {children}
        </motion.section>
      </main>
    </>
  );
};
