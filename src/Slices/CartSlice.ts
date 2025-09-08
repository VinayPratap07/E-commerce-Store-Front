import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] as { id: number; quantity?: number }[],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = {
        id: action.payload,
        quantity: 1,
      };
      state.products.push(product);
    },
    removeFromCart: () => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
