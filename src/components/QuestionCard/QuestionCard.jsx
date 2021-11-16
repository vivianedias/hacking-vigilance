import Image from "next/image";
import {
  Heading,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  VStack,
  Box,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const ImageWrapper = styled(Image)`
  border-radius: 10px;
`;

const QuestionCard = ({
  id,
  title,
  img,
  answers,
  setAnswer,
  selectedAnswers,
  subject,
  t,
}) => {
  return (
    <VStack
      width={{
        base: "100%",
        lg: "60%",
      }}
      spacing={4}
    >
      <Box mb={4}>
        <Heading size="sm" as="h1" align="center" fontWeight={400}>
          {t(`subjects.${subject}`)}
        </Heading>
        <Heading size="lg" as="h2" color="purple.600" align="center">
          {title}
        </Heading>
      </Box>
      <ImageWrapper src={img} width="300" height="190" />
      <Grid
        gap={3}
        templateRows="repeat(2, 64px)"
        templateColumns="repeat(2, 144px)"
        justifyContent="center"
      >
        {answers.map(({ text, ...rest }, i) => {
          const selectedAnswer = selectedAnswers.find((a) => a.id === rest.id);
          return (
            <GridItem key={`question-card-btn-${i}`}>
              <Button
                height="64px"
                width="144px"
                bg="purple.600"
                color="white"
                variant="solid"
                whiteSpace="normal"
                wordWrap="break-word"
                isActive={Boolean(selectedAnswer)}
                onClick={() => {
                  const removeOldSelection = selectedAnswers.filter(
                    (a) => a.questionId !== id
                  );
                  const newAnswer = {
                    ...rest,
                    questionId: id,
                  };
                  setAnswer([...removeOldSelection, newAnswer]);
                }}
              >
                {text}
              </Button>
            </GridItem>
          );
        })}
      </Grid>
    </VStack>
  );
};

export default QuestionCard;
