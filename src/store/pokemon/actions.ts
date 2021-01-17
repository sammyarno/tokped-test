import store from '..';
import { setStore } from '../../helpers/Storage';
import {
  PokeListMeta, Pokemon, PokeStat, PokeStorageData, PokeType
} from '../../interfaces/Pokemon';
import { GlobalListParams } from '../../interfaces/ResReqModel';
import { getPokemonDetail, getPokemons } from '../../utils/api';
import {
  ERROR, GET, GET_DETAIL, GET_DETAIL_LOADING, GET_LOADING, CATCH_POKEMON, PokemonActions, CATCH_LOADING
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

export const setGetDetailLoading = (loading: boolean): PokemonActions => ({
  type: GET_DETAIL_LOADING,
  data: loading
});

export const setCatchLoading = (loading: boolean): PokemonActions => ({
  type: CATCH_LOADING,
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

export const fetchPokeDetail = async (name: string): Promise<PokemonActions> => {
  dispatch(setGetDetailLoading(true));

  try {
    const res = await getPokemonDetail(name);

    const data: Pokemon = {
      id: res.data.id,
      name: res.data.name,
      image: res.data.sprites.front_default,
      moves: res.data.moves.map((x: any): string => x.move.name).sort(),
      stats: res.data.stats.map((x: any): PokeStat => ({
        name: x.stat.name,
        value: x.base_stat
      })),
      types: res.data.types.map((x: any): PokeType => ({
        slot: x.slot,
        name: x.type.name
      }))
    };

    return {
      type: GET_DETAIL,
      data
    };
  } catch (err) {
    return setErrorMessage(err.response ? err.response.message : 'Failed get pokemon detail');
  } finally {
    dispatch(setGetDetailLoading(false));
  }
};

export const checkSameNick = (nickname: string): boolean => {
  const storage = store.getState().account;
  let isError = false;

  storage.data.map((x: PokeStorageData) => {
    if (x.nickName === nickname) {
      isError = true;
    }

    return x;
  });

  return isError;
};

export const catchPokemon = (poke: PokeStorageData): PokemonActions => {
  const storage = store.getState().account;

  if (!checkSameNick(poke.nickName)) {
    storage.total += 1;
    storage.data.push(poke);

    setStore(storage);
  }

  return {
    type: CATCH_POKEMON
  };
};
