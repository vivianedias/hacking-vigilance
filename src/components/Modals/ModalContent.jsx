import { useState, useEffect } from "react";
import {
  Button,
  VStack,
  Box,
  Text,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const firstStep = ({ onClick, t, onClose }) => ({
  title: (
    <Text color="gray.600" align="center">
      <Text as="span" color="purple.600">
        {t("popup.0.title.1")}{" "}
      </Text>
      {t("popup.0.title.2")}
    </Text>
  ),
  content: (
    <VStack>
      <Box borderRadius="lg" width="265px" height="155px" overflow="hidden">
        <Image src="/cookies.png" width="270" height="160" />
      </Box>
      <Text color="gray.600" fontWeight={600}>
        {t("popup.0.subtitle")}
      </Text>
    </VStack>
  ),
  buttons: (
    <>
      <Button onClick={onClick} colorScheme="purple">
        {t("popup.0.buttons.primary")}
      </Button>
      <Button onClick={onClose} variant="outline" colorScheme="purple">
        {t("popup.0.buttons.secondary")}
      </Button>
    </>
  ),
});

const secondStep = ({ onClick, t, onClose }) => ({
  title: (
    <Text color="gray.600" align="center" color="purple.600" fontSize="2xl">
      {t("popup.1.title")}
    </Text>
  ),
  content: (
    <Wrap justify="center">
      {[
        "chocolatechips_cookies",
        "chocolate_cookies",
        "white_cookies",
        "redvelvet_cookies",
      ].map((image, index) => (
        <WrapItem key={`second-step-${index}`}>
          <VStack>
            <Box
              borderRadius="lg"
              width="145px"
              height="95px"
              overflow="hidden"
            >
              <Image src={`/${image}.png`} width="150" height="100" />
            </Box>
            <Text color="gray.600" fontWeight={600} align="center">
              {t(`popup.1.subtitle.${index}`)}
            </Text>
          </VStack>
        </WrapItem>
      ))}
    </Wrap>
  ),
  buttons: (
    <>
      <Button onClick={onClick} colorScheme="purple">
        {t("popup.1.buttons.primary")}
      </Button>
    </>
  ),
});

const thirdStep = ({ onClick, t, onClose }) => ({
  title: (
    <Text color="purple.600" align="center" fontSize="3xl">
      {t("popup.2.title")}
    </Text>
  ),
  content: (
    <VStack>
      <Box borderRadius="lg" width="145px" height="145px" overflow="hidden">
        <Image src="/okay.png" width="150" height="150" />
      </Box>
      <Text color="gray.600" fontWeight={600} align="center" fontSize="2xl">
        {t(`popup.2.subtitle`)}
      </Text>
    </VStack>
  ),
  buttons: (
    <>
      <Button onClick={onClick} colorScheme="purple">
        {t("popup.2.buttons.primary")}
      </Button>
    </>
  ),
});

const fourthStep = ({ onClick, t, onClose }) => ({
  title: (
    <Text color="purple.600" align="center" fontSize="3xl">
      {t("popup.3.title")}
    </Text>
  ),
  content: (
    <VStack>
      <Box borderRadius="lg" width="245px" height="165px" overflow="hidden">
        <Image src="/split_cookie.png" width="250" height="170" />
      </Box>
      <Text color="gray.600" fontWeight={600} align="center" fontSize="lg">
        {t(`popup.3.subtitle.0`)}{" "}
        <Text as="span" color="purple.600">
          {t(`popup.3.subtitle.1`)}{" "}
        </Text>
        {t(`popup.3.subtitle.2`)}
      </Text>
    </VStack>
  ),
  buttons: (
    <>
      <Button onClick={onClose} colorScheme="purple">
        {t("popup.3.buttons.primary")}
      </Button>
    </>
  ),
});

const modalContent = [firstStep, secondStep, thirdStep, fourthStep];

export default modalContent;
