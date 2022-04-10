export const AboutMe = ({ t }) => {
  return (
    <div className="grid place-content-center min-h-screen">
      <div className="text-center text-5xl md:text-7xl font-mainBold">
        <p className="w-32 mb-2 mx-auto text-xl border-b border-black dark:border-white">
          {t("common:aboutme-greeting")}
        </p>
        <p> {t("common:aboutme-greeting2")}</p>
        <p> {t("common:aboutme-greeting3")}</p>
      </div>
    </div>
  )
}
