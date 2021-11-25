import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { VStack, Text, Flex, Button } from "@chakra-ui/react";

const ToolsCard = ({ img, name, knowMoreLink, installLink, t, isApp }) => {
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
          <Button colorScheme="purple">
            {isApp ? t("tools.installBtn") : t("tools.checkBtn")}
          </Button>
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

ToolsCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  knowMoreLink: PropTypes.string,
  installLink: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  isApp: PropTypes.bool.isRequired,
};
