import Image from "next/image";
import Link from "next/link";
import { VStack, Text, Flex, Button } from "@chakra-ui/react";

const ToolsCard = ({ img, name, knowMoreLink, installLink, t }) => {
  return (
    <VStack spacing={3}>
      <Text color="gray.600">{name}</Text>
      <Flex
        borderRadius="lg"
        height="115px"
        overflow="hidden"
        width="100%"
        justify="center"
      >
        <Image src={img} width="170px" height="120px" />
      </Flex>
      <Flex gridGap={3}>
        <a href={installLink}>
          <Button colorScheme="purple">{t("tools.installBtn")}</Button>
        </a>
        <Link href={knowMoreLink}>
          <Button variant="outline" colorScheme="purple">
            {t("tools.knowMoreBtn")}
          </Button>
        </Link>
      </Flex>
    </VStack>
  );
};

export default ToolsCard;
