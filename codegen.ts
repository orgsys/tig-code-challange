import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CodegenConfig } from "@graphql-codegen/cli";

const httpLink = createHttpLink({
  uri: "https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  // Add your headers here
  return {
    headers: {
      "x-token": "fe-test-2023",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const config: CodegenConfig = {
  schema: "https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
