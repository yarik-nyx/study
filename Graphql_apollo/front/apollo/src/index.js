import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: cache
})
root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
);

