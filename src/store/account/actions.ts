import { getStore, setDefaultStore } from '../../helpers/Storage';
import { AccountActions, SET_STORE } from './types';

export const setStorage = (): AccountActions => {
  const localStore = getStore();

  if (!localStore) {
    setDefaultStore();
  }

  return {
    type: SET_STORE,
    data: getStore()!
  };
};
