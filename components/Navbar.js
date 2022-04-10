import { Menu } from "@headlessui/react"
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline"
import Link from "next/link"
import { motion } from "framer-motion"

import DarkmodeContext from "context/DarkmodeContext"
import Logo from "public/Logo"
import { useContext, useState } from "react"
import { IconSm } from "./Icons"
import { useRouter } from "next/router"

export const Navbar = () => {
  const [clickMenu, setClickMenu] = useState(false)
  const router = useRouter()
  const { toogleDarkMode, theme } = useContext(DarkmodeContext)

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-200 dark:bg-black1 py-2">
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto px-5 xl:px-0">
        <div className="text-black1 dark:text-white1 fill-current">
          <Link href="/">
            <a className="fill-current text-black1 dark:text-white1 ">
              <Logo className="scale-75 transform" />
            </a>
          </Link>
        </div>
        <div className="relative flex space-x-5">
          <button onClick={toogleDarkMode}>
            {theme === "dark" ? (
              <motion.div whileHover={{ rotate: "30deg" }}>
                <IconSm Icon={MoonIcon} />
              </motion.div>
            ) : (
              <motion.div whileHover={{ rotate: "30deg" }}>
                <IconSm Icon={SunIcon} />
              </motion.div>
            )}
          </button>

          <Menu as="div" className="flex items-center">
            <Menu.Button>
              <div
                onClick={() => setClickMenu(!clickMenu)}
                className="flex items-center space-x-1"
              >
                <h2> {router.locale === "en" ? "EN" : "ES"}</h2>
                {!clickMenu ? (
                  <IconSm Icon={ChevronDownIcon} />
                ) : (
                  <IconSm Icon={ChevronUpIcon} />
                )}
              </div>
            </Menu.Button>

            <Menu.Items className="absolute top-8 right-0 bg-gray-300 bg-opacity-40 dark:bg-black2 rounded-md flex flex-col space-y-2">
              {router.locales.map((option,i) => (
                <button key={i} className="px-10 py-2">
                  <Link href={router.asPath} locale={option}>
                    <h2 className="uppercase">{option}</h2>
                  </Link>
                </button>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  )
}
