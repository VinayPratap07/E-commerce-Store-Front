import axios from 'axios'

const ACCESS_KEY = "SfnQPjSaLq9_Iq7wBbBT77jit3w_teT4apUGYhYD5lk";


export const heroImageApi=async() =>{
  try {
    const res = await axios.get(
      `https://api.unsplash.com/photos/random?query=fashion&count=3&orientation=landscape&client_id=${ACCESS_KEY}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching hero image:", error);
    return null;
  }
};