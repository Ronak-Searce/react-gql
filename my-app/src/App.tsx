import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import CreateUmpire from "./component/createUmpire";

const client = new ApolloClient({
  uri: "http://localhost:8080/query", // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Umpire Management</h1>
        <CreateUmpire />
      </div>
    </ApolloProvider>
  );
};

export default App;
