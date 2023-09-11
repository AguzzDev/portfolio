import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { ChevronDownIcon } from "@heroicons/react/outline";

import { IconSm } from "./Icons";

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section className="h-[30vh] md:h-[75vh]">
      <div className="grid place-content-center text-center font-mainBold h-[80%]">
        <p className="w-32 mb-2 mx-auto text-lg sm:text-xl border-b border-black dark:border-white">
          {t("common:aboutme-greeting")}
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-7xl">
          {t("common:aboutme-greeting2")}
        </h1>
        <p className="text-lg sm:text-xl mt-3">
          {t("common:aboutme-greeting3")}
        </p>
      </div>

      <div className="flex justify-center">
        <motion.button
          initial={{ y: -5 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            type: "tween",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <IconSm Icon={ChevronDownIcon} />
        </motion.button>
      </div>
    </section>
  );
};
