export interface PokeSimple {
  url: string;
  name: string;
}

export interface PokeListMeta {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface PokeSimpleGql extends PokeSimple {
  image: string;
}

export interface PokeListGqlData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokeSimpleGql[];
}

export interface PokeListGql {
  pokemons: PokeListGqlData;
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

export interface PokeGqlData {
  id: number;
  name: string;
  image: {
    front_default: string;
  };
  moves: PokeGqlMove[];
  statuses: PokeGqlStatus[];
  types: PokeGqlType[];
}

export interface PokeGqlStatus {
  value: number;
  stat: {
    name: string;
  }
}

export interface PokeGqlMove {
  move: {
    name: string;
  }
}

export interface PokeGqlType {
  slot: number;
  type: {
    name: string;
  }
}

export interface PokeGql {
  pokemon: PokeGqlData;
}

export interface PokeStorage {
  total: number;
  data: PokeStorageData[];
}

export interface PokeStorageData {
  name: string;
  nicknames: string[];
}
