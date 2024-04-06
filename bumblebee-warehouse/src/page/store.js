import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../feature/ProductSlice"

const Store = configureStore({
    reducer:{
        product : ProductReducer

    }
})

export default Store