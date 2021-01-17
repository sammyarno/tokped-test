export interface PokeSimple {
  url: string;
  name: string;
}

export interface PokeListMeta {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface PokeType {
  slot: number;
  name: string;
}
export interface PokeStat {
  name: string;
  value: number;
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokeType[];
  moves: string[];
  stats: PokeStat[];
  image: string;
}
