import { Action } from 'redux';
import { PokeStorage } from '../../interfaces/Pokemon';

export const SET_STORE = '@@account/SET_STORE';
export const GET_STORE = '@@account/GET_STORE';

interface SetStoreAction extends Action {
  type: typeof SET_STORE;
  data: PokeStorage;
}

interface GetStoreAction extends Action {
  type: typeof GET_STORE;
}

export type AccountActions = SetStoreAction | GetStoreAction;
