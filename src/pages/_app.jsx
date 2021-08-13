import { ChakraProvider } from "@chakra-ui/react";
import { NextIntlProvider } from "next-intl";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NextIntlProvider
        timeZone="America/Sao_Paulo"
        messages={pageProps.messages}
      >
        <Component {...pageProps} />
      </NextIntlProvider>
    </ChakraProvider>
  );
}

export default MyApp;
