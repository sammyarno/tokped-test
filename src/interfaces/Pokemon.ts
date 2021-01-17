export interface PokeSimple {
  url: string;
  name: string;
}

export interface PokeListMeta {
  count: number;
  next: string | null;
  previous: string | null;
}
