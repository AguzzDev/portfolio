import Link from "next/link";

import { Layout } from "components/Layout";
import useTranslation from "next-translate/useTranslation";

const NoPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="mt-10">
        <h2 className="text-white">{t("common:404")}</h2>

        <div className="flex items-end">
          <button>
            <Link passHref href={"/"}>
              {t("common:back")}
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NoPage;
