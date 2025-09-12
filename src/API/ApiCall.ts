import axios from "axios";
import { store } from "../Store/Store";

const ACCESS_KEY = "SfnQPjSaLq9_Iq7wBbBT77jit3w_teT4apUGYhYD5lk"; //Hero Image API key

export const heroImageApi = async () => {
  const res = await axios.get(
    `https://api.unsplash.com/photos/random?query=fashion&count=3&orientation=landscape&client_id=${ACCESS_KEY}`
  );
  return res.data;
};

//Dummy Json api
export const productApi = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data;
};

//DummyJson to get a single product by id
export const productById = async (id: string) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res.data;
};

//Dummy json to create a cart
export const createCart = async () => {
  const state = store.getState();
  const res = await axios.post("https://dummyjson.com/carts/add", {
    userId: state.cart.userId,
    products: state.cart.products,
  });
  console.log(res.data);
  return res.data;
};

//Updating the cart
export const updateCart = async () => {
  const state = store.getState();
  await createCart();
  const res = await axios.put(
    `https://dummyjson.com/carts/${state.cart.userId}`,
    {
      userId: state.cart.userId,
      products: state.cart.products,
    }
  );
  console.log("Cart synced:", res.data);
};
