import {
  PokemonActions, GET, GET_LOADING, ERROR
} from './types';
import { PokemonState } from '../../interfaces/ReduxStoreState';
import { PokemonInitial } from '../../consts/ReduxInitialStore';

const cartReducer = (
  state = PokemonInitial,
  action: PokemonActions
): PokemonState => {
  switch (action.type) {
    case GET_LOADING:
      return {
        ...state,
        getLoading: action.data
      };
    case GET:
      return {
        ...state,
        data: action.data,
        meta: action.meta
      };
    case ERROR:
      return {
        ...state,
        errorMessage: action.data
      };
    default:
      return state;
  }
};

export default cartReducer;
