import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from '../data/Products';

const initialState = {
    products: PRODUCTS,
    selectedProducts: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    }
});

export const { } = productSlice.actions;
export default productSlice.reducer;