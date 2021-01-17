import { getStore, setDefaultStore } from '../../helpers/Storage';
import {
  AccountActions, ERROR, SET_STORE
} from './types';

export const setErrorMessage = (message: string): AccountActions => ({
  type: ERROR,
  data: message
});

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
