import Image from "next/image";
import Link from "next/link";
import { VStack, Text, Box, Flex, Button } from "@chakra-ui/react";

const ToolsCard = ({ img, name, knowMoreLink, installLink, t }) => {
  return (
    <VStack>
      <Text color="gray.600">{name}</Text>
      <Box borderRadius="lg" height="115px" overflow="hidden" width="100%">
        <Image src={img} width="170px" height="120px" />
      </Box>
      <Flex>
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
