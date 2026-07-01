import { configureStore } from "@reduxjs/toolkit";
import { proudctslice } from "../slices/Proudcts-slice";
import { cartslice } from "../slices/Cart-slice";

export const store = configureStore({
  reducer: {
    proudcts: proudctslice.reducer,
    cart: cartslice.reducer,
  },
});
