import store from '..';
import { PokeListMeta } from '../../interfaces/Pokemon';
import { GlobalListParams } from '../../interfaces/ResReqModel';
import { getPokemons } from '../../utils/api';
import {
  ERROR, GET, GET_LOADING, PokemonActions
} from './types';

const dispatch = store.dispatch;

export const setErrorMessage = (message: string): PokemonActions => ({
  type: ERROR,
  data: message
});

export const setGetLoading = (loading: boolean): PokemonActions => ({
  type: GET_LOADING,
  data: loading
});

export const fetchPokemons = async (params: GlobalListParams): Promise<PokemonActions> => {
  dispatch(setGetLoading(true));

  try {
    const res = await getPokemons(params);

    const meta: PokeListMeta = {
      count: res.data.count,
      next: res.data.next,
      previous: res.data.previous
    };

    return {
      type: GET,
      data: res.data.results,
      meta
    };
  } catch (err) {
    return setErrorMessage(err.response ? err.response.message : 'Failed get pokemons');
  } finally {
    dispatch(setGetLoading(false));
  }
};
