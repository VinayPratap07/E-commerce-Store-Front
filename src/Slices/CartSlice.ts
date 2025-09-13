import { createSlice } from "@reduxjs/toolkit";

interface CartProduct {
  id: number;
  quantity: number;
  image: string;
  price: number;
  title: string;
}
interface Cart {
  userId: number;
  products: CartProduct[];
}

const initialState: Cart = {
  userId: 1,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        productId,
        productQuantity,
        productImage,
        productPrice,
        productTitle,
      } = action.payload;
      const existingProduct = state.products.find((p) => p.id === productId);

      if (existingProduct) {
        return;
      } else {
        state.products.push({
          id: productId,
          quantity: productQuantity,
          image: productImage,
          price: productPrice,
          title: productTitle,
        });
      }
    },
    removeFromCart: () => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
