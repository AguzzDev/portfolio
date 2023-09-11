import useTranslation from "next-translate/useTranslation";

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className="grid place-content-center h-[30vh] md:h-[75vh]">
      <div className="text-center  font-mainBold">
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
    </div>
  );
};
