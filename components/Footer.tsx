import { LinkIcon, MailIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { IconMd, IconSm } from "./Icons";
import useTranslation from "next-translate/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();

  const LinkComponent = ({ link, title }: { link: string; title: string }) => {
    return (
      <Link href={link}>
        <a
          className="flex space-x-3 items-center group"
          rel="noreferrer"
          target="_blank"
        >
          <IconSm Icon={LinkIcon} props="group-hover:text-[#9D51E1]" />
          <h2 className="group-hover:gradient1 font-bold">{title}</h2>
        </a>
      </Link>
    );
  };

  return (
    <div className="flex flex-col md:flex-row justify-between my-10 p-3 md:p-5 rounded-xl border1">
      <div className="md:pr-10 w-full md:w-9/12 border-b md:border-b-0 md:border-r border-gray3 dark:border-gray2">
        <h5 className="font-main text-2xl sm:text-4xl gradient1">
          {t("common:contact-title")}
        </h5>
        <p className="text-lg"> {t("common:contact-message")}</p>
        <div className="flex items-center justify-center space-x-3">
          <IconMd Icon={MailIcon} />
          <h2 className="text-md sm:text-xl md:text-3xl font-bold underline underline-offset-8 decoration-gray2 dark:decoration-gray3 py-2">
            aribotta1901@gmail.com
          </h2>
        </div>
      </div>

      <div className="flex justify-between md:justify-start md:flex-col flex-1 md:pt-0 pt-2 md:pl-3">
        <LinkComponent
          title="LinkedIn"
          link="https://www.linkedin.com/in/agust%C3%ADn-ribotta-91851721b"
        />
        <LinkComponent title="Github" link="https://github.com/AguzzDev" />
      </div>
    </div>
  );
};
