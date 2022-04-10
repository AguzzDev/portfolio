import Link from "next/link"
import { useState, Fragment } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"

import { ModalGalery } from "components/Modal/ModalGalery"

const letter = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.8,
    },
  },
}
const letterAnimate = {
  initial: {
    y: -400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.95] },
  },
}

const letterHeader = ({ text1, text2, custom }) => {
  return (
    <motion.h1
      variants={letterAnimate}
      className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-mainBold ${custom}`}
    >
      {text1}
      {text2}
    </motion.h1>
  )
}
export default {
  h1: (props) => (
    <h1 {...props} className="text-6xl font-mainBold gradient-text-1" />
  ),
  h2: (props) => <h2 {...props} className="text-3xl" />,
  Header: ({ img, alt, title }) => {
    const titleSplit = title.split(" ")

    return (
      <div className="flex flex-col">
        <div className="flex justify-center items-center mt-20 sm:mt-32 lg:mt-52">
          <div className="flex justify-between text-black dark:text-white">
            {titleSplit.length <= 2 ? (
              <motion.div
                className="flex"
                variants={letter}
                initial="initial"
                animate="animate"
              >
                {letterHeader({ text1: titleSplit[0], custom: "pt-5 md:pt-0" })}
                <div className="mt-12 lg:mt-16 w-12 sm:w-20 md:w-32 lg:w-40 h-1 bg-black dark:bg-white transform rotate-[120deg] rounded-md"></div>
                {letterHeader({ text1: titleSplit[1], custom: "pt-10" })}
              </motion.div>
            ) : (
              <motion.div
                className="flex"
                variants={letter}
                initial="initial"
                animate="animate"
              >
                <h1 className="text-5xl md:text-8xl font-mainBold">
                  {letterHeader({
                    text1: titleSplit[0],
                    text2: titleSplit[1],
                    custom: "pb-5",
                  })}
                </h1>
                <div className="mt-16 w-40 h-1 bg-black dark:bg-white transform rotate-[120deg] rounded-md"></div>
                {letterHeader({ text1: titleSplit[2], custom: "pt-10" })}
              </motion.div>
            )}
          </div>
        </div>

        <Image
          src={img}
          width={3000}
          height={2000}
          alt={alt}
          objectFit="contain"
        />
      </div>
    )
  },
  Galery: ({ imgs, alt }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="xl:mx-20">
        {imgs.length === 1 ? (
          <div
            onClick={() => {
              setIsOpen(true)
            }}
            className="max-h-[600px] relative cursor-pointer select-none mb-20"
          >
            <Image src={imgs[0]} layout="fill" alt={alt} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 my-3 gap-y-5 md:gap-10">
            {imgs.map((img, i) => {
              const [isOpen, setIsOpen] = useState(false)

              return (
                <Fragment key={i}>
                  <div
                    onClick={() => {
                      setIsOpen(true)
                    }}
                    className={`${
                      i == 0 || i == 3 || i == 4 ? "md:col-span-2" : ""
                    } max-h-[600px] cursor-pointer select-none relative bg-red-500`}
                  >
                    <img
                      src={img}
                      alt={alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <ModalGalery
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    img={img}
                    alt={alt}
                  />
                </Fragment>
              )
            })}
          </div>
        )}
      </div>
    )
  },
  LinkTo: ({ to, name }) => (
    <Link passHref href={to}>
      <a target="_blank" className="font-mainBold gradient-text-1">
        {name}
      </a>
    </Link>
  ),
  Description: ({ text }) => <p className="py-2">{text}</p>,
  List: ({ tec, lib, year, client, website, repo }) => {
    const { t } = useTranslation()

    return (
      <div className="mb-20 sm:mb-32 lg:mb-52 mt-20 xl:mx-20">
        <div className="grid grid-cols-5 md:grid-cols-7 xl:grid-cols-9">
          <h1 className="grid text-black1 dark:text-white1">
            {t("common:technologys")}
          </h1>
          <h1 className="grid col-span-2 text-black1 dark:text-white1">
            {t("common:libraries")}
          </h1>
          <h1 className="grid col-start-4 md:col-start-5 xl:col-start-7 text-black1 dark:text-white1">
            {t("common:year")}
          </h1>
          <h1 className="text-black1 dark:text-white1">{t("common:client")}</h1>
          <h1 className="text-black1 dark:text-white1">
            {t("common:repo-web")}
          </h1>
        </div>

        <div className="grid md:grid-cols-7 xl:grid-cols-9 my-2">
          <div>
            {tec.map((item, i) => (
              <ul
                key={i}
                className="list-disc ml-5 text-black1 dark:text-white1"
              >
                <li className="font-main2">{item}</li>
              </ul>
            ))}
          </div>
          <div className="grid md:col-span-2 lg:grid-cols-2">
            {lib.map((item, i) => (
              <ul
                key={i}
                className="list-disc ml-5 text-black1 dark:text-white1"
              >
                <li className="font-main2">{item}</li>
              </ul>
            ))}
          </div>
          <h2 className="font-main2 grid col-start-4 md:col-start-5 xl:col-start-7">
            {year}
          </h2>
          <h2 className="font-main2"> {client}</h2>
          <div className="flex flex-col">
            <Link href={repo} passHref>
              <a rel="noreferrer" className="font-main2" target="_blank">
                Repo
              </a>
            </Link>
            {website && (
              <Link href={website} passHref>
                <a rel="noreferrer" className="font-main2" target="_blank">
                  Web
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  },
}
