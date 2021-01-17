import { Action } from 'redux';
import { PokeStorage } from '../../interfaces/Pokemon';

export const SET_STORE = '@@account/SET_STORE';
export const GET_STORE = '@@account/GET_STORE';
export const ERROR = '@@account/ERROR';
interface SetStoreAction extends Action {
  type: typeof SET_STORE;
  data: PokeStorage;
}
interface GetStoreAction extends Action {
  type: typeof GET_STORE;
}
interface ErrorAction extends Action {
  type: typeof ERROR;
  data: string;
}

export type AccountActions = SetStoreAction | GetStoreAction | ErrorAction;
