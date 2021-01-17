import { RouterState } from 'connected-react-router';
import ReduxStore, { AccountState, PokemonState } from '../interfaces/ReduxStoreState';

export const RouterInitial: RouterState = {
  action: 'POP',
  location: {
    hash: '',
    pathname: '',
    search: '',
    state: ''
  }
};

export const PokemonInitial: PokemonState = {
  getLoading: false,
  getDetailLoading: false,
  catchLoading: false,
  data: [],
  meta: {
    count: 0,
    next: null,
    previous: null
  },
  selected: {
    id: 0,
    name: '',
    image: '',
    moves: [],
    stats: [],
    types: []
  },
  errorMessage: ''
};

export const AccountInitial: AccountState = {
  total: 0,
  data: [],
  errorMessage: ''
};

const RootInitial: ReduxStore = {
  router: RouterInitial,
  pokemon: PokemonInitial,
  account: AccountInitial
};

export default RootInitial;
