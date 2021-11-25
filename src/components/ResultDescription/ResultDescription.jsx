import PropTypes from "prop-types";
import Image from "next/image";
import { Heading, VStack, Box, Text } from "@chakra-ui/react";

const ResultDescription = ({ title, img, subtitle, description, footnote }) => {
  return (
    <VStack maxW="350px" spacing={7}>
      <Heading size="xl" color="purple.600" align="center">
        {title}
      </Heading>
      <Box borderRadius="lg" overflow="hidden" height="200px" width="100%">
        <Image src={img} height="215px" width="320px" />
      </Box>
      <VStack spacing={3}>
        <Text fontWeight={700} color="gray.600" align="center" maxW="260px">
          {subtitle}
        </Text>
        <Text color="gray.600" align="center">
          {description}
        </Text>
        <Text color="gray.600" fontWeight={700} align="center">
          {footnote}
        </Text>
      </VStack>
    </VStack>
  );
};

export default ResultDescription;

ResultDescription.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footnote: PropTypes.string.isRequired,
};
