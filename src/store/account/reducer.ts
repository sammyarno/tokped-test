import {
  AccountActions, ERROR, SET_STORE
} from './types';
import { AccountInitial } from '../../consts/ReduxInitialStore';
import { AccountState } from '../../interfaces/ReduxStoreState';

const accountReducer = (
  state = AccountInitial,
  action: AccountActions
): AccountState => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        errorMessage: action.data
      };
    case SET_STORE:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};

export default accountReducer;
