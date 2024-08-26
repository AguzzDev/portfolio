import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { Navbar } from "./Navbar";
import { LayoutProps } from "types";
import { isSlugPath } from "utils/isSlugPath";

export const Layout = ({ children, title="Portfolio of Agustin Ribotta" }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Navbar />
        <motion.section
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 50, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={`${
            isSlugPath(router.pathname)
              ? ""
              : "globalMargins mx-auto max-w-7xl"
          } flex flex-col`}
        >
          {children}
        </motion.section>
      </main>
    </>
  );
};