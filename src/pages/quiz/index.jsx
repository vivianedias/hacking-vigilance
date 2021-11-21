import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Heading, Flex, Text, Button, Box } from "@chakra-ui/react";
import { PageLayout } from "../../components";

export default function Quiz() {
  const { t } = useTranslation("quiz");

  return (
    <Box>
      <Head>
        <title>Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <Flex direction="column" alignItems="center">
          <Box height="100%">
            <Image src={"/password.png"} width="260px" height="260px" />
          </Box>
          <Flex my={4} gridGap={2} direction="column">
            <Heading align="center" color="purple.600" width="400px">
              {t("title")}
            </Heading>
            <Text align="center" color="gray.600">
              {t("subtitle")}
            </Text>
          </Flex>
          <Link href="quiz/pergunta/1">
            <Button variant="solid" colorScheme="purple" size="lg">
              {t("button")}
            </Button>
          </Link>
        </Flex>
      </PageLayout>
    </Box>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["quiz", "navbar", "footer"])),
    },
  };
}
