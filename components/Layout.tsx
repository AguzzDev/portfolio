import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { Navbar } from "./Navbar";
import { LayoutProps } from "types";

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
            router.pathname === "/[slug]" ? "w-full" : "max-w-6xl"
          } xl:px-0 flex flex-col mx-5 xl:mx-auto`}
        >
          {children}
        </motion.section>
      </main>
    </>
  );
};
