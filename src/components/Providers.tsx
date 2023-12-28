import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "../config/theme";

const client = new ApolloClient({
  uri: "https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-token": process.env.REACT_APP_GRAPHQL_HEADER!,
  },
});

const theme = extendTheme({ colors });

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ApolloProvider>
  );
};

export default Providers;
