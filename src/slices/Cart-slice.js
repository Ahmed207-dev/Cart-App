import { createSlice } from "@reduxjs/toolkit";
export let cartslice = createSlice({
  initialState: [],
  name: "cartslice",
  reducers: {
    addtocart: (state, action) => {
 let findproudct = state.find(
        (proudct) => proudct.id === action.payload.id,
      );
      if (findproudct) {
        findproudct.quantity += 1;
      } else {
        let cloneproudct = { ...action.payload, quantity: 1 };
        state.push(cloneproudct);
      }
    },
    deletecart: (state, action) => {
      let findquantniy = state.find(
        (proudct) => proudct.id === action.payload.id,
      );
      if (findquantniy) {
        if (findquantniy.quantity > 1) {
          findquantniy.quantity -= 1;
        } else {
          return state.filter((prouct) => prouct.id !== action.payload.id);
        }
      }
    },
    clear: (state, action) => {
      return [];
    },
  },
});
export let { addtocart, deletecart, clear } = cartslice.actions;
export default cartslice.reducer;
