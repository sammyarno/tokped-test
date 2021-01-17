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

export const setDefaultStore = (): void => {
  const data: PokeStorage = {
    data: [],
    total: 0
  };

  localStorage.setItem(storeName, JSON.stringify(data));
};

// export const setCookie = (val): void => {
//   const jwt = authDecrypt(token);

//   const date = new Date(0);
//   date.setUTCSeconds(jwt.exp);

//   Cookies.set(authCookieName, token, {
//     expires: date
//   });
// };
