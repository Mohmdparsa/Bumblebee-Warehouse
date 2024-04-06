import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data:[]
  },
  reducers: {
    addStoreData: (state, action) => {
      state.data.push(action.payload);
    },
    clearFormData: (state) => {
      state = [];
    },
  },
});

export default ProductSlice.reducer;
export const { addStoreData, clearFormData } = ProductSlice.actions;
