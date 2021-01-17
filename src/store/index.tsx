import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { composeEnhancers } from './Utils';
import createRootReducer from './RootReducer';
import ReduxStore from '../interfaces/ReduxStoreState';
import RootInitial from '../consts/ReduxInitialStore';

export const history = createBrowserHistory({
  basename: '/'
});
const middlewares: Middleware[] = [
  thunk,
  routerMiddleware(history)
];
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore<ReduxStore>(
  createRootReducer(history),
  RootInitial,
  enhancers
);

history.listen(() => {
  window.scrollTo(0, 0);
});

export default store;
