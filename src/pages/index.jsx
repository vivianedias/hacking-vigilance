import Head from "next/head";
import { useTranslations } from "next-intl";
import { PageLayout } from "../components";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div className="container">
      <Head>
        <title>Hackeando a Vigilância</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>{t("title")}</PageLayout>
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../../i18n/index/${locale}.json`),
        ...require(`../../i18n/layout/${locale}.json`),
      },
    },
  };
}
