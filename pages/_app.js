import { ChakraProvider } from "@chakra-ui/react";
import { Navbar, Footer } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
