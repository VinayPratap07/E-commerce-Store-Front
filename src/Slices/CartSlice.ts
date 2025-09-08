import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] as { id: number; quantity?: number }[],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.products.find((p) => p.id === productId);
      if (existingProduct) {
        return;
      } else {
        state.products.push({ id: productId, quantity: 1 });
      }
    },
    removeFromCart: () => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
