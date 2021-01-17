import { Action } from 'redux';
import { PokeListMeta, Pokemon, PokeSimple } from '../../interfaces/Pokemon';

export const ANY = '@pokemon/ANY';
export const GET_LOADING = '@@pokemon/GET_LOADING';
export const GET_DETAIL_LOADING = '@@pokemon/GET_DETAIL_LOADING';
export const GET = '@@pokemon/GET';
export const GET_DETAIL = '@@pokemon/GET_DETAIL';
export const ERROR = '@@pokemon/ERROR';

interface AnyAction extends Action {
  type: typeof ANY;
}

interface GetLoadingAction extends Action {
  type: typeof GET_LOADING;
  data: boolean;
}

interface GetDetailLoadingAction extends Action {
  type: typeof GET_DETAIL_LOADING;
  data: boolean;
}

interface GetAction extends Action {
  type: typeof GET;
  data: PokeSimple[];
  meta: PokeListMeta;
}

interface GetDEtailAction extends Action {
  type: typeof GET_DETAIL;
  data: Pokemon;
}

interface ErrorAction extends Action {
  type: typeof ERROR;
  data: string;
}

export type PokemonActions = AnyAction | GetLoadingAction | GetDetailLoadingAction | GetAction | GetDEtailAction | ErrorAction;
