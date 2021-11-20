import { useEffect, useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageLayout } from "../../components";

export default function Quiz({ questions }) {
  const { t } = useTranslation("quiz");
  const [selectedAnswers, setAnswer] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["quiz", "navbar", "footer"])),
      questions,
    },
  };
}
