import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../config/theme';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI!,
  cache: new InMemoryCache(),
  headers: {
    'x-token': process.env.REACT_APP_GRAPHQL_HEADER!,
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ApolloProvider>
  );
};

export default Providers;
