import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import { UserProvider } from "@auth0/nextjs-auth0";
import "@fontsource/space-mono";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
