import { useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { VStack, Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { PageLayout, QuestionCard } from "../../components";
import api from "../../utils/api";

const QuestionFromQuiz = ({ question }) => {
  const { t } = useTranslation("quiz");
  const [selectedAnswer, setAnswer] = useState({});

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
            selectedAnswer={selectedAnswer}
            setAnswer={setAnswer}
            t={t}
            {...question}
          />
          <HStack>
            {/* <IconButton
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
          /> */}
          </HStack>
        </VStack>
      </PageLayout>
    </div>
  );
};

export default QuestionFromQuiz;

export async function getServerSideProps({ params, locale }) {
  const { id } = params;
  const { HOST } = process.env;
  const question = await api(`${HOST}/api/quiz/${id}`);

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "index",
        "quiz",
        "navbar",
        "footer",
      ])),
      question,
    },
  };
}
