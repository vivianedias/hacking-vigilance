import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  VStack,
  Box,
  HStack,
  IconButton,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { PageLayout, QuestionCard } from "../../components";
import getQuestion from "../api/quiz/[id]";
import { TOTAL_QUESTIONS } from "../../utils/constants";

const QuestionFromQuiz = ({ question, currentQuestion, totalQuestions }) => {
  const { t } = useTranslation("quiz");

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
          <QuestionCard t={t} {...question} />
          <HStack>
            <Button
              disabled={currentQuestion <= 1}
              aria-label={t("ariaLabel.nextQuestion")}
            >
              <Link href={`/quiz/${currentQuestion - 1}`}>
                <ArrowBackIcon />
              </Link>
            </Button>
            <Text color="purple.600">
              {currentQuestion} / {totalQuestions}
            </Text>
            <Button
              aria-label={t("ariaLabel.previousQuestion")}
              disabled={currentQuestion >= totalQuestions}
            >
              <Link href={`/quiz/${currentQuestion + 1}`}>
                <ArrowForwardIcon />
              </Link>
            </Button>
          </HStack>
        </VStack>
      </PageLayout>
    </div>
  );
};

export default QuestionFromQuiz;

export async function getServerSideProps({ params, locale, req, res }) {
  const { id } = params;
  const question = await getQuestion(id);

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "index",
        "quiz",
        "navbar",
        "footer",
      ])),
      question,
      totalQuestions: TOTAL_QUESTIONS,
      currentQuestion: Number(id),
    },
  };
}
