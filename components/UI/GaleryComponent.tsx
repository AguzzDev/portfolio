import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment } from "react";

import { ModalGalery } from "components/Modal/ModalGalery";
import useTranslation from "next-translate/useTranslation";
import { GaleryComponentProps } from "types";

export const GaleryComponent = ({ imgs, alt }: GaleryComponentProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const patternDictionary = {
    2: "2",
    3: "3",
    6: "6",
    7: "7",
  };

  const ImageItem = ({ path, mobile, i }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = mobile === "true";
    const nextIsMobile = i < imgs.length && imgs[i + 1]?.mobile === "true";

    const notMobileAndNextEither = !isMobile && !nextIsMobile;

    return (
      <Fragment key={i}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.35 }}
          transition={{ duration: 1 }}
          onClick={() => {
            setIsOpen(true);
          }}
          className={`${notMobileAndNextEither ? "col-span-2" : null} ${
            nextIsMobile ? "col-span-3" : null
          } sm:cursor-pointer select-none relative h-[12rem] sm:h-[30rem] overflow-hidden`}
        >
          <Image
            layout="fill"
            objectFit={isMobile ? "contain" : "contain"}
            src={path}
            alt={alt}
          />
        </motion.div>

        <ModalGalery
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          img={path}
          alt={alt}
        />
      </Fragment>
    );
  };

  return (
    <section className="globalMarginsSlug globalSpacing">
      <h2 className="textGradient font-bold">{t("common:galery-title")}</h2>
      {imgs.length === 1 ? (
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className="max-h-[600px] relative cursor-pointer select-none mb-20"
        >
          <Image src={imgs[0].path} layout="fill" alt={alt} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-3 gap-5 md:gap-10">
          {imgs.map(({ path, mobile }, i) => (
            <ImageItem path={path} mobile={mobile} i={i} />
          ))}
        </div>
      )}
    </section>
  );
};
