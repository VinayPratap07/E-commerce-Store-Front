import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  quantity?: number;
}
interface Cart {
  userId: number;
  cartId?: number | null;
  products: CartItem[];
}

const initialState: Cart = {
  userId: 1,
  products: [],
  cartId: null,
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
    addCartId: (state, action) => {
      state.cartId = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, addCartId } = cartSlice.actions;
export default cartSlice.reducer;
