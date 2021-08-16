import React from "react";
import "./matchMedia.mock";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";

const AllTheProviders = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
