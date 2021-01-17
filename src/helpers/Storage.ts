import { PokeStorage } from '../interfaces/Pokemon';

const storeName = 'poke';

export const getStore = (): PokeStorage | null => {
  let result: PokeStorage | null = null;
  const cookie = localStorage.getItem(storeName);

  if (cookie) {
    result = JSON.parse(cookie);
  }

  return result;
};

export const setStore = (data: PokeStorage): void => {
  localStorage.setItem(storeName, JSON.stringify(data));
};

export const setDefaultStore = (): void => {
  const data: PokeStorage = {
    data: [],
    total: 0
  };

  setStore(data);
};
