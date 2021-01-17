import { Action } from 'redux';
import { PokeListMeta, PokeSimple } from '../../interfaces/Pokemon';

export const ANY = '@pokemon/ANY';
export const GET_LOADING = '@@pokemon/GET_LOADING';
export const GET = '@@pokemon/GET';
export const ERROR = '@@pokemon/ERROR';

interface AnyAction extends Action {
  type: typeof ANY;
}

interface GetLoadingAction extends Action {
  type: typeof GET_LOADING;
  data: boolean;
}

interface GetAction extends Action {
  type: typeof GET;
  data: PokeSimple[];
  meta: PokeListMeta;
}

interface ErrorAction extends Action {
  type: typeof ERROR;
  data: string;
}

export type PokemonActions = AnyAction | GetLoadingAction | GetAction | ErrorAction;
