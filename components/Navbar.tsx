import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";

import { useTheme } from "context/ThemeContext";
import Logo from "public/Logo";
import { IconSm } from "./Icons";
import { LanguageMenu } from "./Menu/LanguageMenu";
import { useRouter } from "next/router";
import { isSlugPath } from "utils/isSlugPath";

export const Navbar = () => {
  const router = useRouter();
  const { toggleTheme, theme } = useTheme();

  return (
    <nav className="sticky w-full top-0 z-10 bg-gray-200 dark:bg-black1 py-1">
      <div
        className={`${
          isSlugPath(router.pathname) ? "slugMargins" : "max-w-7xl mx-auto"
        } flex items-center justify-between w-full px-5 xl:px-0`}
      >
        <div className="text-black1 dark:text-white1 fill-current">
          <Link passHref href="/">
            <a className="fill-current text-black1 dark:text-white1">
              <Logo className="scale-75 transform" />
            </a>
          </Link>
        </div>

        <div className="relative flex space-x-5">
          <button onClick={toggleTheme}>
            <motion.div whileHover={{ rotate: "30deg" }}>
              {theme === "dark" ? (
                <IconSm Icon={MoonIcon} />
              ) : (
                <IconSm Icon={SunIcon} />
              )}
            </motion.div>
          </button>

          <LanguageMenu />
        </div>
      </div>
    </nav>
  );
};
