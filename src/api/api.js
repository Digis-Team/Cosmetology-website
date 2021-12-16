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
  postOrders: async (userEmail) => {
    const pushShopItems = () => {
      const cartList = JSON.parse(localStorage.getItem('cartList'));
      const userList = [];
      cartList.forEach((item) => userList.push({ orderId: item.id, amount: item.amount }));
      return userList;
    };

    const order = { userMail: userEmail, shopItems: pushShopItems() };
    const res = axios.post(`${root}/orders`, order);

    return res;
  },
});
