import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exisitngItem = state.items.find(item => item.id === newItem.id);
      if (!exisitngItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        exisitngItem.quantity++;
        exisitngItem.totalPrice = totalPrice + newItem.price;
      }
    },
    removeItemToCart(state) {
      
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;