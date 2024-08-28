import { motion, useAnimation } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { ArrowRightIcon } from "@heroicons/react/outline";

import { IconSm } from "components/Icons";

export const AboutMe = () => {
  const { t } = useTranslation();

  const goContact = () => {
    const element = document.querySelector("#contact-section");
    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
  return (
    <section className="mt-10 h-[67vh]">
      <div className="w-3/4">
        <p className="mb-2 text-lg sm:text-xl border-b border-black dark:border-white w-max">
          {t("common:aboutme-greeting")}
        </p>

        <h1 className="mt-3 tracking-tight">{t("common:aboutme-greeting2")}</h1>

        <h1>
          <span className="textGradient font-mainBold">
            {t("common:aboutme-greeting3")}
          </span>
          ,{t("common:aboutme-greeting4")}
        </h1>

        <button
          onClick={goContact}
          className="group flex items-center box1 py-3 mt-6 px-5 dark:text-white font-bold"
        >
          {t("common:aboutme-talk")}
          <div className="ml-2 group-hover:ml-4 transform duration-100">
            <IconSm Icon={ArrowRightIcon} />
          </div>
        </button>
      </div>
    </section>
  );
};
