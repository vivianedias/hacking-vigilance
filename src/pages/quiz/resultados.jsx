import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageLayout, SuggestionCard } from "../../components";
import { Heading, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Results = () => {
  const { t } = useTranslation("results");

  return (
    <main>
      <Head>
        <title>Hackeando a Vigilância</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <VStack>
          <Heading size="lg" as="h1" color="purple.600">
            {t("title")}
          </Heading>
          <Text>{t("subtitle")}</Text>
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
