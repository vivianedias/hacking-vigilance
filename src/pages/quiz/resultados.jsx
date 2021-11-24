import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Heading, Text, VStack, Flex, Button } from "@chakra-ui/react";

import { PageLayout, SuggestionCard } from "../../components";
import { useQuiz } from "../../context/Quiz";
import { TOTAL_QUESTIONS } from "../../utils/constants";
import api from "../../utils/api";

const Results = ({ results, translation }) => {
  const { t } = useTranslation("results");
  const { state } = useQuiz();
  const router = useRouter();

  // useEffect(() => {
  //   const allAnswersSelected = state.answers.length === TOTAL_QUESTIONS;
  //   if (!allAnswersSelected) return router.push("/quiz/pergunta/1");
  // });

  return (
    <main>
      <Head>
        <title>Hackeando a Vigilância</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <VStack spacing={7}>
          <Flex p={2} bg="purple.100" borderRadius="lg" width="fit-content">
            <Heading color="purple.600" as="h1" size="md">
              {t("score")} {state.score.overallScore}pts
            </Heading>
          </Flex>
          <VStack bg="white" borderRadius="lg" p={5} pb={10}>
            <Heading
              size="xl"
              as="h1"
              color="purple.600"
              align="center"
              maxW="350px"
            >
              {t("title")}
            </Heading>
            <Text align="center" maxW="300px">
              {t("subtitle")}
            </Text>
            <VStack width="300px" spacing={10}>
              {results.map(
                ({
                  img: [imgSrc],
                  title,
                  tags,
                  blockquoteTitle,
                  blockquoteDescription,
                  id,
                  tools,
                }) => {
                  return (
                    <SuggestionCard
                      content={{
                        title: blockquoteTitle,
                        description: blockquoteDescription,
                      }}
                      t={t}
                      img={imgSrc}
                      title={title}
                      tags={tags}
                      key={id}
                      tools={tools}
                    />
                  );
                }
              )}
            </VStack>
          </VStack>
          <VStack spacing={3}>
            <Heading color="gray.600" size="lg" align="center" maxW="350px">
              {t("moreDetails")}
            </Heading>
            <Text align="center" maxW="350px" color="gray.600">
              <Text as="span" color="purple.600" fontWeight={700}>
                {t("reportTextBold")}{" "}
              </Text>
              {t("reportText")}
            </Text>
            <Button variant="solid" colorScheme="purple">
              {t("btnReport")}
            </Button>
          </VStack>
        </VStack>
      </PageLayout>
    </main>
  );
};

export default Results;

export async function getServerSideProps({ locale }) {
  const { HOST } = process.env;
  const results = await api(`${HOST}/api/quiz/results`);

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "navbar",
        "footer",
        "results",
      ])),
      results,
    },
  };
}
