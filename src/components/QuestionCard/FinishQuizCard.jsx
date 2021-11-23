import { Heading, VStack, Button, Box, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BsCheck } from "react-icons/bs";
import { useQuiz } from "../../context/Quiz";

const FinishQuizCard = ({ t }) => {
  const { dispatch } = useQuiz();

  return (
    <VStack spacing={5}>
      <Flex align="center" gridGap={2}>
        <Heading color="purple.600">{t("finalQuestion.title")}</Heading>
        <Flex
          border="4px solid"
          borderColor="purple.600"
          borderRadius="lg"
          w={30}
          h={30}
          align="center"
          justify="center"
        >
          <Icon as={BsCheck} color="purple.600" boxSize="24px" />
        </Flex>
      </Flex>
      <Box borderRadius="md" width="100%" height="250px" overflow="hidden">
        <Image src="/final_question.gif" width="300px" height="255px" />
      </Box>
      <Link href="/quiz/resultados">
        <Button
          colorScheme="purple"
          onClick={() => dispatch({ type: "addScore" })}
        >
          {t("finalQuestion.btn")}
        </Button>
      </Link>
    </VStack>
  );
};

export default FinishQuizCard;
