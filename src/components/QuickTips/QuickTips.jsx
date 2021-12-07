import { Text, Link, Flex, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

const Tip = ({ img, context, key }) => {
  return (
    <VStack
      borderRadius="lg"
      bg="white"
      overflow="hidden"
      width="250px"
      shadow="md"
      key={key}
    >
      <Flex
        align="flex-end"
        justify="center"
        bg="purple.100"
        height="170px"
        pb={3}
        width="100%"
      >
        <Image src={img} width="128" height="128" />
      </Flex>
      <Text align="center" color="gray.500" fontWeight={600} p={3}>
        {context}
      </Text>
    </VStack>
  );
};

const QuickTips = ({ t }) => {
  const tips = [{ img: "/tips.png", context: t("quickTips.subtitle") }];
  return (
    <VStack bg="white" borderRadius="lg" spacing={3} px={8} py={4}>
      <Text color="gray.600" fontWeight={600} align="center">
        {t("quickTips.title.1")}{" "}
        <NextLink href="/dicas">
          <Link as="span" color="purple.600">
            {t("quickTips.title.link")}{" "}
          </Link>
        </NextLink>
        {t("quickTips.title.2")}
      </Text>
      {tips.map((props, i) => (
        <Tip {...props} key={`quick-tips-tip-${i}`} />
      ))}
    </VStack>
  );
};

export default QuickTips;
