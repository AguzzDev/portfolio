import Link from "next/link";

import { Layout } from "components/Layout";
import useTranslation from "next-translate/useTranslation";

const NoPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title="Agustin Ribotta">
      <div>
        <h2 className="text-white">{t("common:404")}</h2>
        <button>
          <Link passHref href={"/"}>
            {t("common:back")}
          </Link>
        </button>
      </div>
    </Layout>
  );
};

export default NoPage;
