import {
  AccountActions, SET_STORE
} from './types';
import { AccountInitial } from '../../consts/ReduxInitialStore';
import { PokeStorage } from '../../interfaces/Pokemon';

const accountReducer = (
  state = AccountInitial,
  action: AccountActions
): PokeStorage => {
  switch (action.type) {
    case SET_STORE:
      return action.data;
    default:
      return state;
  }
};

export default accountReducer;
