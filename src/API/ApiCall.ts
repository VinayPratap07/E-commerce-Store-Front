import axios from "axios";

const ACCESS_KEY = ""; //Hero Image API key

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
