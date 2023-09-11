import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { Navbar } from "./Navbar";
import { IconSm } from "./Icons";
import { ChevronDownIcon } from "@heroicons/react/outline";

export const Layout = ({ children, title }) => {
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
          animate={{ y: router.pathname === "/404" ? 100 : -25, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 1 }}
          className={`${
            router.pathname === "/[slug]" ? "w-full" : "max-w-6xl"
          } px-5 xl:px-0 flex flex-col mx-auto`}
        >
          {children}
        </motion.section>
        <motion.button
          initial={{ y: -5 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            type: "tween",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="flex justify-center w-full sticky bottom-0 left-0 pb-5"
        >
          <IconSm Icon={ChevronDownIcon} />
        </motion.button>
      </main>
    </>
  );
};
