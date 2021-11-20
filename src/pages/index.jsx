import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageLayout } from "../components";

export default function Home({ envs }) {
  const { t } = useTranslation("index");
  console.log({ envs: JSON.parse(envs) });
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

export async function getStaticProps({ locale }) {
  const { AIRTABLE_API_KEY, ...rest } = process.env;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index", "navbar", "footer"])),
      envs: JSON.stringify(rest),
    },
  };
}
