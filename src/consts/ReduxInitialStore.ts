import { RouterState } from 'connected-react-router';
import ReduxStore, { PokemonState } from '../interfaces/ReduxStoreState';

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
  data: [],
  meta: {
    count: 0,
    next: null,
    previous: null
  },
  selected: null,
  errorMessage: ''
};

const RootInitial: ReduxStore = {
  router: RouterInitial,
  pokemon: PokemonInitial
};

export default RootInitial;
