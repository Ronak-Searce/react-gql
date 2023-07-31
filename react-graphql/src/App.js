import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import CreateUmpireForm from "./component/createUmpire";

const client = new ApolloClient({
  uri: "http://localhost:8080/query", // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Create Umpire</h1>
        <CreateUmpireForm />
        {/* Other components */}
      </div>
    </ApolloProvider>
  );
};

export default App;
