import axios from 'axios';
import { root } from './config';

export const api = Object.freeze({
  getShopItems: async (search) => {
    let res;
    try {
      res = await axios.get(`${root}/shopItems${search}`);
    } catch (err) {
      console.error(err);
    }
    return res.data;
  },
  getQuestions: async (search) => {
    let res;
    try {
      res = await axios.get(`${root}/questions${search}`);
    } catch (err) {
      console.error(err);
    }
    return res.data;
  },
  createOrder: (userEmail) => {
    const cartList = JSON.parse(localStorage.getItem('cartList'));
    const shopItems = cartList.map((item) => ({ shopItemId: item.id, amount: item.amount }));
    const order = { userEmail, shopItems };
    const res = axios.post(`${root}/orders`, order);

    return res;
  },
});
