import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
