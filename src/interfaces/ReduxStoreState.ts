import { RouterState } from 'connected-react-router';
import { PokeListMeta, Pokemon, PokeSimple } from './Pokemon';

export interface PokemonState {
  getLoading: boolean;
  getDetailLoading: boolean;
  data: PokeSimple[];
  meta: PokeListMeta;
  selected: Pokemon;
  errorMessage: string;
}

export default interface ReduxStore {
  router: RouterState;
  pokemon: PokemonState;
}
