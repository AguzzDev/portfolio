export const AboutMe = ({ t }) => {
  return (
    <div className="grid place-content-center h-[30vh] md:h-[50vh]">
      <div className="text-center text-3xl sm:text-5xl lg:text-7xl font-mainBold">
        <p className="w-32 mb-2 mx-auto text-lg sm:text-xl border-b border-black dark:border-white">
          {t("common:aboutme-greeting")}
        </p>
        <p> {t("common:aboutme-greeting2")}</p>
        <p> {t("common:aboutme-greeting3")}</p>
      </div>
    </div>
  )
}
