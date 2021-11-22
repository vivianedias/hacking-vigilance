// import Image from "next/image";
import { useRef, useEffect } from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Icon,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  QuestionOutlineIcon,
  SearchIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import { IoExtensionPuzzleOutline, IoEyeOffSharp } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const pagesTitleAndIcon = {
  "/quiz": {
    pageTitle: "quiz",
    IconRef: QuestionOutlineIcon,
  },
  "/quiz/resultados": {
    pageTitle: "results",
  },
  "/quiz/pergunta/[id]": {
    pageTitle: "quiz",
    IconRef: QuestionOutlineIcon,
  },
  "/plugins": {
    pageTitle: "plugins",
    IconRef: IoExtensionPuzzleOutline,
  },
  "/blog": {
    pageTitle: "blog",
    IconRef: CgFileDocument,
  },
};

export default function WithSubnavigation() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { t } = useTranslation("navbar");
  const btnRef = useRef();
  const { pathname, back: goBack } = useRouter();
  const { pageTitle, IconRef } = pagesTitleAndIcon[pathname] || {};
  const isHome = pathname === "/";

  return (
    <Box as="nav">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={16}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex="1"
          display={{ base: "flex" }}
          alignItems="center"
          gridGap={3}
        >
          {isHome ? (
            <>
              <Icon as={IoEyeOffSharp} color="purple.600" boxSize={8} />
              <Text
                textAlign="left"
                fontFamily={"logo"}
                color={useColorModeValue("gray.800", "white")}
                fontSize="sm"
                width="110px"
              >
                {t("logo")}
              </Text>
            </>
          ) : (
            <IconButton
              variant="unstyled"
              onClick={goBack}
              as={ArrowBackIcon}
              color="purple.600"
              size="sm"
            />
          )}
        </Flex>

        {pageTitle ? (
          <Flex alignItems="center">
            {IconRef ? <Icon as={IconRef} mr={2} color="purple.600" /> : null}
            <Heading size="lg" color="gray.600">
              {t(`pageName.${pageTitle}`)}
            </Heading>
          </Flex>
        ) : null}

        <Stack flex="1" justify={"flex-end"} direction={"row"} align="center">
          <Flex>
            <IconButton
              ref={btnRef}
              onClick={onToggle}
              icon={<HamburgerIcon boxSize={8} color="purple.600" />}
              variant={"ghost"}
              aria-label={t("ariaLabel.hamburguer")}
            />
          </Flex>
        </Stack>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <MobileNav onToggle={onToggle} />
      </Drawer>
    </Box>
  );
}

const DesktopNav = () => {
  const { t } = useTranslation("navbar");
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS(t).map((navItem) => (
        <Box key={navItem.label}>
          <Link
            as="span"
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            <NextLink href={navItem.href}>{navItem.label}</NextLink>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ onToggle }) => {
  const { t } = useTranslation("navbar");

  return (
    <>
      <DrawerOverlay />
      <DrawerContent bg="gray.100">
        <DrawerHeader>
          <IconButton
            onClick={onToggle}
            icon={<ArrowBackIcon boxSize={7} />}
            variant="unstyled"
            aria-label={t("ariaLabel.goBack")}
            color="purple.600"
          />
        </DrawerHeader>
        <DrawerBody>
          <Stack spacing={5}>
            {NAV_ITEMS(t).map((navItem) => (
              <MobileNavItem key={navItem.label} {...navItem} />
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

const MobileNavItem = ({ label, description, IconRef, href }) => {
  return (
    <NextLink href={href}>
      <Link
        as={Flex}
        direction="column"
        shadow="md"
        borderRadius="md"
        height={90}
        justifyContent="center"
        px={5}
        py={2.5}
        bg="white"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Flex gridGap="2" alignItems="center" justifyContent="flex-start">
          <Text color="purple.600" fontSize="2xl">
            {label}
          </Text>
          <Icon color="purple.600" as={IconRef} w={5} h={5} />
        </Flex>
        <Text color="gray.400">{description}</Text>
      </Link>
    </NextLink>
  );
};

const NAV_ITEMS = (t) => [
  {
    label: t("quiz.label"),
    href: "/quiz",
    description: t("quiz.description"),
    IconRef: QuestionOutlineIcon,
  },
  {
    label: t("plugins.label"),
    href: "/plugins",
    description: t("plugins.description"),
    IconRef: IoExtensionPuzzleOutline,
  },
  {
    label: t("blog.label"),
    href: "/blog",
    description: t("blog.description"),
    IconRef: CgFileDocument,
  },
];
