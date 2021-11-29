import { Navbar, Footer } from "../";
import { Box, Flex } from "@chakra-ui/react";

const PageLayout = ({ children }) => {
  return (
    <Box as="main">
      <Navbar />
      <Flex
        as="section"
        bgColor="gray.100"
        py={9}
        px={6}
        minH="calc(100vh - 260px)"
        justify="center"
      >
        {children}
      </Flex>
      <Footer />
    </Box>
  );
};

export default PageLayout;
