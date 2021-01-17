import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';

import App from './containers/App';

import './plugins/FontAwesome';

import './styles/index.scss';
import { setStorage } from './store/account/actions';

store.dispatch(setStorage());

ReactDOM.render(
  <Provider store={store as any}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
