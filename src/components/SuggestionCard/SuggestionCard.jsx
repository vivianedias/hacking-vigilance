import {
  Flex,
  Box,
  VStack,
  HStack,
  Tag,
  Text,
  IconButton,
  useDisclosure,
  Collapse,
  Divider,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Image from "next/image";
import NextLink from "next/link";

const SuggestionCard = ({ img, title, tags, children, t, content }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box width="300px" rounded="md" shadow="md">
      <VStack>
        <Image src={img} width="94px" height="94px" />
        <Text fontSize="sm" fontWeight={700}>
          {title}
        </Text>
        <HStack>
          {tags.map((tag, i) => (
            <Tag size="sm" key={`suggestion-card-tag-$i{}`} variant="solid">
              {tag}
            </Tag>
          ))}
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          <Flex
            gridGap="5px"
            flexDir="column"
            p="15px"
            bgColor="purple.100"
            align="center"
          >
            <Text color="purple.600" fontSize="sm" fontWeight={700}>
              {content.title}
            </Text>
            <Text lineHeight="20px" align="center" fontSize="sm">
              {content.description}
            </Text>
          </Flex>
          <Box>{children}</Box>
          <Flex
            direction="column"
            gridGap="18px"
            justify="center"
            paddingX="20px"
            align="center"
          >
            <Divider />
            <Box>
              <Text align="center" fontSize="sm" fontWeight={700}>
                {t("plugins.options")}
              </Text>
              <Text color="purple.600" align="center" fontSize="sm">
                {t("plugins.access")}{" "}
                <Link as="span">
                  <NextLink href="/plugins">{t("plugins.link")}</NextLink>
                </Link>
              </Text>
            </Box>
            <Box>
              <Text align="center" fontSize="sm" fontWeight={700}>
                {t("blog.subject")}
              </Text>
              <Text color="purple.600" align="center" fontSize="sm">
                {t("blog.access")}{" "}
                <Link as="span">
                  <NextLink href="/blog">{t("blog.link")}</NextLink>
                </Link>
              </Text>
            </Box>
          </Flex>
        </Collapse>
        <IconButton
          aria-label={t("ariaLabel.chevron")}
          icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={onToggle}
        />
      </VStack>
    </Box>
  );
};

export default SuggestionCard;
