import { LinkIcon } from "@heroicons/react/outline";
import { IconXs } from "components/Icons";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { ListComponentProps, TableChildrenProps } from "types";

export const ListComponent = ({
  tec,
  lib,
  year,
  client,
  website,
  repo,
}: ListComponentProps) => {
  const { t } = useTranslation();

  const TableChildrenData = ({
    title,
    data,
  }: {
    title: string;
    data: string[] | string;
  }) => (
    <>
      {typeof data === "object" ? (
        data.map((item, i) => (
          <ul key={i} className="list-disc mx-5 text-black1 dark:text-white1">
            <li className="font-main2">{item}</li>
          </ul>
        ))
      ) : (
        <p>{t(data)}</p>
      )}
    </>
  );

  const TableChildren = ({
    title,
    data,
    children,
    last,
  }: TableChildrenProps) => {
    return (
      <div className={`${!last ? "border-b border-gray3" : null} md:border-0`}>
        <h2 className="gradient1 dark:gradient1 font-bold border-0 md:border-b border-gray3">
          {title}
        </h2>
        <div
          className={`${
            !last ? "pb-1" : null
          } grid grid-cols-2 md:flex md:flex-col md:pt-1`}
        >
          {data ? <TableChildrenData data={data} title={title} /> : children}
        </div>
      </div>
    );
  };
  return (
    <div className="border1 p-3 md:px-5 md:py-10 rounded-xl xl:mx-20">
      <div className="flex flex-col md:grid grid-cols-5">
        <TableChildren title={t("common:technologys")} data={tec} />
        <TableChildren title={t("common:libraries")} data={lib} />
        <TableChildren title={t("common:year")} data={year} />
        <TableChildren title={t("common:client")} data={client} />
        <TableChildren title={t("common:repo-web")} last={true}>
          <div className="flex flex-col">
            <Link href={repo} passHref>
              <a
                rel="noreferrer"
                className="group flex space-x-2 items-center hover:gradient1"
                target="_blank"
              >
                <IconXs Icon={LinkIcon} props="group-hover:text-[#9D51E1]" />
                <p className="group-hover:gradient1">Repo</p>
              </a>
            </Link>
            {website && (
              <Link href={website} passHref>
                <a
                  rel="noreferrer"
                  className="group flex space-x-2 items-center hover:gradient1"
                  target="_blank"
                >
                  <IconXs Icon={LinkIcon} props="group-hover:text-[#9D51E1]" />
                  <p className="group-hover:gradient1">Web</p>
                </a>
              </Link>
            )}
          </div>
        </TableChildren>
      </div>
    </div>
  );
};
