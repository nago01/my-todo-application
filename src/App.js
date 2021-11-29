import './App.css';
import Todo from './Todo/Todo';
import {InMemoryCache} from "@apollo/client";
import { ApolloClient , ApolloProvider} from '@apollo/client';
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/",
  });

  return (
    <ApolloProvider client={client}>
      <Todo/>
    </ApolloProvider>
  );
}

export default App;
