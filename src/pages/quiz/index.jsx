import { useEffect, useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageLayout } from "../../components";

export default function Quiz() {
  const { t } = useTranslation("quiz");

  return (
    <div className="container">
      <Head>
        <title>Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>Quiz</PageLayout>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["quiz", "navbar", "footer"])),
    },
  };
}
