import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment } from "react";

import { ModalGalery } from "components/Modal/ModalGalery";
import useTranslation from "next-translate/useTranslation";
import { GaleryComponentProps } from "types";
import { useMediaQuery } from "hooks/useMediaQuery";

export const GaleryComponent = ({ imgs, alt }: GaleryComponentProps) => {
  const { t } = useTranslation();

  const ImageItem = ({ path, mobile, i }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = mobile === "true";
    const nextIsMobile = i < imgs.length && imgs[i + 1]?.mobile === "true";

    const notMobileAndNextEither = !isMobile && !nextIsMobile;
    const mediaQuery = useMediaQuery();

    return (
      <Fragment key={i}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.35 }}
          transition={{ duration: 1 }}
          onClick={() => {
            mediaQuery != "mobile" && setIsOpen(true);
          }}
          className={`${notMobileAndNextEither ? "col-span-2" : null} ${nextIsMobile ? "col-span-3" : null} ${
            isMobile ? "hidden lg:block" : ""
          } sm:cursor-pointer select-none relative h-[12rem] sm:h-[20rem] xl:h-[30rem]`}
        >
          <Image layout="fill" objectFit="contain" src={path} alt={alt} className="z-50" />
        </motion.div>

        <ModalGalery isOpen={isOpen} setIsOpen={setIsOpen} img={path} alt={alt} />
      </Fragment>
    );
  };

  return (
    <section className="globalMarginsSlug globalSpacing">
      <h2 className="textGradient font-bold">{t("common:galery-title")}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-3 gap-5 md:gap-10">
        {imgs.map(({ path, mobile }, i) => (
          <ImageItem key={path} path={path} mobile={mobile} i={i} />
        ))}
      </div>
    </section>
  );
};
