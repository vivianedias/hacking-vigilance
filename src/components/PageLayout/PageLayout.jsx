import { Navbar, Footer } from "../";
import { Box } from "@chakra-ui/react";

const PageLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Box as="section" bgColor="gray.100" p="20px">
        {children}
      </Box>
      <Footer />
    </main>
  );
};

export default PageLayout;
