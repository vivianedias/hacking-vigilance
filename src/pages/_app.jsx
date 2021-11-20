import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import { QuizProvider } from "../context/Quiz";
import "@fontsource/space-mono";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <QuizProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QuizProvider>
  );
}

export default appWithTranslation(MyApp);
