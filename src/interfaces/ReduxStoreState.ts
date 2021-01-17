import { RouterState } from 'connected-react-router';
import { PokeListMeta, PokeSimple } from './Pokemon';

export interface PokemonState {
  getLoading: boolean;
  getDetailLoading: boolean;
  data: PokeSimple[];
  meta: PokeListMeta;
  selected: any;
  errorMessage: string;
}

export default interface ReduxStore {
  router: RouterState;
  pokemon: PokemonState;
}
