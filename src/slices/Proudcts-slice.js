import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export let fetchitem = createAsyncThunk("proudctslice/fetchitem", async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  return data;
});

export let proudctslice = createSlice({
  initialState: [],
  name: "proudctslice",
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(fetchitem.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default proudctslice.reducer;
