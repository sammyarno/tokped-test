import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import {
  ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import store, { history } from './store';

import App from './containers/App';

import './plugins/FontAwesome';

import './styles/index.scss';
import { setStorage } from './store/account/actions';

const errorLink = onError(({
  graphQLErrors
}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({
      message
    }) => {
      console.log(`GraphQL error: ${message}`);
      return message;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql'
  })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

store.dispatch(setStorage());

ReactDOM.render(
  <Provider store={store as any}>
    <ConnectedRouter history={history}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
