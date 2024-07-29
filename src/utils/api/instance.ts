import axios from 'axios';

import { LOCAL_STORAGE } from '../constants/localStorage';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.TOKEN)}`
  }
});
