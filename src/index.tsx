import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
  uri: "https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-token": "fe-test-2023",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
