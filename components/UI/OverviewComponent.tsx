import { LinkIcon } from "@heroicons/react/outline";
import { IconXs } from "components/Icons";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";

export const OverviewComponent = ({ description, features, repo, website }) => {
  const { t } = useTranslation();

  const ulItems = t(features)
    .split("./")
    .map((v) => v.split(":"))
    .map((v) => ({ title: v[0], value: v[1] }));

  const Button = ({ href, title }) => (
    <Link href={href} passHref>
      <a target="_blank" className="cursor-pointer group flex items-center justify-center space-x-3 w-2/4 py-3 dark:bg-gray1 bg-gray4 font-bold dark:text-white text-black rounded-md">
        <IconXs Icon={LinkIcon} props="group-hover:text-[#9D51E1]" />
        <p className="group-hover:gradient1">{title}</p>
      </a>
    </Link>
  );

  return (
    <section className="flex flex-col md:flex-row md:space-x-5 mx-5 md:mx-10 xl:mx-20 mt-10">
      <div className="flex flex-col md:w-3/4">
        <h2 className="textGradient font-bold mb-2">
          {t("common:overview-title")}
        </h2>
        <p className="tracking-wide italic mt-1 pr-3">{t(description)}</p>

        <div className="mt-5 md:mt-0 flex md:flex-col space-x-3 md:space-x-0 md:space-y-2 justify-end h-full">
          {website && <Button href={website} title="Ir a la Web" />}

          <Button href={repo} title="Ir al Repo" />
        </div>
      </div>

      <div className="w-full">
        <h2 className="textGradient font-bold mb-2 mt-5 md:mt-0">
          {t("common:overview-title2")}
        </h2>

        <ul className="flex flex-col space-y-2">
          {ulItems.map(({ title, value }, i) => (
            <li key={i}>
              <p className="tracking-tight">
                <span className="font-bold">{title}: </span>
                {value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
