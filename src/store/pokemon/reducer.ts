import {
  PokemonActions, GET, GET_LOADING, ERROR, GET_DETAIL, GET_DETAIL_LOADING, CATCH_LOADING
} from './types';
import { PokemonState } from '../../interfaces/ReduxStoreState';
import { PokemonInitial } from '../../consts/ReduxInitialStore';

const pokemonReducer = (
  state = PokemonInitial,
  action: PokemonActions
): PokemonState => {
  switch (action.type) {
    case GET_LOADING:
      return {
        ...state,
        getLoading: action.data
      };
    case GET_DETAIL_LOADING:
      return {
        ...state,
        getDetailLoading: action.data
      };
    case CATCH_LOADING:
      return {
        ...state,
        catchLoading: action.data
      };
    case GET:
      return {
        ...state,
        data: action.data,
        meta: action.meta
      };
    case GET_DETAIL:
      return {
        ...state,
        selected: action.data
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

export default pokemonReducer;
