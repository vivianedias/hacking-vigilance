import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageLayout } from "../components";

import { CollapseContent } from "../components";

const Plugins = () => {
  return (
    <main>
      <Head>
        <title>Hackeando a Vigilância</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <CollapseContent items={[{ title: "Mobile" }]} />
      </PageLayout>
    </main>
  );
};

export default Plugins;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "index",
        "navbar",
        "footer",
        "plugins",
      ])),
    },
  };
}
