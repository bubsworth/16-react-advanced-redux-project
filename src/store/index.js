import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export default store;