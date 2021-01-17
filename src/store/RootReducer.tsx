import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import PokemonReducer from './pokemon/reducer';

const rootReducer = (history: History<any>): any => combineReducers({
  router: connectRouter(history),
  pokemon: PokemonReducer
});

export default rootReducer;
