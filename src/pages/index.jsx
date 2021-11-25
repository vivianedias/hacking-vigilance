import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Heading, VStack, Flex, Box, Button, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { PageLayout } from "../components";

export default function Home() {
  const { t } = useTranslation("index");

  return (
    <div className="container">
      <Head>
        <title>Hackeando a Vigilância</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <VStack maxW="300px">
          <Heading color="purple.600" align="center">
            {t("title")}
          </Heading>
          <ChevronDownIcon boxSize="32px" color="purple.600" />
          <VStack bg="white" borderRadius="lg" mx={3}>
            <Box width="100%" height="100%">
              <Image src="/home.png" width="250px" height="250px" />
            </Box>
            <Text color="gray.600" fontWeight={600}>
              <Text as="span" color="purple.600">
                {t("projectTitle")}
              </Text>
              {t("description.1")}
              <Text as="span" color="purple.600">
                {t("purpose")}
              </Text>
              {t("description.2")}
            </Text>
          </VStack>
          <VStack bgColor="purple.100" mx={3} spacing={2} py={5}>
            <Text color="gray.600" fontWeight={700}>
              {t("interestedQuiz.title")}
            </Text>
            <Text color="gray.600">
              <Text as="span" color="purple.600" fontWeight={700}>
                {t("interestedQuiz.action")}{" "}
              </Text>
              {t("interestedQuiz.description")}
            </Text>
            <Button colorScheme="purple">{t("btn")}</Button>
          </VStack>
        </VStack>
      </PageLayout>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index", "navbar", "footer"])),
    },
  };
}
