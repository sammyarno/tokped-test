import axios, { AxiosResponse } from 'axios';
import { GlobalListParams } from '../interfaces/ResReqModel';

const API = process.env.REACT_APP_API_URL;

// Auth
export const getPokemons = async (params: GlobalListParams): Promise<AxiosResponse> => {
  const result = await axios.get(`${API}/pokemon`, { params });
  return result;
};
