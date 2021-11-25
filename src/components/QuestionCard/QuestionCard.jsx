import { useState } from "react";
import PropTypes from "prop-types";
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
  subject,
  t,
  selectedAnswer,
  setAnswer,
}) => {
  const [imgSrc] = img;

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
      <ImageWrapper src={imgSrc.url} width="300" height="190" />
      <Grid
        gap={3}
        templateRows="repeat(2, 64px)"
        templateColumns="repeat(2, 144px)"
        justifyContent="center"
      >
        {answers.map(({ text, ...rest }, i) => {
          return (
            <GridItem key={rest.id}>
              <Button
                height="64px"
                width="144px"
                bg="purple.600"
                color="white"
                variant="solid"
                whiteSpace="normal"
                wordwrap="break-word"
                isActive={selectedAnswer.id === rest.id}
                onClick={() => setAnswer(rest)}
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

QuestionCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired,
  subject: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.object,
  setAnswer: PropTypes.func.isRequired,
};
