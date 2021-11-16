import { useEffect, useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageLayout, QuestionCard } from "../components";
import { VStack, Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const questions = [
  {
    title:
      "Você utiliza extensões (Plugins) do navegador que melhoram sua segurança?",
    img: "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256__480.jpg",
    subject: "browser",
    id: 0,
    answers: [
      {
        id: 0,
        text: "Sim, odeio anúncios",
        score: 1,
      },
      {
        id: 1,
        text: "Não, não sei o que é isso",
        score: 0,
        suggestion: ["adBlocker", "privacyBadger"],
      },
      {
        text: "Sim, odeio anúncios",
        score: 1,
        id: 2,
      },
      {
        text: "Não, não sei o que é isso",
        score: 0,
        suggestion: ["adBlocker", "privacyBadger"],
        id: 3,
      },
    ],
  },
  {
    title: "Você utiliza VPN?",
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F10%2F07%2Fcat-with-big-eyes-1163002525-2000.jpg",
    id: 1,
    subject: "browser",
    answers: [
      {
        text: "Sim, odeio anúncios",
        score: 1,
        id: 4,
      },
      {
        text: "Não, não sei o que é isso",
        score: 0,
        suggestion: ["adBlocker", "privacyBadger"],
        id: 5,
      },
    ],
  },
];

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

      <PageLayout>
        <VStack
          spacing={10}
          height="calc(100vh - 100px)"
          justifyContent="space-between"
        >
          <QuestionCard
            selectedAnswers={selectedAnswers}
            setAnswer={setAnswer}
            t={t}
            {...questions[questionIndex]}
          />
          <HStack>
            <IconButton
              aria-label={t("ariaLabel.nextQuestion")}
              icon={<ArrowBackIcon />}
              disabled={questionIndex < 1}
              onClick={() => setQuestionIndex((prevState) => prevState - 1)}
            />
            <Text color="purple.600">
              {questionIndex + 1} / {questions.length}
            </Text>
            <IconButton
              disabled={questionIndex >= questions.length - 1}
              aria-label={t("ariaLabel.previousQuestion")}
              icon={<ArrowForwardIcon />}
              onClick={() => setQuestionIndex((prevState) => prevState + 1)}
            />
          </HStack>
        </VStack>
      </PageLayout>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "index",
        "quiz",
        "navbar",
        "footer",
      ])),
      questions,
    },
  };
}
