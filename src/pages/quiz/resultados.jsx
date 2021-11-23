import { useEffect } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Heading, Text, VStack, Flex, Button } from "@chakra-ui/react";
import { PageLayout, SuggestionCard } from "../../components";
import styled from "@emotion/styled";
import { useQuiz } from "../../context/Quiz";
import { TOTAL_QUESTIONS } from "../../utils/constants";
import { useRouter } from "next/router";

const Results = () => {
  const { t } = useTranslation("results");
  const { state } = useQuiz();
  const router = useRouter();

  useEffect(() => {
    const allAnswersSelected = state.answers.length === TOTAL_QUESTIONS;
    if (!allAnswersSelected) return router.push("/quiz/pergunta/1");
  });

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
          <VStack bg="white" borderRadius="lg" p={5}>
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
            <SuggestionCard
              content={{
                title: "Nunca mais esqueça uma senha!",
                description:
                  "Armazene senhas com segurança usando criptografia padrão do setor, digite-as automaticamente em aplicativos de desktop e use nossa extensão de navegador para fazer login em sites.",
              }}
              t={t}
              img="/security.png"
              title="Gerencie suas senhas"
              tags={["segurança", "senhas + fortes", "hackeamento"]}
            />
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "navbar",
        "footer",
        "results",
      ])),
    },
  };
}
