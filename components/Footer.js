import Link from "next/link"

import GithubIcon from "public/icons/GithubIcon"
import LinkedinIcon from "public/icons/LinkedinIcon"

export const Footer = ({ t }) => {
  return (
    <div className="flex flex-col mb-10">
      <h1 className="text-2xl sm:text-4xl font-mainBold text-black dark:text-white">
        {t("common:contact-title")}
      </h1>

      <div className="flex items-center space-x-5 mt-5">
        <Link passHref href="https://github.com/AguzzDev">
          <a rel="noreferrer" target="_blank">
            <GithubIcon className="transform scale-125 text-black dark:text-white fill-current" />
          </a>
        </Link>
        <Link passHref href="https://www.linkedin.com/in/agust%C3%ADn-ribotta-91851721b/">
          <a rel="noreferrer" target="_blank">
            <LinkedinIcon className="transform text-black dark:text-white fill-current" />
          </a>
        </Link>
      </div>
    </div>
  )
}
