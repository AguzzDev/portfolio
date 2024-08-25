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

      <main
        className={`${
          isSlugPath(router.pathname)
            ? "w-full"
            : "globalMargins xl:mx-auto max-w-7xl"
        } `}
      >
        <Navbar />
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: router.pathname === "/404" ? 100 : 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col"
        >
          {children}
        </motion.section>
      </main>
    </>
  );
};
