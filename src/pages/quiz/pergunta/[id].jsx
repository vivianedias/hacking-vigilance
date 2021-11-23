import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  VStack,
  Box,
  HStack,
  IconButton,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { PageLayout, QuestionCard, FinishQuizCard } from "../../../components";
import getQuestion from "../../api/quiz/[id]";
import { TOTAL_QUESTIONS } from "../../../utils/constants";
import api from "../../../utils/api";
import { useQuiz } from "../../../context/Quiz";

const QuestionFromQuiz = ({ question, currentQuestion, totalQuestions }) => {
  // const { t } = useTranslation("question");
  const [selectedAnswer, setAnswer] = useState({});
  const { state, dispatch } = useQuiz();
  const t = (param) => param;

  useEffect(() => {
    const answerFromContext = state.answers.find(
      (a) => a.questionId === question.id
    );
    setAnswer(answerFromContext || {});
  }, [currentQuestion]);

  const handlePageChange = () =>
    dispatch({ type: "setAnswer", payload: selectedAnswer });

  return (
    <div className="container">
      <Head>
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <VStack
          spacing={10}
          height="calc(100vh - 100px)"
          justifyContent="space-between"
        >
          {currentQuestion > totalQuestions ? (
            <FinishQuizCard t={t} />
          ) : (
            <>
              <QuestionCard
                t={t}
                {...question}
                selectedAnswer={selectedAnswer}
                setAnswer={setAnswer}
              />
              <HStack>
                <Button
                  disabled={currentQuestion <= 1}
                  aria-label={t("ariaLabel.nextQuestion")}
                  onClick={handlePageChange}
                >
                  <Link href={`/quiz/pergunta/${currentQuestion - 1}`}>
                    <ArrowBackIcon />
                  </Link>
                </Button>
                <Text color="purple.600">
                  {currentQuestion} / {totalQuestions}
                </Text>
                <Button
                  aria-label={t("ariaLabel.previousQuestion")}
                  disabled={!Boolean(selectedAnswer.id)}
                  onClick={handlePageChange}
                >
                  <Link href={`/quiz/pergunta/${currentQuestion + 1}`}>
                    <ArrowForwardIcon />
                  </Link>
                </Button>
              </HStack>
            </>
          )}
        </VStack>
      </PageLayout>
    </div>
  );
};

export default QuestionFromQuiz;

export async function getServerSideProps({ params, req, res, locale }) {
  const { id } = params;
  const { HOST } = process.env;
  const question = await api(`${HOST}/api/quiz/${id}`);

  return {
    props: {
      // ...(await serverSideTranslations(locale, [
      //   "question",
      //   "navbar",
      //   "footer",
      // ])),
      question,
      totalQuestions: TOTAL_QUESTIONS,
      currentQuestion: Number(id),
    },
  };
}
