import axios from 'axios';
import { root } from './config';

export const api = Object.freeze({
  getShopItems: async (search) => {
    const res = await axios.get(`${root}/shopItems/${search}`);
    return res.data;
  },
  getQuestions: async (search) => {
    const res = await axios.get(`${root}/questions/${search}`);
    return res.data;
  },
});
