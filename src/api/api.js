import axios from 'axios';
import { root } from './config';

export const api = Object.freeze({
  getShopItems: async (search) => {
    const res = await axios.get(`${root}/shopItems${search}`);

    return res.data;
  },
  getQuestions: async (search) => {
    const res = await axios.get(`${root}/questions${search}`);

    return res.data;
  },
  createOrder: async (userEmail) => {
    const cartList = JSON.parse(localStorage.getItem('cartList'));
    const shopItems = cartList.map((item) => ({ shopItemId: item.id, amount: item.amount }));
    const order = { userEmail, shopItems };
    const res = axios.post(`${root}/orders`, order);

    return res;
  },
});
