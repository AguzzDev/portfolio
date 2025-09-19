import { ArrowUpIcon, ChevronUpIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconSm } from "components/Icons";
import useTranslation from "next-translate/useTranslation";
import { isSlugPath } from "utils/isSlugPath";
import { useRouter } from "next/router";

export const Footer = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const LinkComponent = ({ link, title }: { link: string; title: string }) => {
    return (
      <Link href={link}>
        <a
          className="flex space-x-1 items-center group"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className="group-hover:gradient1 ">{title}</h3>
          <IconSm
            Icon={ArrowUpIcon}
            props="transform rotate-45 group-hover:text-[#9D51E1]"
          />
        </a>
      </Link>
    );
  };

  return (
    <section
      className={`w-full ${
        !isSlugPath(router.pathname)
          ? "mx-auto max-w-7xl globalMargins "
          : "globalMarginsSlug"
      }`}
    >
      <div
        className={`${
          isSlugPath(router.pathname) ? "hidden" : "flex justify-center"
        }`}
      >
        <motion.button
          onClick={scrollToTop}
          initial={{ y: 5 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            type: "tween",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <IconSm Icon={ChevronUpIcon} />
        </motion.button>
      </div>

      <footer className="flex flex-col md:flex-row justify-between py-5">
        <h3>{t("common:footer")}</h3>

        <section className="flex space-x-3">
          <LinkComponent
            title="LinkedIn"
            link="https://www.linkedin.com/in/agust%C3%ADn-ribotta-91851721b"
          />
          <LinkComponent title="Github" link="https://github.com/AguzzDev" />
        </section>
      </footer>
    </section>
  );
};
