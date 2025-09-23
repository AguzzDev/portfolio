import useTranslation from "next-translate/useTranslation";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { IconSm } from "components/Icons";
import { PointerButton } from "components/UI/Button/PointerButton";

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
    <section className="flex flex-col h-screen snap-none relative pt-32 pb-10">
      <div className="flex">
        <div className="w-3/4 sm:w-2/4 2xl:w-[60%]">
          <p className="mb-2 text-lg sm:text-xl border-b border-black dark:border-white w-max">{t("common:aboutme-greeting")}</p>

          <h1 className="mt-3 tracking-tight">{t("common:aboutme-greeting2")}</h1>

          <h1>
            <span className="textGradient font-mainBold">{t("common:aboutme-greeting3")}</span>,{t("common:aboutme-greeting4")}
          </h1>

          <button onClick={goContact} className="group flex items-center box1 py-3 mt-6 px-5 dark:text-white font-bold">
            {t("common:aboutme-talk")}
            <div className="ml-2 group-hover:ml-4 transform duration-100">
              <IconSm Icon={ArrowRightIcon} />
            </div>
          </button>
        </div>

        <div className="relative flex-1 hidden sm:block">
          <div className="absolute top-0 left-0 goku sm:scale-[3] lg:scale-[5]"></div>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-end">
        <PointerButton type="bottom" clickeable={false} />
      </div>
    </section>
  );
};
