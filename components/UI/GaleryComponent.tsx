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

  return (
    <div className="xl:mx-20 mt-10 md:mt-20">
      <h2>{t("common:galery-title")}</h2>
      {imgs.length === 1 ? (
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className="max-h-[600px] relative cursor-pointer select-none mb-20"
        >
          <Image src={imgs[0]} layout="fill" alt={alt} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-3 gap-5 md:gap-10">
          {imgs.map((img, i) => {
            const [isOpen, setIsOpen] = useState(false);

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
                  className={`${
                    !patternDictionary[i + 1] ? "lg:col-span-2" : null
                  } cursor-pointer select-none relative h-[15rem] lg:h-[20rem] xl:h-[29.5rem] overflow-hidden`}
                >
                  <Image
                    layout="fill"
                    objectFit={!patternDictionary[i + 1] ? "cover" : "contain"}
                    src={img}
                    alt={alt}
                  />
                </motion.div>

                <ModalGalery
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  img={img}
                  alt={alt}
                />
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};
