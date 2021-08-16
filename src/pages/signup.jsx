import Head from "next/Head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageLayout } from "../components";

const Signup = () => {
  const { t } = useTranslation("signup");

  return (
    <div>
      <Head>
        <title>Hackeando a Vigilância</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>{t("title")}</PageLayout>
    </div>
  );
};

export default Signup;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["signup", "navbar", "footer"])),
    },
  };
}
