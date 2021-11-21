import { Navbar, Footer } from "../";
import { Box } from "@chakra-ui/react";

const PageLayout = ({ children }) => {
  return (
    <Box as="main">
      <Navbar />
      <Box as="section" bgColor="gray.100" p={9} minH="calc(100vh - 260px)">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default PageLayout;
