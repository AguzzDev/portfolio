import {
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline"
import Link from "next/link"
import { motion } from "framer-motion"
import { useContext} from "react"

import DarkmodeContext from "context/DarkmodeContext"
import Logo from "public/Logo"
import { IconSm } from "./Icons"
import { LanguageMenu } from "./Menu/LanguageMenu"

export const Navbar = () => {
  const { toogleDarkMode, theme } = useContext(DarkmodeContext)

  return (
    <nav className="sticky w-full top-0 z-10 bg-gray-200 dark:bg-black1 py-1">
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto px-5 xl:px-0">
        <div className="text-black1 dark:text-white1 fill-current">
          <Link passHref href="/">
            <a className="fill-current text-black1 dark:text-white1">
              <Logo className="scale-75 transform" />
            </a>
          </Link>
        </div>
        <div className="relative flex space-x-5">
          <button onClick={toogleDarkMode}>
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
  )
}
