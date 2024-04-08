import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {
    addStoreData: (state, action) => {
      state.data.push(action.payload);
    },
    deleteStoreData: (state, action) => {
      state.data = state.data.filter((item, index) => index !== action.payload);
    },
  },
});

export default ProductSlice.reducer;
export const { addStoreData, deleteStoreData } = ProductSlice.actions;
export const selectedItem = (state) => state.product.data;
