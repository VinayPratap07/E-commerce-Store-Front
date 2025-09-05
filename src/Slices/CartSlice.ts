import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}


export const cartSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addToCart:()=>{},
        removeFromCart:()=>{}
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer