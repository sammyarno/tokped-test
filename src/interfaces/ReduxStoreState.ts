import { RouterState } from 'connected-react-router';
import {
  PokeListMeta, Pokemon, PokeSimple, PokeStorage
} from './Pokemon';

export interface PokemonState {
  getLoading: boolean;
  getDetailLoading: boolean;
  catchLoading: boolean;
  data: PokeSimple[];
  meta: PokeListMeta;
  selected: Pokemon;
  errorMessage: string;
}

export interface AccountState extends PokeStorage {
  errorMessage: string
}

export default interface ReduxStore {
  router: RouterState;
  pokemon: PokemonState;
  account: AccountState;
}
