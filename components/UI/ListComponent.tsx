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
        <h3 className="gradient1 dark:gradient1 font-bold border-0 md:border-b border-gray3">
          {title}
        </h3>
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
    <section className="globalMargins globalSpacing">
      <h2 className="textGradient font-bold">{t("common:details-title")}</h2>

      <div className="box1 p-3 md:px-5 md:py-10 mt-2">
        <div className="flex flex-col md:grid grid-cols-4">
          <TableChildren title={t("common:technologys")} data={tec} />
          <TableChildren title={t("common:libraries")} data={lib} />
          <TableChildren title={t("common:year")} data={year} />
          <TableChildren title={t("common:client")} data={client} />
        </div>
      </div>
    </section>
  );
};
