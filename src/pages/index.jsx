import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Heading,
  VStack,
  Flex,
  Box,
  Button,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Manifest, PageLayout } from "../components";

function PresentationCard({ t }) {
  return (
    <Box>
      <Box bg="white" borderRadius="lg" p={4} maxHeight="535px" mt="70px">
        <VStack position="relative" bottom="70px">
          <Flex width="100%" height="100%" justify="center">
            <Image src="/home.png" width="250px" height="250px" />
          </Flex>
          <Text color="gray.600" fontWeight={600} align="center" fontSize="xl">
            <Text as="span" color="purple.600">
              {t("projectTitle")}{" "}
            </Text>
            {t("description.1")}{" "}
            <Text as="span" color="purple.600">
              {t("purpose")}{" "}
            </Text>
            {t("description.2")}
          </Text>
        </VStack>
      </Box>
      <VStack bgColor="purple.100" spacing={2} borderRadius="lg" p={5}>
        <Text color="gray.600" fontWeight={700} align="center" fontSize="xl">
          {t("interestedQuiz.title")}
        </Text>
        <Text color="gray.600" align="center" fontSize="lg">
          <Text as="span" color="purple.600" fontWeight={700}>
            {t("interestedQuiz.action")}{" "}
          </Text>
          {t("interestedQuiz.description")}
        </Text>
        <Button colorScheme="purple">{t("btn")}</Button>
      </VStack>
    </Box>
  );
}

export default function Home() {
  const { t } = useTranslation("index");

  return (
    <div className="container">
      <Head>
        <title>Hackeando a Vigilância</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <VStack maxW={{ base: "100%", sm: "300px" }} spacing={5}>
          <Heading as="h1" color="purple.600" align="center">
            {t("title")}
          </Heading>
          <IconButton
            icon={<ChevronDownIcon color="purple.600" />}
            variant="unstyled"
            size="2xl"
            fontSize="32px"
          />
          <PresentationCard t={t} />
          <Manifest t={t} />
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
