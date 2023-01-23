import { Menu } from "@headlessui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import { IconSm } from "components/Icons"

export const LanguageMenu = () => {
  const [clickMenu, setClickMenu] = useState(false)
  const router = useRouter()

  return (
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

      <Menu.Items className="absolute top-8 right-0 border border-gray3 dark:border-gray2 bg-gray4 bg-opacity-40 dark:bg-black2 rounded-md flex flex-col space-y-2">
        {router.locales.map((option, i) => (
          <Menu.Button key={i} className="px-10 py-2">
            <Link passHref href={router.asPath} locale={option}>
              <h2 className="uppercase">{option}</h2>
            </Link>
          </Menu.Button>
        ))}
      </Menu.Items>
    </Menu>
  )
}
