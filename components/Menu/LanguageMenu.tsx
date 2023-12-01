import { Menu } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { IconSm } from "components/Icons";

export const LanguageMenu = () => {
  const [clickMenu, setClickMenu] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Menu as="div" className="flex items-center">
      <Menu.Button>
        <div
          onClick={() => setClickMenu(!clickMenu)}
          className="flex items-center space-x-1"
        >
          <h3> {router.locale === "en" ? "EN" : "ES"}</h3>
          {!clickMenu ? (
            <IconSm Icon={ChevronDownIcon} />
          ) : (
            <IconSm Icon={ChevronUpIcon} />
          )}
        </div>
      </Menu.Button>

      <Menu.Items className="absolute top-8 right-0 border border-gray3 dark:border-gray2 bg-gray4 bg-opacity-40 dark:bg-black2 rounded-md flex flex-col space-y-2">
        {router.locales.map((option, i) => (
          <Menu.Item>
            <Link key={i} passHref href={router.asPath} locale={option}>
              <button className="px-10 py-2 uppercase hover:gradient1 dark:hover:gradient1 text-dark dark:text-white">{option}</button>
            </Link>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
