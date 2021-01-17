/* eslint-disable no-underscore-dangle */
import { compose } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

export const composeEnhancers = (
  process.env.NODE_ENV === 'development'
  && window
  && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.__REDUX_DEVTOOLS_EXTENSION__)
) || compose;
